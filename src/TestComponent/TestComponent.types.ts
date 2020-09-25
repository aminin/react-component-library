import {InjectedFormProps, FormSubmitHandler} from "redux-form";

export interface TestComponentProps extends InjectedFormProps {
  theme: "primary" | "secondary";
  onSubmit?: FormSubmitHandler;
}
