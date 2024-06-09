const categories = document.querySelectorAll("ul#categories > .item");

console.log(`Кількість категорій: ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;

  const items = category.querySelectorAll("li");

  console.log(`Категорія: ${title} \n Кількість елементів: ${items.length}`);
});
