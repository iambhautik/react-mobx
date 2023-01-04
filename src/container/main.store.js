import { makeAutoObservable, makeObservable, observable } from "mobx";

class MainStore {

    MobXDemoStore = {}
    LoginStore = {}

    constructor(stores){
        makeAutoObservable(this, stores)

        this.MobXDemoStore = stores.mobXStore
        this.LoginStore = stores.loginStore
    }
}

export default MainStore;