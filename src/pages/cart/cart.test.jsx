// src/pages/cart/cart.test.jsx
import "../../../jest.setup"; // Ensure path is correct
import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Cart from "./cart";
import { useMutation } from "react-query"; // Ensure correct import path

// Mock useMutation properly
jest.mock("react-query");

const mockDispatch = jest.fn();
const mockState = {
  cart: [
    {
      _id: "1",
      productName: "Product 1",
      productPrice: "10.00",
      CandinateAvatar: "image1.jpg",
    },
    {
      _id: "2",
      productName: "Product 2",
      productPrice: "20.00",
      CandinateAvatar: "image2.jpg",
    },
  ],
};

const renderWithContext = (ui, { state, dispatch }) => {
  return render(ui);
};

describe("Cart Component", () => {
  beforeEach(() => {
    localStorage.setItem("cart", JSON.stringify(mockState.cart));
  });

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it("renders cart items and calculates total price correctly", () => {
    renderWithContext(<Cart />, { state: mockState, dispatch: mockDispatch });

    // Test assertions...
  });

  it("removes an item from the cart", () => {
    renderWithContext(<Cart />, { state: mockState, dispatch: mockDispatch });

    // Test assertions...
  });

  it("handles order submission successfully", async () => {
    // Mock useMutation implementation
    useMutation.mockImplementation(() => ({
      mutateAsync: jest.fn(),
    }));

    renderWithContext(<Cart />, { state: mockState, dispatch: mockDispatch });

    // Test assertions...
  });

  it("handles order submission error", async () => {
    // Mock useMutation implementation
    useMutation.mockImplementation(() => ({
      mutateAsync: jest.fn().mockRejectedValue({
        response: {
          data: {
            message: "Error message",
          },
        },
      }),
    }));

    renderWithContext(<Cart />, { state: mockState, dispatch: mockDispatch });

    // Test assertions...
  });
});
