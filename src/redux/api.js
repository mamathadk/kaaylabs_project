//

export async function fetchData(page, pageSize) {
  try {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${pageSize}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
