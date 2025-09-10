import type { Meta, StoryObj } from '@storybook/react';
import Testcomponent from '../components/Testcomponent';

const meta: Meta<typeof Testcomponent> = {
  title: 'Components/Testcomponent',
  component: Testcomponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The main heading text',
    },
    description: {
      control: { type: 'text' },
      description: 'The descriptive text below the title',
    },
    buttonText: {
      control: { type: 'text' },
      description: 'The text displayed on the call-to-action button',
    },
    onButtonClick: {
      action: 'clicked',
      description: 'Function called when button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Start hosting today',
    description: 'Earn extra income and meet interesting guests by sharing your space.',
    buttonText: 'Become a Host',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the standard configuration used in the hosting tab of user profiles to encourage users to become hosts.',
      },
    },
  },
};

export const CustomContent: Story = {
  args: {
    title: 'Join our community',
    description: 'Connect with travelers from around the world and share your unique space.',
    buttonText: 'Get Started',
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how the component can be customized for different contexts or messaging strategies.',
      },
    },
  },
};

export const ShortContent: Story = {
  args: {
    title: 'Host with us',
    description: 'Start earning today.',
    buttonText: 'Join',
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how the component adapts to shorter content while maintaining its visual structure.',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  args: {
    title: 'Start hosting today',
    description: 'Earn extra income and meet interesting guests by sharing your space.',
    buttonText: 'Become a Host',
    onButtonClick: () => alert('Button clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the button\'s click functionality with a simple alert. In real usage, this would typically navigate to a hosting signup flow.',
      },
    },
  },
};