
function ImageText({img_path, description = ""}){
    return  <>
        <img src={img_path}></img>
        <p1>{description}</p1>   
    </>
}
export default ImageText