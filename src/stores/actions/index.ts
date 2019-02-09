export const setAccessToken = accessToken => {
    return {
        type: 'SET_ACCESS_TOKEN',
        accessToken,
    }
}