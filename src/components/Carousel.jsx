import Slide from './Slide'
import Indicators from './Indicators'

import { useState } from 'react'
import { useEffect } from 'react'

const Carousel = ({imageUrls}) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [manualChange, setManualChange] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if(!manualChange) {
                setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
            }
            setManualChange(false)
        }, 5000); //variavel disparando a cada 5 segundos

        return () => clearInterval(interval); //limpa o intervalo quando muda de página
    }, [manualChange, imageUrls.length])

    const goPrev = () => {
        setManualChange(true) //afirmando pro ssistema que eu alterei alguma coisa
        setActiveIndex((prevIndex) => (
            prevIndex - 1 + imageUrls.length) % imageUrls.length) // -1 pra voltar a imagem, ao some a lenght e divide o resto ou seja ele nunca vai diminuir mais doque o minimo de imagens
    }

    const goNext = () => {
        setManualChange(true) //afirmando pro ssistema que eu alterei alguma coisa
        setActiveIndex((prevIndex) => (
            prevIndex + 1) % imageUrls.length) //se diminuir da imagem 1 para imagem zero ele vai pra ultima imagem e se aumentar da ultima ele vai pra primeira
    }
   

  return (
    <div className="carousel">
        {imageUrls.map((url, index) => (
            <Slide 
            key={index} 
            url={url} 
            isActive={activeIndex === index}
            /*aqui vai passar verdadeiro ou falso*/
            />
        ))}
        <Indicators 
        activeIndex={activeIndex} 
        length={imageUrls.length}
        /*pra passar numero de bolinhas igual numero de imagens*/
        />
        <button className='carousel-button prev' onClick={goPrev}>Prev</button>
        <button className='carousel-button next' onClick={goNext}>Next</button>
    </div>
  )
}

export default Carousel