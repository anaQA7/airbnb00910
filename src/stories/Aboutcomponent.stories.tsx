import type { Meta, StoryObj } from '@storybook/react';
import Aboutcomponent from '../components/Aboutcomponent';

const meta: Meta<typeof Aboutcomponent> = {
  title: 'Components/Aboutcomponent',
  component: Aboutcomponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bio: {
      control: { type: 'text' },
      description: 'The bio text content to display',
    },
    isEditing: {
      control: { type: 'boolean' },
      description: 'Whether the component is in editing mode',
    },
    onBioChange: {
      action: 'bio-changed',
      description: 'Function called when bio text is changed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bio: 'Travel enthusiast and photographer. Love exploring new cultures and meeting people from around the world. Host since 2019.',
    isEditing: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the standard view users see when viewing a profile. The bio is displayed as read-only text.',
      },
    },
  },
};

export const EditingMode: Story = {
  args: {
    bio: 'Travel enthusiast and photographer. Love exploring new cultures and meeting people from around the world. Host since 2019.',
    isEditing: true,
    onBioChange: (bio: string) => console.log('Bio changed:', bio),
  },
  parameters: {
    docs: {
      description: {
        story: 'This shows the editing interface with a textarea. Users can modify their bio text in this mode.',
      },
    },
  },
};

export const EmptyBio: Story = {
  args: {
    bio: '',
    isEditing: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how the component handles empty or missing bio content.',
      },
    },
  },
};

export const LongBioContent: Story = {
  args: {
    bio: 'Passionate traveler and professional photographer with over 10 years of experience exploring diverse cultures across six continents. I specialize in capturing authentic moments and hidden gems in every destination I visit. As a Superhost since 2019, I\'ve welcomed hundreds of guests from around the world and love sharing local insights and recommendations. When I\'m not traveling, you can find me teaching photography workshops, volunteering at local animal shelters, or experimenting with new recipes inspired by my travels. I speak English, Spanish, French, and basic Mandarin, and I\'m always eager to learn about different cultures and perspectives from my guests.',
    isEditing: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests how the component handles longer bio content and text wrapping.',
      },
    },
  },
};