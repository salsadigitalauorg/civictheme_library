import { number, radios, text } from '@storybook/addon-knobs';
import { getSlots, randomLinks } from '../../00-base/base.stories';

import CivicThemeServiceCard from './service-card.twig';

export default {
  title: 'Molecules/Card/Service Card',
  parameters: {
    layout: 'centered',
  },
};

export const ServiceCard = (knobTab) => {
  const generalKnobTab = typeof knobTab === 'string' ? knobTab : 'General';

  // Current component parameters.
  const generalKnobs = {
    theme: radios(
      'Theme',
      {
        Light: 'light',
        Dark: 'dark',
      },
      'light',
      generalKnobTab,
    ),
    title: text('Title', 'Services category title across one or two lines', generalKnobTab),
    links: randomLinks(number(
      'Number of links',
      5,
      {
        range: true,
        min: 0,
        max: 10,
        step: 1,
      },
      generalKnobTab,
    ), 10),
    modifier_class: text('Additional class', '', generalKnobTab),
  };

  const html = CivicThemeServiceCard({
    ...generalKnobs,
    ...getSlots([
      'content_top',
      'content_bottom',
    ]),
  });

  return `<div class="story-wrapper-size--small">${html}</div>`;
};
