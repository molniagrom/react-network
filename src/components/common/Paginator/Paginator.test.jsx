import React from "react";
import { render, screen } from "@testing-library/react";
import {Paginator} from "./Paginator";

describe("Paginator component tests", () => {
    test("pages count is 11 but should be showed only 10", () => {
        render(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);

        const spans = screen.getAllByText(/\d+/); // Ищем все числа (номера страниц)
        expect(spans.length).toBe(10);
    });

    test("if pages count is more than 10, NEXT button should be present", () => {
        render(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);

        const nextButton = screen.getByRole("button", { name: /next/i }); // Ищем кнопку NEXT
        expect(nextButton).toBeInTheDocument();
    });
});
