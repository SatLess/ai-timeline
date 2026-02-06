import { useRef } from "react";
import Arrow from "./arrow";
import ImageText from "./image_text";

function CreateItemDescrpition(img_path, description, id) {
  return {
    id: id,
    img_path: img_path,
    description: description,
  };
}

let timeline = [
  CreateItemDescrpition("src/assets/girl_look.png", "Facebook utilizava visão computacional para \
                                                      detecção de rostos dos usuários, de modo qiue era based e cool", 0),
  CreateItemDescrpition("src/assets/girl_look.png", "Focado", 1),
  CreateItemDescrpition("src/assets/react.svg", "Depois", 2),
  CreateItemDescrpition("src/assets/react.svg", "Later", 3),
    CreateItemDescrpition("src/assets/react.svg", "Depois", 4),
  CreateItemDescrpition("src/assets/react.svg", "Later", 5),
    CreateItemDescrpition("src/assets/react.svg", "Depois", 6),
  CreateItemDescrpition("src/assets/react.svg", "Later", 7),
];

export function Carrousel() {
  let items = timeline.map(item => <div className="Card">
    <ImageText key = {item.key} img_path={item.img_path} description= {item.description}/>
  </div>)
  
  const carrousel_div = useRef(null)
  const TimelineChanged = (offset) => {
    carrousel_div.current.scrollLeft += carrousel_div.current.offsetWidth * offset
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
