import React, { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';

import OpenGraphCard from './components/OpenGraphCard/OpenGraphCard';
import Reset from './components/Reset';

const PreviewPane: FC = (): ReactElement => (
  <Reset>
    <OpenGraphCard title="Hello Open Graph Card" />
  </Reset>
);

PreviewPane.displayName = 'PreviewPane';

ReactDOM.render(<PreviewPane />, document.getElementById('preview'));
