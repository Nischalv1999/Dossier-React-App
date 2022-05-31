import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

const inputMock = jest.fn();

const Test = () => (
  <SearchBar onChange={inputMock}
  defaultValue={'Finance'}
  placeholder={'Enter Text'} />
);

test('Search Bar', () => {
  const container = render(<Test />);

  const input = container.getByDisplayValue(
    'Finance',
  ) as HTMLInputElement;

  fireEvent.change(input, { target: { value: 'Dossier' } });
  expect(input.value).toBe('Dossier');
  expect(inputMock.mock.calls).toHaveLength(1);
});
