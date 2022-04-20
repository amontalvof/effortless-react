import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CounterComponent } from '../components';

export default {
    title: 'Hooks/Stories/useCounter',
    component: CounterComponent,
} as ComponentMeta<typeof CounterComponent>;

const Template: ComponentStory<typeof CounterComponent> = () => (
    <CounterComponent />
);

export const Basic = Template.bind({});
