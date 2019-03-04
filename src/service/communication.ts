import FirebaseClient from '../infra/firebase'

interface CommunicationServiceProtocol {
    fetchRooms: (id: string) => Promise<firebase.database.DataSnapshot>
    createRoom: (userId: string, title: string) => void
    enterRoom: () => void
    exitRoom: () => void

    disableVideo: () => void
    enableVideo: () => void

    disableMike: () => void
    enableMike:() => void

    toggleMainView: () => void
}

export default class CommunicationService implements CommunicationServiceProtocol {
    firebaseClient: FirebaseClient

    constructor(firebaseClient: FirebaseClient) {
        this.firebaseClient = firebaseClient
    }

    async fetchRooms(id: string): Promise<firebase.database.DataSnapshot> {
        return await this.firebaseClient.firebase.database().ref(`users/${id}/rooms`)
    }

    async createRoom(userId: string, title: string) {
        return await this.firebaseClient.createRoom(userId, title)
    }

    enterRoom() {
    }

    exitRoom() {
    }

    disableVideo() {
    }

    enableVideo() {
    }

    disableMike() {
    }

    enableMike() {
    }

    toggleMainView() {
    }

}