export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
};

export type MenuItem = {
  id: string;
  name: string;
  categorySlug: string;
  price: string;
  estimatedPrice: string;
  calories: string;
  description: string;
  image: string;
};

export type Deal = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const categories: Category[] = [
  { id: "c1",  name: "NEW! Crabfest",       slug: "new-crabfest",       description: "Summer 2026 Crabfest is here! Enjoy fresh crab your way with 6 bold flavor options.", image: "/new-crabfest-boil.webp" },
  { id: "c2",  name: "Seafood Boils",        slug: "seafood-boils",       description: "Indulge in a classic seafood boil loaded with shrimp, crab, corn, and potatoes.", image: "/sailors-seafood-boil.webp" },
  { id: "c3",  name: "Signature Feasts",     slug: "signature-feasts",    description: "Our most legendary combinations of Maine lobster, snow crab, and wild-caught seafood.", image: "/ultimate-feast.webp" },
  { id: "c4",  name: "Starters",             slug: "starters",            description: "Kick off your meal with our fan-favorite appetizers and shareable dips.", image: "/seafood-stuffed-mushrooms.webp" },
  { id: "c5",  name: "Bowls & Sandwiches",   slug: "bowls-sandwiches",    description: "Quick, satisfying power bowls and handheld seafood favorites for lunch or dinner.", image: "/baja-shrimp-bowl.webp" },
  { id: "c6",  name: "Shrimp Classics",      slug: "shrimp-classics",     description: "From garlic scampi to coconut shrimp - shrimp cooked every delicious way.", image: "/walts-favorite-shrimp.webp" },
  { id: "c7",  name: "Land & Sea Classics",  slug: "land-sea-classics",   description: "Premium steaks, fresh fish, and tender chicken paired with signature seafood.", image: "/surf-turf-lobster-tail-sirloin.webp" },
  { id: "c8",  name: "Pastas",               slug: "pastas",              description: "Rich, creamy Alfredo and bold pasta dishes featuring premium seafood favorites.", image: "/shrimp-linguini-alfredo.webp" },
  { id: "c9",  name: "Lunch Favorites",      slug: "lunch-favorites",     description: "Satisfying lunch-sized portions and combos starting at $8.99 with fast service.", image: "/shrimp-linguini-alfredo-lunch.webp" },
  { id: "c10", name: "Soups & Sides",        slug: "soups-sides",         description: "Comforting soups, crisp garden salads, and delicious signature side dishes.", image: "/new-england-clam-chowder-bowl.webp" },
  { id: "c11", name: "Biscuits & Extras",    slug: "biscuits-extras",     description: "Our iconic warm Cheddar Bay Biscuits and tasty entrée add-ons.", image: "/cheddar-bay-biscuits-order-of-2.webp" },
  { id: "c12", name: "Desserts",             slug: "desserts",            description: "End your meal on a sweet note with our decadent cakes and cheesecakes.", image: "/chocolate-wave.webp" },
  { id: "c13", name: "Kids",                 slug: "kids",                description: "Perfectly portioned meals for kids ages 4-12, each with a healthy side and drink.", image: "/popcorn-shrimp.webp" },
  { id: "c14", name: "Beverages",            slug: "beverages",           description: "Signature cocktails, tropical margaritas, and refreshing iced beverages.", image: "/sunset-passion-colada.webp" },
  { id: "c15", name: "Family Meals",         slug: "family-meals",        description: "Generous seafood feasts and bundles designed to feed four or more people.", image: "/family-seafood-feast.webp" },
  { id: "c16", name: "Hot Platters",         slug: "hot-platters",        description: "Sizzling platters of golden fried and wood-grilled seafood combinations.", image: "/fried-seafood-platter.webp" },
];

