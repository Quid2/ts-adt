/** ZM Type:
Time ≡   Time {utcDay :: K102a3bb904e3, utcSecs :: K2412799c99f1}
*/

import * as Q from "@quid2/prim";
import * as K102a3bb904e3 from "../Int/K102a3bb904e3";
import * as K2412799c99f1 from "../Word32/K2412799c99f1";

export const $Time: Q.zmFold<Time> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0xf3, 0xf0, 0xf3, 0xc4, 0x53, 0xf7],
  decoder: function (decoders) {
    return function (st) {
      return new Time(
        K102a3bb904e3.___.decoder([])(st),
        K2412799c99f1.___.decoder([])(st)
      );
    };
  },
};

export class Time implements Q.ZM {
  constructor(
    public readonly utcDay: K102a3bb904e3.Int,
    public readonly utcSecs: K2412799c99f1.Word32
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Time", this.utcDay.toStr(true), this.utcSecs.toStr(true)].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Time", this.utcDay.pretty(true), this.utcSecs.pretty(true)].join(" ")
    );
  }

  match<R>(m: {
    Time: (v0: K102a3bb904e3.Int, v1: K2412799c99f1.Word32) => R;
  }): R {
    return m.Time(this.utcDay, this.utcSecs);
  }
  flatMaxSize(): number {
    return this.utcDay.flatMaxSize() + this.utcSecs.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    this.utcDay.flatEncode(st);
    this.utcSecs.flatEncode(st);
  }
}
