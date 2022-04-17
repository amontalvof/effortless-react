import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LongPressComponent } from '../components';

export default {
    title: 'Hooks/Stories/useLongPress',
    component: LongPressComponent,
} as ComponentMeta<typeof LongPressComponent>;

const Template: ComponentStory<typeof LongPressComponent> = () => (
    <LongPressComponent />
);

export const Basic = Template.bind({});
