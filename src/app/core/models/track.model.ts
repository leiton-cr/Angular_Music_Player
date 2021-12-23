import { Artist } from "./artist.model";

export interface Track {
    _id?: number,
    name: string,
    album: string,
    cover: string,
    url?: string,
    artist?: Artist
}