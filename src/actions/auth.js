import { firebase, googleAuthProvider } from '../firebase/firebase'

export const startLogin = () => {
  return (dispatch) => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};