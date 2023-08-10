import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Reservation from './Reservation'
import { waitFor } from '@testing-library/react';

describe('Form testing', () => {
    test('Does not navigate when form validation fails', async () => {
        const mockNavigate = jest.fn();

        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useNavigate: () => mockNavigate,
        }));

        render(
            <MemoryRouter initialEntries={['/reservations', '/confirmedreservations']}>
                <Reservation />
            </MemoryRouter>
        );

        const dateInput = screen.getByTestId('date');
        fireEvent.change(dateInput, { target: { value: '' } });

        const timeInput = screen.getByTestId('time');
        fireEvent.change(timeInput, { target: { value: '-' } });

        const guestsInput = screen.getByTestId('guests-number');
        fireEvent.change(guestsInput, { target: { value: '' } });

        const submitButton = screen.getByText('Make Your reservation');
        fireEvent.click(submitButton);

        expect(mockNavigate).not.toHaveBeenCalled();
    })

    test('Renders the ReservationForm heading, checks input and validation', async () => {

        const mockNavigate = jest.fn()

        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useNavigate: () => mockNavigate,
        }))

        jest.mock('../utils/fakeAPIs', () => true);

        render(
            <MemoryRouter initialEntries={['/reservations', '/confirmedreservations']}>
                <Reservation />
            </MemoryRouter>
        )

        const dateInput = screen.getByTestId('date')
        fireEvent.change(dateInput, { target: { value: '2023-08-09' } })
        expect(dateInput.value).toBe('2023-08-09')

        const timeInput = screen.getByTestId('time')
        fireEvent.change(timeInput, { target: { value: '17:00' } })
        expect(timeInput.value).toBe('17:00')

        const guestsInput = screen.getByTestId('guests-number')
        fireEvent.change(guestsInput, { target: { value: '7' } })
        expect(guestsInput.value).toBe('7')

        const occasionInput = screen.getByTestId('occasion')
        fireEvent.change(occasionInput, { target: { value: 'Birthday' } })
        expect(occasionInput.value).toBe('Birthday')

        const submitButton = screen.getByText('Make Your reservation')
        fireEvent.click(submitButton)
        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/confirmedreservations')
        })
    })
})

