import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DarkModeComponent } from '../components';

export default {
    title: 'Hooks/Stories/useDarkMode',
    component: DarkModeComponent,
} as ComponentMeta<typeof DarkModeComponent>;

const Template: ComponentStory<typeof DarkModeComponent> = () => (
    <DarkModeComponent />
);

export const Basic = Template.bind({});
