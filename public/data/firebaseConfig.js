import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const firebaseConfig = {
    apiKey: "AIzaSyCuCbtKhVGePifCSyXk5U7DGwXoGBkDrOw",
    authDomain: "kunz-sushi-35c35.firebaseapp.com",
    databaseURL: "https://kunz-sushi-35c35.firebaseio.com",
    projectId: "kunz-sushi-35c35",
    storageBucket: "kunz-sushi-35c35.appspot.com",
    messagingSenderId: "580813307436",
    appId: "1:580813307436:web:62b052349368886d"
  };
firebase.initializeApp(firebaseConfig)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const menuCollection = db.collection('menu')
const orderItemCollection = db.collection('orderItem')



export {
    db,
    auth,
    currentUser,
    menuCollection,
    orderItemCollection,


}