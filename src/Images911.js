import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const photos = [
    {
      src: require('./img/911сайт/CZ20V01OX0001_low.jpg'),
      width: 4.5,
      height: 3
    },
    {
      src: require('./img/911сайт/CZ20V02OX0001_low.jpg'),
      width: 4,
      height: 3
    },
    {
      src: require('./img/911сайт/CZ20V02OX0003_low.jpg'),
      width: 3,
      height: 2
    },
    {
      src: require('./img/911сайт/CZ20V02OX0002_low.jpg'),
      width: 4,
      height: 2.7
    },
    {
      src: require('./img/911сайт/CZ20V01OX0003_low.jpg'),
      width: 4.5,
      height: 3
    },
    {
      src:  require('./img/911сайт/CZ20V02ID0001_low.jpg'),
      width: 4.5,
      height: 2.7
    }
  ];
  
function Images911() {
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
export default Images911;