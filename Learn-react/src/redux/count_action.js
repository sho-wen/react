import { INCREMENT, DECREMENT } from "./constant";
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDncrementAction = (data) => ({ type: DECREMENT, data });
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};
