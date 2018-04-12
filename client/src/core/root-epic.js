import { combineEpics } from 'redux-observable';

import { appEpic } from './app/epics'

const rootEpic = combineEpics(appEpic);

export default rootEpic;