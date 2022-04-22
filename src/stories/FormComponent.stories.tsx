import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormComponent } from '../components';

export default {
    title: 'Hooks/Stories/useForm',
    component: FormComponent,
} as ComponentMeta<typeof FormComponent>;

const Template: ComponentStory<typeof FormComponent> = () => <FormComponent />;

export const Basic = Template.bind({});
