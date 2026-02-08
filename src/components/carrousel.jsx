import { useRef } from "react";
import Arrow from "./arrow";
import ImageText from "./image_text";
import fs from "node:fs"

function CreateItemDescrpition(img_path, description, date, id) {
  return {
    id: id,
    img_path: img_path,
    description: description,
    date: date
  };
}

let r = await fetch("src/assets/timeline_data.json")
let timeline = await r.json()

export function Carrousel() {
  let items = timeline.map(item => 
  <div className="Card">
    <ImageText key = {item.id} img_path={item.img_path} description= {item.description} date={item.date}/>
  </div>)
  
  const carrousel_div = useRef(null)
  const TimelineChanged = (offset) => {
    let scrollOfsset = carrousel_div.current.scrollLeft + carrousel_div.current.offsetWidth * offset
    scrollOfsset = (offset < 0) ? Math.floor(scrollOfsset/1200.0) * 1200 : Math.ceil(scrollOfsset/1200.0) * 1200
    carrousel_div.current.scrollLeft = scrollOfsset
  }

  return (
    <div className="Container">
              <Arrow is_left={true} callback={TimelineChanged}></Arrow>
              <div className="Images" ref={carrousel_div}>
                {items}
              </div>
                <Arrow is_left={false} callback={TimelineChanged}></Arrow>
                <hr></hr>
    </div>
  );
}
