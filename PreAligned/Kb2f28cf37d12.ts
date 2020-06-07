/** ZM Type:
PreAligned a ≡   PreAligned {preFiller :: Kae1dfeece189,
                             preValue :: a}
*/

import * as Q from "@quid2/prim";
import * as Kae1dfeece189 from "../Filler/Kae1dfeece189";

export const $PreAligned: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<PreAligned<A>> = function (t1) {
  return function (f) {
    return f(___, [t1(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0xb2, 0xf2, 0x8c, 0xf3, 0x7d, 0x12],
  decoder: function (decoders) {
    return function (st) {
      return new PreAligned(Kae1dfeece189.___.decoder([])(st), decoders[0](st));
    };
  },
};

export class PreAligned<A extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly preFiller: Kae1dfeece189.Filler,
    public readonly preValue: A
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      [
        "PreAligned",
        this.preFiller.toStr(true),
        this.preValue.toStr(true),
      ].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      [
        "PreAligned",
        this.preFiller.pretty(true),
        this.preValue.pretty(true),
      ].join(" ")
    );
  }

  match<R>(m: { PreAligned: (v0: Kae1dfeece189.Filler, v1: A) => R }): R {
    return m.PreAligned(this.preFiller, this.preValue);
  }
  flatMaxSize(): number {
    return this.preFiller.flatMaxSize() + this.preValue.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    this.preFiller.flatEncode(st);
    this.preValue.flatEncode(st);
  }
}
