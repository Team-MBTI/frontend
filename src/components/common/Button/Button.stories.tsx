import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'pages/Button',
  component: Button,
  parameters: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button>Button!</Button>;

export const Default = Template.bind({});
