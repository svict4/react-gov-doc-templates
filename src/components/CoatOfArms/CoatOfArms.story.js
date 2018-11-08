import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import CoatOfArms from "./";

storiesOf("Coat of Arms", module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add("by itself", () => <CoatOfArms width={text("width", "175px")} />, {
    info: "Commonwealth Coat of Arms for the Commonwealth of Australia"
  })
  .add(
    "inline",
    () => (
      <CoatOfArms
        width={text("width", "175px")}
        entityName={text("Entity Name", "Department of Social Services")}
        stripped={boolean("Stripped", false)}
        inline
      />
    ),
    {
      info: 
        "text on the right of the Coat of Arms where 'Australian Government' appears above institution name"
    }
  )
  // TODO
  .add(
    "stacked",
    () => (
      <CoatOfArms
        width={text("width", "175px")}
        entityName={text("Entity Name", "Department of Social Services")}
        stripped={boolean("Stripped", false)}
        stacked
      />
    ),
    {
      info:
        "text below Coat of Arms where 'Australian Government' appears above institution name"
    }
  )
  // TODO
  .add(
    "inverted, on dark",
    () => (
      <CoatOfArms
        width={text("width", "175px")}
        entityName={text("Entity Name", "Department of Social Services")}
        stacked
      />
    ),
    {
      info: "inverted colors for dark backgrounds"
    }
  )
  .add(
    "co-brand",
    () => (
      <CoatOfArms
        width={text("width", "175px")}
        entityName={text("Entity Name", "Department of Social Services")}
        stacked
      />
    ),
    {
      info: "Coat of Arms alongside an external logo"
    }
  )
  .add(
    "initiative",
    () => (
      <CoatOfArms
        width={text("width", "175px")}
        entityName={text("Entity Name", "Department of Social Services")}
        inline
      />
    ),
    {
      info: "Longer text in place of Australian Government text"
    }
  );
