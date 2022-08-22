import { getDatabase, ref, set } from "firebase/database";

function writeUserData(name, surname, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + email), {
    surname: surname,
    name: name,
    email: email,
    profile_picture : imageUrl
  }).then(() => {
    // Data saved successfully!
  })
  .catch((error) => {
    // The write failed...
  });
}