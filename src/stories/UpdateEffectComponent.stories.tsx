import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UpdateEffectComponent } from '../components';

export default {
    title: 'Hooks/Stories/useUpdateEffect',
    component: UpdateEffectComponent,
} as ComponentMeta<typeof UpdateEffectComponent>;

const Template: ComponentStory<typeof UpdateEffectComponent> = () => (
    <UpdateEffectComponent />
);

export const Basic = Template.bind({});
