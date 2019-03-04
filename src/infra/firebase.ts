import * as firebase from 'firebase'
import { IFirebaseConfig } from '../configs'

export default class FirebaseClient {
    config: IFirebaseConfig
    database: firebase.database.Database
    storage: firebase.storage.Storage
    firebase

    constructor(config: IFirebaseConfig) {
        this.config = config
        this.firebase = firebase

        this.init()
    }

    init() {
        this.firebase.initializeApp(this.config)
        this.database = this.firebase.database()
        this.storage = this.firebase.storage()
    }

    /*
     * ------ Auth Commands ------
     */

    signInWithEmail(): Promise<firebase.auth.UserCredential> {
        const provider = new this.firebase.auth.EmailAuthProvider()
        return this.signin(provider)
    }

    signInWithTwitter(): Promise<firebase.auth.UserCredential> {
        const provider = new this.firebase.auth.TwitterAuthProvider()
        return this.signin(provider)
    }

    signInWidthFacebook(): Promise<firebase.auth.UserCredential> {
        const provider = new this.firebase.auth.FacebookAuthProvider()
        return this.signin(provider)
    }

    signInWidthGithub(): Promise<firebase.auth.UserCredential> {
        const provider = new this.firebase.auth.GithubAuthProvider()
        return this.signin(provider)
    }

    signInWidthGoogle(): Promise<firebase.auth.UserCredential> {
        const provider = new this.firebase.auth.GoogleAuthProvider()
        return this.signin(provider)
    }

    private signin(provider: firebase.auth.AuthProvider): Promise<firebase.auth.UserCredential> {
        return this.firebase.auth().signInWithPopup(provider)
    }

    /*
     * ------ RealTime DB Commands ------
     */

    async readOnce(collection: string, identifyID: string): Promise<firebase.database.DataSnapshot> {
        return await this.firebase.database().ref(`${collection}/${identifyID}`).once('value')
    }

    async writeData(collection: string, identifyID: string, mainData: Object): Promise<any> {
        const now = String((new Date()).getTime() / 1000)
        return await this.firebase.database()
            .ref(`${collection}/${identifyID}`)
            .set({ ...mainData, createdAt: parseInt(now) })
    }

    async createRoom(userId: string, title: string): Promise<any> {
        await this.firebase.database().ref(`users/${userId}/rooms`)
            .set({ title, now: this.now, })
        await this.firebase.database().ref(`rooms`)
            .set({ title, now: this.now, userId: userId })
    }

    private withTransaction(ref: firebase.database.Reference, uid: string, txFunc: TxFunc) {
        ref.transaction(txFunc)
    }

    get now() {
        return String((new Date()).getTime() / 1000)
    }

    /*
     * ------ Storage Commands ------
     */

    async upload() {
    }

}

export enum Collections {
    Users = "users",
    Rooms = "rooms",
}

type TxFunc = <T>(entity: T) => T