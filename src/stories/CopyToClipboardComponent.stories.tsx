import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CopyToClipboardComponent } from '../components';

export default {
    title: 'Hooks/Stories/useCopyToClipboard',
    component: CopyToClipboardComponent,
} as ComponentMeta<typeof CopyToClipboardComponent>;

const Template: ComponentStory<typeof CopyToClipboardComponent> = () => (
    <CopyToClipboardComponent />
);

export const Basic = Template.bind({});
