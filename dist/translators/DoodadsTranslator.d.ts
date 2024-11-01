import { WarResult, JsonResult, angle } from '../CommonInterfaces';
interface Doodad {
    type: string;
    variation: number;
    position: number[];
    angle: angle;
    scale: number[];
    skinId: string;
    flags: DoodadFlag;
    life: number;
    id: number;
}
interface DoodadFlag {
    visible: any;
    solid: any;
}
export declare abstract class DoodadsTranslator {
    static jsonToWar(doodadsJson: Doodad[]): WarResult;
    static warToJson(buffer: Buffer): JsonResult<Doodad[]>;
}
export {};
//# sourceMappingURL=DoodadsTranslator.d.ts.map