import { combineEpics } from "redux-observable";

import RetaurantEpic from "./RetaurantEpic";

const epics = combineEpics(
    ...RetaurantEpic,
);

export default epics;