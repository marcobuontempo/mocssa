import { MouseEvent, ReactElement, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArtworkMetadata } from "../../types/artworkMetadataType";
import ArtworkFrame from "../ArtworkFrame";
import { copyToClipboard } from "../../utils/copyToClipboard";

export default function ArtworkModal() {
  const location = useLocation();
  const navigate = useNavigate();
  const { artworkSourceURL } = useParams();
  const [artwork, setArtwork] = useState<ReactElement | null>(null);
  const [metadata, setMetadata] = useState<ArtworkMetadata | null>(null);

  // Dynamically import the necessary artwork component
  useEffect(() => {
    if (!artworkSourceURL) return;

    import(`../../artworks/${artworkSourceURL}/index.tsx`)
      .then((module) => {
        setArtwork(() => module.artwork);
        setMetadata(() => module.metadata);
      })
      .catch(() => {
        setArtwork(null);
        setMetadata(null);
        navigate("/");
      });
  }, [artworkSourceURL]);

  // Prevent scroll when modal is showing
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleCloseModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const backgroundLocation = location.state?.backgroundLocation as
      | Location
      | undefined;

    if (backgroundLocation) {
      navigate(-1); // go back to where we came from
    } else {
      navigate("/"); // fallback if user came directly to /artwork/:artworkSourceURL
    }
  };

  if (!artwork || !metadata) return null;

  const currentUrl = `${window.location.origin}${location.pathname}`;
  const shareMessage = encodeURIComponent(
    `Check out this CSS code-only artwork! "${metadata.title}" by ${metadata.creator} - Museum of CSS Art`
  );
  const iframeCode = `<iframe src="${currentUrl.replace("artwork", "embed")}" width="350" height="350" frameborder="0" title="CSS Artwork: ${metadata.title}" ></iframe>`;

  return (
    <>
      <title>{`Museum of CSS Art (${metadata.title} by ${metadata.creator})`}</title>
      <meta name="description" content={`Museum of CSS Art. Pure-CSS artwork. "${metadata.title} - by ${metadata.creator}. ${metadata.attribution}`} />
      
      <div className={styles.modal}>
        <button className={styles.exit} onClick={handleCloseModal}>
          <img src="/svg/xmark.svg" alt="Close Modal" height={48} width={48} />
        </button>
        <div className={styles.header}>
          <h2 className={styles.title}>{metadata.title}</h2>
          <h3 className={styles.creator}>by {metadata.creator}</h3>
        </div>

        <ArtworkFrame>{artwork}</ArtworkFrame>

        <div className={styles.information}>
          <p className={styles.attribution}>{metadata.attribution}</p>
          <div>
            <p className={styles.category_title}>categories:</p>
            <ul className={styles.categories}>
              {!metadata.categories || metadata.categories.length === 0 ? (
                <li>none</li>
              ) : (
                metadata.categories.map((category) => (
                  <li
                    key={category}
                    className={styles[`${category.split(" ").join("")}`]}
                  >
                    {category}
                  </li>
                ))
              )}
            </ul>
          </div>
          <a
            className={styles.github}
            href={`https://github.com/marcobuontempo/mocssa/tree/main/src/artworks/${artworkSourceURL}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>GitHub Source Code</span>
            <img
              className={styles.linkicon}
              src="/svg/link.svg"
              alt="Open GitHub Source Icon"
              height={12}
              width={12}
            />
          </a>

          <div>
            <h3>Embed iframe:</h3>
            <input className={styles.iframeinput} name="iframeembed" type="text" value={iframeCode} readOnly />
            <button className={styles.iframecopy} onClick={() => copyToClipboard(iframeCode)}>
              <img
                src="/svg/clipboard.svg"
                alt="Copy iframe code to Clipboard Icon"
                height={12}
                width={12}
              />
            </button>
          </div>

          <div>
            <h3>Share to:</h3>
            <div>
              <a
                href={`https://www.reddit.com/submit?url=${currentUrl}&title=${shareMessage}`}
                rel="noopener noreferrer"
                target="_blank"
                className={styles.sharelink}
              >
                <img
                  src="/svg/reddit.svg"
                  alt="Share to Reddit Icon"
                  height={24}
                  width={24}
                />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareMessage}`}
                rel="noopener noreferrer"
                target="_blank"
                className={styles.sharelink}
              >
                <img
                  src="/svg/twitter.svg"
                  alt="Share to Twitter/X Icon"
                  height={24}
                  width={24}
                />
              </a>
              <a
                href={`https://mastodon.social/share?text=${shareMessage}: ${currentUrl}`}
                rel="noopener noreferrer"
                target="_blank"
                className={styles.sharelink}
              >
                <img
                  src="/svg/mastodon.svg"
                  alt="Share to Mastodon Icon"
                  height={24}
                  width={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
