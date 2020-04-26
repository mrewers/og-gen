import React from 'react';
import { render } from '@testing-library/react';

import OpenGraphCard from './OpenGraphCard';

describe('OpenGraphCard component', () => {
  it('renders proper title', () => {
    const title = 'Hello World Card';

    const { getByText } = render(<OpenGraphCard title={title} />);

    expect(getByText(title));
  });
});
