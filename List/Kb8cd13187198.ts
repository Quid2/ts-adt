/** ZM Type:
List a ≡   Nil
         | Cons a (↫ a)
*/

import * as Q from "@quid2/prim";

export const $List: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<List<A>> = function (t1) {
  return function (f) {
    return f(___, [t1(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0xb8, 0xcd, 0x13, 0x18, 0x71, 0x98],
  decoder: function (decoders) {
    return function (st) {
      if (st.zero()) {
        return new Nil();
      } else {
        return new Cons(decoders[0](st), ___.decoder([decoders[0]])(st));
      }
    };
  },
};

export type List<A extends Q.ZM> = Nil<A> | Cons<A>;

export class Nil<A extends Q.ZM> implements Q.ZM {
  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return "Nil";
  }
  pretty(nested = false): string {
    return "Nil";
  }

  match<R>(m: { Nil: R; Cons: (v0: A, v1: List<A>) => R }): R {
    return m.Nil;
  }
  flatMaxSize(): number {
    return 1 + 0;
  }
  flatEncode(st: Q.EncoderState) {
    st.zero();
  }
}

export class Cons<A extends Q.ZM> implements Q.ZM {
  constructor(public readonly _0: A, public readonly _1: List<A>) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Cons", this._0.toStr(true), this._1.toStr(true)].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Cons", this._0.pretty(true), this._1.pretty(true)].join(" ")
    );
  }

  match<R>(m: { Nil: R; Cons: (v0: A, v1: List<A>) => R }): R {
    return m.Cons(this._0, this._1);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize() + this._1.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.one();
    this._0.flatEncode(st);
    this._1.flatEncode(st);
  }
}
