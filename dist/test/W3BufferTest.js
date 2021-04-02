"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const W3Buffer_1 = require("../lib/W3Buffer");
// This is a hard-coded buffer to test all the reading methods
// on W3Buffer. It consists of, in this order:
// char(4), int, float, string(7 Ws), byte
const buffData = Buffer.from([
    0x01, 0x00, 0x00, 0x00,
    0x81, 0x70,
    0x00, 0x00, 0x9b, 0xc5,
    0x57, 0x57, 0x57, 0x57, 0x57, 0x57, 0x57, 0x00,
    0x57, 0x33, 0x64, 0x6f,
    0x57,
    0x02 // byte: 2
]);
const w3buffer = new W3Buffer_1.W3Buffer(buffData);
describe('W3Buffer', () => {
    it('should readInt', () => {
        assert_1.default.equal(w3buffer.readInt(), 1);
    });
    it('should readShort', () => {
        assert_1.default.equal(w3buffer.readShort(), 28801);
    });
    it('should readFloat', () => {
        assert_1.default.equal(w3buffer.readFloat(), -4960);
    });
    it('should readString', () => {
        assert_1.default.equal(w3buffer.readString(), 'WWWWWWW');
    });
    it('should readChars', () => {
        assert_1.default.equal(w3buffer.readChars(4), 'W3do');
        assert_1.default.equal(w3buffer.readChars(), 'W');
    });
    it('should readByte', () => {
        assert_1.default.equal(w3buffer.readByte(), 2);
    });
    it('should be exhausted', () => {
        assert_1.default.ok(w3buffer.isExhausted());
    });
});
//# sourceMappingURL=W3BufferTest.js.map