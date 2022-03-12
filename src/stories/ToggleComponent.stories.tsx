import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ToggleComponent } from '../components';

export default {
    title: 'Hooks/Stories/useToggle',
    component: ToggleComponent,
} as ComponentMeta<typeof ToggleComponent>;

const Template: ComponentStory<typeof ToggleComponent> = () => (
    <ToggleComponent />
);

export const Basic = Template.bind({});
