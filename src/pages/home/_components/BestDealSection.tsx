import { motion } from "motion/react";
import { StarIcon, ChevronRightIcon } from "lucide-react";

const WA_NUMBER = "6281999231518";

function waLink(title: string, option: string, price: string): string {
  const msg = `Hi, I'd like to book ${title} - ${option} (${price})`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const pamperPackages = [
  {
    name: "Refreshing (1.5 hours)",
    description: "Balinese massage, Body Scrub",
    image: "https://images.unsplash.com/photo-1649751295468-953038600bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    options: [
      { price: "IDR 350.000", duration: "1.5h" },
    ],
  },
  {
    name: "Nourishing (2 hours)",
    description: "Balinese massage, Biokos Facial",
    image: "https://images.unsplash.com/photo-1611073615452-4889cb93422e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    options: [
      { price: "IDR 400.000", duration: "2h" },
      { label: "Collagen upgrade", price: "IDR 450.000", duration: "2h" },
    ],
  },
  {
    name: "Relaxation (2 hours)",
    description: "Warm stone massage & cream bath",
    image: "https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    options: [
      { price: "IDR 450.000", duration: "2h" },
    ],
  },
  {
    name: "Balance (2 hours)",
    description: "Balinese massage, pedi or mani, no colour",
    image: "https://images.unsplash.com/photo-1613457492120-4fcfbb7c3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    options: [
      { price: "IDR 500.000", duration: "2h" },
    ],
  },
  {
    name: "Harmony (2.5 hours)",
    description: "Balinese massage, body scrub, facial & cream bath",
    image: "https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    options: [
      { price: "IDR 750.000", duration: "2.5h" },
    ],
  },
  {
    name: "Perfect Celebration (2.5 hours)",
    description: "Deanna signature massage & 1.5 hours facial-collagen",
    image: "https://images.unsplash.com/photo-1706795034887-be9a24d1ac19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    options: [
      { label: "Couple", price: "IDR 900.000", duration: "2.5h" },
      { label: "Per person", price: "IDR 500.000", duration: "2.5h" },
    ],
  },
  {
    name: "Ratus V",
    description: "Local treatment assist with menstrual discomfort & infection. Feel fresh & eliminate odour",
    image: "https://images.unsplash.com/photo-1709315610156-fda8311ee3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    options: [
      { label: "Treatment", price: "IDR 200.000", duration: "" },
    ],
  },
  {
    name: "Kiddies Spa",
    image: "https://images.unsplash.com/photo-1516815989420-9cb5ef0fce78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    options: [
      { label: "Massage, scrub - yummy chocolate 1 hr", price: "IDR.200.000", duration: "1h" },
      { label: "Massage, scrub - yummy chocolate 30 Min", price: "IDR. 150.000", duration: "30m" },
      { label: "Nail colour - feet & hand", price: "IDR. 150.000", duration: "" },
    ],
  },
];

function PackageCard({ pkg, index }: { pkg: typeof pamperPackages[0]; index: number }) {
  // Check if it's the Kiddies Spa card to apply specific styling
  const isKiddiesSpa = pkg.name === "Kiddies Spa";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`bg-white rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-border/50 flex flex-row items-start p-5 gap-5 h-full ${isKiddiesSpa ? "col-span-1 sm:col-span-2" : ""}`}
    >
      {/* Left Image Section */}
      <div className={`${isKiddiesSpa ? "w-40 h-auto self-stretch" : "w-28 h-28"} rounded-2xl overflow-hidden flex-shrink-0 bg-muted`}>
        <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>

      {/* Right Content Section */}
      <div className="flex-1 flex flex-col min-w-0 gap-1.5">
        {/* Header */}
        <div>
          <h3 className={`font-serif font-bold text-foreground leading-tight ${isKiddiesSpa ? "text-2xl mb-3" : "text-[15px]"}`}>{pkg.name}</h3>
          {pkg.description && (
            <p className="text-muted-foreground text-xs font-sans mt-1 line-clamp-2 leading-relaxed">
              {pkg.description}
            </p>
          )}
        </div>

        {/* Options List */}
        <div className={`flex flex-col ${isKiddiesSpa ? "gap-4 divide-y divide-border/40" : "gap-3 mt-2"}`}>
          {pkg.options.map((opt, idx) => (
            <div key={idx} className={`flex ${isKiddiesSpa ? "flex-row items-center justify-between pt-4 first:pt-0" : "flex-col gap-1"}`}>
              {/* For Kiddies Spa: Label is on the left, Price and Button on the right */}
              {isKiddiesSpa ? (
                <>
                  <p className="text-sm font-medium text-foreground/80 font-sans leading-snug flex-1 mr-4">
                    {opt.label}
                  </p>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-sm font-bold text-[#00838F] whitespace-nowrap">{opt.price}</span>
                    <a
                      href={waLink(pkg.name, opt.label || pkg.name, opt.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-[#00838F] text-white hover:bg-[#006064] px-5 py-2 rounded-full font-bold transition-all duration-200 uppercase tracking-wide flex items-center gap-1 shadow-sm"
                    >
                      Booking
                    </a>
                  </div>
                </>
              ) : (
                // Standard layout for other cards
                <>
                  {opt.label && (
                    <p className="text-xs font-medium text-foreground/80 font-sans leading-snug">
                      {opt.label}
                    </p>
                  )}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-[13px] font-bold text-[#00838F] whitespace-nowrap">{opt.price}</span>
                      {opt.duration && (
                        <>
                          <span className="text-muted-foreground/40 text-[10px]">•</span>
                          <span className="text-[11px] text-muted-foreground whitespace-nowrap">{opt.duration}</span>
                        </>
                      )}
                    </div>
                    <a
                      href={waLink(pkg.name, opt.label || pkg.name, opt.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] bg-[#00838F] text-white hover:bg-[#006064] px-4 py-1.5 rounded-full font-bold transition-all duration-200 uppercase tracking-wide flex items-center gap-1 flex-shrink-0 shadow-sm"
                    >
                      Booking
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function BestDealSection() {
  return (
    <section id="about" className="bg-background py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Best Deal - Left */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-serif text-3xl font-semibold text-foreground">Best Deal</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden border border-border/50"
            >
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1737978697863-5d65495b28ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                  alt="Best deal artist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-xl font-semibold text-white">Daja</p>
                  <p className="text-white/80 text-xs font-sans">Makeup Artists at Beat By DAJ</p>
                  <p className="text-white/60 text-xs font-sans">Oak Grove Blvd, California</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(i => (
                    <StarIcon key={i} className={`w-4 h-4 ${i <= 4 ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">4.2/5 (20 reviews)</span>
                </div>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {"Hi Girls and Guys I'm 4, originally from South Carolina and I've been residing in Atlanta for 3 years. I hope you book me for all of your hair and beauty needs."}
                </p>
                <button className="mt-3 w-full bg-[#00838F] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-[#006064] transition-colors">
                  Book Now
                </button>
              </div>
            </motion.div>
          </div>

          {/* Pamper Package - Right */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-serif text-3xl font-semibold text-foreground">Pamper Package</h2>
              <button className="text-xs text-[#00838F] font-medium font-sans flex items-center gap-1 hover:underline">
                See All <ChevronRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pamperPackages.map((pkg, i) => (
                <PackageCard key={i} pkg={pkg} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
