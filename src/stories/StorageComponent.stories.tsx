import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StorageComponent } from '../components';

export default {
    title: 'Hooks/Stories/useStorage',
    component: StorageComponent,
} as ComponentMeta<typeof StorageComponent>;

const Template: ComponentStory<typeof StorageComponent> = () => (
    <StorageComponent />
);

export const Basic = Template.bind({});
