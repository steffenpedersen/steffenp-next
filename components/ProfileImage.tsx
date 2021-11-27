import Image from "next/image";
import React from "react";
import Boop from "./Boop";

function ProfileImage({ size }) {
  return (
    <Boop scale={1.02} timing={200}>
      <a href="mailto:steffen.pedersen@live.dk">
        <Image
          className="rounded-full drop-shadow-md"
          priority
          src="/images/profile.png"
          height={size}
          width={size}
          alt="Steffen Pedersen"
        />
      </a>
    </Boop>
  );
}

export default ProfileImage;
