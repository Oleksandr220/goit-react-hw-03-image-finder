const ImageGalleryItem = ({ pictures, onClick }) => {
  return pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <li className="ImageGalleryItem" key={id}>
        <img
          onClick={() => onClick(largeImageURL)}
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
