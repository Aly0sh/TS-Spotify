import type { ITrack, IBase } from "./music.types";

export interface IPlayerState extends IBase { 
    currentTrack: ITrack | null 
    queue: ITrack[]
    history: ITrack[]
    isPlaying: boolean
    volume: number 
    currentTime: number 
    repeatMode: 'off' | 'one' | 'all'
    isShuffling: boolean
}