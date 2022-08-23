interface IProduct {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  vendor: string;
  product_type: string;
  tags: string[];
  variants: IProductVariant[];
  images: IProductImage[];
  options: IProductOption[];
}

interface IProductVariant {
  id: number;
  title: string;
  option1: string | null;
  option2: string | null;
  option3: string | null;
  sku: string;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image: IProductImage;
  available: boolean;
  price: string;
  grams: number;
  compare_at_price: number | null;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
}

interface IProductImage {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt: string | null;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
}

interface IProductOption {
  name: string;
  position: number;
  values: string[];
}

export { IProduct, IProductVariant, IProductImage, IProductOption };
