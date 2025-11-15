import ImageCard from "./ImageCard";

export default function ImageGrid({ images, onImageClick, toggleFavorite, favorites }) {
  if (!images.length) {
    return <p style={{ textAlign: "center", padding: "3rem", fontSize: "1.2rem", color: "#00ffff" }}>Select a breed to view cats</p>;
  }

  return (
    <div className="grid">
      {images.map((cat) => (
        <ImageCard
          key={cat.id}
          cat={cat}
          onImageClick={onImageClick}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.some(f => f.id === cat.id)}
        />
      ))}
    </div>
  );
}
