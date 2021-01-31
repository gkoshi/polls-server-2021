const ADMIN_ROUTES_PATHS = {
  REGISTER_ADMIN: "/register-admin",
  LOGIN: "/admin-login",
  EDIT_ADMIN: "/edit-admin/:id",
  DELETE_ADMIN: "/delete-admin/:id",
  GET_ADMIN_BY_ID: "/admin/:id",
  GET_ALL_ADMINS: "/admins",
};

const JOURNALIST_ROUTES_PATHS = {
  REGISTER_JOURNALIST: "/register-journalist",
  LOGIN: "/login-journalist",
  EDIT_JOURNALIST: "/edit-journalist/:id",
  DELETE_JOURNALIST: "/delete-journalist/:id",
  GET_JOURNALIST_BY_ID: "/journalist/:id",
  GET_ALL_JOURNALISTS: "/journalists/all",
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
  GET_CITIES_BY_COUNTRY_ID: "/cities/country/:id",
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

const SETTLEMENT_ROUTE_PATHS = {
  CREATE_SETTLEMENT: "/settlement/create",
  EDIT_SETTLEMENT: "/settlement/edit/:id",
  DELETE_SETTLEMENT: "/settlement/delete/:id",
  GET_SETTLEMENT_BY_COUNTRY_AND_CITY_ID:
    "/settlement/bycountryandcityid/:country_id/:city_id",
  GET_SETTLEMENT_BY_ID: "/settlement/:id",
  GET_ALL_SETTLEMENTS: "/settlements/all",
};

const AGE_RANGE_ROUTE_PATHS = {
  CREATE_AGE_RANGE: "/age-range/create",
  EDIT_AGE_RANGE: "/age-range/edit/:id",
  DELETE_AGE_RANGE: "/age-range/delete/:id",
  GET_AGE_RANGE_BY_ID: "/age-range/:id",
  GET_ALL_AGE_RANGES: "/age-range/all",
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
  GET_ALL_QUESTION_CATEGORIES: "/question-categories/all",
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
  GET_ALL_AGENTS: "/agents/all",
  GET_AGENT_BY_ID: "/agent/:id",
};

const UPLOAD_EXCEL_PATHS = {
  UPLOAD_EXCEL: "/excel/upload",
};

const MOBILE_PATHS = {
  REGISTER_USER: "/register",
  SELECT_QUESTION_CATEGORY: "/select-question-category"
}

module.exports = {
  ADMIN_ROUTES_PATHS,
  QUESTION_ROUTE_PATHS,
  CITY_ROUTE_PATHS,
  COUNTRY_ROUTE_PATHS,
  SETTLEMENT_ROUTE_PATHS,
  AGE_RANGE_ROUTE_PATHS,
  QUESTION_OPTIONS_ROUTE_PATHS,
  QUESTION_CATEGORY_ROUTE_PATHS,
  QUESTION_LIMIT_ROUTE_PATHS,
  ANSWER_ROUTE_PATHS,
  AGENT_ROUTE_PATHS,
  UPLOAD_EXCEL_PATHS,
  JOURNALIST_ROUTES_PATHS,
  MOBILE_PATHS
};
