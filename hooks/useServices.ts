import { useTranslations } from "next-intl";
export interface IService {
  title: string;
  price: string;
  priceFor: string;
  priceNote: string;
  purpose: string;
  benefits: string[];
}
export default function useServices() {
  const s = useTranslations("services");

  const s1_title = s("service_1.title");
  const s1_price = s("service_1.price");
  const s1_priceFor = s("service_1.priceFor");
  const s1_priceNote = s("service_1.priceNote");
  const s1_purpose = s("service_1.purpose");
  const s1_benefits = s("service_1.benefits").split(" | ");
  const s1 = {
    title: s1_title,
    price: s1_price,
    priceFor: s1_priceFor,
    priceNote: s1_priceNote,
    purpose: s1_purpose,
    benefits: s1_benefits,
  };

  const s2_title = s("service_2.title");
  const s2_price = s("service_2.price");
  const s2_priceFor = s("service_2.priceFor");
  const s2_priceNote = s("service_2.priceNote");
  const s2_purpose = s("service_2.purpose");
  const s2_benefits = s("service_2.benefits").split(" | ");
  const s2 = {
    title: s2_title,
    price: s2_price,
    priceFor: s2_priceFor,
    priceNote: s2_priceNote,
    purpose: s2_purpose,
    benefits: s2_benefits,
  };

  const s3_title = s("service_3.title");
  const s3_price = s("service_3.price");
  const s3_priceFor = s("service_3.priceFor");
  const s3_priceNote = s("service_3.priceNote");
  const s3_purpose = s("service_3.purpose");
  const s3_benefits = s("service_3.benefits").split(" | ");
  const s3 = {
    title: s3_title,
    price: s3_price,
    priceFor: s3_priceFor,
    priceNote: s3_priceNote,
    purpose: s3_purpose,
    benefits: s3_benefits,
  };

  const s4_title = s("service_4.title");
  const s4_price = s("service_4.price");
  const s4_priceFor = s("service_4.priceFor");
  const s4_priceNote = s("service_4.priceNote");
  const s4_purpose = s("service_4.purpose");
  const s4_benefits = s("service_4.benefits").split(" | ");
  const s4 = {
    title: s4_title,
    price: s4_price,
    priceFor: s4_priceFor,
    priceNote: s4_priceNote,
    purpose: s4_purpose,
    benefits: s4_benefits,
  };

  const s5_title = s("service_5.title");
  const s5_price = s("service_5.price");
  const s5_priceFor = s("service_5.priceFor");
  const s5_priceNote = s("service_5.priceNote");
  const s5_purpose = s("service_5.purpose");
  const s5_benefits = s("service_5.benefits").split(" | ");
  const s5 = {
    title: s5_title,
    price: s5_price,
    priceFor: s5_priceFor,
    priceNote: s5_priceNote,
    purpose: s5_purpose,
    benefits: s5_benefits,
  };

  const s6_title = s("service_6.title");
  const s6_price = s("service_6.price");
  const s6_priceFor = s("service_6.priceFor");
  const s6_priceNote = s("service_6.priceNote");
  const s6_purpose = s("service_6.purpose");
  const s6_benefits = s("service_6.benefits").split(" | ");
  const s6 = {
    title: s6_title,
    price: s6_price,
    priceFor: s6_priceFor,
    priceNote: s6_priceNote,
    purpose: s6_purpose,
    benefits: s6_benefits,
  };

  const s7_title = s("service_7.title");
  const s7_price = s("service_7.price");
  const s7_priceFor = s("service_7.priceFor");
  const s7_priceNote = s("service_7.priceNote");
  const s7_purpose = s("service_7.purpose");
  const s7_benefits = s("service_7.benefits").split(" | ");
  const s7 = {
    title: s7_title,
    price: s7_price,
    priceFor: s7_priceFor,
    priceNote: s7_priceNote,
    purpose: s7_purpose,
    benefits: s7_benefits,
  };

  const s8_title = s("service_8.title");
  const s8_price = s("service_8.price");
  const s8_priceFor = s("service_8.priceFor");
  const s8_priceNote = s("service_8.priceNote");
  const s8_purpose = s("service_8.purpose");
  const s8_benefits = s("service_8.benefits").split(" | ");
  const s8 = {
    title: s8_title,
    price: s8_price,
    priceFor: s8_priceFor,
    priceNote: s8_priceNote,
    purpose: s8_purpose,
    benefits: s8_benefits,
  };

  const s9_title = s("service_9.title");
  const s9_price = s("service_9.price");
  const s9_priceFor = s("service_9.priceFor");
  const s9_priceNote = s("service_9.priceNote");
  const s9_purpose = s("service_9.purpose");
  const s9_benefits = s("service_9.benefits").split(" | ");
  const s9 = {
    title: s9_title,
    price: s9_price,
    priceFor: s9_priceFor,
    priceNote: s9_priceNote,
    purpose: s9_purpose,
    benefits: s9_benefits,
  };

  const services = [s1, s2, s3, s4, s5, s6, s7, s8, s9] as IService[];

  return { services };
}
