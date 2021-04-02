"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const diff = __importStar(require("diff-buf"));
const fs = __importStar(require("fs-extra"));
const Path = __importStar(require("path"));
const Translator = __importStar(require("../index"));
const ObjectType = Translator.ObjectsTranslator.ObjectType;
const war3mapDir = Path.resolve('test/data');
const outputDir = Path.resolve('test/.output');
function readWar3MapBuffer(filename) {
    return fs.readFileSync(Path.join(war3mapDir, filename));
}
function readJsonTestFile(filename) {
    return fs.readJsonSync(Path.join(war3mapDir, filename));
}
function writeJsonTestFile(filename, json) {
    return fs.writeJsonSync(Path.join(outputDir, filename), json);
}
function buffersAreEqual(b1, b2) {
    const comparison = diff.default(b1, b2, { string: false });
    // Library `diff` returns an array of objects documenting comparison
    // e.g. { added: undefined, removed: undefined, value: 10 }
    // We want all `added` and `removed` fields to be "undefined" for
    // the buffers to be considered equal
    let buffersEqual = true;
    comparison.forEach((compare) => {
        if (compare.added || compare.removed) {
            buffersEqual = false;
        }
    });
    return buffersEqual;
}
// Ensures that when a JSON file is converted to war3map and back again,
// the two JSON files are the same; converting between the two data formats
// must yield the original results back (except for some differences in rounding)
describe('Reversion: json -> war -> json', () => {
    before(() => {
        fs.emptyDirSync(outputDir);
        fs.ensureDirSync(outputDir);
    });
    it('Doodads reversion', () => {
        const originalJson = readJsonTestFile('doodads.json');
        const translatedBuffer = Translator.DoodadsTranslator.jsonToWar(originalJson).buffer;
        const translatedJson = Translator.DoodadsTranslator.warToJson(translatedBuffer).json;
        writeJsonTestFile('doodads.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Strings reversion', () => {
        const originalJson = readJsonTestFile('strings.json');
        const translatedBuffer = Translator.StringsTranslator.jsonToWar(originalJson).buffer;
        const translatedJson = Translator.StringsTranslator.warToJson(translatedBuffer).json;
        writeJsonTestFile('strings.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Terrain reversion', () => {
        const originalJson = readJsonTestFile('terrain.json');
        const translatedBuffer = Translator.TerrainTranslator.jsonToWar(originalJson).buffer;
        const translatedJson = Translator.TerrainTranslator.warToJson(translatedBuffer).json;
        writeJsonTestFile('terrain.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Units reversion', () => {
        const originalJson = readJsonTestFile('units.json');
        const translatedBuffer = Translator.UnitsTranslator.jsonToWar(originalJson).buffer;
        const translatedJson = Translator.UnitsTranslator.warToJson(translatedBuffer).json;
        writeJsonTestFile('units.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Regions reversion', () => {
        const originalJson = readJsonTestFile('regions.json');
        const translatedBuffer = Translator.RegionsTranslator.jsonToWar(originalJson).buffer;
        const translatedJson = Translator.RegionsTranslator.warToJson(translatedBuffer).json;
        writeJsonTestFile('regions.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Cameras reversion', () => {
        const originalJson = readJsonTestFile('cameras.json');
        const translatedBuffer = Translator.CamerasTranslator.jsonToWar(originalJson).buffer;
        const translatedJson = Translator.CamerasTranslator.warToJson(translatedBuffer).json;
        writeJsonTestFile('cameras.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Sounds reversion', () => {
        const originalJson = readJsonTestFile('sounds.json');
        const translatedBuffer = Translator.SoundsTranslator.jsonToWar(originalJson).buffer;
        const translatedJson = Translator.SoundsTranslator.warToJson(translatedBuffer).json;
        writeJsonTestFile('sounds.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Units (Object) reversion', () => {
        const originalJson = readJsonTestFile('obj-units.json');
        const objectType = Translator.ObjectsTranslator.ObjectType.Units;
        const translatedBuffer = Translator.ObjectsTranslator.jsonToWar(objectType, originalJson).buffer;
        const translatedJson = Translator.ObjectsTranslator.warToJson(objectType, translatedBuffer).json;
        writeJsonTestFile('obj-units.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Items (Object) reversion', () => {
        const originalJson = readJsonTestFile('obj-items.json');
        const objectType = Translator.ObjectsTranslator.ObjectType.Items;
        const translatedBuffer = Translator.ObjectsTranslator.jsonToWar(objectType, originalJson).buffer;
        const translatedJson = Translator.ObjectsTranslator.warToJson(objectType, translatedBuffer).json;
        writeJsonTestFile('obj-items.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Destructables (Object) reversion', () => {
        const originalJson = readJsonTestFile('obj-destructables.json');
        const objectType = Translator.ObjectsTranslator.ObjectType.Destructables;
        const translatedBuffer = Translator.ObjectsTranslator.jsonToWar(objectType, originalJson).buffer;
        const translatedJson = Translator.ObjectsTranslator.warToJson(objectType, translatedBuffer).json;
        writeJsonTestFile('obj-destructables.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Doodads (Object) reversion', () => {
        const originalJson = readJsonTestFile('obj-doodads.json');
        const objectType = Translator.ObjectsTranslator.ObjectType.Doodads;
        const translatedBuffer = Translator.ObjectsTranslator.jsonToWar(objectType, originalJson).buffer;
        const translatedJson = Translator.ObjectsTranslator.warToJson(objectType, translatedBuffer).json;
        writeJsonTestFile('obj-doodads.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Abilities (Object) reversion', () => {
        const originalJson = readJsonTestFile('obj-abilities.json');
        const objectType = Translator.ObjectsTranslator.ObjectType.Abilities;
        const translatedBuffer = Translator.ObjectsTranslator.jsonToWar(objectType, originalJson).buffer;
        const translatedJson = Translator.ObjectsTranslator.warToJson(objectType, translatedBuffer).json;
        writeJsonTestFile('obj-abilities.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Buffs (Object) reversion', () => {
        const originalJson = readJsonTestFile('obj-buffs.json');
        const objectType = Translator.ObjectsTranslator.ObjectType.Buffs;
        const translatedBuffer = Translator.ObjectsTranslator.jsonToWar(objectType, originalJson).buffer;
        const translatedJson = Translator.ObjectsTranslator.warToJson(objectType, translatedBuffer).json;
        writeJsonTestFile('obj-buffs.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Upgrades (Object) reversion', () => {
        const originalJson = readJsonTestFile('obj-upgrades.json');
        const objectType = Translator.ObjectsTranslator.ObjectType.Upgrades;
        const translatedBuffer = Translator.ObjectsTranslator.jsonToWar(objectType, originalJson).buffer;
        const translatedJson = Translator.ObjectsTranslator.warToJson(objectType, translatedBuffer).json;
        writeJsonTestFile('obj-upgrades.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Info reversion', () => {
        const originalJson = readJsonTestFile('info.json');
        const translatedBuffer = Translator.InfoTranslator.jsonToWar(originalJson).buffer;
        const translatedJson = Translator.InfoTranslator.warToJson(translatedBuffer).json;
        writeJsonTestFile('info.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
    it('Imports reversion', () => {
        const originalJson = readJsonTestFile('imports.json');
        const translatedBuffer = Translator.ImportsTranslator.jsonToWar(originalJson).buffer;
        const translatedJson = Translator.ImportsTranslator.warToJson(translatedBuffer).json;
        writeJsonTestFile('imports.json', translatedJson);
        assert_1.default.deepStrictEqual(originalJson, translatedJson);
    });
});
//# sourceMappingURL=TranslatorReversion.js.map