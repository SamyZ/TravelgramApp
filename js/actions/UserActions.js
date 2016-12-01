export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS';

export function getUserDetails(userId, travelgramId) {
  return (dispatch) => {
    fetch(`http://api.travelgram.co/fr/user/${userId}/authentification/${travelgramId}`)
      .then(response => response.json())
      .then((json) => {
        dispatch({ type: RECEIVE_USER_DETAILS, data: json.user });
      });
  };
}
