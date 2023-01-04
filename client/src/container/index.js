import { createContext, useContext } from "react";
import LoginStore from "../components/login/login.store";
import MobXDemoStore from "../components/mobxDemo/mobxDemo.store";
import MainStore from "./main.store";

const mobXStore = new MobXDemoStore()
const loginStore = new LoginStore()

export const mainStore = new MainStore({
    mobXStore,
    loginStore
})

const storeContext = createContext()

export const StoreContextProvider = storeContext.Provider;

export const useMainStore = () => useContext(storeContext);