import React from "react";

function MetaTags({
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterImageDescription,
}: {
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

  const checkOgDescription = ogDescription
    ? ogDescription
    : "Notes and blog posts mainly about frontend development from Steffen Pedersen";
  const checkOgImage = ogImage ? ogImage : "/images/steffen-pedersen.png";

  return (
    <>
      <meta name="author" content="Steffen Pedersen" />
      <meta name="description" content={checkDescription} />
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      <meta property="og:description" content={checkOgDescription} />
      {ogImage && <meta property="og:image" content={checkOgImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {twitterImageDescription && (
        <meta name="twitter:image:alt" content={twitterImageDescription} />
      )}
    </>
  );
}

export default MetaTags;
