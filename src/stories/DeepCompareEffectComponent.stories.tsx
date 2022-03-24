import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DeepCompareEffectComponent } from '../components';

export default {
    title: 'Hooks/Stories/useDeepCompareEffect',
    component: DeepCompareEffectComponent,
} as ComponentMeta<typeof DeepCompareEffectComponent>;

const Template: ComponentStory<typeof DeepCompareEffectComponent> = () => (
    <DeepCompareEffectComponent />
);

export const Basic = Template.bind({});
