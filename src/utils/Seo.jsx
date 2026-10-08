import { useEffect } from "react";
import { getSeoTags, ssrSeo } from "./seoTags";

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

// <link rel="canonical"> etiketini gunceller, yoksa olusturur
const setCanonical = (href) => {
  let tag = document.head.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

const Seo = ({ title, description, image }) => {
  if (typeof window === "undefined") {
    ssrSeo.current = { title, description, image };
  }

  useEffect(() => {
    // Adresi sabitlemek yerine sitenin gercekte yayinlandigi origin kullanilir
    const tags = getSeoTags({
      title,
      description,
      image,
      origin: window.location.origin,
      pathname: window.location.pathname,
    });

    document.title = tags.title;
    setCanonical(tags.canonical);
    tags.meta.forEach(([attribute, key, content]) =>
      setMeta(attribute, key, content),
    );
    tags.removeMeta.forEach(([attribute, key]) => removeMeta(attribute, key));
  }, [title, description, image]);

  return null;
};

export default Seo;
