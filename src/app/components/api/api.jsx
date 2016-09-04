import firebase from 'firebase';

var currentUserUid;

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

    static signOut() {
        return firebase.auth().signOut();
    }

    static getCurrentUser() {
        let authStateChanged;

        return new Promise((resolve, reject) => {
            authStateChanged = firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    resolve(user);
                    currentUserUid = user.uid;
                } else {
                    reject();
                }
                authStateChanged();
            });
        });
    }

    static storeLayouts(data, id) {
        firebase.database().ref(currentUserUid + '/layouts/' + id).set([]);
        firebase.database().ref(currentUserUid + '/layouts/' + id).set(data);
    }

    static storePaintings(data) {
        firebase.database().ref(currentUserUid + '/paintings').set([]);
        firebase.database().ref(currentUserUid + '/paintings').set(data);
    }

    static getPaintings() {
        return firebase.database()
            .ref(currentUserUid + '/paintings').once('value');
    }

    static getLayouts(id) {
        return firebase.database()
            .ref(currentUserUid + '/layouts/' + id).once('value');
    }
}