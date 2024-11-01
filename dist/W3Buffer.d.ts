export declare class W3Buffer {
    private _offset;
    private _buffer;
    constructor(buffer: Buffer);
    readInt(): number;
    readShort(): number;
    readFloat(): number;
    readString(): string;
    readChars(len?: number): string;
    readByte(): number;
    isExhausted(): boolean;
}
//# sourceMappingURL=W3Buffer.d.ts.map