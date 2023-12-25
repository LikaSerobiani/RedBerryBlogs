import Category from "./Category";

export default function Categories({
  onSelectCategory,
  categories,
  searchParams,
}) {
  return (
    <div className="flex flex-wrap justify-start gap-[24px] my-[64px]">
      {categories.map((category) => (
        <div key={category.id}>
          <Category
            category={category}
            searchParams={searchParams}
            onChooseCategory={onSelectCategory}
          />
        </div>
      ))}
    </div>
  );
}
