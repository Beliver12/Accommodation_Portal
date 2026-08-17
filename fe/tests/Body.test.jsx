import { render, screen } from '@testing-library/react';

import Body from '../src/mainPage/Body'

describe('App', () => {
  it('renders headline', () => {
    render(<Body title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});