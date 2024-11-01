export declare class HexBuffer {
    private _buffer;
    addString(str: string): void;
    addNewLine(): void;
    addChar(char: string): void;
    addChars(chars: string): void;
    addInt(int: number, isShort?: boolean): void;
    addShort(short: number): void;
    addFloat(float: number): void;
    addByte(byte: any): void;
    addNullTerminator(): void;
    getBuffer(): Buffer;
}
//# sourceMappingURL=HexBuffer.d.ts.map