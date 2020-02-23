import { Types } from '../../src/Types';
import { Exprs } from '../../src/Exprs';
import { BooleanType } from '../../src/types/Boolean';
import { OptionalType } from '../../src/types/Optional';
import { defs } from '../../src/def';
import { TextType } from '../../src/types/Text';


// tslint:disable: no-magic-numbers

describe('Do', () => {

  const context = Types.object({
    a: Types.text(),
    b: Types.number(),
  });

  it('type constant', () =>
  {
    const loop = Exprs.do(Exprs.const(true), Exprs.const(false));
    const loopType = loop.getType(defs, context);

    expect(loopType).toBeInstanceOf(OptionalType);
    expect(loopType.options).toBeInstanceOf(BooleanType);
  });

  it('type dynamic', () =>
  {
    const loop = Exprs.do(Exprs.get('a'), Exprs.const(false));
    const loopType = loop.getType(defs, context);

    expect(loopType).toBeInstanceOf(OptionalType);
    expect(loopType.options).toBeInstanceOf(TextType);
  });

  it('type from break', () =>
  {
    const loop = Exprs.do(Exprs.get('break'), Exprs.const(false));
    const loopType = loop.getType(defs, context);

    expect(loopType).toBeInstanceOf(OptionalType);
    expect(loopType.options).toBeInstanceOf(BooleanType);
  });

})
