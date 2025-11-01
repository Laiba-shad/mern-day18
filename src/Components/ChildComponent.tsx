import React from 'react'

interface ChildComponentProps  {
title: string;
ChildClickedEvent:(value:number) =>void
}

const ChildComponent = ({title, ChildClickedEvent}:ChildComponentProps) => {

  return (
    <div >ChildComponent {title}
    <button onClick={()=> ChildClickedEvent(9)}>ll</button>
    </div>
  )
}

export default ChildComponent