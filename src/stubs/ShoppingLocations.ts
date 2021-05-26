import { ImageDetail } from "./Jobs";

interface ShoppingLocation extends ImageDetail {
  category: string;
  deliveryTime?: string;
  driveThrough?: boolean;
  delivery?: boolean;
  location: string;
}

export const locationBanners: ShoppingLocation[] = [
  {
    imageUrl:
      "https://goget-uploads.s3-ap-southeast-1.amazonaws.com/stores/ikea/ikea.png",
    name: "IKEA Furnishing Batu Kawan",
    category: "Home & Living",
    deliveryTime: "10am-8pm",
    driveThrough: true,
    delivery: true,
    location: "IKEA Malaysia",
  },
  {
    imageUrl:
      "https://goget-uploads.s3-ap-southeast-1.amazonaws.com/stores/ikea/ikea.png",
    name: "IKEA Furnishing Damansara",
    category: "Home & Living",
    deliveryTime: "10am-8pm",
    driveThrough: true,
    delivery: true,
    location: "IKEA Malaysia",
  },
  {
    imageUrl:
      "https://goget-uploads.s3-ap-southeast-1.amazonaws.com/stores/ikea/ikea.png",
    name: "IKEA Furnishing Tebrau",
    category: "Home & Living",
    deliveryTime: "10am-8pm",
    driveThrough: true,
    delivery: true,
    location: "IKEA Malaysia",
  },
  {
    imageUrl:
      "https://goget-uploads.s3-ap-southeast-1.amazonaws.com/stores/ikea/ikea.png",
    name: "IKEA Restaurant Batu Kawan",
    category: "F&B",
    deliveryTime: "10am-7pm",
    driveThrough: true,
    delivery: true,
    location: "IKEA Malaysia",
  },
  {
    imageUrl:
      "https://goget-uploads.s3-ap-southeast-1.amazonaws.com/stores/ikea/ikea.png",
    name: "IKEA Restaurant Damansara",
    category: "F&B",
    deliveryTime: "10am-7pm",
    driveThrough: true,
    delivery: true,
    location: "IKEA Malaysia",
  },
];
