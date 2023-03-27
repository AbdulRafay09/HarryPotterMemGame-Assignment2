import './SingleImage.css'
export default function SingleImage({imageHP}){
    return(
        <div className="imageHP"> 
            <div>
                <img className ="front" src={imageHP.src} alt="image front"/>
                <img className ="back" src="/img/front.png" alt="image back"/>
            </div>
        </div>
    )
}