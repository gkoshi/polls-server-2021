const USER_ROUTES_PATHS = {
  REGISTER_USER: "/register-user",
  LOGIN: "/login",
  EDIT_USER: "/edit-user/:id",
  DELETE_USER: "/delete-user",
  GET_USER_BY_ID: "/user/:id",
  GET_ALL_USERS: "/users",
};

const QUESTION_ROUTE_PATHS = {
  CREATE_QUESTION: "/question/create",
  EDIT_QUESTION: "/question/edit/:id",
  DELETE_QUESTION: "/question/delete/:id",
  GET_QUESTION_BY_ID: "/question/:id",
  GET_ALL_QUESTIONS: "/questions/all",
};

const CITY_ROUTE_PATHS = {
  CREATE_CITY: "/city/create",
  EDIT_CITY: "/city/edit/:id",
  DELETE_CITY: "/city/delete/:id",
  GET_CITY_BY_ID: "/city/:id",
  GET_ALL_CITIES: "/cities/all",
};

const COUNTRY_ROUTE_PATHS = {
  CREATE_COUNTRY: "/country/create",
  EDIT_COUNTRY: "/country/edit/:id",
  DELETE_COUNTRY: "/country/delete/:id",
  GET_COUNTRY_BY_ID: "/country/:id",
  GET_ALL_COUNTRIES: "/countries/all",
};

const ADDRESS_ROUTE_PATHS = {
  CREATE_ADDRESS: "/address/create",
  EDIT_ADDRESS: "/address/edit/:id",
  DELETE_ADDRESS: "/address/delete/:id",
  GET_ADDRESS_BY_ID: "/address/:id",
  GET_ALL_ADDRESSES: "/addresses/all",
};

const AGE_RANGE_ROUTE_PATHS = {
  CREATE_AGE_RANGE: "/age-range/create",
  EDIT_AGE_RANGE: "/age-range/edit/:id",
  DELETE_AGE_RANGE: "/age-range/delete/:id",
  GET_AGE_RANGE_BY_ID: "/age-range/:id",
  GET_ALL_ADDRESSES: "/age-range/all",
};

const QUESTION_OPTIONS_ROUTE_PATHS = {
  CREATE_QUESTION_OPTION: "/question-options/create",
  EDIT_QUESTION_OPTION: "/question-options/edit/:id",
  DELETE_QUESTION_OPTION: "/question-options/delete/:id",
  GET_QUESTION_OPTION_BY_ID: "/question-options/:id",
  GET_ALL_QUESTION_OPTIONS: "/question-options/all/:questionId",
};

const QUESTION_CATEGORY_ROUTE_PATHS = {
  CREATE_QUESTION_CATEGORY: "/question-category/create",
  EDIT_QUESTION_CATEGORY: "/question-category/edit/:id",
  DELETE_QUESTION_CATEGORY: "/question-category/delete/:id",
  GET_QUESTION_CATEGORY_BY_ID: "/question-category/:id",
  GET_ALL_QUESTION_CATEGORIES: "/question-category/all",
};

const QUESTION_LIMIT_ROUTE_PATHS = {
  CREATE_QUESTION_LIMIT: "/question-limit/create",
  EDIT_QUESTION_LIMIT: "/question-limit/edit/:id",
  DELETE_QUESTION_LIMIT: "/question-limit/delete/:id",
  GET_QUESTION_LIMIT_BY_ID: "/question-limit/:questionId",
};

const ANSWER_ROUTE_PATHS = {
  CREATE_ANSWER: "/answer/create",
  EDIT_ANSWER: "/answer/edit/:id",
  DELETE_ANWWER: "/answer/delete/:id",
  GET_ANSWER_BY_ID: "/answer/:id",
  GET_ALL_ANSWERS: "/answers/all",
};

const AGENT_ROUTE_PATHS = {
  CREATE_AGENT: "/agent/create",
  EDIT_AGENT: "/agent/edit/:id",
  DELETE_AGENT: "/agent/delete/:id",
  GET_AGENT_BY_ID: "/agent/:id",
  GET_ALL_AGENTS: "/agents/all",
};

module.exports = {
  USER_ROUTES_PATHS,
  QUESTION_ROUTE_PATHS,
  CITY_ROUTE_PATHS,
  COUNTRY_ROUTE_PATHS,
  ADDRESS_ROUTE_PATHS,
  AGE_RANGE_ROUTE_PATHS,
  QUESTION_OPTIONS_ROUTE_PATHS,
  QUESTION_CATEGORY_ROUTE_PATHS,
  QUESTION_LIMIT_ROUTE_PATHS,
  ANSWER_ROUTE_PATHS,
  AGENT_ROUTE_PATHS,
};
