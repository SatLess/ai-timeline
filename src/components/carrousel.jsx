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
  CreateItemDescrpition("src/assets/s.jpeg", "Antes o mundo neoliberal se encontrava\n em uma safadeza sem tamanhos", 0),
  CreateItemDescrpition("src/assets/images.jpeg", "Focado", 1),
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
  const TimelineChanged = () => {}

  return (
    <div className="Container">
              <Arrow is_left={true} callback={TimelineChanged}></Arrow>
              <div className="Images">
                {items}
              </div>
                <Arrow is_left={false} callback={TimelineChanged}></Arrow>
    </div>
  );
}
