import './SingleImage.css'
export default function SingleImage({ imageHP, choiceHandle, flipImage, disabledImg }){
    const clickHandle = () => {
        if (!disabledImg) {
            choiceHandle(imageHP)
        }
    }
    return(
        <div className="imag"> 
            <div className={flipImage ? "flipImage" : ""}>
                <img className ="front" src={imageHP.src} alt="front"/> 
                <img className ="back" src="./img/front.png" onClick={clickHandle} alt="back"/>
            </div>
        </div>
    )
}