export function Marquee({ items }: { items: string[] }) {
  const row = (
    <ul className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="font-display px-8 text-3xl text-offwhite md:px-12 md:text-5xl">
            {item}
          </span>
          <span className="h-2 w-2 rotate-45 bg-gold" />
        </li>
      ))}
    </ul>
  );

  return (
    <div aria-hidden className="marquee overflow-hidden bg-forest py-6 md:py-8">
      <div className="marquee-track flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
