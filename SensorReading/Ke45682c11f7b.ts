/** ZM Type:
SensorReading a b ≡   SensorReading {reading :: a, location :: b}
*/

import * as Q from "@quid2/prim";

export const $SensorReading: <A extends Q.ZM, B extends Q.ZM>(
  t0: Q.zmFold<A>,
  t1: Q.zmFold<B>
) => Q.zmFold<SensorReading<A, B>> = function (t1, t2) {
  return function (f) {
    return f(___, [t1(f), t2(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0xe4, 0x56, 0x82, 0xc1, 0x1f, 0x7b],
  decoder: function (decoders) {
    return function (st) {
      return new SensorReading(decoders[0](st), decoders[1](st));
    };
  },
};

export class SensorReading<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
  constructor(public readonly reading: A, public readonly location: B) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      [
        "SensorReading",
        this.reading.toStr(true),
        this.location.toStr(true),
      ].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      [
        "SensorReading",
        this.reading.pretty(true),
        this.location.pretty(true),
      ].join(" ")
    );
  }

  match<R>(m: { SensorReading: (v0: A, v1: B) => R }): R {
    return m.SensorReading(this.reading, this.location);
  }
  flatMaxSize(): number {
    return this.reading.flatMaxSize() + this.location.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    this.reading.flatEncode(st);
    this.location.flatEncode(st);
  }
}
