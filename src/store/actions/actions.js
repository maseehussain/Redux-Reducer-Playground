export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = value => {
  return {
    type: ADD,
    val: 5
  };
};

export const subtract = () => {
  return {
    type: SUBTRACT,
    val: 5
  };
};

export const storeResult = () => {
  return {
    type: STORE_RESULT
  };
};

export const deleteResult = () => {
  return {
    type: DELETE_RESULT
  };
};
