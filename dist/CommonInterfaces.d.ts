/**
 * @type angle - An angle is measured in degrees, 0 <= angle < 360
 */
export type angle = number;
export interface TranslationError {
    message: string;
}
export interface WarResult {
    buffer: Buffer;
    errors?: TranslationError[];
}
export interface JsonResult<T = object> {
    json: T;
    errors?: TranslationError[];
}
//# sourceMappingURL=CommonInterfaces.d.ts.map