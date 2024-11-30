export interface BlogsType {
  blogs: {
    title: string;
    excerpt: string;
    image: {
      url: string;
    };
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
  }[];
}
