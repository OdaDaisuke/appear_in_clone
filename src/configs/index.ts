export interface IConfig {
    env: IEnv
}

export interface IEnv {
    skyWayApiKey: string
    firebase: IFirebaseConfig
}

export interface IFirebaseConfig {
    FirebaseApiKey: string
    FirebaseAuthDomain: string
    FirebaseDatabaseURL: string
    FirebaseProjectId: string
    FirebaseStorageBucket: string
    FirebaseMessagingSenderId: string
}

export const loadAppConfig = (): IConfig => {
    return {
        env: {
            skyWayApiKey: process.env.SKYWAY_API_KEY as string,
            firebase: {
                FirebaseApiKey: process.env.FIREBASE_API_KEY as string,
                FirebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN as string,
                FirebaseDatabaseURL: process.env.FIREBASE_DATABASE_URL as string,
                FirebaseProjectId: process.env.FIREBASE_PROJECT_ID as string,
                FirebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET as string,
                FirebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID as string,
            },
        }
    }
}