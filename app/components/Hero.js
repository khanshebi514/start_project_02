import towerImage from "@/public/electrical tower.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary ">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/5" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-2xl">
            <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              Electrical Engineering Consultancy
            </span>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Building Strong.
              <br />
              Powering the Future.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-brand-primary">
              Professional construction and electrical solutions designed around
              quality, safety, reliability, and long-term performance.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-lg bg-brand-accent px-6 py-3 font-semibold text-primary transition hover:opacity-90"
              >
                Explore Services
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>

            {/* Small stats */}
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-8">
              <div>
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="mt-1 text-sm text-white/60">Years Experience</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">100+</h3>
                <p className="mt-1 text-sm text-white/60">Projects</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">100%</h3>
                <p className="mt-1 text-sm text-white/60">Commitment</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[520px] max-w-[500px]">
              {/* Main image */}
              <div className="absolute right-0 top-0 h-[420px] w-[360px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src={towerImage}
                  alt="Construction project"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Secondary card */}
              <div className="absolute bottom-0 left-0 w-64 rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  ⚡
                </div>

                <h3 className="text-lg font-semibold">Electrical Solutions</h3>

                <p className="mt-2 text-sm leading-6 text-white/80">
                  Reliable electrical systems built for safety and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
