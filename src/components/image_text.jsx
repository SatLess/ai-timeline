
function ImageText({img_path, description = "", date}){
    return  <>
       <div>
         <img className="Img" src={img_path}></img>
       </div>
               <div className="Date">
            <p1>{date}</p1>
            <img src="src\assets\react.svg"></img>   
        </div>
        <div className="Description">
            <p1>{description}</p1>   
        </div>
    </>
}
export default ImageText