import FirebaseClient from '../infra/firebase'

interface CommunicationServiceProtocol {
    fetchRooms: () => Promise<number>
    createRoom: () => void
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

    async fetchRooms(): Promise<number> {
        return 1
    }

    createRoom() {
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