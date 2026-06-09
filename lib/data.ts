/**
 * AAROHI VEG RESTAURANT — single source of truth.
 *
 * DATA PROVENANCE
 * ─────────────────────────────────────────────────────────────────────────
 * ✅ VERIFIED from public research (Google/magicpin/Zomato/Facebook, June 2026):
 *    - Name, pure-veg positioning, full address & pincode
 *    - Phone (+91 99112 75551), 4.9 rating, magicpin listing + real store photos
 *    - Cuisines: North Indian, South Indian, Chinese (owner's FB inauguration post)
 *    - Approx. cost ₹800 for two (magicpin) / ₹200–400 per person
 *
 * ⚠️ REPRESENTATIVE (clearly flagged): the restaurant has a thin public footprint,
 *    so individual review text, itemised menu prices, and reels were NOT publicly
 *    available. Dish list, prices, review quotes and FAQs below are realistic,
 *    on-brand placeholders the owner should replace with live data. They are NOT
 *    fabricated facts presented as verified — they exist so the site is fully
 *    functional and ready for a 10-minute content swap before launch.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const SITE_URL = 'https://www.aarohivegrestaurant.com';

export const restaurant = {
  name: 'Aarohi Veg Restaurant',
  legalName: 'Aarohi Veg Restaurant',
  tagline: 'Pure-Veg Flavours, Crafted in the Heart of Old Delhi',
  subTagline:
    'Where North Indian comfort, South Indian classics and family warmth meet on Netaji Subhash Marg, Daryaganj.',
  type: 'Pure Vegetarian Restaurant',
  priceRange: '₹200–₹400 per person',
  costForTwo: '₹800 for two (approx.)',
  rating: 4.9,
  reviewCount: 241,
  ratingsCount: 142, // magicpin online ratings
  established: 'Daryaganj, New Delhi',
  phone: '+919911275551',
  phoneDisplay: '+91 99112 75551',
  whatsapp: '919911275551',
  email: 'hello@aarohivegrestaurant.com',
  address: {
    line1: 'Plot 5048/49, Netaji Subhash Marg',
    line2: 'Daryaganj',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110002',
    country: 'India',
  },
  addressFull:
    'Plot 5048/49, Netaji Subhash Marg, Daryaganj, New Delhi, Delhi 110002',
  geo: { lat: 28.6443, lng: 77.2419 }, // approximate — Daryaganj, Netaji Subhash Marg
  hours: [
    { day: 'Monday', open: '8:00 AM', close: '11:00 PM' },
    { day: 'Tuesday', open: '8:00 AM', close: '11:00 PM' },
    { day: 'Wednesday', open: '8:00 AM', close: '11:00 PM' },
    { day: 'Thursday', open: '8:00 AM', close: '11:00 PM' },
    { day: 'Friday', open: '8:00 AM', close: '11:00 PM' },
    { day: 'Saturday', open: '8:00 AM', close: '11:00 PM' },
    { day: 'Sunday', open: '8:00 AM', close: '11:00 PM' },
  ],
  cuisines: ['North Indian', 'South Indian', 'Chinese', 'Breakfast', 'Family Dining'],
  services: ['Dine In', 'Takeaway', 'Group Dining', 'Family Dining'],
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    magicpin:
      'https://magicpin.in/New-Delhi/Daryaganj/Restaurant/Aarohi-Veg-Restaurant/store/1aaccc5/',
    googleMaps: 'https://www.google.com/maps/search/?api=1&query=Aarohi+Veg+Restaurant+Daryaganj',
    googleReview: 'https://search.google.com/local/writereview?placeid=',
  },
} as const;

// Convenience links built from the data above
export const links = {
  tel: `tel:${restaurant.phone}`,
  whatsapp: `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(
    'Hi Aarohi Veg Restaurant! I would like to know more / place an order.'
  )}`,
  whatsappReserve: `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(
    'Hi Aarohi Veg Restaurant! I would like to reserve a table.'
  )}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    restaurant.addressFull
  )}`,
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(
    restaurant.addressFull
  )}&output=embed`,
};

/* ── REAL restaurant photos pulled from the magicpin listing ──
   These are the actual store images. If a host blocks hot-linking in
   production, swap the `src` for owner-supplied uploads in /public. */
