import Image from "next/image";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
// import * as motion from "motion/react-client";
// import * as m from "motion/react-m";
import * as m from "motion/react-m";
import { fades } from "@/lib/animations";
import { UserIcon } from "lucide-react";

type Props = {
  talent: { name: string; role: string; image: string };
};

export default function TalentCard({ talent }: Props) {
  const roleTop = talent.role.split("|")[0];
  const roleBottom = talent.role.split("|")[1];

  return (
    <m.div
      variants={fades}
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      // className="w-auto flex flex-col items-center space-y-3 bg-white py-6 px-3 rounded-xl"
      className="w-auto flex flex-col items-center space-y-3"
    >
      {talent.image ? (
        <Image
          src={talent.image}
          alt="vryce talent"
          width={100}
          height={100}
          className="size-24 object-cover object-center rounded-full border"
        />
      ) : (
        <div className="size-24 rounded-full border flex items-center justify-center">
          <UserIcon className="size-10" />
        </div>
      )}
      <div className="text-center">
        <h3 className="font-medium">{talent.name}</h3>
        <p className="text-gray-500 text-sm">
          {roleTop}
          <br />
          {roleBottom}
        </p>
      </div>
      <div className="flex gap-4">
        <FaInstagram />
        <FaXTwitter />
      </div>
    </m.div>
  );
}
