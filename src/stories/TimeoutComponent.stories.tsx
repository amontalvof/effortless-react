import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TimeoutComponent } from '../components';

export default {
    title: 'Hooks/Stories/useTimeout',
    component: TimeoutComponent,
} as ComponentMeta<typeof TimeoutComponent>;

const Template: ComponentStory<typeof TimeoutComponent> = () => (
    <TimeoutComponent />
);

export const Basic = Template.bind({});
