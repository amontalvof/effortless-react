import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DebounceComponent } from '../components';

export default {
    title: 'Hooks/Stories/useDebounce',
    component: DebounceComponent,
} as ComponentMeta<typeof DebounceComponent>;

const Template: ComponentStory<typeof DebounceComponent> = () => (
    <DebounceComponent />
);

export const Basic = Template.bind({});
