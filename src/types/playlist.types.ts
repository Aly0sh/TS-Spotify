import type { IBase, ITrack, TId, TImageUrl } from "./music.types";

export interface IPlaylist extends IBase {
    name: string 
    description?: string 
    tracks: ITrack[]
    coverImage: TImageUrl
    owner: {
        id: TId
        displayName: string 
        isPremium: boolean
    }
    isPublic: boolean 
    followers: number 
}