import { IConfig, loadAppConfig } from '../configs'
import FirebaseClient from '../infra/firebase'
import SkywayClient from '../infra/skyway'
import StorageClient from '../infra/storage'
import IndexedDBClient from '../infra/idx_db'
import AccountService from './account'
import CommunicationService from './communication'

export default class ServiceFactory {
    config: IConfig
    firebaseClient: FirebaseClient
    skywayClient: SkywayClient
    storageClient: StorageClient
    indexedDBClient: IndexedDBClient

    accountService: AccountService
    communicationService: CommunicationService

    constructor() {
        this.config = loadAppConfig()
        this.firebaseClient = new FirebaseClient(this.config.env.firebase)
        this.skywayClient = new SkywayClient(this.config)
        this.storageClient = new StorageClient()
        this.indexedDBClient = new IndexedDBClient()

        this.accountService = new AccountService(this.firebaseClient, this.storageClient)
        this.communicationService = new CommunicationService()
    }

}