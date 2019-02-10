export interface IConfig {
    env: IEnv
}

export interface IEnv {
    skyWayApiKey: string
    gaID: string
    firebase: IFirebaseConfig
}

export interface IFirebaseConfig {
    apiKey: string
    authDomain: string
    databaseURL: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
}

export const loadAppConfig = (): IConfig => {
    return {
        env: {
            skyWayApiKey: process.env.SKYWAY_API_KEY as string,
            gaID: process.env.GA_ID as string,
            firebase: {
                apiKey: process.env.FIREBASE_API_KEY as string,
                authDomain: process.env.FIREBASE_AUTH_DOMAIN as string,
                databaseURL: process.env.FIREBASE_DATABASE_URL as string,
                projectId: process.env.FIREBASE_PROJECT_ID as string,
                storageBucket: process.env.FIREBASE_STORAGE_BUCKET as string,
                messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID as string,
            },
        }
    }
}