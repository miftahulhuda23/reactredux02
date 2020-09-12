import { visibilityFilter } from "../action";

const visibilityFilters = (state = visibilityFilter, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilters;
