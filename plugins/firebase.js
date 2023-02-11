import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyDrrqApO0pLBR5P5gbAZOXBErAj_G9d24Y",
      authDomain: "twitterpj-b5a39.firebaseapp.com",
      projectId: "twitterpj-b5a39",
      storageBucket: "twitterpj-b5a39.appspot.com",
      messagingSenderId: "465521154917",
      appId: "1:465521154917:web:d42d01361ad51739d41f8c",
      measurementId: "G-5M18BY8KL7"
    }
  )
}

export default firebase