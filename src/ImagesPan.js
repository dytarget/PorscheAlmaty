import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const photos = [
    {
      src: require('./img/porsche-zoom2 (3)(pan2).webp'),
      width: 5,
      height: 3
    },
    {
      src: require('./img/porsche-zoom2 (3)(pan4).webp'),
      width: 5,
      height: 3
    },
    {
      src: require('./img/PA19P3LOX0007_KV_low.jpg'),
      width: 3,
      height: 2
    },
    {
      src: require('./img/PA19P3LID0003_low.jpg'),
      width: 5,
      height: 2.7
    },
    {
      src: require('./img/porsche-zoom2 (3)(pan).webp'),
      width: 4.5,
      height: 2.7
    },
    {
      src:  require('./img/porsche-zoom2 (3pan).webp'),
      width: 4.5,
      height: 2.7
    }
  ];
  
function ImagesPan() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div  id="images">
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default ImagesPan;