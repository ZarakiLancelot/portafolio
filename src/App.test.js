import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the site owner name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Edwin Einsen/i);
  expect(nameElements.length).toBeGreaterThan(0);
});

test('renders all main navigation sections', () => {
  render(<App />);
  const sectionTitles = [
    'Sobre mí',
    'Experiencia',
    'Habilidades',
    'Proyectos',
    'Contacto',
  ];

  sectionTitles.forEach((title) => {
    const heading = screen.getByRole('heading', { name: title });
    expect(heading).toBeInTheDocument();
  });
});
