/** ZM Type:
Unit ≡   Unit
*/
import * as Q from "@quid2/prim";
export declare const $Unit: Q.zmFold<Unit>;
export declare const ___: Q.zmTypeInfo;
export declare class Unit implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Unit: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
//# sourceMappingURL=K794aef6e21aa.d.ts.map