import React from "react";

function MetaTags({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterImageDescription,
}: {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterImageDescription?: string;
}) {
  const checkDescription = description
    ? description
    : "Notes and blog posts mainly about frontend development from Steffen Pedersen";
  return (
    <>
      <title>{title}</title>
      <meta name="author" content="Steffen Pedersen" />
      {checkDescription && (
        <meta name="description" content={checkDescription} />
      )}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:site_name" content="Steffen Pedersen" />
      <meta name="twitter:card" content="summary_large_image" />
      {twitterImageDescription && (
        <meta name="twitter:image:alt" content={twitterImageDescription} />
      )}
    </>
  );
}

export default MetaTags;
