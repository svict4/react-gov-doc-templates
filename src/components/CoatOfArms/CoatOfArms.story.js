import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import CoatOfArms from "./";

storiesOf("Coat of Arms", module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add("by itself", () => <CoatOfArms width={text("width", "400px")} />, {
    info: "Commonwealth Coat of Arms for the Commonwealth of Australia"
  })
  .add(
    "inline",
    () => (
      <CoatOfArms
        width={text("width", "400px")}
        entityName={text("Entity Name", "Department of Social Services")}
        stripped={boolean('Stripped', false)}
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
        width={text("width", "400px")}
        entityName={text("Entity Name", "Department of Social Services")}
        stripped={boolean('Stripped', false)}
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
        width={text("width", "400px")}
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
        width={text("width", "400px")}
        entityName={text("Entity Name", "Department of Social Services")}
        stacked
      />
    ),
    {
      info: "inverted colors for dark backgrounds"
    }
  )
  .add(
    "initiative",
    () => (
      <CoatOfArms
        width={text("width", "400px")}
        entityName={text("Entity Name", "Department of Social Services")}
        inline
      />
    ),
    {
      info: "inverted colors for dark backgrounds"
    }
  );
