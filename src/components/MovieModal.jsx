import { useEffect } from 'react';

function stripHtml(html = '') {
  return html.replace(/<[^>]*>/g, '');
}

export default function MovieModal({ movie, onClose }) {
  useEffect(() => {
    if (!movie) return;
    const onKey = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const runtime = movie.averageRuntime || movie.runtime;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="movie-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close details">×</button>

        <div className="modal-poster-wrap">
          {movie.image?.original || movie.image?.medium ? (
            <img className="modal-poster" src={movie.image?.original || movie.image?.medium} alt={`${movie.name} poster`} />
          ) : (
            <div className="modal-no-image">No image available</div>
          )}
        </div>

        <div className="modal-content">
          <span className="eyebrow">Featured title</span>
          <h2 id="movie-modal-title">{movie.name}</h2>
          <div className="modal-stats">
            <span>★ {movie.rating?.average ?? 'N/A'}</span>
            <span>{movie.premiered?.slice(0, 4) || 'Year unknown'}</span>
            <span>{runtime ? `${runtime} min` : 'Runtime unknown'}</span>
            <span>{movie.status || 'Status unknown'}</span>
          </div>

          <div className="genre-list">
            {(movie.genres?.length ? movie.genres : ['General']).map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>

          <p className="summary">{stripHtml(movie.summary) || 'No description is available for this title yet.'}</p>

          <dl className="detail-grid">
            <div><dt>Language</dt><dd>{movie.language || 'Unknown'}</dd></div>
            <div><dt>Type</dt><dd>{movie.type || 'Unknown'}</dd></div>
            <div><dt>Network</dt><dd>{movie.network?.name || movie.webChannel?.name || 'Unknown'}</dd></div>
            <div><dt>Country</dt><dd>{movie.network?.country?.name || movie.webChannel?.country?.name || 'Unknown'}</dd></div>
          </dl>

          {movie.officialSite && (
            <a className="btn btn-primary" href={movie.officialSite} target="_blank" rel="noreferrer">Official Website ↗</a>
          )}
        </div>
      </section>
    </div>
  );
}
