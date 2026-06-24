import React from "react";
import { motion } from "framer-motion";
import { Coffee, MapPin, Clock, Phone, Mail } from "lucide-react";

export default function App() {
  const products = [
    "Single Origin Ethiopia",
    "Colombian Reserve",
    "Forest Latte",
    "Honey Cinnamon Flat White",
    "Almond Croissant",
    "Vanilla Bean Danish",
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "https://images.unsplash.com/photo-1517705008128-361805f42e86",
    "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "https://images.unsplash.com/photo-1459755486867-b55449bb39ff",
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
  ];

  return (
    <div className="bg-[#F5F1EB] text-[#1E1E1E]">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/50 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl text-[#234236]">NORD ROAST</div>
          <div className="hidden md:flex gap-8">
            <a href="#home">Home</a>
            <a href="#coffee">Coffee</a>
            <a href="#story">Story</a>
            <a href="#gallery">Gallery</a>
            <a href="#visit">Visit</a>
          </div>
          <button className="bg-[#234236] text-white px-5 py-3 rounded-full">
            Order Online
          </button>
        </div>
      </nav>

      <section id="home" className="h-screen relative flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white max-w-4xl px-6"
        >
          <p className="tracking-[0.3em] mb-4">SMALL BATCH ROASTERY</p>
          <h1 className="text-6xl md:text-8xl font-light mb-6">
            Coffee Crafted With Intention
          </h1>
          <p className="text-xl mb-8">
            Exceptional beans sourced responsibly and roasted in small batches.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full">
              Explore Menu
            </button>
            <button className="border border-white px-8 py-4 rounded-full">
              Our Story
            </button>
          </div>
        </motion.div>
      </section>

      <section id="coffee" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            className="rounded-3xl"
          />
          <div>
            <h2 className="text-5xl mb-6 text-[#234236]">From Farm To Cup</h2>
            <p className="text-lg leading-relaxed">
              Every bean tells a story. We partner directly with growers,
              ensuring ethical sourcing and exceptional quality.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl text-center mb-4 text-[#234236]">
          Our Signature Collection
        </h2>
        <p className="text-center mb-12">Curated favorites loved by our community.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
            >
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            className="rounded-3xl"
          />
          <div>
            <h2 className="text-5xl mb-6 text-[#234236]">
              The People Behind The Roast
            </h2>
            <p className="text-lg leading-relaxed">
              Our mission is simple: create meaningful coffee experiences while
              honoring the people who grow, roast, and brew every cup.
            </p>
            <p className="mt-6 font-semibold">Oliver Hart — Master Roaster</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl text-center mb-12 text-[#234236]">
          Coffee Gallery
        </h2>
        <div className="columns-1 md:columns-3 gap-6">
          {gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              className="mb-6 rounded-3xl w-full hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

{/*------------------------  Review Section -------------------------------------------------- */}
      
     <section className="max-w-7xl mx-auto px-6 py-32">
  <div className="text-center mb-20">
    <p className="uppercase tracking-[0.3em] text-[#234236]/60 text-sm mb-4">
      Testimonials
    </p>

    <h2 className="text-5xl md:text-6xl font-light text-[#234236] mb-6">
      What Our Guests Say
    </h2>

    <div className="w-24 h-px bg-[#234236]/20 mx-auto" />
  </div>

  <div className="grid lg:grid-cols-3 gap-8">
    {[
      {
        quote:
          "Hands down the finest coffee experience in New York. Every cup feels intentional and beautifully crafted.",
        name: "Sophia Bennett",
        role: "Creative Director",
      },
      {
        quote:
          "The atmosphere, the service, and the coffee are exceptional. It's become part of my daily ritual.",
        name: "James Carter",
        role: "Architect",
      },
      {
        quote:
          "A perfect blend of Scandinavian design and artisan coffee culture. Truly unforgettable.",
        name: "Olivia Thompson",
        role: "Photographer",
      },
    ].map((review, i) => (
      <div
        key={i}
        className="
          relative
          bg-white/60
          backdrop-blur-md
          border
          border-[#234236]/10
          rounded-[32px]
          p-10
          hover:-translate-y-2
          hover:shadow-2xl
          transition-all
          duration-500
        "
      >
        <div className="text-7xl text-[#234236]/10 leading-none mb-6">
          "
        </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-10">
          {review.quote}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-[#234236]">
              {review.name}
            </h4>

            <p className="text-sm text-gray-500">
              {review.role}
            </p>
          </div>

          <div className="text-[#C7A977] text-lg">
            ★★★★★
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      <section id="visit" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl mb-8 text-[#234236]">Visit Us</h2>
            <div className="space-y-4">
              <p className="flex gap-3"><MapPin /> 125 Artisan Lane, New York</p>
              <p className="flex gap-3"><Clock /> Mon–Fri 7AM–6PM</p>
              <p className="flex gap-3"><Phone /> (212) 555-0124</p>
              <p className="flex gap-3"><Mail /> hello@nordroast.com</p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
            className="rounded-3xl"
          />
        </div>
      </section>


{/*-------------------------  Email section -------------------------------------------------- */}

      <section className="py-24 text-center bg-[#234236] text-white">
        <Coffee className="mx-auto mb-6" size={40} />
        <h2 className="text-5xl mb-4">Join Our Coffee Community</h2>
        <p className="mb-8">
          Get exclusive releases, seasonal blends, and brewing tips.
        </p>
       <div
  className="
    max-w-2xl
    mx-auto
    flex
    flex-col
    md:flex-row
    items-center
    gap-2
    p-2
    rounded-3xl
    md:rounded-full
    border
    border-white/20
    bg-white/10
    backdrop-blur-md
    focus-within:border-white/40
    transition
  "
>
  <input
    type="email"
    placeholder="Enter your email"
    className="
      flex-1
      bg-transparent
      px-6
      py-4
      text-white
      outline-none
      w-full
    "
  />

  <button
    className="
      bg-white
      text-[#234236]
      px-8
      py-4
      rounded-full
      font-medium
      hover:scale-105
      transition
      whitespace-nowrap
    "
  >
    Subscribe
  </button>
</div>
      </section>

      {/*  ------------------------- Footer ---------------------------------------------------- */}

      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">NORD ROAST</h3>
          <p>© 2026 Nord Roast. Crafted with intention.</p>
        </div>
      </footer>
    </div>
  );
}
