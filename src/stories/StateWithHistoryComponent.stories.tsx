import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StateWithHistoryComponent } from '../components';

export default {
    title: 'Hooks/Stories/useStateWithHistory',
    component: StateWithHistoryComponent,
} as ComponentMeta<typeof StateWithHistoryComponent>;

const Template: ComponentStory<typeof StateWithHistoryComponent> = () => (
    <StateWithHistoryComponent />
);

export const Basic = Template.bind({});
