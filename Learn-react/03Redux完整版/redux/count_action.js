import { INCREMENT, DECREMENT } from "./constant";
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDncrementAction = (data) => ({ type: DECREMENT, data });
