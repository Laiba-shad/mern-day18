import React from 'react'
import CardItems from './CardItems'
import type {FoodItemsType } from '../Types/CountType'
interface CardsProps {
    itemCollection: FoodItemsType[];
}

const Cards = ({itemCollection}:CardsProps) => {

  return (
    <div>
        {
            itemCollection.map((i)=> (
                <div>
                    <CardItems food={i}/>
                </div>

            ))
        }
    </div>
  )
}

export default Cards