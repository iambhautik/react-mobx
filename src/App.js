import { Component, Fragment } from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import { ThemeContextProvider } from './context/themeContext';

function App() {


  const styles = {
    'backgroundColor': 'skyblue'
  }


  return (
    <Fragment>
      <ThemeContextProvider value={styles} >
        <Component1 />
        <Component2 />
      </ThemeContextProvider>
        <p>Hello MobX</p>
    </Fragment>
  );
}

export default App;
