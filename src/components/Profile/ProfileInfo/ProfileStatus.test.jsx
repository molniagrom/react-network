import React from "react";
import { render, screen } from "@testing-library/react";
import { ProfileStatus } from "./ProfileStatus";
import { fireEvent } from "@testing-library/react";

describe("ProfileStatus component", () => {
    test("after creation span should contains correct status", () => {
        render(<ProfileStatus status="it-kamasutra.com" />);
        expect(screen.getByText("it-kamasutra.com")).toBeInTheDocument();
    });

    test("after creation span should be displayed", () => {
        render(<ProfileStatus status="it-kamasutra.com" />);
        const span = screen.getByTestId("profile-span");
        expect(span).toBeInTheDocument();
        expect(span).not.toBeNull();
        expect(span).toHaveTextContent("it-kamasutra.com");  // исправлено
    });

    test("after creation input shouldn't be displayed", () => {
        render(<ProfileStatus status="it-kamasutra.com" />);
        const input = screen.queryByTestId("profile-input");
        expect(input).toBeNull();
    });

    test('span should contain correct status', () => {
        render(<ProfileStatus status="it-kamasutra.com" />);
        const spanElement = screen.getByText(/it-kamasutra.com/i);
        expect(spanElement).toHaveTextContent('it-kamasutra.com'); // Проверяем текст внутри span
    });

    test('input should be displayed in editMode instead of span', () => {
        render(<ProfileStatus status="it-kamasutra.com" />);
        const spanElement = screen.getByTestId("profile-span");

        fireEvent.click(spanElement); // 👈 Имитация клика

        const input = screen.getByTestId("profile-input");
        expect(input.value).toBe('it-kamasutra.com'); // Проверяем value, а не текст внутри input
    });

    test("callback should be called when input loses focus", () => {
        const mockCallback = jest.fn();
        render(<ProfileStatus status="it-kamasutra.com" uDateStatus={mockCallback} />);

        const spanElement = screen.getByTestId("profile-span");
        fireEvent.click(spanElement); // Переключаем в режим редактирования

        const inputElement = screen.getByTestId("profile-input");
        fireEvent.blur(inputElement); // Имитация потери фокуса

        expect(mockCallback).toHaveBeenCalledTimes(1);
    });
});
