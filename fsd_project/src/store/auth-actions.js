import { authActions } from "./auth";

export const fetchAuthData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fsd-project-e2e42-default-rtdb.firebaseio.com/auth.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const authData = await fetchData();
      dispatch(authActions.login(authData.isAuthenticated));
    } catch (error) {
      console.log("error");
    }
  };
};

export const sendAuthData = (isAuth) => {
  return async (dispatch) => {
    console.log("sending");

    const sendRequest = async () => {
      console.log(isAuth);
      const response = await fetch(
        "https://fsd-project-e2e42-default-rtdb.firebaseio.com/auth.json",
        {
          method: "PUT",
          body: JSON.stringify({
            isAuthenticated: isAuth,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending data failed.");
      }
    };

    try {
      await sendRequest();

      console.log("Success");
    } catch (error) {
      console.log("error");
    }
  };
};
