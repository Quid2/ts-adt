"use strict";
/** ZM Type:
Range ≡   Range {start :: K2ff00417fe9d, end :: K2ff00417fe9d}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = exports.___ = exports.$Range = void 0;
const Q = require("@quid2/prim");
const K2ff00417fe9d = require("../Position/K2ff00417fe9d");
exports.$Range = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x63, 0xb2, 0xd9, 0x72, 0x44, 0xbc],
    decoder: function (decoders) {
        return function (st) {
            return new Range(K2ff00417fe9d.___.decoder([])(st), K2ff00417fe9d.___.decoder([])(st));
        };
    },
};
class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["Range", this.start.toStr(true), this.end.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["Range", this.start.pretty(true), this.end.pretty(true)].join(" "));
    }
    match(m) {
        return m.Range(this.start, this.end);
    }
    flatMaxSize() {
        return this.start.flatMaxSize() + this.end.flatMaxSize();
    }
    flatEncode(st) {
        this.start.flatEncode(st);
        this.end.flatEncode(st);
    }
}
exports.Range = Range;
//# sourceMappingURL=K63b2d97244bc.js.map