import { fireEvent, render, screen } from "@testing-library/react";
import ReservationForm from './ReservationForm';
import { useReducer } from 'react'

test('Renders the ReservationForm heading and checks input', () => {

    const availableTimes = ['17:00', '17:30'];
    const handleDateSelection = jest.fn();

    render(<ReservationForm availableTimes={availableTimes} initializeTimes={availableTimes} onChangeFunction={handleDateSelection} />);
    const guestsInput = screen.getByLabelText(/Number of guests/)
    expect(guestsInput).toBeInTheDocument();

    fireEvent.change(guestsInput, { target: { value: '7' } })
    expect(guestsInput.value).toBe('7');
})