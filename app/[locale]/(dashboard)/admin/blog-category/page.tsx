import List from "./List";
import Create from "./Create";

export default async function BlogCategory() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Blog Category</h1>
      <div className="space-y-4">
        <Create />
        <List />
      </div>
    </div>
  );
}
