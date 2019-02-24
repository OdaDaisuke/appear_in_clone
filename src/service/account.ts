import FirebaseClient from '../infra/firebase'
import StorageClient from '../infra/storage'
import { AuthMethod } from '../interfaces'

interface AccountServiceProtocol {
    signin: (authMethod: AuthMethod) => Promise<firebase.auth.UserCredential>
    signout: () => void
}

export default class AccountService implements AccountServiceProtocol {
    authed: boolean = false

    private firebaseClient: FirebaseClient
    private storageClient: StorageClient

    constructor(firebaseClient: FirebaseClient, storageClient: StorageClient) {
        this.firebaseClient = firebaseClient
        this.storageClient = storageClient
        if (this.lodaToken()) {
            this.authed = true
        }
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
                return null
        }

    }

    async signout() {
    }

    lodaToken(): string {
        return this.storageClient.loadToken()
    }

    setToken(token: string) {
        this.storageClient.setToken(token)
        this.authed = true
    }

}