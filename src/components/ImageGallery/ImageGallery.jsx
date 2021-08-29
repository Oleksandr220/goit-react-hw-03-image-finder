import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem pictures={pictures} onClick={onClick} />
    </ul>
  );
};

export default ImageGallery;
