import appReducer, { REDUCER_NAME } from './app/reducer';

const rootReducer = {
    [REDUCER_NAME]: appReducer,
};

export default rootReducer;