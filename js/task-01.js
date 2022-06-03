const categoriesRef = document.querySelector("#categories");
const listCategoriesRef = [...categoriesRef.children]; 

console.log(`Number of categories: ${listCategoriesRef.length}`);

listCategoriesRef.forEach((item) => {
  const titleOfCategoryRef = item.firstElementChild; 
  const elementsOfCategoryRef = item.lastElementChild.children; 

  console.log(`Category: ${titleOfCategoryRef.textContent}`);
  console.log(`Elements: ${elementsOfCategoryRef.length}`);
});