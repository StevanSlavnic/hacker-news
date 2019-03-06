import * as _ from "lodash";

const setItems = (state, payload) => {
  // console.log("Will set items data:", payload.items);

  const stateCopy = _.cloneDeep(state);
  stateCopy.items = payload.items;
  return stateCopy;
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ITEMS_FETCH_DATA_SUCCESS":
      return setItems(state, action);
    default:
      return state;
  }
};

export default reducer;
