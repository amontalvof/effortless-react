import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ScriptComponent } from '../components';

export default {
    title: 'Hooks/Stories/useScript',
    component: ScriptComponent,
} as ComponentMeta<typeof ScriptComponent>;

const Template: ComponentStory<typeof ScriptComponent> = () => (
    <ScriptComponent />
);

export const Basic = Template.bind({});
