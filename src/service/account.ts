import FirebaseClient from '../infra/firebase'
import StorageClient from '../infra/storage'
import { AuthMethod } from '../interfaces'

interface AccountServiceProtocol {
    signin: (authMethod: AuthMethod) => Promise<firebase.auth.UserCredential>
    signout: () => void
}

export default class AccountService implements AccountServiceProtocol {
    private firebaseClient: FirebaseClient
    private storageClient: StorageClient

    constructor(firebaseClient: FirebaseClient, storageClient: StorageClient) {
        this.firebaseClient = firebaseClient
        this.storageClient = storageClient
    }

    async signin(authMethod: AuthMethod): Promise<firebase.auth.UserCredential> {
        const firebaseClient = this.firebaseClient

        switch (authMethod) {
            case AuthMethod.Email:
                return await firebaseClient.signInWithEmail()
            case AuthMethod.Twitter:
                return await firebaseClient.signInWithTwitter()
            case AuthMethod.Facebook:
                return await firebaseClient.signInWidthFacebook()
            case AuthMethod.Google:
                return await firebaseClient.signInWidthGoogle()
            case AuthMethod.Github:
                return await firebaseClient.signInWidthGithub()
            default:
                return
        }

        return null

    }

    async signout() {
    }

}