import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-content">
            <span className="eyebrow">Your next favorite story starts here</span>
            <h1>Explore stories.<br /><span>Discover favorites.</span></h1>
            <p>Browse a growing catalogue of popular titles, search instantly, and open rich details without leaving the page.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-large" to="/movies">Explore Movies</Link>
              <a className="btn btn-secondary btn-large" href="#features">Why MovieExplorer?</a>
            </div>
          </div>
          <div className="hero-grid" aria-hidden="true" />
        </section>

        <section className="features section" id="features">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Simple by design</span>
              <h2>Everything you need to find what to watch.</h2>
            </div>

            <div className="feature-grid">
              <article className="feature-card"><span>⌕</span><h3>Fast Search</h3><p>Search titles in real time using the TVMaze database.</p></article>
              <article className="feature-card"><span>▦</span><h3>Easy Browsing</h3><p>Discover titles in a responsive poster grid built for any screen.</p></article>
              <article className="feature-card"><span>✦</span><h3>Rich Details</h3><p>Open ratings, genres, runtime, summaries, network info and more.</p></article>
            </div>
          </div>
        </section>

        <section className="cta-section section">
          <div className="container cta-panel">
            <div><span className="eyebrow">Ready to explore?</span><h2>Find your next watch in seconds.</h2></div>
            <Link className="btn btn-primary btn-large" to="/movies">Browse Now →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
