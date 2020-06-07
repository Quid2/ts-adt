/** ZM Type:
Match a ≡   MatchValue a
          | MatchAny (K7028aa556ebc K4bbd38587b9e)
*/

import * as Q from "@quid2/prim";
import * as K7028aa556ebc from "../Type/K7028aa556ebc";
import * as K4bbd38587b9e from "../AbsRef/K4bbd38587b9e";

export const $Match: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<Match<A>> = function (t1) {
  return function (f) {
    return f(___, [t1(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0xc2, 0x3b, 0x20, 0x38, 0x91, 0x14],
  decoder: function (decoders) {
    return function (st) {
      if (st.zero()) {
        return new MatchValue(decoders[0](st));
      } else {
        return new MatchAny(
          K7028aa556ebc.___.decoder([K4bbd38587b9e.___.decoder([])])(st)
        );
      }
    };
  },
};

export type Match<A extends Q.ZM> = MatchValue<A> | MatchAny<A>;

export class MatchValue<A extends Q.ZM> implements Q.ZM {
  constructor(public readonly _0: A) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(nested, ["MatchValue", this._0.toStr(true)].join(" "));
  }
  pretty(nested = false): string {
    return Q.nestedPars(nested, ["MatchValue", this._0.pretty(true)].join(" "));
  }

  match<R>(m: {
    MatchValue: (v0: A) => R;
    MatchAny: (v0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>) => R;
  }): R {
    return m.MatchValue(this._0);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.zero();
    this._0.flatEncode(st);
  }
}

export class MatchAny<A extends Q.ZM> implements Q.ZM {
  constructor(public readonly _0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(nested, ["MatchAny", this._0.toStr(true)].join(" "));
  }
  pretty(nested = false): string {
    return Q.nestedPars(nested, ["MatchAny", this._0.pretty(true)].join(" "));
  }

  match<R>(m: {
    MatchValue: (v0: A) => R;
    MatchAny: (v0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>) => R;
  }): R {
    return m.MatchAny(this._0);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.one();
    this._0.flatEncode(st);
  }
}
