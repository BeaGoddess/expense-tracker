import { getCategories } from "@/actions/categories";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="mt-8 sm:mt-20">
      Categories
      {categories.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
