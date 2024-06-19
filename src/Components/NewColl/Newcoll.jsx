import React from 'react'
import new_Collection from "../Assets/new_collections"
import Item from '../Items/Item'
import "./new.css"
const Newcoll = () => {
  return (
    <div className='new-collection'>
        <h1>New Collection</h1>
        <hr/>
        <div className='collect'>
            {new_Collection.map((item,i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image}
               new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      </div>
  )
}
export default Newcoll
