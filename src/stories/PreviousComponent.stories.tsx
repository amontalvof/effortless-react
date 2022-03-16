import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PreviousComponent } from '../components';

export default {
    title: 'Hooks/Stories/usePrevious',
    component: PreviousComponent,
} as ComponentMeta<typeof PreviousComponent>;

const Template: ComponentStory<typeof PreviousComponent> = () => (
    <PreviousComponent />
);

export const Basic = Template.bind({});
