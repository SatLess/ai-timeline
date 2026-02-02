import Arrow from "./arrow";
import ImageText from "./image_text";
import React, { useState } from "react";

function CreateItemDescrpition(img_path, description, id) {
  return {
    id: id,
    img_path: img_path,
    description: description,
  };
}

let timeline = [
  CreateItemDescrpition("src/assets/react.svg", "Antes", 0),
  CreateItemDescrpition("src/assets/react.svg", "Focado", 1),
  CreateItemDescrpition("src/assets/react.svg", "Depois", 2),
  CreateItemDescrpition("src/assets/react.svg", "Later", 3),
];

let current_idx = 0;

export function Carrousel() {
  const [currentImageText, setCurrentImage] = useState(
    <ImageText
      img_path={timeline[current_idx].img_path}
      description={timeline[current_idx].description}
    />,
  );

    const [previousImageText, setPreviousImage] = useState(
        null
  ); 

  const TimelineChanged = (offset) => {
    let new_idx = current_idx + offset
    if (new_idx < 0 || new_idx === timeline.length){
        return
    }
    console.log(new_idx)
    setPreviousImage(
        new_idx <= 0 ? null :
      <ImageText
        img_path={timeline[current_idx].img_path}
        description={timeline[current_idx].description}
      />,
    )
    current_idx = new_idx
    setCurrentImage(
      <ImageText
        img_path={timeline[current_idx].img_path}
        description={timeline[current_idx].description}
      />,
    );
  };

  return (
    <div className="Images">
              <Arrow is_left={true} callback={TimelineChanged}></Arrow>
        {previousImageText}
        {currentImageText}
                <Arrow is_left={false} callback={TimelineChanged}></Arrow>
    </div>
  );
}
