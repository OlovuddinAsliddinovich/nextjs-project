export interface BlogsType {
  title: string;
  exerpt: string;
  id: string;
  image: {
    url: string;
  };
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
