/** @jsx jsx */

import { FC } from 'react';
import { jsx } from '@emotion/core';
import { Textfit } from 'react-textfit';

import { container, headline, inner, tagline, textfit } from './styles';

interface IOpenGraphCardProps {
  tag?: string;
  title: string;
}

const OpenGraphCard: FC<IOpenGraphCardProps> = ({
  tag = '@crypto-papers',
  title,
}: Readonly<IOpenGraphCardProps>) => (
  <div css={container}>
    <div css={inner}>
      <h1 css={headline}>
        <Textfit max={100} min={24} style={textfit}>
          {title}
        </Textfit>
      </h1>
      <p css={tagline}>{tag}</p>
    </div>
  </div>
);

OpenGraphCard.displayName = 'OpenGraphCard';

export default OpenGraphCard;
