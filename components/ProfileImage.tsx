import React from "react";
import styled from "styled-components";
import { Device } from "../styles/components";
import Boop from "./Boop";
import Image from "next/image";

function ProfileImage({ size }) {
  return (
    <a href="mailto:steffen.pedersen@live.dk">
      <Boop scale={1.02} timing={200}>
        <Image
          className="rounded-full drop-shadow-md"
          priority
          src="/images/profile.png"
          height={size}
          width={size}
          alt="Steffen Pedersen"
        />
      </Boop>
    </a>
  );
}

export default ProfileImage;
