"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rad2Deg = exports.deg2Rad = void 0;
function deg2Rad(angleInDegrees) {
    return angleInDegrees * Math.PI / 180;
}
exports.deg2Rad = deg2Rad;
function rad2Deg(angleInRadians) {
    return angleInRadians * 180 / Math.PI;
}
exports.rad2Deg = rad2Deg;
//# sourceMappingURL=AngleConverter.js.map