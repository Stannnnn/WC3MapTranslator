import { WarResult, JsonResult, angle } from '../CommonInterfaces';
interface Camera {
    target: CameraTarget;
    offsetZ: number;
    rotation: angle;
    aoa: angle;
    distance: number;
    roll: number;
    fov: angle;
    farClipping: number;
    name: string;
}
interface CameraTarget {
    x: number;
    y: number;
}
export declare abstract class CamerasTranslator {
    static jsonToWar(cameras: Camera[]): WarResult;
    static warToJson(buffer: Buffer): JsonResult<Camera[]>;
}
export {};
//# sourceMappingURL=CamerasTranslator.d.ts.map