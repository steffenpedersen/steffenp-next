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

  return (
    <>
      <meta name="author" content="Steffen Pedersen" />
      {checkDescription && (
        <meta name="description" content={checkDescription} />
      )}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {checkOgDescription && (
        <meta property="og:description" content={checkOgDescription} />
      )}
      <meta property="og:image" content="/images/steffen-pedersen.png" />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {twitterImageDescription && (
        <meta name="twitter:image:alt" content={twitterImageDescription} />
      )}
    </>
  );
}

export default MetaTags;
