const sampleListings = [
  {
    title: "Goa",
    description:
      "Popular for its beaches, nightlife and Portuguese-era heritage.",
    image: {
      url: "https://images.unsplash.com/photo-1642922835816-e2ac68db5c42?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "goa.jpg",
    },
    price: 3500,
    location: "Goa, India",
    country: "India",
    category: "other",
    geometry: { type: "Point", coordinates: [74.124, 15.29933] },
  },
  {
    title: "Manali",
    description:
      "A scenic hill station in Himachal Pradesh, great for adventure and snow.",
    image: {
      url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "manali.jpg",
    },
    price: 2500,
    location: "Manali, Himachal Pradesh, India",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [77.188713, 32.239632] },
  },
  {
    title: "Shimla",
    description:
      "Colonial-era hill station known for its toy train and cool climate.",
    image: {
      url: "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "shimla.jpg",
    },
    price: 3000,
    location: "Shimla, Himachal Pradesh, India",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [77.173424, 31.104605] },
  },
  {
    title: "Gulmarg",
    description:
      "Snowy meadows in Jammu & Kashmir, also great for skiing and golf.",
    image: {
      url: "https://images.unsplash.com/photo-1690650025133-f25598a4de68?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "gulmarg.jpg",
    },
    price: 4000,
    location: "Gulmarg, Jammu & Kashmir, India",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [74.38, 34.05] },
  },
  {
    title: "Leh (Ladakh)",
    description:
      "High-altitude marvel in Ladakh, perfect for adventure & monasteries.",
    image: {
      url: "https://images.unsplash.com/photo-1532335835779-00bb68029576?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "leh.jpg",
    },
    price: 4500,
    location: "Leh, Ladakh, India",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [77.58472, 34.16417] },
  },
  {
    title: "Spiti Valley",
    description: "Remote cold desert valley with stunning mountain scenery.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "spiti.jpg",
    },
    price: 3000,
    location: "Spiti Valley, Himachal Pradesh, India",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [77.999249, 32.287042] },
  },
  {
    title: "Darjeeling",
    description: "Queen of the Hills : tea gardens and Himalayan vistas.",
    image: {
      url: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "darjeeling.jpg",
    },
    price: 2800,
    location: "Darjeeling, West Bengal, India",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [88.262672, 27.036007] },
  },
  {
    title: "Pahalgam",
    description:
      "Meadowy Himalayan haven, with valleys, rivers and trekking trails.",
    image: {
      url: "https://images.unsplash.com/photo-1636000412010-0df8743754a2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "pahalgam.jpg",
    },
    price: 3200,
    location: "Pahalgam, Jammu & Kashmir, India",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [75.318054, 34.016373] },
  },
  {
    title: "Agra",
    description: "Home of the iconic Taj Mahal and Mughal-era architecture.",
    image: {
      url: "https://images.unsplash.com/photo-1555099101-3766220a07ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "agra.jpg",
    },
    price: 2200,
    location: "Agra, Uttar Pradesh, India",
    country: "India",
    category: "iconic cities",
    geometry: { type: "Point", coordinates: [78.0081, 27.1767] },
  },
  {
    title: "Bali",
    description: "Tropical paradise known for beaches, temples, and culture.",
    image: {
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "bali.jpg",
    },
    price: 6000,
    location: "Bali, Indonesia",
    country: "Indonesia",
    category: "other",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
  },
  // 🔲 rooms
  {
    title: "Cozy Delhi Apartment",
    description: "Comfortable 2 : bedroom flat in central Delhi.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1714023801163-542aea929f20?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "delhi_apartment.jpg",
    },
    price: 2500,
    location: "Delhi, India",
    country: "India",
    category: "rooms",
    geometry: { type: "Point", coordinates: [77.209, 28.6139] },
  },
  {
    title: "Mumbai Studio Room",
    description: "Compact studio near Marine Drive.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1661853413809-6be6bed796d9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "mumbai_studio.jpg",
    },
    price: 3000,
    location: "Mumbai, Maharashtra, India",
    country: "India",
    category: "rooms",
    geometry: { type: "Point", coordinates: [72.8777, 19.076] },
  },

  // 🏙 iconic cities
  {
    title: "Jaipur Heritage Home",
    description: "Stay in the pink city near the palace.",
    image: {
      url: "https://images.unsplash.com/photo-1673103532626-8ae7d17a0dcd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "jaipur_home.jpg",
    },
    price: 3200,
    location: "Jaipur, Rajasthan, India",
    country: "India",
    category: "iconic cities",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
  },
  {
    title: "Kolkata Colonial Cottage",
    description: "Heritage cottage in North Kolkata.",
    image: {
      url: "https://images.unsplash.com/photo-1672559455432-09c961958208?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "kolkata_cottage.jpg",
    },
    price: 2800,
    location: "Kolkata, West Bengal, India",
    country: "India",
    category: "iconic cities",
    geometry: { type: "Point", coordinates: [88.3639, 22.5726] },
  },

  // 🏔 mountains
  {
    title: `Cozy A-frame in Uttarakhand`,
    description: `Rustic A-frame in the Garhwal hills.`,
    image: {
      url: "https://images.unsplash.com/photo-1682371186598-60aa7e81a908?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "garhwal_aframe.jpg",
    },
    price: 4000,
    location: "Uttarkashi, Uttarakhand, India",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [78.456, 30.7294] },
  },
  {
    title: "Ooty Hill Cottage",
    description: "Charming cottage in Nilgiri hills.",
    image: {
      url: "https://images.unsplash.com/photo-1661619870331-861133b1e0f2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "ooty_cottage.jpg",
    },
    price: 3800,
    location: "Ooty, Tamil Nadu, India",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [76.695, 11.4064] },
  },

  // 🏰 castles
  {
    title: "Neemrana Fort Palace Stay",
    description: "Stay inside a 15th-century fort palace!",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1697729659412-23a4b5b5e874?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "neemrana_fort.jpg",
    },
    price: 9000,
    location: "Neemrana, Rajasthan, India",
    country: "India",
    category: "castles",
    geometry: { type: "Point", coordinates: [76.2667, 27.9667] },
  },
  {
    title: "Bundi Palace Heritage Room",
    description: "Royal room in Bundi Palace.",
    image: {
      url: "https://images.unsplash.com/photo-1728024181315-8c7f5815bf00?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "bundi_palace.jpg",
    },
    price: 7000,
    location: "Bundi, Rajasthan, India",
    country: "India",
    category: "castles",
    geometry: { type: "Point", coordinates: [75.6474, 25.426] },
  },

  // 🏊 amazing pools
  {
    title: "Infinity Pool Kerala Villa",
    description: "Private villa with infinity pool.",
    image: {
      url: "https://images.unsplash.com/photo-1567491634123-460945ea86dd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "kerala_villa.jpg",
    },
    price: 7500,
    location: "Alleppey, Kerala, India",
    country: "India",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [73.854, 9.4981] },
  },
  {
    title: "Goa Beach Poolside Villa",
    description: "Villa with direct pool access.",
    image: {
      url: "https://images.unsplash.com/photo-1575669629426-cea7489ba1e5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "goa_poolvilla.jpg",
    },
    price: 8500,
    location: "Candolim, Goa, India",
    country: "India",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [73.8045, 15.5402] },
  },

  // 🏕 camping
  {
    title: "Rishikesh Riverside Campsite",
    description: "Tent by the Ganges with firepit.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1664910264627-28b2eabca3c9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "rishikesh_camp.jpg",
    },
    price: 2000,
    location: "Rishikesh, Uttarakhand, India",
    country: "India",
    category: "camping",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] },
  },
  {
    title: "Spiti Valley Campground",
    description: "Pitch tents under starry skies.",
    image: {
      url: "https://images.unsplash.com/photo-1583250847032-01140ecd9ac4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "spiti_camp.jpg",
    },
    price: 2500,
    location: "Kaza, Spiti Valley, Himachal Pradesh, India",
    country: "India",
    category: "camping",
    geometry: { type: "Point", coordinates: [78.2214, 32.2269] },
  },

  // 🚜 farms
  {
    title: "Goa Farm Stay",
    description: "Stay on a spice plantation farm.",
    image: {
      url: "https://images.unsplash.com/photo-1597474417024-3ca3baa9fb13?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "goa_farmstay.jpg",
    },
    price: 3300,
    location: "Ponda, Goa, India",
    country: "India",
    category: "farms",
    geometry: { type: "Point", coordinates: [73.989, 15.4257] },
  },
  {
    title: "Coorg Coffee Estate Stay",
    description: "Homestay on a working coffee farm.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1749115471574-2332f02f85ca?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "coorg_coffee.jpg",
    },
    price: 5000,
    location: "Coorg, Karnataka, India",
    country: "India",
    category: "farms",
    geometry: { type: "Point", coordinates: [76.2167, 12.3375] },
  },

  // 🧊 arctic
  {
    title: "Ladakh Snow Dome",
    description: "Heated dome with snow views.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1661964382350-4fde775fd9b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "ladakh_dome.jpg",
    },
    price: 6500,
    location: "Changthang, Ladakh, India",
    country: "India",
    category: "arctic",
    geometry: { type: "Point", coordinates: [78.4, 32.6] },
  },
  {
    title: "Sikkim Snowy Chalet",
    description: "Chalet surrounded by snow peaks.",
    image: {
      url: "https://images.unsplash.com/photo-1528304894962-35834211f7ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "sikkim_chalet.jpg",
    },
    price: 6000,
    location: "Gurudongmar Road, North Sikkim, India",
    country: "India",
    category: "arctic",
    geometry: { type: "Point", coordinates: [88.667, 27.708] },
  },

  // 🟣 domes
  {
    title: "Rajasthan Desert Dome",
    description: "Luxurious dome under desert stars.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1697730337385-92157d0c9c0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "rajasthan_dome.jpg",
    },
    price: 9000,
    location: "Jaisalmer, Rajasthan, India",
    country: "India",
    category: "domes",
    geometry: { type: "Point", coordinates: [70.9126, 26.9157] },
  },
  {
    title: "Himalayan Glass Dome",
    description: "Glass dome in mountain forest.",
    image: {
      url: "https://images.unsplash.com/photo-1661264047307-4d692250a7ac?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "himalayan_dome.jpg",
    },
    price: 9500,
    location: "Nainital, Uttarakhand, India",
    country: "India",
    category: "domes",
    geometry: { type: "Point", coordinates: [79.4636, 29.3949] },
  },

  // 🚤 boats
  {
    title: "Kerala Houseboat",
    description: "Traditional houseboat on backwaters.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "kerala_boat.jpg",
    },
    price: 5500,
    location: "Alleppey, Kerala, India",
    country: "India",
    category: "boats",
    geometry: { type: "Point", coordinates: [73.8967, 9.6666] },
  },
  {
    title: "Goa Floating Villa",
    description: "Private floating villa on lake.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1694475205503-d6c6a71f03bc?q=80&w=1201&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "goa_boatvilla.jpg",
    },
    price: 8000,
    location: "Panjim, Goa, India",
    country: "India",
    category: "boats",
    geometry: { type: "Point", coordinates: [74.1239, 15.4909] },
  },
];

module.exports = { data: sampleListings };
