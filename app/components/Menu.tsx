import Reveal from "./Reveal";

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuCategory = {
  title: string;
  items: MenuItem[];
};

const menu: MenuCategory[] = [
  {
    title: "Pizza",
    items: [
      {
        name: "Pizza Margherita",
        description: "Paradajz sos, sir, začinsko bilje",
        price: "10 KM",
      },
      {
        name: "Pizza Funghi",
        description: "Paradajz sos, gljive, začinsko bilje",
        price: "12 KM",
      },
      {
        name: "Pizza Vegetariana",
        description:
          "Paradajz sos, gljive, brokoli, paprika, kukuruz, začinsko bilje",
        price: "14 KM",
      },
      {
        name: "Pizza Speziale",
        description:
          "Paradajz sos, sir, pileći file, svježi paradajz, specijalni sos, začinsko bilje",
        price: "16 KM",
      },
      {
        name: "Pizza Frutti di Mare",
        description: "Paradajz sos, morski plodovi, crveni luk, začinsko bilje",
        price: "18 KM",
      },
    ],
  },
  {
    title: "Paste",
    items: [
      {
        name: "Penne Arrabbiata",
        description: "Pikantni paradajz sos",
        price: "10 KM",
      },
      {
        name: "Spaghetti Carbonara",
        description: "Pileća šunka, žumance, sir",
        price: "12 KM",
      },
      {
        name: "Penne Quattro Formaggi",
        description: "Dimljeni sir, Gorgonzola, Mozzarella, Parmezan, vrhnje za kuhanje",
        price: "14 KM",
      },
      {
        name: "Penne Pollo",
        description: "Piletina, gljive, vrhnje za kuhanje",
        price: "15 KM",
      },
      {
        name: "Penne Pesto Verde",
        description: "Bosiljak, parmezan, sjemenke, piletina",
        price: "14 KM",
      },
      {
        name: "Spaghetti Bolognese",
        description: "Bolognese sos",
        price: "14 KM",
      },
      {
        name: "Tagliatelle Salmone",
        description: "Losos, krema",
        price: "19 KM",
      },
      {
        name: "Spaghetti Frutti di Mare",
        description: "Paradajz sos, morski plodovi",
        price: "19 KM",
      },
      {
        name: "Pasta Tartufo",
        description: "Tagliatelle, biftek, krema od tartufa",
        price: "24 KM",
      },
    ],
  },
  {
    title: "Rižoto",
    items: [
      {
        name: "Risotto Gamberetti",
        description: "Gamberi, povrće",
        price: "24 KM",
      },
    ],
  },
  {
    title: "Wok",
    items: [
      {
        name: "Wok piletina",
        description: "Piletina, sezonsko povrće",
        price: "16 KM",
      },
      {
        name: "Wok biftek",
        description: "Biftek, sezonsko povrće",
        price: "19 KM",
      },
      {
        name: "Gnocchi al Pomodoro",
        description: "Paradajz sos, Mozzarella",
        price: "12 KM",
      },
    ],
  },
  {
    title: "Pinsa Romana",
    items: [
      {
        name: "Pinsa Classica",
        description:
          "Paradajz sos, sir, svježa salata, sezonsko povrće, piletina, gljive",
        price: "23 KM",
      },
      {
        name: "Pinsa Buratta",
        description: "Rukola, cherry paradajz, burrata sir, balsamico",
        price: "26 KM",
      },
      {
        name: "Pinsa Bifteka",
        description: "Paradajz sos, sir, biftek, sezonska salata",
        price: "26 KM",
      },
      {
        name: "Pinsa Gamberetti",
        description: "Paradajz sos, kozice, svježa salata",
        price: "26 KM",
      },
      {
        name: "Pinsa Carpaccio",
        description: "Paradajz sos, rukola, cherry paradajz, Parmezan, rostbeef",
        price: "26 KM",
      },
    ],
  },
  {
    title: "Pinsa iz tave",
    items: [
      {
        name: "Pinsa Pollo - tava",
        description: "Piletina, povrće",
        price: "18 KM",
      },
      {
        name: "Pinsa Gamberetti - tava",
        description: "Kozice, češnjak",
        price: "26 KM",
      },
      {
        name: "Pinsa Bifteka - tava",
        description: "Biftek, gljive, crveni luk",
        price: "26 KM",
      },
    ],
  },
  {
    title: "Salate",
    items: [
      {
        name: "Salata sa piletinom",
        description: "Miješana salata sa sezonskim povrćem, dressing",
        price: "15 KM",
      },
      {
        name: "Salata sa tunjevinom",
        description: "Miješana salata sa sezonskim povrćem, dressing",
        price: "15 KM",
      },
      {
        name: "Salata sa biftekom",
        description: "Miješana salata sa sezonskim povrćem, dressing",
        price: "22 KM",
      },
      {
        name: "Salata sa kozicama",
        description: "Miješana salata sa sezonskim povrćem, dressing",
        price: "22 KM",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-foreground/[0.03] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            Naš meni
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">Birano za vas</h2>
          <p className="mx-auto mt-4 max-w-md text-foreground/70">
            Izbor naših jela - kompletan meni dostupan u restoranu.
          </p>
        </Reveal>
        <div className="grid gap-10 sm:gap-12 sm:grid-cols-2">
          {menu.map((category, i) => (
            <Reveal key={category.title} delay={(i % 2) * 0.1}>
              <h3 className="font-display text-2xl text-accent">
                {category.title}
              </h3>
              <div className="mt-5 space-y-5">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between gap-4">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-foreground/60">
                        {item.description}
                      </p>
                    </div>
                    <p className="shrink-0 font-medium text-gold">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
