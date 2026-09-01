// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders APINodePlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/APINodePlus/i);
    expect(titleElement).toBeInTheDocument();
});
