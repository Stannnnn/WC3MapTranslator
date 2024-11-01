import { WarResult, JsonResult, angle } from '../CommonInterfaces';
interface Unit {
    type: string;
    variation: number;
    position: number[];
    rotation: angle;
    scale: number[];
    hero: Hero;
    inventory: Inventory[];
    abilities: Abilities[];
    player: number;
    hitpoints: number;
    mana: number;
    gold: number;
    targetAcquisition: number;
    color: number;
    id: number;
}
interface Hero {
    level: number;
    str: number;
    agi: number;
    int: number;
}
interface Inventory {
    slot: number;
    type: string;
}
interface Abilities {
    ability: string;
    active: boolean;
    level: number;
}
export declare abstract class UnitsTranslator {
    static jsonToWar(unitsJson: Unit[]): WarResult;
    static warToJson(buffer: Buffer): JsonResult<Unit[]>;
}
export {};
//# sourceMappingURL=UnitsTranslator.d.ts.map