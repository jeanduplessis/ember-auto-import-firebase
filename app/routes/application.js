import Route from '@ember/routing/route';
import firebase from 'npm:firebase/app';
import 'npm:firebase/messaging';

export default Route.extend({
    activate() {
        console.log(firebase.messaging);
    }
});