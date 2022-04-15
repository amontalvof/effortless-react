import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DebugInformationComponent } from '../components';

export default {
    title: 'Hooks/Stories/useDebugInformation',
    component: DebugInformationComponent,
} as ComponentMeta<typeof DebugInformationComponent>;

const Template: ComponentStory<typeof DebugInformationComponent> = () => (
    <DebugInformationComponent />
);

export const Basic = Template.bind({});
