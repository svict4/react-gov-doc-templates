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

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
