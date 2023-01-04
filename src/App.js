import { Fragment } from "react";
import ContextDemo from "./components/contextDemo";
import MobXDemo from "./components/mobxDemo";
import { mainStore, StoreContextProvider } from "./container";

function App() {
    return (
        <Fragment>
            {/* <ContextDemo /> */}
            <StoreContextProvider value={mainStore}>
                <MobXDemo />
            </StoreContextProvider>
        </Fragment>
    );
}

export default App;
