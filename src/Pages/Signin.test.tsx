import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from '../Store/Store';
import { render, screen } from '@testing-library/react';
import LoginPage from './Signin';

test('renders login page', () => {
  const { getByText } = render(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );

  expect(getByText('Login')).toBeInTheDocument();
});

test('logs in successfully', async () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );

  // Mock an API response for successful login
  // You might need to adjust this based on your actual API response
  jest.spyOn(window, 'fetch').mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce({ token: 'fake-token' }),
  } as Response);

  fireEvent.change(getByLabelText('Email:'), { target: { value: 'test@example.com' } });
  fireEvent.change(getByLabelText('Password:'), { target: { value: 'password123' } });

  fireEvent.click(getByText('Login'));

  // Wait for the login process to complete
  await waitFor(() => {
    expect(getByText('You are already logged in!')).toBeInTheDocument();
  });
});
