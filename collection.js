
var offclose = document.getElementById("close")
var x = document.getElementById("x")

x.addEventListener("click", function () {
    offclose.style.display = "none"
})



// Menu bar

var menu = document.getElementById("menu")
var navclosed = document.querySelector(".nav__titles2")
var menbar = document.querySelector(".nav__titles")

menu.addEventListener("click", function () {
    menbar.style.right = "0%"
})
navclosed.addEventListener("click", function () {
    menbar.style.right = "-100%"
})

document.addEventListener('DOMContentLoaded', function() {
    // Get all checkboxes
    const checkboxes = document.querySelectorAll('.productlist input[type="checkbox"]');
    // Get all product elements
    const products = document.querySelectorAll('.collection-product .product');

    // Function to filter products based on selected checkboxes
    function filterProducts() {
        // Get selected filter values
        const selectedOccasions = Array.from(document.querySelectorAll('.productlist .occasion input[type="checkbox"]:checked')).map(cb => cb.nextElementSibling.textContent.trim().toLowerCase());
        const selectedColors = Array.from(document.querySelectorAll('.productlist .colors input[type="checkbox"]:checked')).map(cb => cb.nextElementSibling.textContent.trim().toLowerCase());

        products.forEach(product => {
            // Get product attributes (assuming these are available as data attributes or similar)
            const productOccasion = product.querySelector('h2')?.textContent.trim().toLowerCase() || '';
            const productColor = product.querySelector('h2')?.textContent.trim().toLowerCase() || '';

            // Check if product matches selected filters
            const matchesOccasion = selectedOccasions.length === 0 || selectedOccasions.some(occasion => productOccasion.includes(occasion));
            const matchesColor = selectedColors.length === 0 || selectedColors.some(color => productColor.includes(color));

            // Show or hide product based on filters
            if (matchesOccasion && matchesColor) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Add event listeners to checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
});
