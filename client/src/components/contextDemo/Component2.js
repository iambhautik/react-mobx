import React, { useContext } from 'react'
import { themeContext } from '../../context/themeContext'

const Component2 = () => {
    const theme = useContext(themeContext)

    console.log(theme, "theme")
  return (
    <div>Component2</div>
  )
}

export default Component2