import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const photos = [
    {
      src: require('./img/Cayenne/CY19J4HOX0004_low (1).jpg'),
      width: 5,
      height: 3
    },
    {
      src:  require('./img/Cayenne/CY19J4OOX0001_low.jpg'),
      width: 4.3,
      height: 2.7
    },
    {
      src:  require('./img/Cayenne/porsche-normal.webp'),
      width: 3.5,
      height: 3.7
    },
    {
      src: require('./img/Cayenne/CY19J4HID0001_low.jpg'),
      width: 3.5,
      height: 2.7
    },
    {
      src: require('./img/Cayenne/CY19J4HOD0002_low.jpg'),
      width: 4.5,
      height: 2.7
    },
    {
      src:  require('./img/Cayenne/CY19J4HOX0003_low.jpg'),
      width: 4.5,
      height: 2.7
    }
  ];
  
function ImagesCayenne() {
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
export default ImagesCayenne;