export const menuItems: MenuItem[] = [
  // ── NEW! CRABFEST ──────────────────────────────────────────────────────
  {
    id: "crab1",
    name: "Crab Your Way - Snow Crab",
    categorySlug: "new-crabfest",
    price: "$34.99",
    estimatedPrice: "$28 - $38",
    calories: "780 Cal",
    description: "Enjoy sweet snow crab legs served over crispy roasted potatoes with your choice of savory garlic, Cajun spice, or Old Bay seasoning plus a warm side.",
    image: "/crab-your-way-snow-crab.webp"
  },
  {
    id: "crab2",
    name: "Crab Your Way - Bairdi Crab",
    categorySlug: "new-crabfest",
    price: "$44.99",
    estimatedPrice: "$35 - $50",
    calories: "890 Cal",
    description: "Savor premium wild-caught Bairdi crab legs offering succulent, tender meat tossed in signature garlic butter seasoning and served alongside your favorite Red Lobster side dish.",
    image: "/crab-your-way-bairdi-crab.webp"
  },
  {
    id: "crab3",
    name: "New Crabfest Boil",
    categorySlug: "new-crabfest",
    price: "$36.99",
    estimatedPrice: "$28 - $40",
    calories: "1,150 Cal",
    description: "Delight in generous portions of snow crab clusters, plump shrimp, sweet corn on the cob, and tender red potatoes steamed in bold seafood boil seasoning.",
    image: "/new-crabfest-boil.webp"
  },
  {
    id: "crab4",
    name: "Crab & Shrimp Linguini Alfredo",
    categorySlug: "new-crabfest",
    price: "$24.99",
    estimatedPrice: "$22 - $28",
    calories: "1,320 Cal",
    description: "Tender lump crab meat and sautéed shrimp folded into rich garlic Parmesan Alfredo sauce, served over tender pasta with unlimited warm Cheddar Bay Biscuits.",
    image: "/crab-shrimp-linguini-alfredo.webp"
  },
  {
    id: "crab5",
    name: "Salmon Oscar",
    categorySlug: "new-crabfest",
    price: "$29.99",
    estimatedPrice: "$25 - $35",
    calories: "920 Cal",
    description: "Fresh wood-grilled Atlantic salmon fillet generously topped with luscious lump crab meat, drizzled with velvety hollandaise butter sauce, and served with two dinner sides.",
    image: "/salmon-oscar.webp"
  },
  {
    id: "crab6",
    name: "Steak Oscar",
    categorySlug: "new-crabfest",
    price: "$37.99",
    estimatedPrice: "$32 - $45",
    calories: "1,080 Cal",
    description: "A seasoned center-cut sirloin steak grilled to perfection, crowned with delicate sweet crab meat, smothered in decadent citrus hollandaise sauce, and paired with two sides.",
    image: "/steak-oscar.webp"
  },
  {
    id: "crab7",
    name: "Crab-Topped Stuffed Mushrooms",
    categorySlug: "new-crabfest",
    price: "$15.99",
    estimatedPrice: "$14 - $17",
    calories: "540 Cal",
    description: "Plump roasted mushroom caps brimming with signature seafood stuffing, topped with delicate crab meat and golden Monterey Jack cheese, baked until delightfully bubbly and warm.",
    image: "/crab-topped-stuffed-mushrooms.webp"
  },
  {
    id: "crab8",
    name: "Crab Queso Dip",
    categorySlug: "new-crabfest",
    price: "$13.99",
    estimatedPrice: "$12 - $15",
    calories: "920 Cal",
    description: "Indulge in creamy melted queso cheese blended with sweet lump crab meat, diced bell peppers, and zesty seasonings, served warm with crisp house-made tortilla chips.",
    image: "/crab-queso.webp"
  },

  // ── SEAFOOD BOILS ──────────────────────────────────────────────────────
  {
    id: "boil1",
    name: "Sailor's Seafood Boil",
    categorySlug: "seafood-boils",
    price: "$26.99",
    estimatedPrice: "$22 - $30",
    calories: "980 Cal",
    description: "A satisfying coastal boil loaded with tender shrimp, baby red potatoes, and sweet corn on the cob, all tossed in rich Cajun butter broth seasoning.",
    image: "/sailors-seafood-boil.webp"
  },
  {
    id: "boil2",
    name: "Mariner's Seafood Boil (Family)",
    categorySlug: "seafood-boils",
    price: "$64.99",
    estimatedPrice: "$50 - $75",
    calories: "2,100 Cal",
    description: "A feast designed for sharing, featuring snow crab clusters, succulent shrimp, savory sausage, seasoned corn, and tender potatoes drenched in aromatic garlic butter broth.",
    image: "/mariners-seafood-boil-family.webp"
  },

  // ── SIGNATURE FEASTS ───────────────────────────────────────────────────
  {
    id: "sf1",
    name: "Ultimate Feast",
    categorySlug: "signature-feasts",
    price: "$36.99",
    estimatedPrice: "$32 - $42",
    calories: "1,180 Cal",
    description: "Red Lobster's flagship dish combines tender Maine lobster tail, wild-caught snow crab legs, signature garlic shrimp scampi, and Walt's Favorite Shrimp with two sides.",
    image: "/ultimate-feast.webp"
  },
  {
    id: "sf2",
    name: "Admiral's Feast",
    categorySlug: "signature-feasts",
    price: "$26.99",
    estimatedPrice: "$22 - $30",
    calories: "1,340 Cal",
    description: "A classic crispy seafood platter brimming with Walt's Favorite Shrimp, wild-caught flounder fillets, clam strips, and tender bay scallops fried to golden perfection.",
    image: "/admirals-feast.webp"
  },
  {
    id: "sf3",
    name: "Grilled Lobster, Shrimp & Salmon",
    categorySlug: "signature-feasts",
    price: "$33.99",
    estimatedPrice: "$28 - $38",
    calories: "940 Cal",
    description: "A wood-grilled Maine lobster tail paired with seasoned jumbo shrimp skewers and fresh Atlantic salmon, brushed with garlic herb butter and served with two sides.",
    image: "/grilled-lobster-shrimp-salmon.webp"
  },
  {
    id: "sf4",
    name: "Steamed Live Maine Lobster",
    categorySlug: "signature-feasts",
    price: "$39.99",
    estimatedPrice: "$30 - $45+",
    calories: "440 Cal",
    description: "Fresh live Maine lobster expertly steamed to order for incredible natural sweetness, served with warm drawn butter, fresh lemon wedges, and two delicious dinner sides.",
    image: "/steamed-live-maine-lobster.webp"
  },
  {
    id: "sf5",
    name: "Seafarer's Feast",
    categorySlug: "signature-feasts",
    price: "$25.99",
    estimatedPrice: "$22 - $28",
    calories: "1,120 Cal",
    description: "A seafood lover's combination featuring broiled Maine lobster tail, garlic shrimp scampi, and sea scallops served over seasoned rice pilaf alongside your choice of side.",
    image: "/seafarers-feast.webp"
  },

  // ── STARTERS ───────────────────────────────────────────────────────────
  {
    id: "s1",
    name: "Parrot Isle Jumbo Coconut Shrimp",
    categorySlug: "starters",
    price: "$14.99",
    estimatedPrice: "$13 - $16",
    calories: "590 Cal",
    description: "Hand-dipped jumbo shrimp rolled in sweet shredded coconut flakes and fried crispy golden brown, paired with our signature tropical piña colada dipping sauce.",
    image: "/parrot-isle-jumbo-coconut-shrimp.webp"
  },
  {
    id: "s2",
    name: "Seafood-Stuffed Mushrooms",
    categorySlug: "starters",
    price: "$12.99",
    estimatedPrice: "$11 - $14",
    calories: "280 Cal",
    description: "Signature baked mushroom caps stuffed with savory crab and seafood filling, topped with melted Monterey Jack cheese and baked until bubbling golden and aromatic.",
    image: "/seafood-stuffed-mushrooms.webp"
  },
  {
    id: "s3",
    name: "Crispy Calamari & Vegetables",
    categorySlug: "starters",
    price: "$13.99",
    estimatedPrice: "$12 - $15",
    calories: "860 Cal",
    description: "Tender calamari rings and fresh vegetable medley hand-breaded and flash-fried to crisp perfection, accompanied by zesty marinara and tangy house-made ranch dipping sauces.",
    image: "/crispy-calamari-vegetables.webp"
  },
  {
    id: "s4",
    name: "Mozzarella Cheesesticks",
    categorySlug: "starters",
    price: "$11.49",
    estimatedPrice: "$10 - $13",
    calories: "520 Cal",
    description: "Golden-fried mozzarella sticks seasoned with Italian breadcrumbs, offering stretchy melted cheese in every bite, served alongside warm garlic herb marinara dipping sauce.",
    image: "/mozzarella-cheesesticks.webp"
  },
  {
    id: "s5",
    name: "Chilled Jumbo Shrimp Cocktail",
    categorySlug: "starters",
    price: "$13.49",
    estimatedPrice: "$12 - $15",
    calories: "130 Cal",
    description: "Chilled jumbo wild-caught shrimp served over cracked ice with fresh lemon wedges and our signature fiery horseradish cocktail sauce for a refreshing appetizer.",
    image: "/chilled-jumbo-shrimp-cocktail.webp"
  },
  {
    id: "s6",
    name: "Lobster Flatbread",
    categorySlug: "starters",
    price: "$16.49",
    estimatedPrice: "$14 - $18",
    calories: "1,180 Cal",
    description: "Crispy artisan crust baked with Maine and langostino lobster meat, melted mozzarella cheese, fresh tomatoes, and sweet basil, drizzled with savory garlic cream sauce.",
    image: "/lobster-flatbread.webp"
  },
  {
    id: "s7",
    name: "Crab Queso Dip",
    categorySlug: "starters",
    price: "$13.99",
    estimatedPrice: "$12 - $15",
    calories: "940 Cal",
    description: "Rich, bubbly cheese dip loaded with sweet lump crab meat, roasted jalapeños, and fresh pico de gallo, served with warm, freshly salted tortilla chips.",
    image: "/crab-queso-dip.webp"
  },

  // ── BOWLS & SANDWICHES ─────────────────────────────────────────────────
  {
    id: "bs1",
    name: "Fish & Chips",
    categorySlug: "bowls-sandwiches",
    price: "$16.49",
    estimatedPrice: "$14 - $18",
    calories: "1,080 Cal",
    description: "Flaky wild-caught cod dipped in crisp Samuel Adams Boston Lager batter, fried golden and served with seasoned Chesapeake fries, tartar sauce, and coleslaw.",
    image: "/fish-chips.webp"
  },
  {
    id: "bs2",
    name: "Crispy Cod Sandwich",
    categorySlug: "bowls-sandwiches",
    price: "$14.99",
    estimatedPrice: "$13 - $17",
    calories: "740 Cal",
    description: "Golden hand-battered cod fillet served on a toasted buttered brioche bun with crunchy tartar slaw, dill pickles, and seasoned crispy French fries on the side.",
    image: "/crispy-cod-sandwich.webp"
  },
  {
    id: "bs3",
    name: "Nashville Hot Chicken Sandwich",
    categorySlug: "bowls-sandwiches",
    price: "$14.99",
    estimatedPrice: "$13 - $17",
    calories: "840 Cal",
    description: "Spicy hand-breaded chicken breast tossed in fiery Nashville hot sauce, layered with cool ranch slaw and tangy pickles on a warm toasted brioche bun.",
    image: "/nashville-hot-chicken-sandwich.webp"
  },
  {
    id: "bs4",
    name: "Wagyu Bacon Cheeseburger",
    categorySlug: "bowls-sandwiches",
    price: "$17.99",
    estimatedPrice: "$15 - $20",
    calories: "1,050 Cal",
    description: "Half-pound grilled Wagyu beef patty crowned with smoky applewood bacon, sharp cheddar cheese, crisp lettuce, tomato, and house burger sauce with seasoned fries.",
    image: "/wagyu-bacon-cheeseburger.webp"
  },
  {
    id: "bs5",
    name: "Baja Shrimp Bowl",
    categorySlug: "bowls-sandwiches",
    price: "$16.99",
    estimatedPrice: "$14 - $18",
    calories: "710 Cal",
    description: "Seasoned grilled shrimp served over cilantro-lime quinoa rice with black beans, fresh avocado, jalapeño ranch slaw, pico de gallo, and crispy tortilla strips.",
    image: "/baja-shrimp-bowl.webp"
  },
  {
    id: "bs6",
    name: "Sesame-Soy Salmon Bowl",
    categorySlug: "bowls-sandwiches",
    price: "$18.49",
    estimatedPrice: "$16 - $20",
    calories: "720 Cal",
    description: "Glazed Atlantic salmon grilled with ginger sesame soy sauce over hearty grains, tossed with steamed edamame, shaved red cabbage, crispy onions, and vinaigrette.",
    image: "/sesame-soy-salmon-bowl.webp"
  },

  // ── SHRIMP CLASSICS ────────────────────────────────────────────────────
  {
    id: "sc1",
    name: "Walt's Favorite Shrimp",
    categorySlug: "shrimp-classics",
    price: "$19.99",
    estimatedPrice: "$18 - $22",
    calories: "480 Cal",
    description: "Red Lobster's timeless recipe of butterflied jumbo shrimp breaded by hand, lightly fried until crispy, served with tangy cocktail sauce and two choice sides.",
    image: "/walts-favorite-shrimp.webp"
  },
  {
    id: "sc2",
    name: "Parrot Isle Jumbo Coconut Shrimp (Entrée)",
    categorySlug: "shrimp-classics",
    price: "$20.99",
    estimatedPrice: "$18 - $23",
    calories: "670 Cal",
    description: "A generous entrée portion of coconut-crusted jumbo shrimp fried to crunchy perfection, accompanied by our island piña colada dipping sauce and two dinner sides.",
    image: "/parrot-isle-jumbo-coconut-shrimp-entre.webp"
  },
  {
    id: "sc3",
    name: "Garlic Shrimp Scampi",
    categorySlug: "shrimp-classics",
    price: "$18.49",
    estimatedPrice: "$16 - $20",
    calories: "780 Cal",
    description: "Succulent tender shrimp oven-baked in handcrafted garlic butter broth seasoned with white wine herbs, served alongside warm Cheddar Bay Biscuits and two sides.",
    image: "/garlic-shrimp-scampi.webp"
  },
  {
    id: "sc4",
    name: "Grilled Shrimp Skewers",
    categorySlug: "shrimp-classics",
    price: "$17.99",
    estimatedPrice: "$16 - $20",
    calories: "380 Cal",
    description: "Two skewers of plump wood-grilled shrimp basted with garlic butter glaze, laid over a bed of fragrant seasoned rice pilaf with your choice of side.",
    image: "/grilled-shrimp-skewers.webp"
  },
  {
    id: "sc5",
    name: "Shrimp Your Way",
    categorySlug: "shrimp-classics",
    price: "$21.99",
    estimatedPrice: "$18 - $24",
    calories: "820 Cal",
    description: "Customize your dream seafood meal by choosing three delicious shrimp preparations including crispy Walt's shrimp, garlic scampi, coconut shrimp, or grilled skewers with sides.",
    image: "/shrimp-your-way.webp"
  },

  // ── LAND & SEA CLASSICS ────────────────────────────────────────────────
  {
    id: "ls1",
    name: "Surf & Turf (Lobster Tail + Sirloin)",
    categorySlug: "land-sea-classics",
    price: "$39.99",
    estimatedPrice: "$35 - $48",
    calories: "980 Cal",
    description: "The ultimate pairing of a tender 7 oz center-cut sirloin steak grilled over wood fire and a succulent roasted Maine lobster tail with drawn butter.",
    image: "/surf-turf-lobster-tail-sirloin.webp"
  },
  {
    id: "ls2",
    name: "Salmon New Orleans",
    categorySlug: "land-sea-classics",
    price: "$25.99",
    estimatedPrice: "$22 - $28",
    calories: "1,040 Cal",
    description: "Fresh blackened Atlantic salmon fillet seared with Cajun herbs, smothered in a creamy tomato sauce with sautéed shrimp, served over rice with two sides.",
    image: "/salmon-new-orleans.webp"
  },
  {
    id: "ls3",
    name: "Grilled Atlantic Salmon",
    categorySlug: "land-sea-classics",
    price: "$23.49",
    estimatedPrice: "$20 - $26",
    calories: "620 Cal",
    description: "Fresh premium Atlantic salmon fillet brushed with olive oil and garlic herbs, wood-grilled to flaky perfection, served with lemon butter sauce and two sides.",
    image: "/grilled-atlantic-salmon.webp"
  },
  {
    id: "ls4",
    name: "Chicken & Shrimp Combo",
    categorySlug: "land-sea-classics",
    price: "$21.49",
    estimatedPrice: "$18 - $24",
    calories: "860 Cal",
    description: "Juicy marinated grilled chicken breast paired alongside crispy butterflied shrimp and garlic shrimp scampi, complemented by two homestyle dinner sides and warm biscuits.",
    image: "/chicken-shrimp-combo.webp"
  },

  // ── PASTAS ─────────────────────────────────────────────────────────────
  {
    id: "p1",
    name: "Shrimp Linguini Alfredo",
    categorySlug: "pastas",
    price: "$20.99",
    estimatedPrice: "$18 - $23",
    calories: "1,340 Cal",
    description: "Tender shrimp tossed with al dente pasta in rich made-from-scratch garlic Parmesan Alfredo cream sauce, garnished with parsley and served with fresh biscuits.",
    image: "/shrimp-linguini-alfredo.webp"
  },
  {
    id: "p2",
    name: "Crab Linguini Alfredo",
    categorySlug: "pastas",
    price: "$23.99",
    estimatedPrice: "$20 - $26",
    calories: "1,260 Cal",
    description: "Sweet, delicate lump crab meat folded into creamy handcrafted Parmesan Alfredo sauce over fresh linguini noodles, paired with unlimited warm Cheddar Bay Biscuits.",
    image: "/crab-linguini-alfredo.webp"
  },
  {
    id: "p3",
    name: "Cajun Chicken Linguini Alfredo",
    categorySlug: "pastas",
    price: "$19.99",
    estimatedPrice: "$18 - $23",
    calories: "1,390 Cal",
    description: "Blackened Cajun chicken breast strips sautéed with spicy seasonings and tossed in velvety Parmesan Alfredo sauce over tender linguini pasta with warm Cheddar Bay Biscuits.",
    image: "/grilled-chicken.webp"
  },
  {
    id: "p4",
    name: "Kung Pao Noodles with Crispy Shrimp",
    categorySlug: "pastas",
    price: "$18.99",
    estimatedPrice: "$17 - $22",
    calories: "1,020 Cal",
    description: "Stir-fried Asian noodles tossed in sweet-and-spicy Kung Pao ginger sauce with crispy golden shrimp, crunchy cashews, edamame, and scallions for a bold flavor kick.",
    image: "/kung-pao-noodles-with-crispy-shrimp.webp"
  },
  {
    id: "p5",
    name: "Half Portion Pasta",
    categorySlug: "pastas",
    price: "$14.49",
    estimatedPrice: "$12 - $17",
    calories: "680 Cal",
    description: "A lighter half-sized serving of your favorite Red Lobster Alfredo pasta with tender shrimp or chicken, perfectly sized for a lighter dinner or midday meal.",
    image: "/half-portion-pasta.webp"
  },

  // ── LUNCH FAVORITES ────────────────────────────────────────────────────
  {
    id: "lf1",
    name: "Shrimp Linguini Alfredo (Lunch)",
    categorySlug: "lunch-favorites",
    price: "$14.99",
    estimatedPrice: "$13 - $17",
    calories: "670 Cal",
    description: "A lunch-sized portion of our classic creamy garlic Parmesan pasta tossed with succulent sautéed shrimp, served with fresh warm biscuits at unbeatable value.",
    image: "/shrimp-linguini-alfredo-lunch.webp"
  },
  {
    id: "lf2",
    name: "Walt's Favorite Shrimp (Lunch)",
    categorySlug: "lunch-favorites",
    price: "$13.99",
    estimatedPrice: "$13 - $17",
    calories: "390 Cal",
    description: "Six hand-breaded butterflied shrimp fried until golden crisp, served with zesty cocktail sauce, hot French fries, and freshly baked Cheddar Bay Biscuits.",
    image: "/walts-favorite-shrimp-lunch.webp"
  },
  {
    id: "lf3",
    name: "Fish & Chips (Lunch)",
    categorySlug: "lunch-favorites",
    price: "$13.99",
    estimatedPrice: "$13 - $16",
    calories: "720 Cal",
    description: "Crispy beer-battered wild cod fillet paired with golden fries, creamy tartar sauce, and fresh coleslaw, making for an affordable and satisfying midday lunch favorite.",
    image: "/fish-chips-lunch.webp"
  },
  {
    id: "lf4",
    name: "Crispy Cod Sandwich (Lunch)",
    categorySlug: "lunch-favorites",
    price: "$12.49",
    estimatedPrice: "$11 - $15",
    calories: "680 Cal",
    description: "Golden fried cod fillet on a buttered brioche bun topped with crunchy tartar slaw, served with seasoned fries for a quick and flavorful weekday lunch.",
    image: "/crispy-cod-sandwich-lunch.webp"
  },
  {
    id: "lf5",
    name: "Endless Soup, Salad & Biscuits",
    categorySlug: "lunch-favorites",
    price: "$11.99",
    estimatedPrice: "$12 - $16",
    calories: "450 Cal",
    description: "Unlimited bowls of New England Clam Chowder or soup of the day, crisp garden or Caesar salad, and warm buttery Cheddar Bay Biscuits all lunch long.",
    image: "/endless-soup-salad-biscuits.webp"
  },

  // ── SOUPS & SIDES ──────────────────────────────────────────────────────
  {
    id: "ss1",
    name: "New England Clam Chowder (Cup)",
    categorySlug: "soups-sides",
    price: "$6.99",
    estimatedPrice: "$6 - $8",
    calories: "240 Cal",
    description: "Traditional East Coast style creamy clam chowder prepared with sea clams, diced potatoes, and savory onions in a velvety cream broth with oyster crackers.",
    image: "/new-england-clam-chowder-cup.webp"
  },
  {
    id: "ss2",
    name: "New England Clam Chowder (Bowl)",
    categorySlug: "soups-sides",
    price: "$9.49",
    estimatedPrice: "$8 - $11",
    calories: "490 Cal",
    description: "A hearty bowl of rich New England clam chowder loaded with sweet tender clams and diced potatoes, perfect for pairing with warm Cheddar Bay Biscuits.",
    image: "/new-england-clam-chowder-bowl.webp"
  },
  {
    id: "ss3",
    name: "Caesar Salad",
    categorySlug: "soups-sides",
    price: "$6.49",
    estimatedPrice: "$5 - $8",
    calories: "290 Cal",
    description: "Crisp chopped romaine lettuce tossed in creamy garlic Caesar dressing, topped with shredded Parmesan cheese and crunchy garlic butter croutons for a fresh side.",
    image: "/caesar-salad.webp"
  },
  {
    id: "ss4",
    name: "Garden Salad",
    categorySlug: "soups-sides",
    price: "$5.49",
    estimatedPrice: "$4 - $6",
    calories: "110 Cal",
    description: "Fresh field greens, crisp cucumbers, grape tomatoes, and red onions served with your choice of dressing for a crisp, low-calorie start to any meal.",
    image: "/garden-salad.webp"
  },
  {
    id: "ss5",
    name: "Steamed Broccoli",
    categorySlug: "soups-sides",
    price: "$4.49",
    estimatedPrice: "$4 - $5",
    calories: "40 Cal",
    description: "Fresh broccoli florets steamed until tender-crisp and lightly seasoned, offering a delicious, nutrient-dense, and guilt-free side dish to accompany rich seafood entrees.",
    image: "/steamed-broccoli.webp"
  },
  {
    id: "ss6",
    name: "French Fries",
    categorySlug: "soups-sides",
    price: "$4.49",
    estimatedPrice: "$4 - $5",
    calories: "290 Cal",
    description: "Thick-cut golden potatoes fried to crunchy perfection, sprinkled with our signature seafood seasoning blend, served piping hot alongside your favorite seafood plate.",
    image: "/french-fries (1).webp"
  },
  {
    id: "ss7",
    name: "Mashed Potatoes",
    categorySlug: "soups-sides",
    price: "$4.49",
    estimatedPrice: "$4 - $5",
    calories: "220 Cal",
    description: "Fluffy homestyle potatoes whipped with rich butter and sweet cream, finished with savory herbs for a comforting and hearty accompaniment to steaks and seafood.",
    image: "/mashed-potatoes (1).webp"
  },
  {
    id: "ss8",
    name: "Rice Pilaf",
    categorySlug: "soups-sides",
    price: "$4.49",
    estimatedPrice: "$4 - $5",
    calories: "170 Cal",
    description: "Long-grain rice cooked in fragrant herb-infused broth with subtle seasonings, providing an aromatic and light side dish pairing wonderfully with grilled seafood skewers.",
    image: "/rice-pilaf (1).webp"
  },
  {
    id: "ss9",
    name: "Coleslaw",
    categorySlug: "soups-sides",
    price: "$3.99",
    estimatedPrice: "$3 - $5",
    calories: "170 Cal",
    description: "Crisply shredded green cabbage and carrots tossed in sweet and tangy house-made dressing, delivering a refreshing crunch alongside golden-fried fish and shrimp.",
    image: "/coleslaw.webp"
  },

  // ── BISCUITS & EXTRAS ──────────────────────────────────────────────────
  {
    id: "be1",
    name: "Cheddar Bay Biscuits (Order of 2)",
    categorySlug: "biscuits-extras",
    price: "$3.99",
    estimatedPrice: "$3 - $5",
    calories: "300 Cal",
    description: "The world-famous warm and flaky biscuits baked fresh every fifteen minutes, packed with real sharp cheddar and brushed with decadent garlic herb butter.",
    image: "/cheddar-bay-biscuits-order-of-2 (1).webp"
  },
  {
    id: "be2",
    name: "Garlic Shrimp Scampi (Add-On)",
    categorySlug: "biscuits-extras",
    price: "$5.49",
    estimatedPrice: "$4 - $6",
    calories: "190 Cal",
    description: "Add a skillet of juicy shrimp broiled in garlic butter and white wine sauce to upgrade any steak, pasta, or seafood entrée on your table.",
    image: "/garlic-shrimp-scampi-add-on (1).webp"
  },
  {
    id: "be3",
    name: "Extra Side Dish",
    categorySlug: "biscuits-extras",
    price: "$4.29",
    estimatedPrice: "$3 - $5",
    calories: "180 Cal",
    description: "Customize your dining experience by adding an extra individual side of steamed broccoli, seasoned rice pilaf, mashed potatoes, or crispy seasoned fries.",
    image: "/extra-side-dish.webp"
  },
  {
    id: "be4",
    name: "Crab-Topped Asparagus (Add-On)",
    categorySlug: "biscuits-extras",
    price: "$5.99",
    estimatedPrice: "$4 - $7",
    calories: "140 Cal",
    description: "Tender steamed asparagus spears generously topped with succulent sweet lump crab meat and finished with a delicate drizzle of creamy hollandaise sauce.",
    image: "/crab-topped-asparagus-add-on.webp"
  },

  // ── DESSERTS ───────────────────────────────────────────────────────────
  {
    id: "d1",
    name: "Chocolate Wave",
    categorySlug: "desserts",
    price: "$14.99",
    estimatedPrice: "$14 - $16",
    calories: "1,290 Cal",
    description: "Decadent multi-layered warm chocolate fudge cake drizzled with rich chocolate sauce, served with creamy vanilla bean ice cream for an unforgettable dessert finale.",
    image: "/chocolate-wave.webp"
  },
  {
    id: "d2",
    name: "Key Lime Pie",
    categorySlug: "desserts",
    price: "$8.49",
    estimatedPrice: "$7 - $9",
    calories: "490 Cal",
    description: "Authentic Florida Key lime pie with a smooth, tart filling nestled inside a sweet graham cracker crust, topped with whipped cream and lime zest.",
    image: "/key-lime-pie (1).webp"
  },
  {
    id: "d3",
    name: "Vanilla Bean Cheesecake",
    categorySlug: "desserts",
    price: "$8.49",
    estimatedPrice: "$7 - $9",
    calories: "780 Cal",
    description: "Velvety smooth vanilla bean cheesecake baked on sweet graham cracker crust, layered with sweet Italian cream, and drizzled with luscious sweet berry puree.",
    image: "/vanilla-bean-cheesecake.webp"
  },

  // ── KIDS ───────────────────────────────────────────────────────────────
  {
    id: "k1",
    name: "Grilled Shrimp",
    categorySlug: "kids",
    price: "$9.49",
    estimatedPrice: "$8 - $11",
    calories: "180 Cal",
    description: "Kid-sized skewer of juicy grilled shrimp lightly seasoned and cooked tender, served with a choice of healthy side and a kid beverage.",
    image: "/grilled-shrimp.webp"
  },
  {
    id: "k2",
    name: "Popcorn Shrimp",
    categorySlug: "kids",
    price: "$9.49",
    estimatedPrice: "$8 - $11",
    calories: "320 Cal",
    description: "Fun, bite-sized crispy shrimp fried golden and served with ketchup or mild cocktail sauce, paired with fries and a refreshing child's beverage.",
    image: "/popcorn-shrimp.webp"
  },
  {
    id: "k3",
    name: "Macaroni & Cheese",
    categorySlug: "kids",
    price: "$7.99",
    estimatedPrice: "$7 - $9",
    calories: "420 Cal",
    description: "Creamy, cheesy macaroni pasta prepared with real cheddar cheese sauce, a comforting favorite for children ages 12 and under, with one side.",
    image: "/macaroni-cheese (1).webp"
  },
  {
    id: "k4",
    name: "Crispy Chicken Tenders",
    categorySlug: "kids",
    price: "$8.99",
    estimatedPrice: "$8 - $11",
    calories: "430 Cal",
    description: "Tender all-white meat chicken strips breaded and fried to golden perfection, served with honey mustard or barbecue dipping sauce and choice of side.",
    image: "/crispy-chicken-tenders.webp"
  },
  {
    id: "k5",
    name: "Grilled Chicken",
    categorySlug: "kids",
    price: "$8.99",
    estimatedPrice: "$8 - $11",
    calories: "210 Cal",
    description: "Tender boneless chicken breast simply grilled over wood flames, providing a healthy, protein-rich meal option for kids accompanied by steamed broccoli or fries.",
    image: "/grilled-chicken (1).webp"
  },

  // ── BEVERAGES ──────────────────────────────────────────────────────────
  {
    id: "bev1",
    name: "Bahama Mama",
    categorySlug: "beverages",
    price: "$11.99",
    estimatedPrice: "$10 - $14",
    calories: "290 Cal",
    description: "A tropical vacation in a glass combining Captain Morgan spiced rum, coconut rum, pineapple juice, orange juice, and a splash of sweet grenadine syrup.",
    image: "/bahama-mama.webp"
  },
  {
    id: "bev2",
    name: "Sunset Passion Colada",
    categorySlug: "beverages",
    price: "$12.49",
    estimatedPrice: "$10 - $14",
    calories: "360 Cal",
    description: "A frozen tropical blend of Malibu coconut rum and real piña colada mix swirled with strawberry passion fruit puree, topped with fresh fruit garnish.",
    image: "/sunset-passion-colada (1).webp"
  },
  {
    id: "bev3",
    name: "Berry Mangorita",
    categorySlug: "beverages",
    price: "$11.99",
    estimatedPrice: "$10 - $14",
    calories: "310 Cal",
    description: "Premium silver tequila blended with all-natural mango and blackberry purees, served over ice with a salted rim and fresh lime wheel garnish.",
    image: "/berry-mangorita (1).webp"
  },
  {
    id: "bev4",
    name: "Grand Patrón Margarita",
    categorySlug: "beverages",
    price: "$14.49",
    estimatedPrice: "$12 - $16",
    calories: "260 Cal",
    description: "Crafted with Patrón Silver Tequila, Grand Marnier liqueur, and fresh lime juice, shaken ice-cold and served with a salted rim for top-shelf margarita lovers.",
    image: "/grand-patrn-margarita.webp"
  },
  {
    id: "bev5",
    name: "Lava Flow Margarita (Crabfest NEW)",
    categorySlug: "beverages",
    price: "$12.99",
    estimatedPrice: "$11 - $15",
    calories: "340 Cal",
    description: "A show-stopping Crabfest exclusive combining smooth tequila margarita base with sweet strawberry lava swirl and tropical fruit notes over crushed ice.",
    image: "/lava-flow-margarita-crabfest-new.webp"
  },
  {
    id: "bev6",
    name: "Magical Blue Hawaiian (Crabfest NEW)",
    categorySlug: "beverages",
    price: "$12.99",
    estimatedPrice: "$11 - $15",
    calories: "330 Cal",
    description: "Vibrant ocean-blue cocktail made with white rum, blue curaçao, fresh pineapple juice, and coconut cream, presenting an exotic and refreshing Crabfest drink special.",
    image: "/magical-blue-hawaiian-crabfest-new.webp"
  },
  {
    id: "bev7",
    name: "Fountain Drinks (Pepsi)",
    categorySlug: "beverages",
    price: "$3.99",
    estimatedPrice: "$3 - $5",
    calories: "150 Cal",
    description: "Enjoy ice-cold fountain sodas with complimentary free refills including Pepsi, Diet Pepsi, Mountain Dew, Starry, Mug Root Beer, and Dr Pepper.",
    image: "/fountain-drinks-pepsi.webp"
  },
  {
    id: "bev8",
    name: "Lemonade / Iced Tea",
    categorySlug: "beverages",
    price: "$3.99",
    estimatedPrice: "$3 - $5",
    calories: "90 Cal",
    description: "Freshly brewed iced black tea or classic sweet lemonade served with lemon wedges over ice, offering unlimited free refills throughout your meal.",
    image: "/lemonade-iced-tea.webp"
  },

  // ── FAMILY MEALS ───────────────────────────────────────────────────────
  {
    id: "fm1",
    name: "Family Seafood Feast",
    categorySlug: "family-meals",
    price: "$59.99",
    estimatedPrice: "$45 - $70",
    calories: "2,800 Cal",
    description: "Feeds a family of four with generous helpings of garlic shrimp scampi, Walt's Favorite Shrimp, crispy flounder, two family sides, and eight biscuits.",
    image: "/family-seafood-feast.webp"
  },
  {
    id: "fm2",
    name: "Family Shrimp Bundle",
    categorySlug: "family-meals",
    price: "$49.99",
    estimatedPrice: "$40 - $60",
    calories: "2,400 Cal",
    description: "Crowd-pleasing bundle featuring hand-breaded shrimp, garlic scampi, two jumbo side dishes, cocktail sauce, and freshly baked Cheddar Bay Biscuits for the entire family.",
    image: "/family-shrimp-bundle.webp"
  },

  // ── HOT PLATTERS ───────────────────────────────────────────────────────
  {
    id: "hp1",
    name: "Fried Seafood Platter",
    categorySlug: "hot-platters",
    price: "$24.99",
    estimatedPrice: "$20 - $28",
    calories: "1,240 Cal",
    description: "A heaping platter of crispy golden seafood including Walt's shrimp, bay scallops, tender clam strips, and wild flounder fillets served with two side dishes.",
    image: "/fried-seafood-platter.webp"
  },
  {
    id: "hp2",
    name: "Grilled Seafood Platter",
    categorySlug: "hot-platters",
    price: "$26.99",
    estimatedPrice: "$22 - $30",
    calories: "780 Cal",
    description: "A lighter coastal combination of wood-grilled Atlantic salmon, jumbo shrimp skewers, and sea scallops basted in garlic butter, served with two sides.",
    image: "/grilled-seafood-platter.webp"
  }
];

