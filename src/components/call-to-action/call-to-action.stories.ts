import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'call-to-action',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
      'call-to-action.spec.tsx',
      'call-to-action.e2e.ts',
    ],
  },
  decorators: [jsxDecorator],
};

export const empty = (): string => `
  <call-to-action></call-to-action>
`;
