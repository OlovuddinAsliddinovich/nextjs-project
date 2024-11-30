import { BlogsType } from "src/interfaces/blogs.inteface";
import { CategoriesType } from "src/interfaces/categories.interface";

export interface SidebarProps {
  latestBlogs: BlogsType[];
  categories: CategoriesType[];
}
