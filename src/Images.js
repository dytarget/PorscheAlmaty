import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const photos = [
    {
      src: require('./img/MA19T2CIX0001_low.jpg'),
      width: 4.5,
      height: 3
    },
    {
      src: require('./img/MA19T2COX0009_KV_low.jpg'),
      width: 3.7,
      height: 2.7
    },
    {
      src:  require('./img/porsche-zoom2 (1).webp'),
      width: 4.8,
      height: 2.7
    },
    {
      src:  require('./img/porsche-normal (2).webp'),
      width: 3.5,
      height: 3.7
    },
    {
      src: require('./img/MA19T2COX0002_low.jpg'),
      width: 5,
      height: 2.7
    },
    {
      src: require('./img/porsche-zoom2 (2).webp'),
      width: 4.5,
      height: 2.7
    },
    {
      src:  require('./img/porsche-wallpaper.webp'),
      width: 4.5,
      height: 2.7
    }
  ];
  
function Images() {
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
export default Images;