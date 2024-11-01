import { WarResult, JsonResult } from '../CommonInterfaces';
declare enum ObjectType {
    Units = "units",
    Items = "items",
    Destructables = "destructables",
    Doodads = "doodads",
    Abilities = "abilities",
    Buffs = "buffs",
    Upgrades = "upgrades"
}
interface ObjectModificationTable {
    original: object;
    custom: object;
}
export declare abstract class ObjectsTranslator {
    static readonly ObjectType: typeof ObjectType;
    private static varTypes;
    static jsonToWar(type: string, json: any): WarResult;
    static warToJson(type: string, buffer: Buffer): JsonResult<ObjectModificationTable>;
}
export {};
//# sourceMappingURL=ObjectsTranslator.d.ts.map