
import { Type, TypeCompatibleOptions, TypeDescribeProvider } from '../Type';
import { Expression } from '../Expression';
import { ColorOps, ColorOperations, ColorComputeds } from '../ops/ColorOps';
import { ID } from './ID';
import { NumberType } from './Number';
import { Color, COMPONENT_MIN, COMPONENT_MAX } from '../util/color/Color';
import { ColorSpaceRGB } from '../util/color/ColorSpaceRGB';
import { ColorSpace, ColorFormat } from '../util/color/ColorSpace';
import { ColorSpaceHSL } from '../util/color/ColorSpaceHSL';
import { ObjectType, ObjectOptions } from './Object';
import { Exprs } from '../Exprs';


const INDEX_OPTIONS = 1;


export interface ColorOptions extends ObjectOptions<Color>
{
  hasAlpha?: boolean;
}

export class ColorType extends ObjectType<Color, ColorOptions>
{

  public static readonly componentType = new NumberType({ 
    min: COMPONENT_MIN, 
    max: COMPONENT_MAX, 
    whole: true 
  });

  public static readonly componentProps = {
    r: ColorType.componentType,
    g: ColorType.componentType,
    b: ColorType.componentType,
    a: ColorType.componentType,
  };

  public static spaces: ColorSpace<any>[] = [
    ColorSpaceRGB,
    ColorSpaceHSL,
  ];

  public static id = ID.Color;

  public static operations = ColorOperations;

  public static computeds = ColorComputeds;

  public static baseType = new ColorType({ hasAlpha: true });

  public static decode(data: any[]): ColorType 
  {
    return new ColorType(data[INDEX_OPTIONS] || {});
  }

  public static encode(type: ColorType): any 
  {
    return type.options.hasAlpha
      ? [this.id, { hasAlpha: true }]
      : this.id;
  }

  public static describePriority: number = 7;
  
  public static describe(data: any, describer: TypeDescribeProvider, cache: Map<any, Type>): ColorType | undefined
  {
    const parsed = ColorType.baseType.normalize(data);

    if (!parsed)
    {
      return undefined;
    }

    return new ColorType({
      hasAlpha: parsed.a !== COMPONENT_MAX,
    });
  }

  public static registered: boolean = false;

  public static register(): void
  {

  }

  public static getFormat(id: string): ColorFormat<any> | undefined
  {
    const [spaceId, formatId] = id.split(':');
    const space = this.spaces.find((s) => s.code === spaceId);

    return space
      ? space.formatMap[formatId]
      : undefined;
  }

  public constructor(colorOptions: { hasAlpha?: boolean } = {})
  {
    super({
      ...colorOptions,
      props: ColorType.componentProps,
    });
  }

  public getId(): string
  {
    return ColorType.id;
  }

  public getOperations()
  {
    return ColorType.operations.map;
  }

  public merge(type: ColorType): void
  {
    const o1 = this.options;
    const o2 = type.options;

    o1.hasAlpha = o1.hasAlpha || o2.hasAlpha;
  }

  protected isDeepCompatible(other: Type, options: TypeCompatibleOptions): boolean 
  {
    if (other instanceof ColorType)
    {
      return true;
    }

    if (!options.strict && 
        !options.exact &&
        other instanceof ObjectType &&
        other.isCompatible(this as Type)) 
    {
      return true;
    }

    return false;
  }

  public isOptional(): boolean
  {
    return false;
  }

  public isSimple(): boolean
  {
    return true;
  }
  
  public removeDescribedRestrictions(): void
  {
    super.removeDescribedRestrictions();

    delete this.options.hasAlpha;
  }

  public getCreateExpression(): Expression
  {
    return Exprs.op(ColorOps.create, {});
  }

  public getValidateExpression(): Expression
  {
    return Exprs.op(ColorOps.isValid, {
      value: Exprs.get('value'),
    });
  }

  public getCompareExpression(): Expression
  {
    return Exprs.op(ColorOps.cmp, {
      value: Exprs.get('value'),
      test: Exprs.get('test'),
    });
  }

  public isValid(value: any): value is Color 
  {
    return this.normalize(value) !== undefined;
  }

  public normalize(value: any): any
  {
    for (const space of ColorType.spaces)
    {
      if (!space.toColor)
      {
        continue;
      }

      for (const formats of space.formats)
      {
        const parsed = formats.parser(value);

        if (parsed !== null)
        {
          return space.toColor(parsed);
        }
      }
    }
  }

  public newInstance(): ColorType
  {
    return new ColorType({});
  }

  public clone(): ColorType
  {
    return new ColorType({
      hasAlpha: this.options.hasAlpha,
    });
  }

  public encode(): any 
  {
    return ColorType.encode(this);
  }

  public create(): Color
  {
    return { r: 0, g: 0, b: 0, a: 0 };
  }

  public random(rnd: (a: number, b: number, whole: boolean) => number): Color
  {
    return {
      r: rnd(COMPONENT_MIN, COMPONENT_MAX, true),
      g: rnd(COMPONENT_MIN, COMPONENT_MAX, true),
      b: rnd(COMPONENT_MIN, COMPONENT_MAX, true),
      a: COMPONENT_MAX,
    };
  }

  public fromJson(json: Color): Color
  {
    return {
      r: json.r,
      g: json.g,
      b: json.b,
      a: json.a,
    };
  }

  public toJson(value: Color): Color
  {
    return {
      r: value.r,
      g: value.g,
      b: value.b,
      a: value.a,
    };
  }

}

/**
 * Set RGB color space type.
 */
ColorSpaceRGB.setType(ColorType.baseType);