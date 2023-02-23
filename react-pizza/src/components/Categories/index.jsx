import React from 'react'

export default function Categories() {

  let [activeIndex, setActiveIndex] = React.useState(0);


  const onClickCategory = (index) =>{
   setActiveIndex(activeIndex = index)
   
  }

  const categories = ['All', 'Meat','Vegetarian','Grill','Spicy','Closed' ]
  return (
    <div className="categories">
    <ul>
      {categories.map((elem, index) => {
        return (<li key={index} className={activeIndex == index ? 'active' : false} onClick={()=> onClickCategory(index)} >{elem}</li>)
      })}
    </ul>
  </div>
  )
}
