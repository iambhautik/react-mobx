import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";

class MobXDemoStore {
    title = "Bhautik";
    clickCount = 1;
    name = 'GAjera'

    constructor(){
        makeAutoObservable(this, {
            title: observable,
            clickCount: observable,
            changeTitle: action
        })
    }

    changeTitle = (clickCount) => {
        this.title = "Bhautik Gajera"
        this.clickCount = this.clickCount + clickCount ;
    }
}

export default MobXDemoStore;