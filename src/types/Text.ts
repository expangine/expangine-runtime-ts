
import { isString, isNumber, isEmpty, coalesce } from '../fns';
import { Type, TypeSub, TypeCompatibleOptions, TypeDescribeProvider } from '../Type';
import { Exprs } from '../Exprs';
import { Expression } from '../Expression';
import { TextOps, TextOperations, TextComputeds } from '../ops/TextOps';
import { ConstantExpression } from '../exprs/Constant';
import { NumberType } from './Number';
import { DefinitionProvider } from '../DefinitionProvider';
import { EnumType } from './Enum';
import { ID } from './ID';
import { Traverser } from '../Traverser';
import { Types } from '../Types';
import { DataTypeRaw, DataTypes } from '../DataTypes';


const INDEX_OPTIONS = 1;
const RANDOM_MIN = 1;
const RANDOM_MAX = 16;
const RANDOM_CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-+=:.';

export interface TextOptions 
{
  min?: number;
  max?: number;
  requireUpper?: boolean;
  requireLower?: boolean;
  forceUpper?: boolean;
  forceLower?: boolean;
  matches?: RegExp;
}

export class TextType extends Type<string, TextOptions> 
{

  public static id = ID.Text;

  public static operations = TextOperations;

  public static computeds = TextComputeds;
  
  public static baseType = new TextType({});

  public static decode(data: any[]): TextType 
  {
    return new TextType(this.decodeOptions(data[INDEX_OPTIONS] || {}));
  }

  public static encode(type: TextType): any 
  {
    return isEmpty(type.options)
      ? this.id
      : [this.id, this.encodeOptions(type.options)];
  }

  private static decodeOptions(options: any): TextOptions
  {
    const matches = options.matches;

    if (matches) options.matches = new RegExp(matches[0], matches[1]);

    return options;
  }

  private static encodeOptions(options: TextOptions): any
  {
    const encoded: any = { ...options };
    const matches = encoded.matches;

    if (matches) encoded.matches = [matches.source, matches.flags];

    return encoded;
  }

  public static describePriority: number = 3;
  
  public static describe(data: any, describer: TypeDescribeProvider, cache: Map<any, Type>): Type | undefined
  {
    if (!isString(data))
    {
      return undefined;
    }

    return new TextType({
      min: data.length,
      max: data.length,
      requireLower: data.toLowerCase() === data,
      requireUpper: data.toUpperCase() === data
    });
  }

  public static registered: boolean = false;

  public static register(): void
  {
    const priority = 4;
    const type: DataTypeRaw = 'string';

    DataTypes.addCompare({
      priority,
      type,
      compare: (a, b) => {
        return a.localeCompare(b);
      },
    });

    DataTypes.addEquals({
      priority,
      type,
      equals: (a, b) => {
        return a === b;
      },
    });

    DataTypes.addAccessor<string>({
      priority,
      isValid: isString,
      get: (x, step) => x[step],
      set: (x, step, value) => {},
      remove: (x, step) => x.substring(0, step) + x.substring(step + 1),
      has: (x, step) => x.charAt(step) !== '',
    });
  }

  public getId(): string
  {
    return TextType.id;
  }

  public getOperations()
  {
    return TextType.operations.map;
  }

  public merge(type: TextType): void
  {
    const o1 = this.options;
    const o2 = type.options;

    o1.max = Math.max(o1.max || 0, o2.max || 0);
    o1.min = Math.min(o1.min || 0, o2.min || 0);
    o1.requireLower = o1.requireLower && o2.requireLower;
    o1.requireUpper = o1.requireUpper && o2.requireUpper;
  }

  public getSubType(expr: Expression, def: DefinitionProvider, context: Type): Type | undefined
  {
    if (ConstantExpression.is(expr))
    {
      if (expr.value === 'length')
      {
        return Types.LENGTH;
      }

      if (isNumber(expr.value))
      {
        return Types.CHAR;
      }
    }

    let exprType = expr.getType(def, context);

    if (exprType)
    {
      exprType = exprType.getRequired();

      if (exprType instanceof NumberType)
      {
        return Types.CHAR;
      }

      if (exprType instanceof EnumType)
      {
        if (exprType.options.value instanceof NumberType)
        {
          return Types.CHAR;
        }

        if (exprType.options.value instanceof TextType)
        {
          const values = Array.from(exprType.options.constants.values());

          if (values.length === 1 && values[0] === 'length')
          {
            return Types.LENGTH;
          }
        }
      }
    }
  }

