import { useRef } from "react";
import Arrow from "./arrow";
import ImageText from "./image_text";

function CreateItemDescrpition(img_path, description, date, id) {
  return {
    id: id,
    img_path: img_path,
    description: description,
    date: date
  };
}

let timeline = [
  CreateItemDescrpition("src/assets/girl_look.png", "Facebook utilizava visão computacional para \
                                                      detecção de rostos dos usuários, de modo qiue era based e cool", "2020", 0),
  CreateItemDescrpition("src/assets/girl_look.png", "Focado", "2300", 1),
  CreateItemDescrpition("src/assets/react.svg", "Depois", "2300", 2),
  CreateItemDescrpition("src/assets/react.svg", "Later", "2300", 3),
    CreateItemDescrpition("src/assets/react.svg", "Depois", "2300", 4),
  CreateItemDescrpition("src/assets/react.svg", "Later", "2300", 5),
    CreateItemDescrpition("src/assets/react.svg", "Depois", "2300", 6),
  CreateItemDescrpition("src/assets/react.svg", "Later", "2300", 7),
];

export function Carrousel() {
  let items = timeline.map(item => 
  <div className="Card">
    <ImageText key = {item.key} img_path={item.img_path} description= {item.description} date={item.date}/>
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
    </div>
  );
}
