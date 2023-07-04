import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'common/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: '로그인 또는 회원가입',
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'big', 'normal', 'small'],
      },
      defaultValue: 'large',
    },
    design: {
      control: {
        type: 'select',
        options: ['solid', 'ghost', 'outline', 'reject'],
      },
    },
    backgroundColor: {
      control: {
        type: 'select',
        options: ['#5344AA', '#E14D6C', '#FFF', '#FEE500'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['#FFF', '#000', '#5344AA'],
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <Button
    design="reject"
    width={347}
    size="large"
    color="#FFF"
    backgroundColor="#5344AA"
  >
    로그인 또는 회원가입
  </Button>
);

export const Default = Template.bind({});

export const LargeButton = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Button size="large" width={347} color="#FFF" backgroundColor="#5344AA">
      로그인 또는 회원가입
    </Button>
    <Button size="large" width={347} color="#FFF" backgroundColor="#E14D6C">
      로그인 없이 시작하기
    </Button>
    <Button size="large" width={347} color="#000" backgroundColor="#FFF">
      공유하기
    </Button>
  </div>
);

export const PopupButton = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Button size="large" width={140} color="#FFF" backgroundColor="#5344AA">
      마저 할게요!
    </Button>
    <Button size="large" width={140} color="#000" backgroundColor="#FFF">
      네
    </Button>
  </div>
);

LargeButton.parameters = {
  docs: {
    description: {
      story:
        '`Large` 타입 버튼은 로그인 & 회원가입 에서 주로 사용되어지는 타입 입니다.  (로그인 또는 회원가입, 로그인 없이 시작하기, 공유하기)',
    },
  },
  controls: {
    disabled: true,
  },
};

PopupButton.parameters = {
  docs: {
    description: {
      story:
        '`Popup` 타입 버튼은 로그인 & 회원가입 에서 주로 사용되어지는 타입 입니다.  (로그인 또는 회원가입, 로그인 없이 시작하기, 공유하기)',
    },
  },
  controls: {
    disabled: true,
  },
};
