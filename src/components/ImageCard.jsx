export default function ImageCard({ cat, onImageClick, toggleFavorite, isFavorite }) {
  const breed = cat.breeds && cat.breeds[0];

  return (
    <div className="card">
      <img 
        src={cat.url} 
        alt={breed?.name || "Cat"} 
        onClick={() => onImageClick(cat)}
      />
      <div className="card-info">
        {breed && <h3>{breed.name}</h3>}
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(cat);
          }}
        >
          <span>{isFavorite ? '★ Favorited' : '☆ Favorite'}</span>
        </button>
      </div>
    </div>
  );
}
