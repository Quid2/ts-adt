"use strict";
/** ZM Type:
Validate a ≡   Validate a
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = exports.___ = exports.$Validate = void 0;
const Q = require("@quid2/prim");
exports.$Validate = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0xff, 0xe0, 0x94, 0x0f, 0x8f, 0xf2],
    decoder: function (decoders) {
        return function (st) {
            return new Validate(decoders[0](st));
        };
    },
};
class Validate {
    constructor(_0) {
        this._0 = _0;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["Validate", this._0.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["Validate", this._0.pretty(true)].join(" "));
    }
    match(m) {
        return m.Validate(this._0);
    }
    flatMaxSize() {
        return this._0.flatMaxSize();
    }
    flatEncode(st) {
        this._0.flatEncode(st);
    }
}
exports.Validate = Validate;
//# sourceMappingURL=Kffe0940f8ff2.js.map