export const deals: Deal[] = [
  { id: "d1", title: "Endless Shrimp", description: "The fan-favorite event returns for a limited time! Unlimited shrimp in any preparation. Check if it's currently active at your local restaurant.", link: "https://www.redlobster.com/" },
  { id: "d2", title: "Weekday Specials", description: "Enjoy discounted prices on select items from Monday to Thursday. Great for a quick lunch or an affordable dinner out.", link: "https://www.redlobster.com/" },
  { id: "d3", title: "My Red Lobster Rewards℠", description: "Earn points on every purchase to redeem for free food and exclusive member-only offers. Join through the app or online.", link: "https://www.redlobster.com/rewards" },
  { id: "d4", title: "Crabfest 2026", description: "Summer 2026 Crabfest is here! Enjoy twice the crab with new flavors like Mike's Hot Honey. Available for a limited time only.", link: "https://www.redlobster.com/" },
  { id: "d5", title: "$10 Lunch Specials", description: "Weekday lunch specials starting at $8.99 to $10.99 served Monday through Friday from 11:00 AM to 3:00 PM with unlimited biscuits.", link: "/lunch-menu" },
  { id: "d6", title: "Happy Hour Deals", description: "Enjoy $5 select draft beers, wines, and craft cocktails plus $2 off appetizers every weekday from 3:00 PM to 6:00 PM.", link: "/happy-hour" },
];

