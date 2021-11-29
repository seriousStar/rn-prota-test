import { combineReducers } from "redux";

import home from "./home";

const rootReducer = combineReducers({
  home: home.reducer,
});

export { rootReducer, home };
