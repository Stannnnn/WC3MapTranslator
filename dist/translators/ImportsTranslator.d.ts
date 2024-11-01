import { WarResult, JsonResult } from '../CommonInterfaces';
declare enum ImportType {
    Standard = "standard",
    Custom = "custom"
}
interface Import {
    path: string;
    type: ImportType;
}
export declare class ImportsTranslator {
    static jsonToWar(imports: Import[]): WarResult;
    static warToJson(buffer: Buffer): JsonResult<Import[]>;
}
export {};
//# sourceMappingURL=ImportsTranslator.d.ts.map