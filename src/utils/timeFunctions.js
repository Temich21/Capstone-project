import { fetchAPI } from "./fakeAPIs";

export const initializeTimes = initialAvailableTimes =>
    [...initialAvailableTimes, ...fetchAPI(new Date())]

export const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
}
