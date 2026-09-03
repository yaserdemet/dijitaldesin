import { useEffect } from "react";

const SITE_NAME = "DijitalDesin";
const SITE_URL = "https://www.dijitaldesin.com";
const DEFAULT_OG_IMAGE = "/og-image.png";

// Etiket varsa günceller, yoksa oluşturur
const setMeta = (attribute, key, content) => {
  if (!content) return;

  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const removeMeta = (attribute, key) => {
  const tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (tag) tag.remove();
};

const Seo = ({ title, description, image }) => {
  useEffect(() => {
    const fullTitle = `Dijitaldesin | ${title}`;
    const pageUrl = `${SITE_URL}${window.location.pathname}`;
    const imageUrl = new URL(image || DEFAULT_OG_IMAGE, SITE_URL).href;

    document.title = fullTitle;

    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "tr_TR");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:image:alt", SITE_NAME);

    // Olculer yalnizca varsayilan gorsel icin gecerli
    if (image) {
      removeMeta("property", "og:image:width");
      removeMeta("property", "og:image:height");
    } else {
      setMeta("property", "og:image:width", "1200");
      setMeta("property", "og:image:height", "630");
    }
  }, [title, description, image]);

  return null;
};

export default Seo;
