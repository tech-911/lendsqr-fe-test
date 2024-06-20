import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SigninForm } from "@/(authentication)/signin/components/form";
import { useRouter } from "next/navigation";
import { toast } from "../src/app/components/ui/use-toast";
import { act } from "react";

// Mock necessary dependencies
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../src/app/components/ui/use-toast", () => ({
  toast: jest.fn(),
}));

jest.mock("@iconify/react", () => ({
  Icon: () => <div>Icon</div>,
}));

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});
describe("SigninForm", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    fetchMock.resetMocks();
  });

  test("renders the form and submits successfully with valid data", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ email: "test@example.com", token: "fake-token" }),
      { status: 201 }
    );

    render(<SigninForm />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "ValidPassword1!" },
    });

    fireEvent.click(screen.getByText("LOG IN"));

    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith({
        variant: "default",
        title: "Logging in...",
        description: "Login Successful",
        className:
          "bg-[#BEF2B9] border-[#519E47] text-[#197624] text-[14px] font-[400]",
      });
    });

    expect(mockPush).toHaveBeenCalledWith("/dashboard");
  });

  test("shows error message with invalid data", async () => {
    render(<SigninForm />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "invalid-email" },
    });

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "short" },
    });

    fireEvent.click(screen.getByText("LOG IN"));

    await waitFor(() => {
      expect(screen.getByText("Invalid email")).toBeTruthy();
      expect(
        screen.getByText("Password must be between 8 and 50 characters")
      ).toBeTruthy();
    });

    expect(mockPush).not.toHaveBeenCalled();
  });
});
