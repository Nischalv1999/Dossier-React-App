import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  it('should match snapshot', () => {
    const test1 = jest.fn();
    render(<Button onClick={test1} name='Hello'/>);
    const wrapper = screen.getByText('Hello');
    expect(wrapper).toBeTruthy;
  });
});