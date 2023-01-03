import React, { useContext } from 'react'
import { themeContext } from '../context/themeContext'

const Component1 = () => {

    const theme = useContext(themeContext)

    console.log(theme, "theme")

  return (
    <div style={theme} >Component1</div>
  )
}

export default Component1