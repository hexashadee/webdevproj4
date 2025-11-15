export default function FavoritesBar({ favorites, onImageClick }) {
  if (!favorites.length) {
    return null;
  }

  return (
    <div className="favorites-container">
      <h2>◢ Favorites ◣</h2>
      <div className="favorites-grid">
        {favorites.map((cat) => (
          <div 
            key={cat.id} 
            className="favorite-item"
            onClick={() => onImageClick(cat)}
          >
            <img src={cat.url} alt="Favorite cat" />
          </div>
        ))}
      </div>
    </div>
  );
}
