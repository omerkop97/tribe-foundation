export type Pillar = {
  number: string;
  tab: string;
  accent: string;
  location: string;
  heading: string;
  body: string;
  stat: string;
  statLabel: string;
  bullets: string[];
  linkLabel: string;
  linkHref: string;
};

export const pillars: Pillar[] = [
  {
    number: "01",
    tab: "Educatie",
    accent: "#C99A45",
    location: "Pakistan · Educatie",
    heading: "Kennis en beweging die blijven.",
    body: "We ondersteunen een school in Pakistan met praktische middelen én lokale kennis. Er zijn boeken beschikbaar gemaakt, een waterdispenser geplaatst voor circa 250 kinderen en we leiden een lokale trainer op om structureel sport- en bokslessen te geven.",
    stat: "250",
    statLabel: "kinderen met toegang tot schoon drinkwater",
    bullets: [
      "Onderwijsmaterialen voor kinderen zonder eigen middelen",
      "Schoon drinkwater tijdens de schooldag",
      "Lokale trainer voor een duurzaam sportprogramma",
    ],
    linkLabel: "Bekijk project Pakistan",
    linkHref: "/projecten-en-impact#educatie",
  },
  {
    number: "02",
    tab: "Sportparticipatie",
    accent: "#6FBF97",
    location: "Zevenaar · Sportparticipatie",
    heading: "Sporten zonder drempels.",
    body: "In Zevenaar nemen we de financiële en praktische drempels weg die kinderen buiten de sportclub houden: een tegemoetkoming in de contributie, sportmateriaal voor wie dat niet zelf kan betalen, en laagdrempelige kennismakingstrainingen bij lokale clubs.",
    stat: "Drempelvrij",
    statLabel: "contributie, materiaal en toeleiding naar lokale sportclubs",
    bullets: [
      "Bijdrage in contributie voor gezinnen die dat nodig hebben",
      "Sportmateriaal en -kleding beschikbaar stellen",
      "Laagdrempelige kennismaking met lokale sportclubs",
    ],
    linkLabel: "Bekijk project Zevenaar",
    linkHref: "/projecten-en-impact#sportparticipatie",
  },
  {
    number: "03",
    tab: "Talentontwikkeling",
    accent: "#7FADC6",
    location: "Zevenaar & internationaal · Talentontwikkeling",
    heading: "Ruimte om door te groeien.",
    body: "Voor jongeren met talent stopt de weg vaak bij een te duur lidmaatschap of ontbrekende begeleiding. Wij koppelen talent aan coaching, doorstroom naar een hoger niveau en waar nodig aanvullende scholing, zodat sportief talent niet verloren gaat door omstandigheden.",
    stat: "Doorstroom",
    statLabel: "coaching en begeleiding naar een hoger niveau",
    bullets: [
      "Coaching en begeleiding richting een hoger niveau",
      "Koppeling met clubs en opleidingstrajecten",
      "Aanvullende scholing waar sport en leren samenkomen",
    ],
    linkLabel: "Meer over talentontwikkeling",
    linkHref: "/projecten-en-impact#talentontwikkeling",
  },
];
