import { WarResult, JsonResult } from '../CommonInterfaces';
interface Sound {
    name: string;
    variableName: string;
    path: string;
    eax: string;
    flags: SoundFlags;
    fadeRate: FadeRate;
    volume: number;
    pitch: number;
    channel: number;
    distance: Distance;
}
interface FadeRate {
    in: number;
    out: number;
}
interface SoundFlags {
    looping: boolean;
    '3dSound': boolean;
    stopOutOfRange: boolean;
    music: boolean;
}
interface Distance {
    min: number;
    max: number;
    cutoff: number;
}
export declare abstract class SoundsTranslator {
    static jsonToWar(soundsJson: Sound[]): WarResult;
    static warToJson(buffer: Buffer): JsonResult<Sound[]>;
}
export {};
//# sourceMappingURL=SoundsTranslator.d.ts.map