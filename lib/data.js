import firebase from "@lib/firebase";

const firestore = firebase.firestore();

export function updateInformation(info, id) {
  return firestore
    .collection("users")
    .doc(id)
    .update({ ...info });
}
