import ServiceCard from "./ServiceCard";

export default function ServicesGrid({ services }) {
  return (
    <div
      className="
        grid
        items-start
        gap-6

        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {services.map((service) => (
        <ServiceCard key={service.number} service={service} />
      ))}
    </div>
  );
}
