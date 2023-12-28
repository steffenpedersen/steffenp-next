import Image from "next/image";

function ProfileImage({ size }) {
  return (
    <div>
      <Image
        className="rounded-full drop-shadow-md"
        priority
        src="/images/profile.jpg"
        height={size}
        width={size}
        alt="Steffen Pedersen"
      />
    </div>
  );
}

export default ProfileImage;
