import Route from '@ember/routing/route';
import firebase from 'firebase';

export default Route.extend({
    activate() {
        console.log(firebase.messaging);
    }
});