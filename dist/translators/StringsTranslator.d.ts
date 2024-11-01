import { WarResult, JsonResult } from '../CommonInterfaces';
export declare abstract class StringsTranslator {
    static jsonToWar(stringsJson: object): WarResult;
    static warToJson(buffer: Buffer): JsonResult<object>;
}
//# sourceMappingURL=StringsTranslator.d.ts.map