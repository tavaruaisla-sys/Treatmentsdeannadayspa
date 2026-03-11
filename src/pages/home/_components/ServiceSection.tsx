import { motion } from "motion/react";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { useState } from "react";

export type TreatmentOption = {
  duration: string;
  price: string;
  thumbnail: string;
  bookingLink?: string;
};

export type TreatmentCard = {
  title: string;
  description: string;
  image: string;
  options: TreatmentOption[];
};

type ServiceSectionProps = {
  id?: string;
  title: string;
  cards: TreatmentCard[];
  bgLight?: boolean;
};

// WhatsApp icon inline SVG
function WhatsAppIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TreatmentCardItem({
  card,
  index,
}: {
  card: TreatmentCard;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="relative rounded-3xl overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300"
      style={{ minHeight: "480px" }}
    >
      {/* Full-bleed background image */}
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle global dark scrim */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col h-full p-3 gap-3" style={{ minHeight: "480px" }}>
        {/* Glassmorphism header */}
        <div
          className="rounded-2xl p-4"
          style={{
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <h3 className="font-serif text-lg font-bold text-white leading-tight">
            {card.title}
          </h3>
          <p className="text-white/80 text-xs font-sans mt-1 leading-relaxed italic">
            {card.description}
          </p>
        </div>

        {/* Push sub-cards to bottom */}
        <div className="flex-1" />

        {/* Stacked white sub-cards */}
        <div className="space-y-2">
          {card.options.map((opt) => (
            <div
              key={opt.duration}
              className="bg-white rounded-2xl flex items-center gap-3 px-3 py-2.5 shadow-sm"
            >
              {/* Circular thumbnail */}
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#00838F]/20">
                <img
                  src={opt.thumbnail}
                  alt={opt.duration}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Duration + price */}
              <div className="flex-1 min-w-0">
                <p className="font-sans font-bold text-sm text-foreground leading-tight">
                  {opt.duration}
                </p>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">
                  {opt.price}
                </p>
              </div>

              {/* Booking button */}
              <a
                href={opt.bookingLink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-1.5 bg-[#00838F] hover:bg-[#006064] text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors duration-200 tracking-wider"
              >
                BOOKING
                <WhatsAppIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const ITEMS_PER_PAGE = 6;

export default function ServiceSection({
  id,
  title,
  cards,
  bgLight,
}: ServiceSectionProps) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);
  const pageCards = cards.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <section
      id={id}
      className={`py-12 px-8 ${bgLight ? "bg-[#f5fbfc]" : "bg-background"}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-6"
        >
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            {title}
          </h2>
          <button className="text-xs text-[#00838F] font-medium font-sans flex items-center gap-1 hover:underline">
            See All <ChevronRightIcon className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pageCards.map((card, i) => (
            <TreatmentCardItem key={`${page}-${i}`} card={card} index={i} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-sm hover:bg-[#00838F] hover:text-white hover:border-[#00838F] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                  page === i
                    ? "bg-[#00838F] text-white"
                    : "border border-border text-foreground hover:bg-[#00838F]/10"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-sm hover:bg-[#00838F] hover:text-white hover:border-[#00838F] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
