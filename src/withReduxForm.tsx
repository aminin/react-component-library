import React from "react";
import { reduxForm, reducer as formReducer } from "redux-form";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const withReduxForm = (storyFunc: any, props: object) => {
  const reducers = { form: formReducer };
  const reducer = combineReducers(reducers);
  const store = createStore(reducer);
  const Test = reduxForm({ form: "withReduxForm", enableReinitialize: true })(
      storyFunc
  );
  return (
      <Provider store={store}>
        <Test {...props} />
      </Provider>
  );
};

export default withReduxForm;
