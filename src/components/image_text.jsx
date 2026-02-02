
function ImageText({img_path, description = ""}){
    return  <>
       <div>
         <img src={img_path}></img>
       </div>
        <div className="Description">
            <p1>{description}</p1>   
        </div>
    </>
}
export default ImageText