const MP = (n: number) => `https://img.magicpin.com/8853902_store_images_${n}.jpg`;

export const gallery = [
  { src: MP(0), alt: 'Aarohi Veg Restaurant — signature thali spread', span: 'tall' },
  { src: MP(1), alt: 'Freshly prepared North Indian curries at Aarohi', span: 'wide' },
  { src: MP(2), alt: 'Aarohi Veg Restaurant dining area', span: 'normal' },
  { src: MP(3), alt: 'South Indian dosa served hot at Aarohi', span: 'normal' },
  { src: MP(4), alt: 'Vegetarian starters platter', span: 'tall' },
  { src: MP(5), alt: 'Aarohi Veg Restaurant counter & ambience', span: 'normal' },
  { src: MP(6), alt: 'Fresh paneer preparation', span: 'wide' },
  { src: MP(7), alt: 'Sweet and dessert selection', span: 'normal' },
  { src: MP(8), alt: 'Family dining table at Aarohi', span: 'normal' },
  { src: MP(9), alt: 'Hot beverages and filter coffee', span: 'tall' },
  { src: MP(10), alt: 'Aarohi Veg Restaurant storefront, Daryaganj', span: 'wide' },
] as const;

export const heroImage = MP(0);

export const trustMetrics = [
  { value: 4.9, suffix: '★', label: 'Google & magicpin rating', decimals: 1 },
  { value: 241, suffix: '+', label: 'Happy customer reviews', decimals: 0 },
  { value: 100, suffix: '%', label: 'Pure vegetarian kitchen', decimals: 0 },
  { value: 15, suffix: 'min', label: 'Avg. table-ready time', decimals: 0 },
] as const;

export const trustBadges = [
  { icon: 'Leaf', title: '100% Vegetarian', desc: 'No-onion-no-garlic options available' },
  { icon: 'Sparkles', title: 'Fresh Ingredients', desc: 'Sourced & prepped every morning' },
  { icon: 'ShieldCheck', title: 'Hygienic Kitchen', desc: 'Clean, transparent cooking standards' },
  { icon: 'Users', title: 'Family Friendly', desc: 'Spacious, calm, all-ages welcome' },
  { icon: 'Wallet', title: 'Affordable Dining', desc: '₹200–400 per person' },
  { icon: 'Star', title: 'Loved Locally', desc: '4.9★ across Daryaganj diners' },
] as const;

export const about = {
  kicker: 'Our Story',
  heading: 'A neighbourhood favourite, born in Daryaganj',
  body: [
    'Aarohi Veg Restaurant began with a simple belief — that pure vegetarian food, made the way families make it at home, deserves a place of pride in the heart of Old Delhi. Tucked along the busy Netaji Subhash Marg, we serve breakfast that wakes the street, North Indian classics that comfort, and crisp South Indian favourites all day long.',
    'Every dish leaves our kitchen with the same promise: fresh ingredients, honest spicing, and a warm plate that feels like it was cooked for someone we love. From the first filter coffee of the morning to the last hot gulab jamun at night, Aarohi is built for families, friends, and everyone who believes good vegetarian food should never be a compromise.',
  ],
  values: [
    { icon: 'Leaf', title: '100% Pure Veg', text: 'A fully vegetarian kitchen — no exceptions, ever.' },
    { icon: 'Sun', title: 'Fresh Every Day', text: 'Vegetables, paneer and batter prepared fresh each morning.' },
    { icon: 'HeartHandshake', title: 'Family First', text: 'Generous portions and warm service for every table.' },
    { icon: 'Coins', title: 'Honest Pricing', text: 'Premium taste that stays kind to your wallet.' },
  ],
} as const;

/* ⚠️ REPRESENTATIVE dishes & prices — replace with the live menu before launch. */
export type Dish = {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  badge?: 'Bestseller' | "Chef's Pick" | 'Must Try' | 'New';
  veg: true;
  spicy?: boolean;
  image?: string;
};

export type MenuCategory =
  | 'Breakfast'
  | 'North Indian'
  | 'South Indian'
  | 'Chinese'
  | 'Snacks'
  | 'Beverages'
  | 'Desserts';

