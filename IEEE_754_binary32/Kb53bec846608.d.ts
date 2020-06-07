/** ZM Type:
IEEE_754_binary32 ≡   IEEE_754_binary32 {sign :: K549f91f3b0ec,
                                         exponent :: K74e2b3b89941 K9e3b8c835fe9,
                                         fraction :: K74e2b3b89941 K338888222364}
*/
import * as Q from "@quid2/prim";
import * as K549f91f3b0ec from "../Sign/K549f91f3b0ec";
import * as K74e2b3b89941 from "../MostSignificantFirst/K74e2b3b89941";
import * as K9e3b8c835fe9 from "../Bits8/K9e3b8c835fe9";
import * as K338888222364 from "../Bits23/K338888222364";
export declare const $IEEE_754_binary32: Q.zmFold<IEEE_754_binary32>;
export declare const ___: Q.zmTypeInfo;
export declare class IEEE_754_binary32 implements Q.ZM {
    readonly sign: K549f91f3b0ec.Sign;
    readonly exponent: K74e2b3b89941.MostSignificantFirst<K9e3b8c835fe9.Bits8>;
    readonly fraction: K74e2b3b89941.MostSignificantFirst<K338888222364.Bits23>;
    constructor(sign: K549f91f3b0ec.Sign, exponent: K74e2b3b89941.MostSignificantFirst<K9e3b8c835fe9.Bits8>, fraction: K74e2b3b89941.MostSignificantFirst<K338888222364.Bits23>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        IEEE_754_binary32: (v0: K549f91f3b0ec.Sign, v1: K74e2b3b89941.MostSignificantFirst<K9e3b8c835fe9.Bits8>, v2: K74e2b3b89941.MostSignificantFirst<K338888222364.Bits23>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=Kb53bec846608.d.ts.map