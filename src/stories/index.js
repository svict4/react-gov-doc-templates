import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { CoatOfArms } from '../components';
import CoatOfArmsStory from "../components/CoatOfArms/CoatOfArms.story";

const stories = storiesOf('Coat of Arms', module);
stories.addDecorator(withKnobs)
stories.add('by itself', () => (
  <CoatOfArmsStory />
));