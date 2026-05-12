// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HTXGlobal title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HTXGlobal/i);
    expect(titleElement).toBeInTheDocument();
});
