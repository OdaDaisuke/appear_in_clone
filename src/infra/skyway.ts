import { IConfig } from '../configs'
import * as Peer from 'skyway-js'

export default class SkyWayClient {
    config: IConfig
    peer: Peer

    constructor(config: IConfig) {
        this.config = config
        this.peer = new Peer({
            key: config.env.skyWayApiKey,
            debug: 3,
        })
    }

}