import * as uuid from 'uuid'
import * as rx from 'rxjs'
import axios, { AxiosError, AxiosInstance } from 'axios'
import { IConfig } from '../configs'

export default class CloudFunctionsClient {
    private axios: AxiosInstance
    private config: IConfig

    private authToken: string

    constructor(config: IConfig) {
        this.config = config
        this.init()
    }

    init() {
        this.axios = axios.create()
        this.axios.interceptors.request.use( req => {
            if (this.authToken) {
                const header = {
                    Authorization: `Bearer ${this.authToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
                req.headers = {
                    ...req.headers,
                    header,
                }
            }
            return req

        })

    }


}