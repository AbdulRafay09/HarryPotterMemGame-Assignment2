import './SingleImage.css'
export default function SingleImage({ imageHP }){
    return(
        <div className="imag"> 
            <div>
                <img className ="front" src={imageHP.src} alt="front"/> 
                <img className ="back" src="/img/front.png" alt="back"/>
            </div>
        </div>
    )
}