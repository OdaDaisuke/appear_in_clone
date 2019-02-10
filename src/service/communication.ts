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