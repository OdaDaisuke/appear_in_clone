import { createBrowserHistory, Location } from 'history'
import { SIGNUP, TOP, UNRISTRICTED_GROUPS } from './groups'
import AccountService from '../service/account'

export default class RouteController {
    history = createBrowserHistory()
    accountService: AccountService

    constructor(accountService: AccountService) {
        this.accountService = accountService
        this.bindEvents()
        this.onLocationChanged(this.history.location)
    }

    push(s: string) {
        this.history.push(s)
    }

    private get isAtRistrictedLocation() {
        return !UNRISTRICTED_GROUPS.matchPath(this.history.location.pathname)
    }

    private onLocationChanged(location: Location) {
        if (!this.accountService.authed && this.isAtRistrictedLocation) {
            this.push(SIGNUP.path)
        } else if (this.accountService.authed && !this.isAtRistrictedLocation) {
            this.push(TOP.path)
        }
    }

    private bindEvents() {
        this.history.listen( location => {
            this.onLocationChanged(location)
        })
    }

}