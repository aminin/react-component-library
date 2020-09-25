import React from "react";
import TestComponent from "./TestComponent";
import withReduxForm from "../withReduxForm";

export default {
  title: "TestComponent"
};

const onSubmit = (formData) => alert("Submitted! " + formData["name"]);

export const Primary = () => withReduxForm(TestComponent, {theme:"primary", onSubmit});

export const Secondary = () => withReduxForm(TestComponent, {theme:"secondary", onSubmit});
