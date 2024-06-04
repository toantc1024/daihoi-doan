import React, { useEffect, useState } from "react";

/// Components
import { Stage, Layer, Image, Group } from "react-konva";
import TransformableImage from "./TransformableImage";

const CanvasStage = ({ scale, stageRef, frameImg, image, width, height }) => {
  const groupDimensions = {
    height: 272,
    width: 273,
  };
  const groupHeight = groupDimensions.height;
  const aspectRatio = width / height;
  const imageRenderWidth = aspectRatio * groupDimensions.height;
  const imageRenderHeight = groupDimensions.height;
  const imagePositionX = 38.5;
  const imagePositionY = 38;
  const rect = [
    {
      x: 50,
      y: 50,
      id: "rect1",
    },
    {
      x: 100,
      y: 100,
      id: "rect2",
    },
  ];

  const renderImg = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: "renderImg1",
    },
  ];

  const [tranImg, setTranImg] = useState(renderImg);
  const [selectedId1, selectShape1] = useState(null);
  const [rectangles, setRectangles] = useState(rect);
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = () => {
    selectShape1(null);
    selectShape(null);
  };

  return (
    <Stage ref={stageRef} width={350} height={350} x={0}>
      <Layer>
        <Group
          style={{
            zIndex: "100",
            position: "absolute",
          }}
          clipX={imagePositionX}
          clipY={imagePositionY}
        >
          <TransformableImage
            image={image}
            imageWidth={imageRenderWidth * scale}
            imageHeight={imageRenderHeight * scale}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
            isSelected={renderImg[0].id === selectedId1}
            onSelect={() => {
              selectShape1(renderImg[0].id);
            }}
            onChange={(newAttrs) => {
              const imgs = tranImg.slice();

              imgs[0] = { ...newAttrs, scaleX: 1.5, scaleY: 1.5 };

              setTranImg(imgs);
            }}
          />
        </Group>

        <Image
          image={frameImg}
          width={350}
          height={350}
          style={{ zIndex: "100", position: "absolute" }}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          listening={false}
        />
      </Layer>
    </Stage>
  );
};

export default CanvasStage;
