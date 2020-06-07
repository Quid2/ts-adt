/** ZM Type:
Maybe a ≡   Nothing
          | Just a
*/

import * as Q from "@quid2/prim";

export const $Maybe: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<Maybe<A>> = function (t1) {
  return function (f) {
    return f(___, [t1(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0xda, 0x68, 0x36, 0x77, 0x8f, 0xd4],
  decoder: function (decoders) {
    return function (st) {
      if (st.zero()) {
        return new Nothing();
      } else {
        return new Just(decoders[0](st));
      }
    };
  },
};

export type Maybe<A extends Q.ZM> = Nothing<A> | Just<A>;

export class Nothing<A extends Q.ZM> implements Q.ZM {
  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return "Nothing";
  }
  pretty(nested = false): string {
    return "Nothing";
  }

  match<R>(m: { Nothing: R; Just: (v0: A) => R }): R {
    return m.Nothing;
  }
  flatMaxSize(): number {
    return 1 + 0;
  }
  flatEncode(st: Q.EncoderState) {
    st.zero();
  }
}

export class Just<A extends Q.ZM> implements Q.ZM {
  constructor(public readonly _0: A) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(nested, ["Just", this._0.toStr(true)].join(" "));
  }
  pretty(nested = false): string {
    return Q.nestedPars(nested, ["Just", this._0.pretty(true)].join(" "));
  }

  match<R>(m: { Nothing: R; Just: (v0: A) => R }): R {
    return m.Just(this._0);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.one();
    this._0.flatEncode(st);
  }
}
