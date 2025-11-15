export default function Pagination({ page, setPage }) {
  return (
    <div className="pagination">
      <button 
        onClick={() => setPage(Math.max(0, page - 1))} 
        disabled={page === 0}
      >
        <span>◄ Previous</span>
      </button>
      <span>Page {page + 1}</span>
      <button onClick={() => setPage(page + 1)}>
        <span>Next ►</span>
      </button>
    </div>
  );
}
