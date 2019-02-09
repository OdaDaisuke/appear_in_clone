import FirebaseClient from '../infra/firebase'
import StorageClient from '../infra/storage'

interface AccountServiceProtocol {
    signup: () => void
    signin: () => void
    signout: () => void
}

export default class AccountService implements AccountServiceProtocol {
    private firebaseClient: FirebaseClient
    private storageClient: StorageClient

    constructor(firebaseClient: FirebaseClient, storageClient: StorageClient) {
        this.firebaseClient = firebaseClient
        this.storageClient = storageClient
    }

    async signup() {
    }

    async signin() {
    }

    async signout() {
    }

}

export enum AuthMethod {
    Twitter = "twitter",
    Facebook = "facebook",
    Line = "line",
    Email = "email",
}