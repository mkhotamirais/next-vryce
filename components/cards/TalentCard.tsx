import Image from "next/image";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import * as motion from "motion/react-client";
import { fades } from "@/lib/animations";

type Props = {
  talent: { name: string; role: string; image: string };
};

export default function TalentCard({ talent }: Props) {
  return (
    <motion.div
      variants={fades}
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      className="w-auto flex flex-col items-center space-y-3"
    >
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
        <FaXTwitter />
      </div>
    </motion.div>
  );
}