  public getSubTypes(def: DefinitionProvider): TypeSub[]
  {
    return [
      { key: 'length', value: Types.LENGTH },
      { key: Types.INDEX, value: def.options.stringCharacterOptional
          ? Types.optional(Types.CHAR) 
          : Types.CHAR },
    ];
  }

  public getExactType(value: any): Type 
  {
    return this;
  }

  public getSimplifiedType(): Type
  {
    return this;
  }

  protected isDeepCompatible(other: Type, options: TypeCompatibleOptions): boolean 
  {
    if (!(other instanceof TextType))
    {
      return false;
    }

    if (options.value)
    {
      const min = this.options.min;
      const otherMin = other.options.min;

      if (min && (!otherMin || otherMin < min))
      {
        return false;
      }

      const max = this.options.max;
      const otherMax = other.options.max;

      if (max && (!otherMax || otherMax > max))
      {
        return false;
      }

      const lower = this.options.forceLower || this.options.requireUpper;
      const otherLower = other.options.forceLower || other.options.requireLower;

      if (lower && !otherLower)
      {
        return false;
      }

      const upper = this.options.forceUpper || this.options.requireUpper;
      const otherUpper = other.options.forceUpper || other.options.requireUpper;

      if (upper && !otherUpper)
      {
        return false;
      }

      const matches = this.options.matches;
      const otherMatches = other.options.matches;

      if (matches && (!otherMatches || otherMatches.source !== matches.source))
      {
        return false;
      }
    }

    return true;
  }

  public isOptional(): boolean
  {
    return false;
  }

  public isSimple(): boolean
  {
    return true;
  }
  
  public traverse<R>(traverse: Traverser<Type, R>): R
  {
    return traverse.enter(this);
  }

  public setParent(parent?: Type): void
  {
    this.parent = parent;
  }

  public removeDescribedRestrictions(): void
  {
    this.options = {};
  }

  public getCreateExpression(): Expression
  {
    return Exprs.op(TextOps.create, {});
  }

  public getValidateExpression(): Expression
  {
    return Exprs.op(TextOps.isValid, {
      value: Exprs.get('value'),
    });
  }

  public getCompareExpression(): Expression
  {
    return Exprs.op(TextOps.compare, {
      value: Exprs.get('value'),
      test: Exprs.get('test'),
      ignoreCase: Exprs.true(),
    });
  }

  public isValid(value: any): value is string 
  {
    if (!isString(value))
    {
      return false;
    }

    const { min, max, requireLower, requireUpper, matches, forceLower, forceUpper } = this.options;

    if (isNumber(min) && value.length < min)
    {
      return false;
    }

    if (isNumber(max) && value.length > max)
    {
      return false;
    }

    if (requireLower && value !== value.toLowerCase() && !forceLower)
    {
      return false;
    }

    if (requireUpper && value !== value.toUpperCase() && !forceUpper)
    {
      return false;
    }

    if (matches && matches instanceof RegExp && !matches.test(value))
    {
      return false;
    }

    return true;
  }

  public normalize(value: any): any
  {
    if (isString(value))
    {
      if (this.options.forceLower)
      {
        value = value.toLowerCase();
      }

      if (this.options.forceUpper)
      {
        value = value.toUpperCase();
      }
    }

    return value;
  }

  public newInstance(): TextType
  {
    return new TextType({});
  }

  public clone(): TextType
  {
    return new TextType(DataTypes.copy(this.options));
  }

  public encode(): any 
  {
    return TextType.encode(this);
  }

  public create(): string
  {
    return '';
  }

  public random(rnd: (a: number, b: number, whole: boolean) => number): string
  {
    const { min, max, requireLower, forceLower, requireUpper, forceUpper } = this.options;
    const lower = requireLower || forceLower;
    const upper = requireUpper || forceUpper;
    const chosenMin = coalesce(min, RANDOM_MIN);
    const chosenMax = coalesce(max, RANDOM_MAX);
    const n = rnd(chosenMin, chosenMax + 1, true);
    let out = '';

    for (let i = 0; i < n; i++)
    {
      out += RANDOM_CHARACTERS.charAt(rnd(0, RANDOM_CHARACTERS.length, true));
    }

    if (lower) out = out.toLowerCase();
    if (upper) out = out.toUpperCase();

    return out;
  }

  public fromJson(json: string): string
  {
    return json;
  }

  public toJson(value: string): string
  {
    return value;
  }

}