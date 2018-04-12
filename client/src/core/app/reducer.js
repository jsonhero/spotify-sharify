import * as c from './constants';

const defaultState = {}

export default (state = defaultState, action) => {
    switch (action.type) {
        case c.SPOTIFY_REQUEST:
            return state;
        default:
            return state;
    }
}

export { REDUCER_NAME } from './constants';
