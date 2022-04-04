import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EffectOnceComponent } from '../components';

export default {
    title: 'Hooks/Stories/useEffectOnce',
    component: EffectOnceComponent,
} as ComponentMeta<typeof EffectOnceComponent>;

const Template: ComponentStory<typeof EffectOnceComponent> = () => (
    <EffectOnceComponent />
);

export const Basic = Template.bind({});
