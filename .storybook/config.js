import { configure } from '@storybook/react';
import { setDefaults } from "@storybook/addon-info";

setDefaults({
  header: false,
  inline: true,
  maxPropsIntoLine: 1,
  styles: {
    infoBody: {
      border: "none",
      padding: "0px",
      borderTop: "1px solid rgb(238, 238, 238)",
      paddingTop: "20px",
      marginTop: "25px",
      boxShadow: "none"
    }
  }
});

const req = require.context('../src/components', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
