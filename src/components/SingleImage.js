import './SingleImage.css'
export default function SingleImage({ imageHP, choiceHandle }){
    const clickHandle = () => {
        choiceHandle(imageHP)
    }
    return(
        <div className="imag"> 
            <div>
                <img className ="front" src={imageHP.src} alt="front"/> 
                <img className ="back" src="/img/front.png" onClick={clickHandle} alt="back"/>
            </div>
        </div>
    )
}