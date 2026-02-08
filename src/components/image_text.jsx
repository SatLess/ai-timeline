
function ImageText({img_path, description = "", date}){
    return  <>
       <div className="ImageContainer">
         <img className="Img" src={img_path}></img>
       </div>
            <div className="Date">
            <p1>{date}</p1>
            <img src="src\assets\circle.svg"></img>   
        </div>
        <div className="Description">
            <span>{description}</span>   
        </div>
    </>
}
export default ImageText