/** ZM Type:
Word64 ≡   Word64 Kf92e8339908a
*/
import * as Q from "@quid2/prim";
import * as Kf92e8339908a from "../Word/Kf92e8339908a";
export declare const $Word64: Q.zmFold<Word64>;
export declare const ___: Q.zmTypeInfo;
export declare class Word64 implements Q.ZM {
    readonly _0: Kf92e8339908a.Word;
    constructor(_0: Kf92e8339908a.Word);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Word64: (v0: Kf92e8339908a.Word) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=K50d018f7593a.d.ts.map