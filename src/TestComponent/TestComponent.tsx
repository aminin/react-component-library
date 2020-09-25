import React from "react";
import { Field } from "redux-form";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

const TestComponent: React.FC<TestComponentProps> = ({ theme, onSubmit, handleSubmit, submitting, pristine }) => {
  return (
    <div
      data-testid="test-component"
      className={`test-component test-component-${theme}`}
    >
      <h1 className="heading">I'm the test component</h1>
      <h2>Made with love by Harvey</h2>
      <form onSubmit={handleSubmit && onSubmit ? handleSubmit(onSubmit) : null}>
        <Field name="name" component="input" />
        <button type="submit" disabled={submitting || pristine} >Submit</button>
      </form>
    </div>
  );
};

export default TestComponent;
