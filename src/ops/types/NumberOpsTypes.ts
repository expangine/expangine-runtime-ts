
import { NumberType } from '../../types/Number';
import { BooleanType } from '../../types/Boolean';
import { TextType } from '../../types/Text';
import { AnyType } from '../../types/Any';
import { MapType } from '../../types/Map';
import { ObjectType } from '../../types/Object';
import { ListType } from '../../types/List';
import { TupleType } from '../../types/Tuple';
import { DateType } from '../../types/Date';

import { NumberOps } from '../NumberOps';
import { ColorType } from '../../types/Color';
import { SetType } from '../../types/Set';
import { EnumType } from '../../types/Enum';
import { Types } from '../../Types';


const ops = NumberType.operations;


const BitMethod = new EnumType({
  key: TextType.baseType.newInstance(), 
  value: TextType.baseType.newInstance(),
  constants: new Map([
    ['has the bits', 'contain'],              // value & test === test
    ['does not have the bits', 'notcontain'], // value & test !== test
    ['has some of the bits', 'overlap'],      // value & test !== 0
    ['has none of the bits', 'none'],         // value & test === 0
    ['has the same bits', 'equal'],           // value === test
    ['does not have the same bits', 'not'],   // value !== test
    ['has all bits in', 'subset'],            // test & value === value
  ])
});


