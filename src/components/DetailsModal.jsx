import { useEffect } from "react";

export default function DetailsModal({ image, onClose }) {
  const breed = image.breeds && image.breeds[0];

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={image.url} alt={breed?.name || "Cat"} />
        <div className="modal-details">
          {breed ? (
            <>
              <h2>{breed.name}</h2>
              <p><strong>Origin:</strong> {breed.origin}</p>
              <p><strong>Temperament:</strong> {breed.temperament}</p>
              <p><strong>Lifespan:</strong> {breed.life_span} years</p>
              <p><strong>Description:</strong> {breed.description}</p>
              {breed.wikipedia_url && (
                <p>
                  <a 
                    href={breed.wikipedia_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: "#00ffff", textDecoration: "none", textShadow: "0 0 5px #00ffff" }}
                  >
                    → Learn more on Wikipedia
                  </a>
                </p>
              )}
            </>
          ) : (
            <h2>Cat Details</h2>
          )}
        </div>
      </div>
    </div>
  );
}
