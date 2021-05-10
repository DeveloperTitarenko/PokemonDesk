import React from "react";
import cn from 'classnames'

import './costom.css'
import s from './App.modules.scss'
const App = () => {
  return(
    <div className={cn(s.header, 'color')}>
      this is App Component All
    </div>
  )
}
export default App
