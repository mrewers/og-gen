/** @jsx jsx */

import { Fragment, FC, ReactNode } from 'react';
import { css, Global, jsx, SerializedStyles } from '@emotion/core';

const styles: SerializedStyles = css({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
});

const Reset: FC = ({ children }: Readonly<{ children?: ReactNode }>): JSX.Element => (
  <Fragment>
    <Global styles={styles} />
    {children}
  </Fragment>
);

Reset.displayName = 'Reset';

export default Reset;
