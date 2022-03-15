import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrayComponent } from '../components';

export default {
    title: 'Hooks/Stories/useArray',
    component: ArrayComponent,
} as ComponentMeta<typeof ArrayComponent>;

const Template: ComponentStory<typeof ArrayComponent> = () => (
    <ArrayComponent />
);

export const Basic = Template.bind({});
