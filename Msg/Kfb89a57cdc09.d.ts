/** ZM Type:
Msg ≡   Msg {fromUser :: Kb8cd13187198 K066db52af145,
             subject :: Kfced5b0f3c1f,
             content :: K1ba230d92eb8}
*/
import * as Q from "@quid2/prim";
import * as Kb8cd13187198 from "../List/Kb8cd13187198";
import * as K066db52af145 from "../Char/K066db52af145";
import * as Kfced5b0f3c1f from "../Subject/Kfced5b0f3c1f";
import * as K1ba230d92eb8 from "../Content/K1ba230d92eb8";
export declare const $Msg: Q.zmFold<Msg>;
export declare const ___: Q.zmTypeInfo;
export declare class Msg implements Q.ZM {
    readonly fromUser: Kb8cd13187198.List<K066db52af145.Char>;
    readonly subject: Kfced5b0f3c1f.Subject;
    readonly content: K1ba230d92eb8.Content;
    constructor(fromUser: Kb8cd13187198.List<K066db52af145.Char>, subject: Kfced5b0f3c1f.Subject, content: K1ba230d92eb8.Content);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Msg: (v0: Kb8cd13187198.List<K066db52af145.Char>, v1: Kfced5b0f3c1f.Subject, v2: K1ba230d92eb8.Content) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=Kfb89a57cdc09.d.ts.map