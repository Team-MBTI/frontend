import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from './index';

export default {
  title: 'common/Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'big', 'normal', 'small'],
      },
      defaultValue: 'large',
    },
    label: {
      text: {
        defaultValue: '이메일',
      },
    },
    placeholder: {
      text: {
        defaultValue: '이메일을 입력해주세요.',
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'number'],
      },
    },
    name: {
      text: {
        defaultValue: '이메일',
      },
    },
    status: {
      control: {
        type: 'select',
        options: ['normal', 'disabled', 'error', 'loading', 'success'],
      },
    },
    value: {
      text: {
        defaultValue: 'jinlog9@gmail.com',
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => (
  <Input
    width="300px"
    label="이메일"
    placeholder="이메일을 입력해주세요."
    type="text"
    name="email"
    status="normal"
    value=""
  />
);

export const Default = Template.bind({});

export const SuccessInput = () => (
  <Input
    width="300px"
    label="이메일"
    placeholder="이메일을 입력해주세요."
    type="text"
    name="email"
    status="success"
    value="jinlog9@gmail.com"
  />
);

export const ErrorInput = () => (
  <Input
    width="300px"
    label="이메일"
    placeholder="이메일을 입력해주세요."
    type="text"
    name="email"
    status="error"
    value="jinlog9#gmail.com"
  />
);
