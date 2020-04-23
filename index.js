import React from 'react';
import ReactDOM from 'react-dom';

const PreviewPane = () => <h1>Hello World</h1>;

PreviewPane.displayName = 'PreviewPane';

ReactDOM.render(<PreviewPane />, document.getElementById('preview'));
