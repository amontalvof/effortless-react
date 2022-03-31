import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StateWithValidationComponent } from '../components';

export default {
    title: 'Hooks/Stories/useStateWithValidation',
    component: StateWithValidationComponent,
} as ComponentMeta<typeof StateWithValidationComponent>;

const Template: ComponentStory<typeof StateWithValidationComponent> = () => (
    <StateWithValidationComponent />
);

export const Basic = Template.bind({});
