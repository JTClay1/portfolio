import { useEffect } from "react";

function updateMetaTag(attribute, value, content) {
  let metaTag = document.head.querySelector(
    `meta[${attribute}="${value}"]`,
  );

  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute(attribute, value);
    document.head.appendChild(metaTag);
  }

  metaTag.setAttribute("content", content);
}

function updateCanonicalLink(url) {
  let canonicalLink = document.head.querySelector(
    'link[rel="canonical"]',
  );

  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }

  canonicalLink.setAttribute("href", url);
}

function PageMeta({ title, description }) {
  useEffect(() => {
    const canonicalUrl =
      `${window.location.origin}${window.location.pathname}`;

    document.title = title;

    updateMetaTag("name", "description", description);

    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:url", canonicalUrl);

    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);

    updateCanonicalLink(canonicalUrl);
  }, [title, description]);

  return null;
}

export default PageMeta;