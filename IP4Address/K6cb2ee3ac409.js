"use strict";
/** ZM Type:
IP4Address ≡   IP4Address Kb1f46a49c8f8
                          Kb1f46a49c8f8
                          Kb1f46a49c8f8
                          Kb1f46a49c8f8
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.IP4Address = exports.___ = exports.$IP4Address = void 0;
const Q = require("@quid2/prim");
const Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
exports.$IP4Address = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x6c, 0xb2, 0xee, 0x3a, 0xc4, 0x09],
    decoder: function (decoders) {
        return function (st) {
            return new IP4Address(Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st));
        };
    },
};
class IP4Address {
    constructor(_0, _1, _2, _3) {
        this._0 = _0;
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, [
            "IP4Address",
            this._0.toStr(true),
            this._1.toStr(true),
            this._2.toStr(true),
            this._3.toStr(true),
        ].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, [
            "IP4Address",
            this._0.pretty(true),
            this._1.pretty(true),
            this._2.pretty(true),
            this._3.pretty(true),
        ].join(" "));
    }
    match(m) {
        return m.IP4Address(this._0, this._1, this._2, this._3);
    }
    flatMaxSize() {
        return (this._0.flatMaxSize() +
            this._1.flatMaxSize() +
            this._2.flatMaxSize() +
            this._3.flatMaxSize());
    }
    flatEncode(st) {
        this._0.flatEncode(st);
        this._1.flatEncode(st);
        this._2.flatEncode(st);
        this._3.flatEncode(st);
    }
}
exports.IP4Address = IP4Address;
//# sourceMappingURL=K6cb2ee3ac409.js.map