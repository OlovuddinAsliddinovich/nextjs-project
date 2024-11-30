export interface BlogsType {
  title: string;
  excerpt: string;
  image: {
    url: string;
  };
  createdAt: Date;
  id: string;
  slug: string;
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  category: {
    label: string;
    slug: string;
  };
}
