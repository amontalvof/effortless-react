import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ClickOutsideComponent } from '../components';

export default {
    title: 'Hooks/Stories/useClickOutside',
    component: ClickOutsideComponent,
} as ComponentMeta<typeof ClickOutsideComponent>;

const Template: ComponentStory<typeof ClickOutsideComponent> = () => (
    <ClickOutsideComponent />
);

export const Basic = Template.bind({});
