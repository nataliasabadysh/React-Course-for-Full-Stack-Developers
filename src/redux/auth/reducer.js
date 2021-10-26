import { types } from "./type";

const initState = {
  token: null,
  user: {
    name: "",
    email: "",
  },
  isLogging: false,
  errorLogIn: null,
  errorSignUp: null,
  isAuthenticated: false,
};

export const authReducer = (state = initState, actions) => {
  switch (actions.type) {
    case types.SIGN_UP: {
      return {
        ...state,
        errorSignUp: null,
        errorLogIn: null,
        token: actions.payload.token,
        user: actions.payload.user,
      };
    }

    case types.LOG_IN: {
      return {
        ...state,
        errorSignUp: null,
        errorLogIn: null,
        token: actions.payload.token,
        user: actions.payload.user,
      };
    }

    case types.USER_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }

    case types.LOG_OUT: {
      return {
        ...initState,
      };
    }

    case types.SIGN_UP_ERROR: {
      return {
        ...initState,
        errorSignUp: actions.payload,
      };
    }

    case types.LOG_IN_ERROR: {
      return {
        ...initState,
        errorLogIn: actions.payload,
      };
    }

    default: {
      return state;
    }
  }
};
