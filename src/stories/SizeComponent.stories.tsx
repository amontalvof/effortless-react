import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SizeComponent } from '../components';

export default {
    title: 'Hooks/Stories/useSize',
    component: SizeComponent,
} as ComponentMeta<typeof SizeComponent>;

const Template: ComponentStory<typeof SizeComponent> = () => <SizeComponent />;

export const Basic = Template.bind({});
