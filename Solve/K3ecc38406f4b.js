"use strict";
/** ZM Type:
Solve a ≡   Solve a
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solve = exports.___ = exports.$Solve = void 0;
const Q = require("@quid2/prim");
exports.$Solve = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0x3e, 0xcc, 0x38, 0x40, 0x6f, 0x4b],
    decoder: function (decoders) {
        return function (st) {
            return new Solve(decoders[0](st));
        };
    },
};
class Solve {
    constructor(_0) {
        this._0 = _0;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["Solve", this._0.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["Solve", this._0.pretty(true)].join(" "));
    }
    match(m) {
        return m.Solve(this._0);
    }
    flatMaxSize() {
        return this._0.flatMaxSize();
    }
    flatEncode(st) {
        this._0.flatEncode(st);
    }
}
exports.Solve = Solve;
//# sourceMappingURL=K3ecc38406f4b.js.map