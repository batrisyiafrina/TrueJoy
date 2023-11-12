function buttonClicked() {
    fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=glossier`)
        .then((response) => response.json())
        .then((data) => {
            var productsContainer = document.getElementById("products-container");
            productsContainer.innerHTML = ''; 
            if (data.length > 0) {
                data.forEach((result) => {
                    var resultContainer = document.createElement("div");
                    resultContainer.classList.add("result-container");
                    var productImage = document.createElement("img");
                    productImage.src = result.image_link;
                    productImage.alt = "Product Image";
                    resultContainer.appendChild(productImage);
                    var productLink = document.createElement("a");
                    productLink.href = result.product_link; 
                    productLink.textContent = "Product Link";
                    productLink.classList.add("custom-link"); 
                    resultContainer.appendChild(productLink);
                    var lineBreak = document.createElement("br");
                    resultContainer.appendChild(lineBreak);
                    var lineBreak = document.createElement("br");
                    resultContainer.appendChild(lineBreak);
                    var websiteLink = document.createElement("a");
                    websiteLink.href = result.website_link;
                    websiteLink.textContent = "Website Link";
                    websiteLink.classList.add("custom-link"); 
                    resultContainer.appendChild(websiteLink);
                    var lineBreak = document.createElement("br");
                    resultContainer.appendChild(lineBreak);
                    var lineBreak = document.createElement("br");
                    resultContainer.appendChild(lineBreak);
                    resultContainer.innerHTML += `
                    <strong class="results1">ID:</strong> <span class="results">${result.id}</span><br>
                    <strong class="results1">Brand:</strong> <span class="results">${result.brand}</span><br>
                    <strong class="results1">Name:</strong> <span class="results">${result.name}</span><br>
                    <strong class="results1">Rating:</strong> <span class="results">${result.rating}</span><br>
                    <strong class="results1">Price: $ </strong> <span class="results">${result.price}</span><br>
                    <strong class="results1">Description:</strong> <span class="results4">${result.description}</span><br>
                    `;
                    productsContainer.appendChild(resultContainer);
                });
            } else {
                productsContainer.innerHTML = "No results found";
            }
        });
}
