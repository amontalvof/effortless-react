import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EventListenerComponent } from '../components';

export default {
    title: 'Hooks/Stories/useEventListener',
    component: EventListenerComponent,
} as ComponentMeta<typeof EventListenerComponent>;

const Template: ComponentStory<typeof EventListenerComponent> = () => (
    <EventListenerComponent />
);

export const Basic = Template.bind({});
