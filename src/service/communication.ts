interface CommunicationServiceProtocol {
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