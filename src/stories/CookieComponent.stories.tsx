import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CookieComponent } from '../components';

export default {
    title: 'Hooks/Stories/useCookie',
    component: CookieComponent,
} as ComponentMeta<typeof CookieComponent>;

const Template: ComponentStory<typeof CookieComponent> = () => (
    <CookieComponent />
);

export const Basic = Template.bind({});
