import FirebaseClient, { Collections } from '../infra/firebase'
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

    signin(authMethod: AuthMethod): Promise<firebase.auth.UserCredential> {
        const firebaseClient = this.firebaseClient
        switch (authMethod) {
            case AuthMethod.Email:
                return firebaseClient.signInWithEmail()
            case AuthMethod.Twitter:
                return firebaseClient.signInWithTwitter()
            case AuthMethod.Facebook:
                return firebaseClient.signInWidthFacebook()
            case AuthMethod.Google:
                return firebaseClient.signInWidthGoogle()
            case AuthMethod.Github:
                return firebaseClient.signInWidthGithub()
        }

    }

    writeData(id: string, name: string, profileImage: string) {
        this.firebaseClient.writeData(Collections.Users, id, {
            name: name,
            profileImage: profileImage
        })
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

    destroyStorage() {
        this.storageClient.destroy()
    }

}