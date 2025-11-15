export default function BreedSelect({ breeds, setSelectedBreed }) {
  return (
    <select onChange={(e) => setSelectedBreed(e.target.value)} defaultValue="">
      <option value="" disabled>Select a breed</option>
      {breeds.map((breed) => (
        <option key={breed.id} value={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
  );
}
