import { WarResult, JsonResult } from '../CommonInterfaces';
interface Map {
    name: string;
    author: string;
    description: string;
    recommendedPlayers: string;
    playableArea: PlayableMapArea;
    flags: MapFlags;
    mainTileType: string;
}
interface GameVersion {
    major: number;
    minor: number;
    patch: number;
    build: number;
}
interface Camera {
    bounds: number[];
    complements: number[];
}
interface MapFlags {
    hideMinimapInPreview: boolean;
    modifyAllyPriorities: boolean;
    isMeleeMap: boolean;
    maskedPartiallyVisible: boolean;
    fixedPlayerSetting: boolean;
    useCustomForces: boolean;
    useCustomTechtree: boolean;
    useCustomAbilities: boolean;
    useCustomUpgrades: boolean;
    waterWavesOnCliffShores: boolean;
    waterWavesOnRollingShores: boolean;
    useItemClassificationSystem: boolean;
    enableWaterTinting: boolean;
    useAccurateProbabilityForCalculations: boolean;
    useCustomAbilitySkins: boolean;
}
interface LoadingScreen {
    background: number;
    path: string;
    text: string;
    title: string;
    subtitle: string;
}
declare enum FogType {
    Linear = 0,
    Exponential1 = 1,
    Exponential2 = 2
}
interface Fog {
    type: FogType;
    startHeight: number;
    endHeight: number;
    density: number;
    color: number[];
}
interface PlayableMapArea {
    width: number;
    height: number;
}
interface Prologue {
    path: string;
    text: string;
    title: string;
    subtitle: string;
}
interface Info {
    saves: number;
    gameVersion: GameVersion;
    editorVersion: number;
    scriptLanguage: ScriptLanguage;
    supportedModes: SupportedModes;
    map: Map;
    camera: Camera;
    prologue: Prologue;
    loadingScreen: LoadingScreen;
    fog: Fog;
    globalWeather: string;
    customSoundEnvironment: string;
    customLightEnv: string;
    water: number[];
    players: Player[];
    forces: Force[];
}
interface PlayerStartingPosition {
    x: number;
    y: number;
    fixed: boolean;
}
interface Player {
    playerNum: number;
    type: number;
    race: number;
    name: string;
    startingPos: PlayerStartingPosition;
}
interface ForceFlags {
    allied: boolean;
    alliedVictory: boolean;
    shareVision: boolean;
    shareUnitControl: boolean;
    shareAdvUnitControl: boolean;
}
interface Force {
    flags: ForceFlags;
    players: number;
    name: string;
}
declare enum ScriptLanguage {
    JASS = 0,
    Lua = 1
}
declare enum SupportedModes {
    SD = 1,
    HD = 2,
    Both = 3
}
export declare abstract class InfoTranslator {
    static jsonToWar(infoJson: Info): WarResult;
    static warToJson(buffer: Buffer): JsonResult<Info>;
}
export {};
//# sourceMappingURL=InfoTranslator.d.ts.map