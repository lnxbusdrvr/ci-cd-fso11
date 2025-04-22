//import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifier from '../src/components/Notifier';

test('Shows errormessage redcolored', () => {
  render(<Notifier message="Error occurs" isError={true} />);
  const notif = screen.getByText('Error occurs');
  expect(notif).toBeInTheDocument();
  expect(notif).toHaveStyle('color: red');
});

test('Shows sucessmessage greencolored', () => {
  render(<Notifier message="Saved!" isError={false} />);
  const notif = screen.getByText('Saved!');
  expect(notif).toBeInTheDocument();
  expect(notif).toHaveStyle('color: green');
});

