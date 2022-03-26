import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OnScreenComponent } from '../components';

export default {
    title: 'Hooks/Stories/useOnScreen',
    component: OnScreenComponent,
} as ComponentMeta<typeof OnScreenComponent>;

const Template: ComponentStory<typeof OnScreenComponent> = () => (
    <OnScreenComponent />
);

export const Basic = Template.bind({});