export const faqs: FAQ[] = [
  { question: "What are the average Red Lobster menu prices in 2026?", answer: "In 2026, Red Lobster menu prices range from $8.99 for lunch specials and soups up to $36.99 for the Ultimate Feast and $44.99 for premium Crabfest Bairdi crab legs. Most dinner seafood entrees cost between $18.99 and $26.99." },
  { question: "How many calories are in Red Lobster Cheddar Bay Biscuits?", answer: "Each Red Lobster Cheddar Bay Biscuit contains approximately 150 calories, 8g of fat, and 16g of carbohydrates. A standard basket serving of 2 biscuits provides about 300 calories." },
  { question: "What is the lowest calorie meal on the Red Lobster menu?", answer: "The lowest calorie options include Steamed Broccoli (40 Cal), Chilled Jumbo Shrimp Cocktail (130 Cal), Grilled Shrimp Skewers (380 Cal), and Wood-Grilled Atlantic Salmon (620 Cal), especially when paired with steamed vegetables." },
  { question: "What are the Red Lobster lunch hours and prices in 2026?", answer: "Red Lobster lunch is served Monday through Friday from 11:00 AM to 3:00 PM. Specials start at $8.99 for soup, salad, and biscuits, with favorites like Garlic Shrimp Scampi and Popcorn Shrimp priced at $9.99 to $13.99." },
  { question: "What is included in the Red Lobster Ultimate Feast in 2026?", answer: "The Ultimate Feast ($36.99, ~1,180 Cal) includes a tender Maine lobster tail, wild-caught snow crab legs, signature garlic shrimp scampi, and Walt's Favorite Shrimp, served with warm drawn butter, two sides, and unlimited Cheddar Bay Biscuits." },
  { question: "Does Red Lobster have a kids menu with prices and calories?", answer: "Yes, the Red Lobster kids menu features meals for children ages 12 and under priced from $7.99 to $9.49. Items include Grilled Shrimp (180 Cal), Popcorn Shrimp (320 Cal), Macaroni & Cheese (420 Cal), and Chicken Tenders (430 Cal), each served with a side and drink." },
  { question: "Are the prices on this website exact?", answer: "All prices shown on this site are verified estimates for 2026 based on national restaurant averages. Exact menu pricing can vary by location, regional taxes, and seasonal availability. Always confirm with your local Red Lobster or visit redlobster.com." },
];
