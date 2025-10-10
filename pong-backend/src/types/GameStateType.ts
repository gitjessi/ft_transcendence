import { BallType } from "./BallType.js";
import { PlayerStatType } from "./PlayerType.js";

interface playerStateType {
    x: number;
    y: number;
    canvasWidth: number;
    canvasHeight: number;
}

export interface GameStateType {
    player: { X: playerStateType; Y: playerStateType; };
    ball: { x: number; y: number; velocityX: number; velocityY: number, radius: number, speed: number };
    paddles: { [key: number]: { y: number } };
    scores: { pX: number; pY: number };
    width: number;
    heigth: number;
}

export interface userGameStateType {
    userX: PlayerStatType;
    userY: PlayerStatType;
    ball: BallType;
}