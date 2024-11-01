import { WarResult, JsonResult } from '../CommonInterfaces';
interface Terrain {
    tileset: string;
    customTileset: boolean;
    tilePalette: string[];
    cliffTilePalette: string[];
    map: Map;
    groundHeight: number[];
    waterHeight: number[];
    boundaryFlag: boolean[];
    flags: number[];
    groundTexture: number[];
    groundVariation: number[];
    cliffVariation: number[];
    cliffTexture: number[];
    layerHeight: number[];
}
interface Map {
    width: number;
    height: number;
    offset: Offset;
}
interface Offset {
    x: number;
    y: number;
}
export declare abstract class TerrainTranslator {
    static jsonToWar(terrainJson: Terrain): WarResult;
    static warToJson(buffer: Buffer): JsonResult<Terrain>;
}
export {};
//# sourceMappingURL=TerrainTranslator.d.ts.map