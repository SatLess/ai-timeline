import { Carrousel } from "./carrousel";

function Arrow({is_left = false, callback}){
    let id = (is_left) ? "l_arrow" : "r_arrow"
    return <button type="button" className = "arrow" id = {id} onClick={() => callback((is_left) ? -1 : 1)} >{id}</button>
}


export default Arrow;