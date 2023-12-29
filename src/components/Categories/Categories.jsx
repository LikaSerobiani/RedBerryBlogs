import Category from "./Category";

export default function Categories({
  onSelectCategory,
  categories,
  selectedCategory,
}) {
  return (
    <div className="flex flex-wrap justify-start gap-[24px] my-[64px]">
      {categories.map((category) => (
        <div key={category.id}>
          <Category
            category={category}
            selectedCategory={selectedCategory}
            onChooseCategory={onSelectCategory}
          />
        </div>
      ))}
    </div>
  );
}
