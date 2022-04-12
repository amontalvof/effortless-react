import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OnlineStatusComponent } from '../components';

export default {
    title: 'Hooks/Stories/useOnlineStatus',
    component: OnlineStatusComponent,
} as ComponentMeta<typeof OnlineStatusComponent>;

const Template: ComponentStory<typeof OnlineStatusComponent> = () => (
    <OnlineStatusComponent />
);

export const Basic = Template.bind({});
