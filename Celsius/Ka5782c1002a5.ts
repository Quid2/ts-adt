/** ZM Type:
Celsius ≡   Celsius Kb53bec846608
*/

import * as Q from "@quid2/prim";
import * as Kb53bec846608 from "../IEEE_754_binary32/Kb53bec846608";

export const $Celsius: Q.zmFold<Celsius> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0xa5, 0x78, 0x2c, 0x10, 0x02, 0xa5],
  decoder: function (decoders) {
    return function (st) {
      return new Celsius(Kb53bec846608.___.decoder([])(st));
    };
  },
};

export class Celsius implements Q.ZM {
  constructor(public readonly _0: Kb53bec846608.IEEE_754_binary32) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(nested, ["Celsius", this._0.toStr(true)].join(" "));
  }
  pretty(nested = false): string {
    return Q.nestedPars(nested, ["Celsius", this._0.pretty(true)].join(" "));
  }

  match<R>(m: { Celsius: (v0: Kb53bec846608.IEEE_754_binary32) => R }): R {
    return m.Celsius(this._0);
  }
  flatMaxSize(): number {
    return this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    this._0.flatEncode(st);
  }
}
