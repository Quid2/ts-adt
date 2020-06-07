/** ZM Type:
Int64 ≡   Int64 (K03226796ede4 K50d018f7593a)
*/
import * as Q from "@quid2/prim";
import * as K03226796ede4 from "../ZigZag/K03226796ede4";
import * as K50d018f7593a from "../Word64/K50d018f7593a";
export declare const $Int64: Q.zmFold<Int64>;
export declare const ___: Q.zmTypeInfo;
export declare class Int64 implements Q.ZM {
    readonly _0: K03226796ede4.ZigZag<K50d018f7593a.Word64>;
    constructor(_0: K03226796ede4.ZigZag<K50d018f7593a.Word64>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Int64: (v0: K03226796ede4.ZigZag<K50d018f7593a.Word64>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=Kfb94cb4d4ede.d.ts.map