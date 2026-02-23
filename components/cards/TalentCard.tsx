import Image from "next/image";
import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

type Props = {
  talent: { name: string; role: string; image: string };
};

export default function TalentCard({ talent }: Props) {
  return (
    <div className="w-40 flex flex-col items-center space-y-3">
      <Image
        src={talent.image}
        alt="vryce talent"
        width={100}
        height={100}
        className="size-25 object-cover object-center rounded-full border zoom-in-50"
      />
      <div className="text-center">
        <h3 className="font-medium">{talent.name}</h3>
        <p className="text-gray-500 text-xs">{talent.role}</p>
      </div>
      <div className="flex gap-4">
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  );
}
