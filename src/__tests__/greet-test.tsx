import { render, screen } from "@testing-library/react";
import Greet from "../components/Greet/Greet";

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
