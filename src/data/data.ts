import { cs1,cs2, cs3, cs4, ione, ithree, itwo } from "./imageUrls";
import { jp2,jp3,jp4,jp6,jp7,jp10 } from "./jeansUrl";

export const prod = [
  {
    name: "RELAXED HALF SLEEVE T-SHIRT",
    clothtype: "Shirts",
    variation: "T-Shirts",
    images: [ione, itwo, ithree],
    sizes: [
      {
        size:"S",
        quantity: 10,
      },
      {
        size: "M",
        quantity: 8,
      },
      {
        size: "L",
        quantity: 15,
      },
      {
        size: "XL",
        quantity: 12,
      },
      {
        size: "XXL",
        quantity: 6,
      },
    ],
    color: { name: "Black", code: "#000000" },

    description:
      "Not quite short sleeves, not quite long sleeves—say hello to our Half-Sleeve T-Shirt. It has everything you love in a tee: a clasic crew neckline, a relaxed fit and slightly longer short sleeves for a throwback look.",
    descriptionlist: [
      "A timeless tee",
      "With longer short sleeves",
      "Cut with a relaxed fit",
    ],
    howitfits: [
      "Loose fit",
      `Model is 6{"'"} 1.5{'"'} with a 30{'"'} waist. They{"'"}re wearing a size medium.`,
    ],
    composition_care: [
      "100% cotton",
      "Crewneck",
      "Short sleeves",
      "Machine wash cold, Do not bleach, tumble dry low, warm iron if needed, dry cleaning possible, wash inside out with like colors",
      "Imported",
    ],
    tags: ["Relaxed", "Half_Sleeve", "t_shirt"],
    price:50,
    discount: 10,
  },
  {
    name: "SUNSET ONE POCKET BUTTON-UP SHIRT",
    clothtype: "Shirts",
    variation: "Casual",
    images: [cs1, cs2, cs3, cs4],
    sizes: [
      {
        size: "S",
        quantity: 8,
      },
      {
        size: "M",
        quantity: 10,
      },
      {
        size: "L",
        quantity: 20,
      },
      {
        size: "XL",
        quantity: 15,
      },
      {
        size: "XXL",
        quantity: 7,
      },
    ],
    color: { name: "brown", code: "#964B00" },

    description:
      "The perfect balance between refined and effortlessly casual. Our Sunset Pocket Standard Fit Shirt harmonizes a streamlined silhouette, classic detailing and handy chest pocket in the form of a versatile, elevated shirt.",
    descriptionlist: [
      "A classic style inspired by a garment from our archive",
      "Timeless single pocket detail",
      "Size up for a relaxed, comfortable fit",
    ],
    howitfits: [
      "Standard fit",
      `Model is 6{"'"} 1{'"'} with a 26.7{'"'} waist. They're wearing a size medium`,
    ],
    composition_care: [
      "100% cotton",
      "Point collar",
      "Long sleeves",
      "Machine wash cold - normal cycle. wash inside out with like colors, do not bleach, tumble dry medium, warm iron, dry clean possible",
      "Imported",
    ],
    tags: ["SUNSET", " ONE_POCKET", "BUTTON_UP", "Shirt"],
    price:30,
    discount: 15,
  },
  {
    name: "551™ Z AUTHENTIC STRAIGHT FIT MEN'S JEANS",
    clothtype: "Pants",
    variation: "Jeans",
    images: [jp2,jp3,jp4,jp6,jp7,jp10],
    sizes: [
      {
        size: "30",
        quantity: 8,
      },
      {
        size: "31",
        quantity: 10,
      },
      {
        size: "32",
        quantity: 20,
      },
      {
        size: "33",
        quantity: 15,
      },
      {
        size: "34",
        quantity: 7,
      },
    ],
    color: { name: "black", code: "#00000" },

    description:
      "Our 551™ Z Authentic Straight pays tribute to our first-ever pre-shrunk jeans. True to the original, they feature signature stitching one inch away from the seams and a wider J-stitch at the fly. Stacking at the hem and a distinct “anti-fit”—a slightly looser cut that stands in opposition to slimmer and skinnier styles in the seat—make these vintage-inspired jeans the perfect pair for the skatepark. Think of these as the holy grail of thrift store finds, minus the hunt.",
    descriptionlist: [
      "Inspired by our first-ever pre-shrunk jeans: the 551™ Z",
    ],
    howitfits: [
      "Relaxed Through The Seat And Thigh",
      "Sits at your waist",
      "Straight Leg",
      `Front rise: 11 1/2'', Knee: 18'', Leg opening: 16 1/4'', Measurements based on size 32`,
      `Model is 5'11" with a 30" waist. They're wearing a size 30" x 32"`,
    ],
    composition_care: [
      "100% cotton",
      "Denim      ",
      "Non-stretch",
      "Zip fly",
      "5-pocket styling",
      "Recycle and reuse facility",
      "Machine wash cold - normal cycle. wash inside out with like colors, do not bleach, tumble dry medium, warm iron if needed, dry cleaning possible",
      "Imported",
    ],
    tags: ["Z_AUTHENTIC", " STRAIGHT", "FIT", "JEANS"],
    price:68.60,
    discount: 15,
  },
];
