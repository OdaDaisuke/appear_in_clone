import { BlockOverflowProperty } from "csstype";

export enum AuthMethod {
    Twitter = "twitter",
    Facebook = "facebook",
    Google = "google",
    Github = "github",
    Line = "line",
    Email = "email",
}

export interface AuthResult {
    additionalUserInfo: firebase.auth.AdditionalUserInfo
    authCredential: firebase.auth.AuthCredential
}

export interface TwitterProfile {
    name: string
    created_at: string
    description: string
    favourites_count: number
    followers_count: number
    friends_count: number
    id: string
    lang: string
    listed_count: number
    location: string
    profile_background_color: string
    profile_banner_url: string
    profile_image_url: string
    profile_image_url_https: string
    profile_link_color: string
    protected: boolean
    screen_name: string
    statuses_count: number
    url: string
}

export interface FacebookProfile {
    email: string
    first_name: string
    last_name: string
    name: string
    granted_scopes: string[]
    id: number
    picture: {
        data: {
            height: number
            width: number
            is_silhouette: boolean
            url: string
        }
    }
}

export interface GithubProfile {
    avatar_url: string
    bio: string
    blog: string
    created_at: string
    email: string
    followers: number
    following: number
    hireable: boolean
    html_url: string
    id: number
    location: string
    name: string
    public_gists: number
    public_repos: number
}