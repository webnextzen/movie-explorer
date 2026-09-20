const FALLBACK = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="500" height="700"><rect width="100%" height="100%" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a1a1aa" font-family="Arial" font-size="28">No Poster</text></svg>')}`;

function year(date) {
  return date ? date.slice(0, 4) : '—';
}

export default function MovieCard({ movie, onOpen }) {
  return (
    <article className="movie-card">
      <button className="poster-button" onClick={() => onOpen(movie)} aria-label={`View details for ${movie.name}`}>
        <img
          className="movie-poster"
          src={movie.image?.medium || movie.image?.original || FALLBACK}
          alt={`${movie.name} poster`}
          loading="lazy"
        />
        <span className="poster-overlay">View details</span>
      </button>

      <div className="movie-card-body">
        <div className="movie-title-row">
          <h3>{movie.name}</h3>
          <span className="rating">★ {movie.rating?.average ?? 'N/A'}</span>
        </div>
        <p className="movie-meta">{year(movie.premiered)} · {movie.language || 'Unknown'} · {movie.genres?.[0] || 'General'}</p>
      </div>
    </article>
  );
}
