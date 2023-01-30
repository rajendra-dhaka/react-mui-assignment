// Creating Types for the Reducer
const FETCHED = 'DATA_FETCH_FROM_API_PASS';
const NOT_FETCHED = 'DATA_FETCH_FROM_API_FAIL';
const ADD = 'ADD_USER';
const DELETE = 'REMOVE_USER';
const UPDATE = 'UPDATE_USER';

// Creating Actions for the Reducer

export const fetchData = () => {
  return (dispatch) => {
    return fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCHED, payload: data.data });
      })
      .catch((error) => {
        dispatch({ type: NOT_FETCHED, payload: error });
      });
  };
};

export const addUser = (user) => {
  return {
    type: ADD,
    payload: user,
  };
};
export const deleteUser = (userId) => {
  return {
    type: DELETE,
    payload: userId,
  };
};
export const updateUser = (updatedUser) => {
  return {
    type: UPDATE,
    payload: updatedUser,
  };
};

// Creating User Reducer Function
const INITIAL_STATE = { users: [] };

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHED:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    case NOT_FETCHED:
      return state;
    case ADD:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE:
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.payload.id ? action.payload : user)),
      };
    case DELETE:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
