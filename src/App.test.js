import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderiza botão adicionar', () => {
  render(<App />);
  const addButton = screen.getByText(/Adicionar/i);
  expect(addButton).toBeInTheDocument();
  expect(addButton).toHaveProperty('type', 'button');
});

test('Renderiza select', () => {
  render(<App />);
  const select = screen.getByRole('combobox');
  expect(select).toBeInTheDocument();
  expect(select).toHaveValue('ordenar');
});

test('Renderiza input nova tarefa', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
  expect(input).toHaveProperty('placeholder', 'nova tarefa');
});

test('Botão editar e remover não são visiveis', async () => {
  render(<App />);
  const removeBtn = screen.queryByText('Remover');
  const editBtn = screen.queryByText('Editar');

  expect(removeBtn).not.toBeInTheDocument();
  expect(editBtn).not.toBeInTheDocument();
});
