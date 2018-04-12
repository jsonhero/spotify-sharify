import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';

import * as c from './constants';

export const appEpic = (action$) => {
    console.log(action$.ofType(c.SPOTIFY_REQUEST), 'action')
    return action$.pipe(
        ofType(c.SPOTIFY_REQUEST),
        mergeMap(action =>
            ajax.getJSON('http://localhost:3000/spotify'))
    )
}