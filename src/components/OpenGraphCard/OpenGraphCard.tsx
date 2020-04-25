/** @jsx jsx */

import { jsx } from '@emotion/core';
import { Textfit } from 'react-textfit';

import { container, headline, inner, tagline, textfit } from './styles';

const OpenGraphCard = (): JSX.Element => (
  <div css={container}>
    <div css={inner}>
      <h1 css={headline}>
        <Textfit max={100} min={24} style={textfit}>
          Hello Open Graph Card
        </Textfit>
      </h1>
      <p css={tagline}>@crypto-papers</p>
    </div>
  </div>
);

OpenGraphCard.displayName = 'OpenGraphCard';

export default OpenGraphCard;
