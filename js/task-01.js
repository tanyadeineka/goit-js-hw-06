const totalCategories = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
    .forEach(categories => {
        console.log(`Category: ${categories.children[0].textContent}`);
        console.log(`Elements: ${categories.children[1].children.length}`);
    });