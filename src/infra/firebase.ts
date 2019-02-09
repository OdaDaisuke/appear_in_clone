import * as firebase from 'firebase'
import { IFirebaseConfig } from '../configs'

export default class FirebaseClient {
    config: IFirebaseConfig

    constructor(config: IFirebaseConfig) {
        this.config = config
    }

    init() {
        firebase.initializeApp(this.config)
    }

}