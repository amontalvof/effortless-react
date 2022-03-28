import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WindowSizeComponent } from '../components';

export default {
    title: 'Hooks/Stories/useWindowSize',
    component: WindowSizeComponent,
} as ComponentMeta<typeof WindowSizeComponent>;

const Template: ComponentStory<typeof WindowSizeComponent> = () => (
    <WindowSizeComponent />
);

export const Basic = Template.bind({});
