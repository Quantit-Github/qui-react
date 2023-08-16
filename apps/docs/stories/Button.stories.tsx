import { Button } from '@quantit/qui-react/src';
import { ArgTypes, Meta, Story } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof Button>, ArgTypes[string]>
>;
const argTypesSetting: MyArgTypes = {
  children: {
    description: '버튼 텍스트 또는 리액트 컴포넌트',
  },
  onClick: {
    description: '버튼 클릭 이벤트 핸들러',
  },
};

export default {
  title: 'Base/Button',
  component: Button,
  argTypes: argTypesSetting,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta<typeof Button>;

const Template: Story<ComponentProps<typeof Button>> = (props) => {
  return <Button {...props}></Button>;
};

export const Default = Template.bind({});
Default.args = {
  children: '텍스트',
  onClick: () => console.log('클릭'),
};
