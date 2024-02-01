import React from 'react'
//na classe indicators criou-se um array baseado no length pois não dava pra fazer um map sem ter array
const Indicators = ({activeIndex, length}) => {
  return (
    <div className="indicators">
        {Array.from({length}, (_, index) => (
            <div 
            key={index} 
            className={index === activeIndex ? "indicator active" : "indicator"}
            />
        ))}
    </div>
  )
}

export default Indicators