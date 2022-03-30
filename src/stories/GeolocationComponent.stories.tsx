import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GeolocationComponent } from '../components';

export default {
    title: 'Hooks/Stories/useGeolocation',
    component: GeolocationComponent,
} as ComponentMeta<typeof GeolocationComponent>;

const Template: ComponentStory<typeof GeolocationComponent> = () => (
    <GeolocationComponent />
);

export const Basic = Template.bind({});
