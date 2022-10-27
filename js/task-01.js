const totalCategories = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
    .forEach(categories => {
        console.log(`Category: ${categories.firstElementChild.textContent}`);
        console.log(`Elements: ${categories.lastElementChild.children.length}`);
    });