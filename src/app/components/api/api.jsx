import firebase from 'firebase';

export default class Api {
    static init() {
        firebase.initializeApp({
            apiKey: "AIzaSyBqIBc5t41z1zBt3ThNGsxT_2ej43AQLEs",
            authDomain: "dots-paint.firebaseapp.com",
            databaseURL: "https://dots-paint.firebaseio.com",
            storageBucket: "",
        });
    }

    static signUp(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    static signIn(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    static getCurrentUser() {
        return firebase.auth().currentUser;
    }
}