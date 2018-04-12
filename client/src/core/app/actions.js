import * as c from './constants';

export function requestSpotify() {
    return {
        type: c.SPOTIFY_REQUEST,
    }
}