import { makeAutoObservable, observable } from "mobx"

class LoginStore {
    isLogged = false

    constructor(){
        makeAutoObservable(this, {
            isLogged: observable
        })
    }
}

export default LoginStore