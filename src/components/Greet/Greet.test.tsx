/**
 * Greet should render the text hello and if a name is passed into the component-
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// test.only("Greet renders correctly", () => {
//     render(<Greet />);
//     const textElement = screen.getByText("Hello");
//     expect(textElement).toBeInTheDocument();
// });

// test.skip("Greet renders with a name", () => {
//     render(<Greet name="ahr" />);
//     const textElement = screen.getByText("Hello ahr");
//     expect(textElement).toBeInTheDocument();
// });

describe("Greet", () => {
    test.only("Greet renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    });

    test.skip("Greet renders with a name", () => {
        render(<Greet name="ahr" />);
        const textElement = screen.getByText("Hello ahr");
        expect(textElement).toBeInTheDocument();
    });
});
