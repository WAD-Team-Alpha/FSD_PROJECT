import { profileActions } from "./profile";

export const sendProfileData = (about) => {
    return async (dispatch) => {
      console.log("sending");
  
      const sendRequest = async () => {
        console.log(about);
        const response = await fetch(
          "https://fsd-project-e2e42-default-rtdb.firebaseio.com/about.json",
          {
            method: "PUT",
            body: JSON.stringify(about),
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



export const fetchProfileData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fsd-project-e2e42-default-rtdb.firebaseio.com/about.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const profileData = await fetchData();
      dispatch(profileActions.update(profileData));
    } catch (error) {
      console.log("error");
    }
  };
};