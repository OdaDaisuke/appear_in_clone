export default class StorageClient {
    private storage: Storage = window.localStorage

    constructor() {
    }

    setToken(token: string) {
        this.storage.setItem("ACCESS_TOKEN", token)
    }

    loadToken(): string {
        return this.storage.getItem("ACCESS_TOKEN")
    }

    destroy() {
        this.storage.clear()
    }
}