export const NumberOpsTypes = 
{

  // Static

  create: ops.setTypes(NumberOps.create, NumberType ),

  pi: ops.setTypes(NumberOps.pi, NumberType ),

  pi2: ops.setTypes(NumberOps.pi2, NumberType ),

  piHalf: ops.setTypes(NumberOps.piHalf, NumberType ),

  e: ops.setTypes(NumberOps.e, NumberType ),

  sqrt2: ops.setTypes(NumberOps.sqrt2, NumberType ),

  sqrt12: ops.setTypes(NumberOps.sqrt12, NumberType ),

  ln2: ops.setTypes(NumberOps.ln2, NumberType ),

  ln10: ops.setTypes(NumberOps.ln10, NumberType ),

  log2e: ops.setTypes(NumberOps.log2e, NumberType ),

  log10e: ops.setTypes(NumberOps.log10e, NumberType ),

  // Binary Operations

  add: ops.setTypes(NumberOps.add, NumberType, { value: NumberType, addend: NumberType }),

  sub: ops.setTypes(NumberOps.sub, NumberType, { value: NumberType, subtrahend: NumberType }),

  mul: ops.setTypes(NumberOps.mul, NumberType, { value: NumberType, multiplier: NumberType }),

  div: ops.setTypes(NumberOps.div, NumberType, { value: NumberType, divisor: NumberType }),

  mod: ops.setTypes(NumberOps.mod, NumberType, { value: NumberType, divisor: NumberType }),

  min: ops.setTypes(NumberOps.min, NumberType, { a: NumberType, b: NumberType }),

  max: ops.setTypes(NumberOps.max, NumberType, { a: NumberType, b: NumberType }),
  
  pow: ops.setTypes(NumberOps.pow, NumberType, { value: NumberType, exponent: NumberType }),
  
  atan2: ops.setTypes(NumberOps.atan2, NumberType, { x: NumberType, y: NumberType }),
  
  hypot: ops.setTypes(NumberOps.hypot, NumberType, { a: NumberType, b: NumberType }),
  
  choose: ops.setTypes(NumberOps.choose, NumberType, { n: NumberType, k: NumberType }),
  
  gcd: ops.setTypes(NumberOps.gcd, NumberType, { a: NumberType, b: NumberType }),

  bitAnd: ops.setTypes(NumberOps.bitAnd, NumberType, { a: NumberType, b: NumberType }),

  bitOr: ops.setTypes(NumberOps.bitOr, NumberType, { a: NumberType, b: NumberType }),

  bitXor: ops.setTypes(NumberOps.bitXor, NumberType, { a: NumberType, b: NumberType }),

  cmp: ops.setTypes(NumberOps.cmp, NumberType, { value: NumberType, test: NumberType }),

  // Unary Operations

  maybe: ops.setTypes(NumberOps.maybe, 
    (i) => Types.maybe(i.value, NumberType),
    { value: AnyType } 
  ),
  
  sqrt: ops.setTypes(NumberOps.sqrt, NumberType, { value: NumberType }),

  sq: ops.setTypes(NumberOps.sq, NumberType, { value: NumberType }),
  
  cbrt: ops.setTypes(NumberOps.cbrt, NumberType, { value: NumberType }),
  
  floor: ops.setTypes(NumberOps.floor, NumberType, { value: NumberType }),
  
  ceil: ops.setTypes(NumberOps.ceil, NumberType, { value: NumberType }),
  
  up: ops.setTypes(NumberOps.up, NumberType, { value: NumberType }),
  
  down: ops.setTypes(NumberOps.down, NumberType, { value: NumberType }),
  
  round: ops.setTypes(NumberOps.round, NumberType, { value: NumberType }),
  
  abs: ops.setTypes(NumberOps.abs, NumberType, { value: NumberType }),
  
  neg: ops.setTypes(NumberOps.neg, NumberType, { value: NumberType }),
  
  sign: ops.setTypes(NumberOps.sign, NumberType, { value: NumberType }),
  
  log: ops.setTypes(NumberOps.log, NumberType, { value: NumberType }),
  
  sin: ops.setTypes(NumberOps.sin, NumberType, { value: NumberType }),
  
  cos: ops.setTypes(NumberOps.cos, NumberType, { value: NumberType }),
  
  tan: ops.setTypes(NumberOps.tan, NumberType, { value: NumberType }),
  
  sinh: ops.setTypes(NumberOps.sinh, NumberType, { value: NumberType }),
  
  cosh: ops.setTypes(NumberOps.cosh, NumberType, { value: NumberType }),

  asin: ops.setTypes(NumberOps.asin, NumberType, { value: NumberType }),
  
  acos: ops.setTypes(NumberOps.acos, NumberType, { value: NumberType }),
  
  atan: ops.setTypes(NumberOps.atan, NumberType, { value: NumberType }),
  
  factorial: ops.setTypes(NumberOps.factorial, NumberType, { value: NumberType }),

  bitFlip: ops.setTypes(NumberOps.bitFlip, NumberType, { value: NumberType }),

  // Other

  clamp: ops.setTypes(NumberOps.clamp, NumberType, { value: NumberType, min: NumberType, max: NumberType }),

  triangleHeight: ops.setTypes(NumberOps.triangleHeight, NumberType, { base: NumberType, side1: NumberType, side2: NumberType }),

  lerp: ops.setTypes(NumberOps.lerp, NumberType, { delta: NumberType, start: NumberType, end: NumberType }),

  // Generators

  rnd: ops.setTypes(NumberOps.rnd, NumberType, {}, { min: NumberType, max: NumberType, whole: BooleanType, includeMax: BooleanType }),

  // Formatters

  toBaseText: ops.setTypes(NumberOps.toBaseText, TextType, { value: NumberType }, { base: NumberType, minDigits: NumberType }),

  toText: ops.setTypes(NumberOps.toText, TextType, { value: NumberType }, { prefix: TextType, suffix: TextType, minPlaces: NumberType, maxPlaces: NumberType, useExponent: BooleanType, thousandSeparator: TextType }),

  toPercent: ops.setTypes(NumberOps.toPercent, TextType, { value: NumberType }, { minPlaces: NumberType, maxPlaces: NumberType, thousandSeparator: TextType }),

  fromPercent: ops.setTypes(NumberOps.fromPercent, Types.optional(NumberType), { value: TextType }),

  // Comparisons

  isValid: ops.setTypes(NumberOps.isValid, BooleanType, { value: AnyType }),

  isZero: ops.setTypes(NumberOps.isZero, BooleanType, { value: NumberType }, { epsilon: NumberType }),

  isEqual: ops.setTypes(NumberOps.isEqual, BooleanType, { value: NumberType, test: NumberType }, { epsilon: NumberType }),

  isNotEqual: ops.setTypes(NumberOps.isNotEqual, BooleanType, { value: NumberType, test: NumberType }, { epsilon: NumberType }),

  isLess: ops.setTypes(NumberOps.isLess, BooleanType, { value: NumberType, test: NumberType }),

  isLessOrEqual: ops.setTypes(NumberOps.isLessOrEqual, BooleanType, { value: NumberType, test: NumberType }),

  isGreater: ops.setTypes(NumberOps.isGreater, BooleanType, { value: NumberType, test: NumberType }),

  isGreaterOrEqual: ops.setTypes(NumberOps.isGreaterOrEqual, BooleanType, { value: NumberType, test: NumberType }),

  isBetween: ops.setTypes(NumberOps.isBetween, BooleanType, { value: NumberType, min: NumberType, max: NumberType }, { minInclusive: BooleanType, maxInclusive: BooleanType }),

  isWhole: ops.setTypes(NumberOps.isWhole, BooleanType, { value: NumberType }, { epsilon: NumberType }),

  isDecimal: ops.setTypes(NumberOps.isDecimal, BooleanType, { value: NumberType }, { epsilon: NumberType }),

  isPositive: ops.setTypes(NumberOps.isPositive, BooleanType, { value: NumberType }),

  isNegative: ops.setTypes(NumberOps.isNegative, BooleanType, { value: NumberType }),

  isDivisible: ops.setTypes(NumberOps.isDivisible, BooleanType, { value: NumberType, by: NumberType }, { epsilon: NumberType }),

  bitCompare: ops.setTypes(NumberOps.bitCompare, 
    BooleanType,
    { value: NumberType, method: BitMethod, test: NumberType },
  ),

  // Casts

  asAny: ops.setTypes(NumberOps.asAny, AnyType, { value: NumberType }),

  asBoolean: ops.setTypes(NumberOps.asBoolean, BooleanType, { value: NumberType }),

  asColor: ops.setTypes(NumberOps.asColor, ColorType, { value: NumberType }),

  asDate: ops.setTypes(NumberOps.asDate, DateType, { value: NumberType }),

  asList: ops.setTypes(NumberOps.asList, i => ListType.forItem(i.value || NumberType), { value: NumberType }),

  asMap: ops.setTypes(NumberOps.asMap, i => MapType.forItem(i.value || NumberType), { value: NumberType }),

  asNumber: ops.setTypes(NumberOps.asNumber, i => i.value || NumberType, { value: NumberType }),

  asObject: ops.setTypes(NumberOps.asObject, ObjectType, { value: NumberType }),

  asText: ops.setTypes(NumberOps.asText, TextType, { value: NumberType }),

  asTuple: ops.setTypes(NumberOps.asTuple, i => TupleType.forItem([i.value || NumberType]), { value: NumberType }),

  asSet: ops.setTypes(NumberOps.asSet, i => SetType.forItem(i.value || NumberType), { value: NumberType }),

};
