// src/pages/SignUpPage.test.tsx
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../Store/Store";
import SignUpPage from "./SignUpPage";

test("renders signup page", () => {
  const { getByText } = render(
    <Provider store={store}>
      <SignUpPage />
    </Provider>
  );

  expect(getByText("Sign Up")).toBeInTheDocument();
});

test("signs up successfully", async () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <SignUpPage />
    </Provider>
  );

  // Mock an API response for successful signup
  // You might need to adjust this based on your actual API response
  jest.spyOn(window, "fetch").mockResolvedValueOnce({
    json: jest
      .fn()
      .mockResolvedValueOnce({ message: "User created successfully" }),
  } as Response);

  fireEvent.change(getByLabelText("Email:"), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(getByLabelText("Password:"), {
    target: { value: "password123" },
  });

  fireEvent.click(getByText("Sign Up"));

  // Wait for the signup process to complete
  await waitFor(() => {
    expect(getByText("User created successfully")).toBeInTheDocument();
  });
});
