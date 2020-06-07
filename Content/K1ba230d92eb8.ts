/** ZM Type:
Content ≡   TextMsg (Kb8cd13187198 K066db52af145)
          | Join
*/

import * as Q from "@quid2/prim";
import * as Kb8cd13187198 from "../List/Kb8cd13187198";
import * as K066db52af145 from "../Char/K066db52af145";

export const $Content: Q.zmFold<Content> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0x1b, 0xa2, 0x30, 0xd9, 0x2e, 0xb8],
  decoder: function (decoders) {
    return function (st) {
      if (st.zero()) {
        return new TextMsg(
          Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)
        );
      } else {
        return new Join();
      }
    };
  },
};

export type Content = TextMsg | Join;

export class TextMsg implements Q.ZM {
  constructor(public readonly _0: Kb8cd13187198.List<K066db52af145.Char>) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(nested, ["TextMsg", this._0.toStr(true)].join(" "));
  }
  pretty(nested = false): string {
    return Q.nestedPars(nested, ["TextMsg", this._0.pretty(true)].join(" "));
  }

  match<R>(m: {
    TextMsg: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
    Join: R;
  }): R {
    return m.TextMsg(this._0);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.zero();
    this._0.flatEncode(st);
  }
}

export class Join implements Q.ZM {
  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return "Join";
  }
  pretty(nested = false): string {
    return "Join";
  }

  match<R>(m: {
    TextMsg: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
    Join: R;
  }): R {
    return m.Join;
  }
  flatMaxSize(): number {
    return 1 + 0;
  }
  flatEncode(st: Q.EncoderState) {
    st.one();
  }
}
