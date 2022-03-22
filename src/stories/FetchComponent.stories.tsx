import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FetchComponent } from '../components';

export default {
    title: 'Hooks/Stories/useFetch',
    component: FetchComponent,
} as ComponentMeta<typeof FetchComponent>;

const Template: ComponentStory<typeof FetchComponent> = () => (
    <FetchComponent />
);

export const Basic = Template.bind({});
