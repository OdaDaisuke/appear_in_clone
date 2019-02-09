import * as firebase from 'firebase'
import { IFirebaseConfig } from '../configs'

export default class FirebaseClient {
    config: IFirebaseConfig
    database: firebase.database.Database
    storage: firebase.storage.Storage

    constructor(config: IFirebaseConfig) {
        this.config = config
    }

    init() {
        firebase.initializeApp(this.config)
        this.database = firebase.database()
        this.storage = firebase.storage()
    }

    /*
     * ------ Auth Commands ------
     */

    signInWithEmail(): Promise<firebase.auth.UserCredential> {
        const provider = new firebase.auth.EmailAuthProvider()
        return firebase.auth().signInWithPopup(provider)
    }

    signInWithTwitter(): Promise<firebase.auth.UserCredential> {
        const provider = new firebase.auth.TwitterAuthProvider()
        return firebase.auth().signInWithPopup(provider)
    }

    signInWidthFacebook(): Promise<firebase.auth.UserCredential> {
        const provider = new firebase.auth.FacebookAuthProvider()
        return firebase.auth().signInWithPopup(provider)
    }

    signInWidthGithub(): Promise<firebase.auth.UserCredential> {
        const provider = new firebase.auth.GithubAuthProvider()
        return firebase.auth().signInWithPopup(provider)
    }

    signInWidthGoogle(): Promise<firebase.auth.UserCredential> {
        const provider = new firebase.auth.GoogleAuthProvider()
        return firebase.auth().signInWithPopup(provider)
    }

    /*
     * ------ RealTime DB Commands ------
     */

    async readOnce(collection: string, identifyID: string): Promise<firebase.database.DataSnapshot> {
        return await firebase.database().ref(`${collection}/${identifyID}`).once('value')
    }

    async writeData(collection: string, identifyID: string, mainData: Object): Promise<any> {
         return await firebase.database()
            .ref(`${collection}/${identifyID}`)
            .set({ ...mainData })
    }

    private withTransaction(ref: firebase.database.Reference, uid: string, txFunc: TxFunc) {
        ref.transaction(txFunc)
    }

    /*
     * ------ Storage Commands ------
     */

    async upload() {
    }

}

type TxFunc = <T>(entity: T) => T