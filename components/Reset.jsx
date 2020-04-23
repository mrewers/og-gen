/** @jsx jsx */

import { Fragment } from 'react';
import { Global, jsx } from '@emotion/core';

const styles = {
  '*': {
    boxSizing: 'border-box',
    fontSize: 20,
    margin: 0,
    padding: 0,
  },
};

const Reset = ({ children }) => (
  <Fragment>
    <Global styles={styles} />
    {children}
  </Fragment>
);

Reset.displayName = 'Reset';

export default Reset;
