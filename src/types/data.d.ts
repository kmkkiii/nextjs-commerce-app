// 商品のカテゴリ
export type Category = "shoes" | "clothes" | "book";
// 商品の状態
export type Condition = "new" | "used";

export type User = {
  id: number;
  username: string;
  displayName: string;
  email: string;
  profileImageUrl: string;
  description: string;
};

export type Product = {
  id: number;
  category: Category;
  title: string;
  description: string;
  imageUrl: string;
  blurDataUrl: string;
  price: number;
  condition: Condition;
  owner: User;
};

// API Context
export type ApiContext = {
  apiRootUrl: string;
};
