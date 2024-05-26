export async function getCategories() {
  const response = await fetch("http://localhost:3000/api/categories", {
    method: "get",
    next: {
      tags: ["categories"],
    },
  });

  const data = await response.json();

  return data;
}
