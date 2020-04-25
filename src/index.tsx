import React from 'react';
import ReactDOM from 'react-dom';

import OpenGraphCard from './components/OpenGraphCard/OpenGraphCard';
import Reset from './components/Reset';

const PreviewPane: React.FC = (): JSX.Element => (
  <Reset>
    <OpenGraphCard />
  </Reset>
);

PreviewPane.displayName = 'PreviewPane';

ReactDOM.render(<PreviewPane />, document.getElementById('preview'));
