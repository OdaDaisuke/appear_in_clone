import { match as Match, matchPath } from 'react-router'

export class Route {
    path: string

    constructor(path: string) {
        this.path = path
    }

    matchPath(path: string): Match | null {
        return matchPath(path, this)
    }
}

export class RouteGroup {
    routes: Route[]

    constructor(routes: Route[]) {
        this.routes = routes
    }

    matchPath(path: string): Match | null {
        return this.routes.map( route => {
            return route.matchPath(path)
        }).find( match => {
            return !!match
        }) || null
    }
}

export const TOP      = new Route("/")
export const ROOMS    = new Route("/rooms")
export const ROOM     = new Route("/room")
export const SIGNUP   = new Route("/signup")
export const ABOUT    = new Route("/about")
export const PROFILE  = new Route("/profile")

export const UNRISTRICTED_GROUPS = new RouteGroup([
    SIGNUP,
    ABOUT,
])