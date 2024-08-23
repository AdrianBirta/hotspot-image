export interface Product {
  img: string;
  name: string;
  price: string;
  description: string;
  addToCartLink: string;
  detailsLink: string;
}

export interface Hotspot {
  id: string;
  top: string;
  left: string;
  product: Product;
}

export interface HotspotData {
  src: string;
  hotspots: Hotspot[];
}
