import { motion } from "motion/react";
import { CheckIcon } from "lucide-react";

type ServiceCard = {
  title: string;
  subtitle?: string;
  image: string;
  items: string[];
};

const cards: ServiceCard[] = [
  {
    title: "LASH & HAIR",
    image:
      "https://images.unsplash.com/photo-1553103326-609d1bd0ca03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    items: [
      "Eyelash Extension",
      "Lash Lift",
      "Eyebrow Tint",
      "Eyelash Tint",
      "Alfaparf Keratin Smoothing",
      "Hair Braiding / Extension",
    ],
  },
  {
    title: "IV TREATMENT",
    subtitle: "Start from IDR 1,5M",
    image:
      "https://images.unsplash.com/photo-1763310225009-50214e3c99d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    items: [
      "Immune Booster",
      "Anti Oxidant",
      "Anti Aging",
      "Bali Belly",
      "Dengue Recovery",
    ],
  },
  {
    title: "WEDDINGS & SPECIAL OCCASIONS",
    image:
      "https://images.unsplash.com/photo-1481531010736-287bcfea03d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    items: [
      "Pre Wedding Bridle Party",
      "Wedding Day Makeup & Hair",
      "Birthdays & Parties",
      "Price Available On Consultation",
    ],
  },
  {
    title: "DEANNA HEALING",
    image:
      "https://images.unsplash.com/photo-1649751295468-953038600bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    items: [
      "Neck & Back",
      "Sciatica",
      "Knees, Ankles & Joints",
      "Frozen Shoulder",
    ],
  },
  {
    title: "DEANNA LYMPHATIC WOOD THERAPY",
    image:
      "https://images.unsplash.com/photo-1767043088777-1884c2ef6c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    items: [
      "Body Sculpting",
      "Lymphatic Drainage",
      "Anti Cellulite",
      "Slimming",
    ],
  },
];

function ServiceCard({
  card,
  index,
}: {
  card: ServiceCard;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-border/40 flex flex-col"
    >
      {/* Image with gradient overlay */}
      <div className="relative h-40 flex-shrink-0">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
        />
        {/* Dark gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* Title overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="font-serif text-base font-semibold text-white leading-tight">
            {card.title}
          </p>
          {card.subtitle && (
            <p className="text-white/75 text-[11px] font-sans mt-0.5">
              {card.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content below image */}
      <div className="flex flex-col flex-1 p-3 gap-2">
        {/* Service list */}
        <ul className="flex-1 space-y-1">
          {card.items.map((item) => (
            <li key={item} className="flex items-start gap-1.5">
              <CheckIcon className="w-3 h-3 text-[#00838F] mt-0.5 flex-shrink-0" />
              <span className="text-xs text-foreground/80 font-sans leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Book Now button */}
        <button className="w-full mt-2 bg-[#00838F] hover:bg-[#006064] text-white font-sans font-semibold text-xs py-2.5 rounded-xl transition-colors duration-200 tracking-wide">
          Book Now
        </button>
      </div>
    </motion.div>
  );
}

export default function PremiumSection() {
  return (
    <section
      className="py-12 px-8"
      style={{ background: "linear-gradient(135deg, #e0f7fa 0%, #f0fbfc 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl font-semibold text-foreground mb-7"
        >
          Premium & Beauty Rejuvenation
        </motion.h2>

        {/* Single row — 5 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cards.map((card, i) => (
            <ServiceCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
