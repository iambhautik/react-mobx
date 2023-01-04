import React from 'react'
import { ThemeContextProvider } from '../../context/themeContext'
import Component1 from './Component1'
import Component2 from './Component2'

const ContextDemo = () => {

    const styles = {
        'backgroundColor': 'skyblue'
      }

  return (
    <ThemeContextProvider value={styles} >
        <Component1 />
        <Component2 />
      </ThemeContextProvider>
  )
}

export default ContextDemo