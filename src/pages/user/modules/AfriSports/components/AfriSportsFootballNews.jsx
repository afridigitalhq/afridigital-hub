const DEMO_NEWS = [
  {
    id: "demo-1",
    type: "article",
    title: "Football news will appear here",
    summary: "AfriSports is ready to connect to a live football news provider.",
    source: "AfriDigital",
    publishedAt: "Ready for API",
    image: "",
    url: "#",
    videoUrl: "",
    videoProvider: "",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/VzPAbcX_lAc",
    branding: "AfriSports",
  },
  {
    id: "demo-2",
    type: "video",
    title: "AfriSports Match Radar — video content ready",
    summary: "This slot can display AfriSports-produced match analysis, graphics and highlights when a licensed video is available.",
    source: "AfriSports",
    publishedAt: "VIDEO READY",
    image: "",
    url: "#",
    videoUrl: "",
    videoProvider: "",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/VzPAbcX_lAc",
    branding: "AfriSports",
  },
];

function NewsMedia({ article }) {
  if (article.videoEmbedUrl) {
    return (
      <div className="afrisports-news-video">
        <iframe
          src={article.videoEmbedUrl}
          title={article.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (article.videoUrl) {
    return (
      <video
        className="afrisports-news-video-player"
        controls
        preload="metadata"
        poster={article.image || undefined}
      >
        <source src={article.videoUrl} type="video/mp4" />
      </video>
    );
  }

  if (article.image) {
    return (
      <img
        className="afrisports-news-article-image"
        src={article.image}
        alt=""
        loading="lazy"
      />
    );
  }

  return (
    <div className="afrisports-news-article-placeholder" aria-hidden="true">
      {article.type === "video" ? "🎥" : "⚽"}
    </div>
  );
}

function NewsArticle({ article }) {
  const isVideo = article.type === "video" || article.videoUrl || article.videoEmbedUrl;

  return (
    <article className={`afrisports-news-article ${isVideo ? "is-video" : ""}`}>
      <NewsMedia article={article} />

      <div className="afrisports-news-article-content">
        <div className="afrisports-news-label-row">
          <span className="afrisports-news-source">
            {article.source || "Football News"}
          </span>

          {isVideo && (
            <span className="afrisports-news-video-label">
              🎥 VIDEO
            </span>
          )}
        </div>

        <h3>{article.title}</h3>

        {article.summary && <p>{article.summary}</p>}

        <div className="afrisports-news-meta">
          <span>{article.publishedAt || "Latest"}</span>

          {article.url && article.url !== "#" && (
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
            >
              {isVideo ? "Watch / View →" : "Read more →"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function AfriSportsFootballNews({
  articles = DEMO_NEWS,
  loading = false,
  error = null,
}) {
  const news = Array.isArray(articles) ? articles : [];

  return (
    <section
      className="afrisports-football-news"
      aria-labelledby="afrisports-football-news-title"
    >
      <header className="afrisports-football-news-heading">
        <div>
          <span className="afrisports-kicker">
            ⚽ AFRI SPORTS FOOTBALL NEWS
          </span>
          <h2 id="afrisports-football-news-title">
            Powered by AfriDigital
          </h2>
        </div>

        <span className="afrisports-football-news-badge">
          FOOTBALL
        </span>
      </header>

      {loading ? (
        <div className="afrisports-news-state">
          Loading football news…
        </div>
      ) : error ? (
        <div className="afrisports-news-state is-error">
          Football news is temporarily unavailable.
        </div>
      ) : news.length ? (
        <div className="afrisports-news-list">
          {news.map((article) => (
            <NewsArticle key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="afrisports-news-state">
          No football news available right now.
        </div>
      )}
    </section>
  );
}
