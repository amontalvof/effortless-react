import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RenderCountComponent } from '../components';

export default {
    title: 'Hooks/Stories/useRenderCount',
    component: RenderCountComponent,
} as ComponentMeta<typeof RenderCountComponent>;

const Template: ComponentStory<typeof RenderCountComponent> = () => (
    <RenderCountComponent />
);

export const Basic = Template.bind({});
