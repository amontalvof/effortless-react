import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AsyncComponent } from '../components';

export default {
    title: 'Hooks/Stories/useAsync',
    component: AsyncComponent,
} as ComponentMeta<typeof AsyncComponent>;

const Template: ComponentStory<typeof AsyncComponent> = () => (
    <AsyncComponent />
);

export const Basic = Template.bind({});
