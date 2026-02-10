import HeroWrapper from "@/components/HeroWrapper";
import ServiceCard from "@/components/ServiceCard";
import useServices from "@/hooks/useServices";

export default function Services() {
  const { services } = useServices();

  return (
    <>
      <HeroWrapper title="Layanan Vryce" />
      <section className="py-12 bg-primary/4">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
