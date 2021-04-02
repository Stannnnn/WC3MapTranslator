"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const AngleConverter_1 = require("../lib/AngleConverter");
describe('AngleConverter', () => {
    it('should convert degrees to radians', () => {
        const angleInDegrees = 90;
        const convertedToRadians = AngleConverter_1.deg2Rad(angleInDegrees);
        assert_1.default.equal(convertedToRadians, Math.PI / 2);
    });
    it('should convert radians to degrees', () => {
        const angleInRadians = Math.PI;
        const convertedToDegrees = AngleConverter_1.rad2Deg(angleInRadians);
        assert_1.default.equal(convertedToDegrees, 180);
    });
});
//# sourceMappingURL=AngleConverterTest.js.map