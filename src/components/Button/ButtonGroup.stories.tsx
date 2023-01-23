import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Components/Buttons/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

export const Basic = () => {
  return (
    <ButtonGroup>
      <Button fill="outline">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Button fill="outline">Heute</Button>
      <Button fill="outline">
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </ButtonGroup>
  );
};
