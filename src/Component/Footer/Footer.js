import React from "react";
import FilterLink from "../../Container/FilterLink/FilterLink";
import { visibilityFilter } from "../../store/action/index";

const Footer = () => (
  <div>
    <span>Show :</span>
    <FilterLink filter={visibilityFilter.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={visibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={visibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