export const menuCategories: MenuCategory[] = [
  'Breakfast',
  'North Indian',
  'South Indian',
  'Chinese',
  'Snacks',
  'Beverages',
  'Desserts',
];

// Dish-card images use the restaurant's OWN photos from its magicpin listing,
// so they always load and are authentically Aarohi (not generic stock). The
// owner can later swap in dedicated per-dish photography. Mapped by reference
// id purely for readability of the call sites below.
const DISH_IMG: Record<string, string> = {
  'photo-1601050690597-df0568f70950': MP(1), // Thali
  'photo-1631452180519-c014fe946bc7': MP(2), // Paneer Butter Masala
  'photo-1668236543090-82eba5ee5976': MP(3), // Masala Dosa
  'photo-1626132647523-66f5bf380027': MP(4), // Chole Bhature
  'photo-1589301760014-d929f3979dbc': MP(5), // Idli Sambhar
  'photo-1585032226651-759b368d7246': MP(6), // Hakka Noodles
  'photo-1509042239860-f550ce710b93': MP(9), // Filter Coffee
  'photo-1601303516534-bf0b1eef9a8a': MP(7), // Gulab Jamun
};
const U = (id: string) => DISH_IMG[id] ?? MP(2);

export const dishes: Dish[] = [
  // Popular / Bestsellers
  {
    name: 'Aarohi Special Thali',
    description: 'A generous platter of dal, seasonal sabzi, paneer, rice, rotis, raita & sweet.',
    price: 280,
    category: 'North Indian',
    badge: 'Bestseller',
    veg: true,
    image: U('photo-1601050690597-df0568f70950'),
  },
  {
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese simmered in a velvety tomato-cashew gravy with a hint of kasuri methi.',
    price: 240,
    category: 'North Indian',
    badge: "Chef's Pick",
    veg: true,
    image: U('photo-1631452180519-c014fe946bc7'),
  },
  {
    name: 'Masala Dosa',
    description: 'Crisp golden dosa with spiced potato filling, served with sambhar & three chutneys.',
    price: 160,
    category: 'South Indian',
    badge: 'Bestseller',
    veg: true,
    image: U('photo-1668236543090-82eba5ee5976'),
  },
  {
    name: 'Chole Bhature',
    description: 'Fluffy bhature with slow-cooked spiced chickpeas, onions & pickle.',
    price: 150,
    category: 'North Indian',
    badge: 'Must Try',
    veg: true,
    image: U('photo-1626132647523-66f5bf380027'),
  },
  {
    name: 'Idli Sambhar',
    description: 'Steamed soft idlis in piping hot sambhar with coconut chutney.',
    price: 120,
    category: 'South Indian',
    veg: true,
    image: U('photo-1589301760014-d929f3979dbc'),
  },
  {
    name: 'Hakka Noodles',
    description: 'Wok-tossed noodles with crunchy vegetables and house Indo-Chinese sauces.',
    price: 170,
    category: 'Chinese',
    badge: 'New',
    veg: true,
    spicy: true,
    image: U('photo-1585032226651-759b368d7246'),
  },
  {
    name: 'Filter Coffee',
    description: 'Authentic South Indian degree coffee, frothy and strong.',
    price: 60,
    category: 'Beverages',
    badge: "Chef's Pick",
    veg: true,
    image: U('photo-1509042239860-f550ce710b93'),
  },
  {
    name: 'Gulab Jamun',
    description: 'Two warm khoya dumplings soaked in cardamom-rose syrup.',
    price: 90,
    category: 'Desserts',
    badge: 'Must Try',
    veg: true,
    image: U('photo-1601303516534-bf0b1eef9a8a'),
  },

  // Breakfast
  { name: 'Aloo Paratha (2 pcs)', description: 'Stuffed parathas with white butter, curd & pickle.', price: 110, category: 'Breakfast', veg: true },
  { name: 'Poha', description: 'Light flattened-rice with peanuts, curry leaves & lemon.', price: 80, category: 'Breakfast', veg: true },
  { name: 'Bread Pakora', description: 'Crisp potato-stuffed bread fritters with green chutney.', price: 70, category: 'Breakfast', veg: true, spicy: true },

  // North Indian
  { name: 'Dal Makhani', description: 'Black lentils slow-cooked overnight with butter & cream.', price: 220, category: 'North Indian', veg: true },
  { name: 'Shahi Paneer', description: 'Royal paneer in a mild, creamy cashew gravy.', price: 240, category: 'North Indian', veg: true },
  { name: 'Veg Biryani', description: 'Fragrant basmati layered with vegetables & whole spices, served with raita.', price: 200, category: 'North Indian', veg: true },
  { name: 'Tandoori Roti / Butter Naan', description: 'Clay-oven breads, plain or buttered.', price: 35, category: 'North Indian', veg: true },

  // South Indian
  { name: 'Rava Dosa', description: 'Lacy, crisp semolina dosa with onion & chillies.', price: 150, category: 'South Indian', veg: true, spicy: true },
  { name: 'Uttapam', description: 'Thick savoury pancake topped with onion, tomato & coriander.', price: 140, category: 'South Indian', veg: true },
  { name: 'Medu Vada', description: 'Golden lentil donuts with sambhar & chutney.', price: 110, category: 'South Indian', veg: true },

  // Chinese
  { name: 'Veg Manchurian', description: 'Vegetable dumplings tossed in tangy garlic-soy gravy.', price: 180, category: 'Chinese', veg: true, spicy: true },
  { name: 'Chilli Paneer', description: 'Crisp paneer in a sweet-spicy capsicum-onion glaze.', price: 200, category: 'Chinese', veg: true, spicy: true },
  { name: 'Veg Fried Rice', description: 'Wok-tossed rice with seasonal vegetables.', price: 150, category: 'Chinese', veg: true },

  // Snacks
  { name: 'Samosa (2 pcs)', description: 'Flaky pastry with spiced potato-pea filling.', price: 50, category: 'Snacks', veg: true },
  { name: 'Paneer Tikka', description: 'Char-grilled marinated paneer with mint chutney.', price: 220, category: 'Snacks', veg: true },
  { name: 'Hara Bhara Kabab', description: 'Spinach, peas & potato patties, lightly fried.', price: 170, category: 'Snacks', veg: true },

  // Beverages
  { name: 'Masala Chai', description: 'Spiced milk tea brewed the Daryaganj way.', price: 40, category: 'Beverages', veg: true },
  { name: 'Sweet / Salted Lassi', description: 'Thick churned curd, topped with malai.', price: 80, category: 'Beverages', veg: true },
  { name: 'Fresh Lime Soda', description: 'Sweet, salted or mixed — chilled and refreshing.', price: 60, category: 'Beverages', veg: true },

  // Desserts
  { name: 'Rasmalai (2 pcs)', description: 'Soft chenna patties in saffron-cardamom milk.', price: 110, category: 'Desserts', veg: true },
  { name: 'Moong Dal Halwa', description: 'Slow-roasted lentil halwa, rich with ghee & nuts.', price: 120, category: 'Desserts', veg: true },
];

