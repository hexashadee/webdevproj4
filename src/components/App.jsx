import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import BreedSelect from "./components/BreedSelect";
import ImageGrid from "./components/ImageGrid";
import FavoritesBar from "./components/FavoritesBar";
import DetailsModal from "./components/DetailsModal";
import Pagination from "./components/Pagination";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./styles/main.css";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: { "x-api-key": import.meta.env.VITE_CAT_API_KEY }
    })
      .then(res => res.json())
      .then(setBreeds)
      .catch(setError);
  }, []);

  useEffect(() => {
    if (!selectedBreed) return;
    setLoading(true);
    fetch(`https://api.thecatapi.com/v1/images/search?limit=12&page=${page}&has_breeds=1&breed_ids=${selectedBreed}`, {
      headers: { "x-api-key": import.meta.env.VITE_CAT_API_KEY }
    })
      .then(res => res.json())
      .then(setImages)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [selectedBreed, page]);

  const toggleFavorite = (cat) => {
    const exists = favorites.find(f => f.id === cat.id);
    if (exists) {
      setFavorites(favorites.filter(f => f.id !== cat.id));
    } else {
      setFavorites([...favorites, cat]);
    }
  };

  return (
    <div className="app-container">
      <Banner />
      <div className="controls-section">
        <SearchBar setSelectedBreed={setSelectedBreed} />
        <BreedSelect breeds={breeds} setSelectedBreed={setSelectedBreed} />
      </div>
      <FavoritesBar favorites={favorites} onImageClick={setModalImage} />
      {error && <div className="error-message">Error loading data. Try again.</div>}
      {loading ? (
        <div className="loading-container">
          <div className="cyber-loader"></div>
          <p>LOADING...</p>
        </div>
      ) : (
        <ImageGrid 
          images={images} 
          onImageClick={setModalImage} 
          toggleFavorite={toggleFavorite} 
          favorites={favorites} 
        />
      )}
      <Pagination page={page} setPage={setPage} />
      {modalImage && <DetailsModal image={modalImage} onClose={() => setModalImage(null)} />}
    </div>
  );
}

export default App;
