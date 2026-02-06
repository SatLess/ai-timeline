
function ImageText({img_path, description = ""}){
    return  <>
       <div>
         <img className="Img" src={img_path}></img>
       </div>
               <div className="Date">
            <p1>2020</p1>   
        </div>
        <div className="Description">
            <p1>{description}</p1>   
        </div>
    </>
}
export default ImageText