import type { CSSProperties } from "react";
import type { translations } from "@/lib/i18n";

type JourneyCardContent =
  | (typeof translations)["ar"]["journey"]["cards"][number]
  | (typeof translations)["en"]["journey"]["cards"][number];

type JourneyCardProps = {
  card: JourneyCardContent;
  featured?: boolean;
};

export function JourneyCard({ card, featured = false }: JourneyCardProps) {
  return (
    <article
      className="journey-card"
      data-featured={featured}
      data-tone={card.tone}
      style={{ "--journey-card-image": `url(${card.image})` } as CSSProperties}
    >
      <div className="journey-card__image" aria-hidden="true" />
      <div className="journey-card__shade" aria-hidden="true" />
      <span className="journey-card__number">{card.number}</span>
      <div className="journey-card__body">
        <h3 className="journey-card__title">{card.title}</h3>
        <p className="journey-card__description">{card.description}</p>
        <ul className="journey-card__keywords" aria-label="Keywords">
          {card.keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
        <span className="journey-card__motion-line" aria-hidden="true" />
      </div>
    </article>
  );
}


