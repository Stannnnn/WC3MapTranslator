"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportsTranslator = void 0;
const HexBuffer_1 = require("../HexBuffer");
const W3Buffer_1 = require("../W3Buffer");
var ImportType;
(function (ImportType) {
    ImportType["Standard"] = "standard";
    ImportType["Custom"] = "custom";
})(ImportType || (ImportType = {}));
class ImportsTranslator {
    static jsonToWar(imports) {
        const outBufferToWar = new HexBuffer_1.HexBuffer();
        /*
         * Header
         */
        outBufferToWar.addInt(1); // file version
        outBufferToWar.addInt(imports.length); // number of imports
        /*
         * Body
         */
        imports.forEach((importedFile) => {
            outBufferToWar.addByte(importedFile.type === ImportType.Custom ? 13 : 5);
            // Temporary: always start the file path with war3mapImported\ until other file support is added
            if (!importedFile.path.startsWith('war3mapImported\\') && importedFile.type === ImportType.Custom) {
                importedFile.path = 'war3mapImported\\' + importedFile.path;
            }
            outBufferToWar.addString(importedFile.path);
        });
        return {
            errors: [],
            buffer: outBufferToWar.getBuffer()
        };
    }
    static warToJson(buffer) {
        const result = [];
        const outBufferToJSON = new W3Buffer_1.W3Buffer(buffer);
        const fileVersion = outBufferToJSON.readInt(); // File version
        const numImports = outBufferToJSON.readInt(); // # of imports
        for (let i = 0; i < numImports; i++) {
            const typeValue = outBufferToJSON.readByte();
            const typeEnum = {
                0: 'standard',
                5: 'standard',
                8: 'standard', // * preferred
                10: 'custom',
                13: 'custom' // * preferred
            };
            const importedFile = {
                type: typeEnum[typeValue], // 5 or 8= standard path, 10 or 13: custom path
                path: outBufferToJSON.readString() // e.g. "war3mapImported\mysound.wav"
            };
            result.push(importedFile);
        }
        return {
            errors: [],
            json: result
        };
    }
}
exports.ImportsTranslator = ImportsTranslator;
//# sourceMappingURL=ImportsTranslator.js.map