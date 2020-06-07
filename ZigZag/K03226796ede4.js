"use strict";
/** ZM Type:
ZigZag a ≡   ZigZag a
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZigZag = exports.___ = exports.$ZigZag = void 0;
const Q = require("@quid2/prim");
exports.$ZigZag = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0x03, 0x22, 0x67, 0x96, 0xed, 0xe4],
    decoder: function (decoders) {
        return function (st) {
            return new ZigZag(decoders[0](st));
        };
    },
};
class ZigZag {
    constructor(_0) {
        this._0 = _0;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["ZigZag", this._0.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["ZigZag", this._0.pretty(true)].join(" "));
    }
    match(m) {
        return m.ZigZag(this._0);
    }
    flatMaxSize() {
        return this._0.flatMaxSize();
    }
    flatEncode(st) {
        this._0.flatEncode(st);
    }
}
exports.ZigZag = ZigZag;
//# sourceMappingURL=K03226796ede4.js.map