export default function ImageGallery({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="image-gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Post ${index + 1}`} />
      ))}
    </div>
  );
}