import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HoverComponent } from '../components';

export default {
    title: 'Hooks/Stories/useHover',
    component: HoverComponent,
} as ComponentMeta<typeof HoverComponent>;

const Template: ComponentStory<typeof HoverComponent> = () => (
    <HoverComponent />
);

export const Basic = Template.bind({});
