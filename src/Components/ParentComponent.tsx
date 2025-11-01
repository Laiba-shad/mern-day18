import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    function handleClick(value: number) {
    console.log("parent component", value);
  }
  return (
    <div>ParentComponent
        <ChildComponent title='thtuh' ChildClickedEvent={handleClick} />
    </div>
  )
}

export default ParentComponent