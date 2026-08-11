import services from "@/app/data/Services";
import ServicesGrid from "./ServiceGrid";

export default function ServicesPage() {
  return (
    <main className="bg-brand-background" id="services">
      {/* Your existing Services Hero */}

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <ServicesGrid services={services} />
        </div>
      </section>

      {/* Your existing CTA */}
    </main>
  );
}
