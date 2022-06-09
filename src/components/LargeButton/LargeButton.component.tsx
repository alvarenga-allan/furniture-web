import React from 'react';
import { Button } from './LargeButton.styles';
import { LargeButtonProps } from './LargeButton.types';

const LargeButton: React.FC<LargeButtonProps> = (props) => {
  return <Button buttonVariation={props.buttonVariation}>Active</Button>;
};

export default LargeButton;
