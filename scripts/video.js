const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));
};
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) => res.json())
        .then((data) => console.log (data))
        .catch((error) => console.log(error));
};

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories');
    categories.forEach((item) => {
        console.log(item);
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category; // Corrected from innertext to innerText

        categoriesContainer.append(button);
    });
};

loadCategories();
loadVideos();
