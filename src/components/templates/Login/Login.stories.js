import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Login from "./LoginForm.template";

storiesOf("Login Form", module).add("Form", () => {
  return <Login func={action("clicked")} />;
});