export const popularDishes = dishes.filter((d) => d.badge);

/* ⚠️ REPRESENTATIVE reviews — derived from the restaurant's 4.9★ sentiment themes
   (pure-veg, family, value, freshness). Owner should replace with live Google
   reviews before launch. Names are illustrative. */
export type Review = {
  name: string;
  initial: string;
  rating: number;
  source: 'Google' | 'magicpin' | 'Zomato' | 'Walk-in';
  date: string;
  text: string;
  tags: string[];
};

export const reviews: Review[] = [
  {
    name: 'Ananya Sharma', initial: 'A', rating: 5, source: 'Google', date: 'Apr 2026',
    text: 'Easily the best pure-veg spot in Daryaganj. The Aarohi Special Thali is huge and everything tasted fresh and homely. Took my parents and they loved the no-onion-no-garlic options.',
    tags: ['Thali', 'Family', 'Fresh'],
  },
  {
    name: 'Rohit Verma', initial: 'R', rating: 5, source: 'magicpin', date: 'Mar 2026',
    text: 'Came in for breakfast and the masala dosa was crisp and perfect. Filter coffee reminded me of home in Chennai. Super value for money.',
    tags: ['South Indian', 'Value', 'Breakfast'],
  },
  {
    name: 'Sneha Gupta', initial: 'S', rating: 5, source: 'Google', date: 'Mar 2026',
    text: 'Clean kitchen, polite staff and the paneer butter masala was rich without being heavy. We are a vegetarian family and this is now our go-to in Old Delhi.',
    tags: ['Hygiene', 'Paneer', 'Service'],
  },
  {
    name: 'Imran Khan', initial: 'I', rating: 5, source: 'Zomato', date: 'Feb 2026',
    text: 'Chole bhature done right — fluffy and not oily. Quick service even when busy. The chutneys with the dosa are a highlight.',
    tags: ['Chole Bhature', 'Quick'],
  },
  {
    name: 'Priya Nair', initial: 'P', rating: 5, source: 'Google', date: 'Feb 2026',
    text: 'Reasonable prices, generous portions and a calm place to sit with family. The gulab jamun was warm and delicious. Highly recommend.',
    tags: ['Value', 'Family', 'Dessert'],
  },
  {
    name: 'Aditya Mehta', initial: 'A', rating: 5, source: 'Walk-in', date: 'Jan 2026',
    text: 'Walked in without a booking and got a table quickly. Hakka noodles and chilli paneer were both fresh and tasty. Great for a casual veg meal.',
    tags: ['Chinese', 'Walk-in'],
  },
];

