import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer/Footer.js';

test('renderizar footer com o texto correto', () => {
  const { getByText } = render(<Footer />);
  const footerElement = getByText(/Copyright 2023, Jão Corp em parceria com as casas Ovisk/i);
  expect(footerElement).toBeInTheDocument();
});