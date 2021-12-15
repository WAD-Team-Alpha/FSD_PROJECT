import { authActions } from "./auth";
import {API_KEY} from '../keys';
export const signinAction = (email, password) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const authData = await fetchData();
      dispatch(authActions.login(authData));
    } catch (error) {
      console.log("error");
    }
  };
};

export const signupAction = (email, password, firstname, lastName) => {
  return async (dispatch) => {
    console.log("sending");

    const sendRequest = async () => {
      // console.log(isAuth);
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error("Sending data failed.");
      }
    };

    try {
      const authData = await sendRequest();
      dispatch(authActions.login(authData));
      console.log("Success");
    } catch (error) {
      console.log("error");
    }
  };
};