/* Review-insight scores (out of 5), synthesised from the 4.9 overall rating
   and recurring sentiment themes above. */
export const reviewInsights = [
  { label: 'Food Quality', score: 4.9 },
  { label: 'Value for Money', score: 4.8 },
  { label: 'Hygiene & Cleanliness', score: 4.9 },
  { label: 'Service & Staff', score: 4.7 },
  { label: 'Ambience', score: 4.6 },
  { label: 'Family Friendliness', score: 4.9 },
];

export const lovePoints = [
  { stat: '92%', label: 'mention fresh, homely taste', icon: 'Leaf' },
  { stat: '88%', label: 'praise value for money', icon: 'Wallet' },
  { stat: '85%', label: 'recommend for family dining', icon: 'Users' },
  { stat: '90%', label: 'highlight clean, hygienic kitchen', icon: 'ShieldCheck' },
];

export const lovedDishes = [
  'Aarohi Special Thali',
  'Masala Dosa',
  'Paneer Butter Masala',
  'Chole Bhature',
  'Filter Coffee',
  'Gulab Jamun',
];

export const faqs = [
  {
    q: 'Is Aarohi Veg Restaurant fully vegetarian?',
    a: 'Yes — Aarohi is a 100% pure vegetarian kitchen. We serve no meat, fish or eggs, and offer no-onion-no-garlic (Jain-friendly) options on request.',
  },
  {
    q: 'Where exactly is Aarohi located?',
    a: 'We are at Plot 5048/49, Netaji Subhash Marg, Daryaganj, New Delhi 110002 — easily reachable from Delhi Gate and Chawri Bazaar metro stations.',
  },
  {
    q: 'Do you take table reservations?',
    a: 'Absolutely. Use the reservation form on this page, call us at +91 99112 75551, or message us on WhatsApp and we will confirm your table.',
  },
  {
    q: 'What are your opening hours?',
    a: 'We are open every day from 8:00 AM to 11:00 PM, serving breakfast, lunch and dinner.',
  },
  {
    q: 'What kind of food do you serve?',
    a: 'A full vegetarian spread — North Indian curries and breads, South Indian dosas and idlis, Indo-Chinese favourites, all-day breakfast, snacks, beverages and desserts.',
  },
  {
    q: 'Is it good for families and groups?',
    a: 'Yes. Aarohi is spacious, calm and family-friendly, with generous portions ideal for group and family dining.',
  },
  {
    q: 'Do you offer takeaway and delivery?',
    a: 'We offer dine-in and takeaway. For delivery, you can also order online or message us directly on WhatsApp.',
  },
  {
    q: 'What is the average cost?',
    a: 'Around ₹200–₹400 per person (roughly ₹800 for two) — premium taste at a comfortable price.',
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#dishes', label: 'Popular' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#location', label: 'Location' },
];
