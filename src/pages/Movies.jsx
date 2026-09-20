import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';

const API = 'https://api.tvmaze.com';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const requestRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const requestId = ++requestRef.current;
      setLoading(true);
      setError('');

      try {
        const url = query.trim()
          ? `${API}/search/shows?q=${encodeURIComponent(query.trim())}`
          : `${API}/shows?page=1`;

        const response = await fetch(url);
        if (!response.ok) throw new Error('Could not load movies. Please try again.');
        const data = await response.json();
        if (requestId !== requestRef.current) return;

        const normalized = query.trim() ? data.map((item) => item.show) : data;
        setMovies(normalized.slice(0, 48));
      } catch (err) {
        if (requestId !== requestRef.current) return;
        setError(err.message || 'Something went wrong.');
        setMovies([]);
      } finally {
        if (requestId === requestRef.current) setLoading(false);
      }
    }, query.trim() ? 350 : 0);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="site-shell">
      <Navbar />
      <main className="listing-main">
        <section className="listing-hero">
          <div className="container">
            <span className="eyebrow">Discover</span>
            <h1>Find something worth watching.</h1>
            <p>Search by title or browse popular picks from the catalogue.</p>

            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search movies by title..."
                aria-label="Search movies by title"
              />
              {query && <button onClick={() => setQuery('')} aria-label="Clear search">×</button>}
            </label>
          </div>
        </section>

        <section className="container movies-section">
          <div className="results-heading">
            <div><h2>{query ? `Results for “${query}”` : 'Popular Picks'}</h2><p>{loading ? 'Searching…' : `${movies.length} titles shown`}</p></div>
          </div>

          {loading && <div className="status-card"><div className="spinner" /><p>Loading titles…</p></div>}
          {!loading && error && <div className="status-card error-card"><h3>Unable to load movies</h3><p>{error}</p></div>}
          {!loading && !error && movies.length === 0 && <div className="status-card"><h3>No matches found</h3><p>Try another movie title or a shorter search term.</p></div>}

          {!loading && !error && movies.length > 0 && (
            <div className="movie-grid">
              {movies.map((movie) => <MovieCard key={movie.id} movie={movie} onOpen={setSelected} />)}
            </div>
          )}
        </section>
      </main>
      <Footer />
      <MovieModal movie={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
