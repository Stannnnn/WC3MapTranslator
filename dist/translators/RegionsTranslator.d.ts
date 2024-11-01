import { WarResult, JsonResult } from '../CommonInterfaces';
interface Region {
    position: Rect;
    name: string;
    id: number;
    weatherEffect: string;
    ambientSound: string;
    color: number[];
}
interface Rect {
    left: number;
    bottom: number;
    right: number;
    top: number;
}
export declare abstract class RegionsTranslator {
    static jsonToWar(regionsJson: Region[]): WarResult;
    static warToJson(buffer: Buffer): JsonResult<Region[]>;
}
export {};
//# sourceMappingURL=RegionsTranslator.d.ts.map