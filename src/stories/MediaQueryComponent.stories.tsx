import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MediaQueryComponent } from '../components';

export default {
    title: 'Hooks/Stories/useMediaQuery',
    component: MediaQueryComponent,
} as ComponentMeta<typeof MediaQueryComponent>;

const Template: ComponentStory<typeof MediaQueryComponent> = () => (
    <MediaQueryComponent />
);

export const Basic = Template.bind({});
