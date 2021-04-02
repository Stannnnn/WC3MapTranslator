"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const HexBuffer_1 = require("../lib/HexBuffer");
let hexBuffer;
describe('HexBuffer', () => {
    beforeEach(() => {
        // clear the buffer before each test in this block so we
        // don't have to care about what we added in prior tests
        hexBuffer = new HexBuffer_1.HexBuffer();
    });
    it('should addString', () => {
        const testWords = [
            'Hallo, wêreld!',
            'Pershëndetje Botë',
            'أهلاً بالعالم',
            'Բարե՛ւ, աշխարհ։',
            'Salam Dünya',
            'Ahoj Světe!',
            'Kaixo mundua!',
            'Прывітанне свет',
            'Shani Mwechalo!',
            'Shagatam Prithivi!',
            'Zdravo Svijete!',
            'Здравей, свят!',
            'ជំរាបសួរ ពិភពលោក',
            'Hola món!',
            '你好世界',
            'ᎣᏏᏲ ᎡᎶᎯ',
            'Klahowya Hayas Klaska',
            'Bok Svijete!',
            'Hej, Verden!',
            'Hallo, wereld!',
            'Hello World!',
            'Saluton mondo!',
            'Tere maailm!',
            'Hei maailma!',
            'Salut le Monde!',
            'Hallo, wrâld!',
            'Ola mundo!',
            'Hallo Welt!',
            'Γεια σου κόσμε!',
            'Aloha Honua',
            'שלום עולם',
            'नमस्ते दुनिया',
            'Nyob zoo ntiaj teb.',
            'Helló világ!',
            'Halló heimur!',
            'Ndewo Ụwa',
            'Halo Dunia!',
            'Dia dhaoibh, a dhomhain!',
            'Ciao Mondo!',
            'こんにちは、 世界！',
            'ಹಲೋ ವರ್ಲ್ಡ್',
            'Habari dunia!',
            'Niatia thi!',
            'nuqneH',
            '반갑다 세상아',
            'ສະບາຍດີ,ໂລກ',
            'AVE MVNDE',
            'Sveika, Pasaule!',
            'Sveikas, Pasauli',
            'coi li terdi',
            'Moien Welt!',
            'Manao ahoana ry tany!',
            'Namaskaram, lokame',
            'Merhba lid-dinja',
            'Hallo verden!',
            '!سلام دنیا',
            'Witaj świecie!',
            'Olá, mundo!',
            'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ',
            'Salut lume!',
            'Здравствуй, мир!',
            'Halò, a Shaoghail!',
            'Zdravo Svete!',
            'Ahoj, svet!',
            'Pozdravljen svet!',
            '¡Hola mundo!',
            'Hallå världen!',
            'Kamusta mundo!',
            'ஹலோ உலகம்',
            'హలో వరల్డ్',
            'สวัสดีโลก!',
            'Merhaba Dünya!',
            'Привiт, свiте!',
            'ہیلو دنیا والو',
            'Xin chào thế giới',
            'S\'mae byd!',
            'העלא וועלט',
            'Sawubona Mhlaba' // Zulu
        ];
        let totalLength = 0;
        // tslint:disable-next-line: forin
        for (const word of testWords) {
            const bufLength = Buffer.from(word).length;
            hexBuffer.addString(word);
            totalLength += bufLength + 1; // adding one accounts for the null terminator at the end of the string
            const bufferLength = hexBuffer.getBuffer().length;
            assert_1.default.equal(bufferLength, totalLength);
        }
    });
    it('should addNewLine', () => {
        hexBuffer.addNewLine();
        assert_1.default.equal(hexBuffer.getBuffer().length, 2);
        assert_1.default.equal(hexBuffer.getBuffer()[0], 0x0d);
        assert_1.default.equal(hexBuffer.getBuffer()[1], 0x0a);
    });
    it('should addChar', () => {
        hexBuffer.addChar('A');
        assert_1.default.equal(hexBuffer.getBuffer().length, 1);
        assert_1.default.equal(hexBuffer.getBuffer()[0], 65); // charcode for the ASCII letter "A"
    });
    it('should addChars', () => {
        hexBuffer.addChars('ABCD');
        assert_1.default.equal(hexBuffer.getBuffer().length, 4);
        assert_1.default.equal(hexBuffer.getBuffer()[0], 65); // charcode for the ASCII letter "A"
        assert_1.default.equal(hexBuffer.getBuffer()[1], 66); // charcode for the ASCII letter "B"
        assert_1.default.equal(hexBuffer.getBuffer()[2], 67); // charcode for the ASCII letter "C"
        assert_1.default.equal(hexBuffer.getBuffer()[3], 68); // charcode for the ASCII letter "D"
    });
    it('should addInt', () => {
        hexBuffer.addInt(0);
        assert_1.default.equal(hexBuffer.getBuffer().length, 4); // integer is 4 bytes in length
        assert_1.default.equal(hexBuffer.getBuffer()[0], 0x00);
        assert_1.default.equal(hexBuffer.getBuffer()[1], 0x00);
        assert_1.default.equal(hexBuffer.getBuffer()[2], 0x00);
        assert_1.default.equal(hexBuffer.getBuffer()[3], 0x00);
    });
    it('should addShort', () => {
        hexBuffer.addShort(14);
        assert_1.default.equal(hexBuffer.getBuffer().length, 2); // 2 bytes in length
        assert_1.default.equal(hexBuffer.getBuffer()[0], 0x0e);
        assert_1.default.equal(hexBuffer.getBuffer()[1], 0x00);
    });
    it('should addFloat', () => {
        hexBuffer.addFloat(1.234);
        assert_1.default.equal(hexBuffer.getBuffer().length, 4); // 4 bytes in length
        assert_1.default.equal(hexBuffer.getBuffer()[0], 0xb6);
        assert_1.default.equal(hexBuffer.getBuffer()[1], 0xf3);
        assert_1.default.equal(hexBuffer.getBuffer()[2], 0x9d);
        assert_1.default.equal(hexBuffer.getBuffer()[3], 0x3f);
    });
    it('should addByte', () => {
        hexBuffer.addByte(15);
        assert_1.default.equal(hexBuffer.getBuffer()[0], 15);
    });
    it('should addNullTerminator', () => {
        hexBuffer.addNullTerminator();
        assert_1.default.equal(hexBuffer.getBuffer().length, 1);
        assert_1.default.equal(hexBuffer.getBuffer()[0], 0);
    });
    it('should getBuffer', () => {
        hexBuffer.addString('');
        assert_1.default(hexBuffer.getBuffer()); // test if this function works
    });
});
//# sourceMappingURL=HexBufferTest.js.map