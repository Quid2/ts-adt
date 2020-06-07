/** ZM Type:
Sign ≡   Positive
       | Negative
*/

import * as Q from "@quid2/prim";

export const $Sign: Q.zmFold<Sign> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0x54, 0x9f, 0x91, 0xf3, 0xb0, 0xec],
  decoder: function (decoders) {
    return function (st) {
      if (st.zero()) {
        return new Positive();
      } else {
        return new Negative();
      }
    };
  },
};

export type Sign = Positive | Negative;

export class Positive implements Q.ZM {
  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return "Positive";
  }
  pretty(nested = false): string {
    return "Positive";
  }

  match<R>(m: { Positive: R; Negative: R }): R {
    return m.Positive;
  }
  flatMaxSize(): number {
    return 1 + 0;
  }
  flatEncode(st: Q.EncoderState) {
    st.zero();
  }
}

export class Negative implements Q.ZM {
  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return "Negative";
  }
  pretty(nested = false): string {
    return "Negative";
  }

  match<R>(m: { Positive: R; Negative: R }): R {
    return m.Negative;
  }
  flatMaxSize(): number {
    return 1 + 0;
  }
  flatEncode(st: Q.EncoderState) {
    st.one();
  }
}
