"use strict";
/** ZM Type:
Celsius ≡   Celsius Kb53bec846608
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celsius = exports.___ = exports.$Celsius = void 0;
const Q = require("@quid2/prim");
const Kb53bec846608 = require("../IEEE_754_binary32/Kb53bec846608");
exports.$Celsius = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0xa5, 0x78, 0x2c, 0x10, 0x02, 0xa5],
    decoder: function (decoders) {
        return function (st) {
            return new Celsius(Kb53bec846608.___.decoder([])(st));
        };
    },
};
class Celsius {
    constructor(_0) {
        this._0 = _0;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["Celsius", this._0.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["Celsius", this._0.pretty(true)].join(" "));
    }
    match(m) {
        return m.Celsius(this._0);
    }
    flatMaxSize() {
        return this._0.flatMaxSize();
    }
    flatEncode(st) {
        this._0.flatEncode(st);
    }
}
exports.Celsius = Celsius;
//# sourceMappingURL=Ka5782c1002a5.js.map