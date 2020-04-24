/** @jsx jsx */

import { jsx } from '@emotion/core';
import { Textfit } from 'react-textfit';

import { container, inner } from './styles';

const OpenGraphCard = () => (
  <div css={container}>
    <div css={inner}>Hello World</div>
  </div>
);

OpenGraphCard.displayName = 'OpenGraphCard';

export default OpenGraphCard;
