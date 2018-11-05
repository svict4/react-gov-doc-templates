import React from "react";
import { text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import CoatOfArms from "./";

const CoatOfArmsStory = withInfo({
    text:
      "Commonwealth Coat of Arms for the Commonwealth of Australia"
  })(() =>
    <CoatOfArms width={text("width", "400px")} />
  );
  
  export default CoatOfArmsStory;