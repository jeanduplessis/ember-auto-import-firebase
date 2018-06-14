import Route from '@ember/routing/route';
import firebase from 'firebase/app';
import 'firebase/messaging';

export default Route.extend({
    activate() {
        console.log(firebase);
        console.log(firebase.messaging);
    }
});