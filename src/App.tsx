import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';

const App = () => {
  return <div className={cn(s.header, 'color')}>this is my App Component</div>;
};
export default App;
