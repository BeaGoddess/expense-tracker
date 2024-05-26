import { getNextApiBaseURL } from "@/lib/utils/fetch";

export async function getCategories() {
  const response = await fetch(`${getNextApiBaseURL()}/categories`, {
    method: "GET",
    next: {
      tags: ["categories"],
    },
  });

  const data = await response.json();

  return data;
}
