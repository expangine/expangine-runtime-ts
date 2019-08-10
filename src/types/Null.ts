
import { isEmpty } from '../fns';
import { Type, TypeDescribeProvider } from '../Type';
import { Operations } from '../Operation';


const INDEX_OPTIONS = 1;

export interface NullOptions 
{
  includeUndefined?: boolean;
}

export class NullType extends Type<NullOptions> 
{

  public static id = 'null';

  public static operations = new Operations<NullType>('null:');

  public static baseType = new NullType({});

  public static decode(data: any[]): NullType 
  {
    return new NullType(data[INDEX_OPTIONS] || {});
  }

  public static encode(type: NullType): any 
  {
    return isEmpty(type.options)
      ? this.id
      : [this.id, type.options];
  }

  public static describePriority: number = 6;
  
  public static describe(data: any): Type | null
  {
    return data === null ? this.baseType : null;
  }

  public merge(type: NullType, describer: TypeDescribeProvider): void
  {
    const o1 = this.options;
    const o2 = type.options;

    o1.includeUndefined = o1.includeUndefined || o2.includeUndefined;
  }

  public getSubTypes(): null
  {
    return null;
  }

  public getExactType(value: any): Type 
  {
    return this;
  }

  public isCompatible(other: Type): boolean 
  {
    return other instanceof NullType;
  }

  public isValid(value: any): boolean 
  {
    return value === null || (
      this.options.includeUndefined && value === undefined
    );
  }

  public normalize(value: any): any
  {
    return value;
  }

  public encode(): any 
  {
    return NullType.encode(this);
  }

}