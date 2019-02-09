import { IConfig } from '../configs'
import Peer from 'skyway-js'

export default class SkyWayClient {
    stream: MediaStream
    config: IConfig

    constructor(config: IConfig) {
        this.config = config
    }

    async init() {
        this.stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
    }

}