import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "../src/app/(dashboard)/_components/nav";
import { act } from "react";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

// Mock @iconify/react
// jest.mock("@iconify/react", () => ({
//   Icon: ({ icon, className }: { icon: string; className: string }) => (
//     <span className={className}>{icon}</span>
//   ),
// }));

// Mock other custom components
// jest.mock("../src/app/components/ui/dropdown-menu", () => ({
//   DropdownMenu: ({ children }: { children: React.ReactNode }) => (
//     <div>{children}</div>
//   ),
//   DropdownMenuTrigger: ({ children }: { children: React.ReactNode }) => (
//     <div>{children}</div>
//   ),
//   DropdownMenuContent: ({ children }: { children: React.ReactNode }) => (
//     <div>{children}</div>
//   ),
// }));

// jest.mock("../src/components/ui/button", () => ({
//   Button: ({
//     children,
//     className,
//   }: {
//     children: React.ReactNode;
//     className: string;
//   }) => <button className={className}>{children}</button>,
// }));

// jest.mock("../src/app/components/ui/sheet", () => ({
//   Sheet: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
//   SheetTrigger: ({ children }: { children: React.ReactNode }) => (
//     <div>{children}</div>
//   ),
//   SheetContent: ({ children }: { children: React.ReactNode }) => (
//     <div>{children}</div>
//   ),
// }));

// jest.mock("../src/app/components/ui/scroll-area", () => ({
//   ScrollArea: ({ children }: { children: React.ReactNode }) => (
//     <div>{children}</div>
//   ),
// }));

// jest.mock("../src/app/(dashboard)/_components/sideBar", () => () => (
//   <div>SideBar</div>
// ));

describe("NavBar Component", () => {
  test("renders NavBar correctly", () => {
    render(<NavBar />);

    // Check if the Lendsqr logo is rendered
    expect(screen.getByAltText("Lendsqr")).toBeTruthy();

    // Check if the Docs link is rendered
    expect(screen.getByText("Docs")).toBeTruthy();
  });
});
