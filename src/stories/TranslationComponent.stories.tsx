import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TranslationComponent } from '../components';

export default {
    title: 'Hooks/Stories/useTranslation',
    component: TranslationComponent,
} as ComponentMeta<typeof TranslationComponent>;

const Template: ComponentStory<typeof TranslationComponent> = () => (
    <TranslationComponent />
);

export const Basic = Template.bind({});
