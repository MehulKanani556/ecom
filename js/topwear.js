document.addEventListener("DOMContentLoaded", async () => {
  await topwearProducts();
  setupDiscountFilter();
  setupSizeFilter();
  setupPriceFilter();
});

async function topwearProducts(
  selectedDiscounts = [],
  selectedSizes = [],
  selectedPrice = 300
) {
  try {
    const response = await fetch("./../data/db.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    let topwearProducts = data.topwearProducts;

    // Filter products based on selected discounts
    if (selectedDiscounts.length > 0) {
      topwearProducts = topwearProducts.filter((item) =>
        selectedDiscounts.some((discount) => item.discount >= discount)
      );
    }

    // Apply size filtering
    if (selectedSizes.length > 0) {
      topwearProducts = topwearProducts.filter((item) =>
        selectedSizes.some((size) => item.sizes.includes(size))
      );
    }

    // Apply price filtering
    topwearProducts = topwearProducts.filter(
      (item) => item.price - (item.price * item.discount) / 100 <= selectedPrice
    );

    const topwearProductsHtml = topwearProducts
      .map(
        (item) => `
          <div class="col-xl-3 col-sm-6 text p-2">
              <div class="dk_browsing_products">
                  <div class="card">
                      <div class="dk_bedge">
                          ${
                            item.bestseller
                              ? `<p class="mb-0">Best Seller</p>`
                              : ""
                          }
                      </div>
                      <div class="icon-container">
                          <span onclick="toggleWishlist(event, ${
                            item.id
                          })" style="cursor: pointer !important; color:#000000; class="icon heart" data-product-id="${
          item.id
        }">
                             <i class="fa-regular fa-heart"></i>
                          </span>
                          <span style="cursor: pointer !important;">
                              <img height="25px" width="25px" src="/mv_image/icon_cart_selected.png"
                                  alt="Cart Icon" class="cart-icon">
                          </span>
                      </div>
                      <div class="slider">
                          ${item.images
                            .map(
                              (img, imgIndex) =>
                                `<img src="/img/${img}" alt="Product Image" class="slider-image ${
                                  imgIndex === 0 ? "active" : ""
                                }" data-index="${imgIndex}">`
                            )
                            .join("")}
                      </div>
  
                      <div class="dots-container">
                          ${item.images
                            .map(
                              (_, dotIndex) =>
                                `<span class="dot ${
                                  dotIndex === 0 ? "active" : ""
                                }" data-index="${dotIndex}"></span>`
                            )
                            .join("")}
                      </div>
                      <h2>${item.name}</h2>
                      <p>${item.categorydesc}</p>
                      <div class="d-flex align-items-center">
                          <div style="color: #f8a120">
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                          </div>
                          <div style="color: #b8b8b8">
                              <i class="fa-solid fa-star ms-1"></i>
                          </div>
                      </div>
  
                      <div class="thumbnails">
                          ${item.thumbnail
                            .map(
                              (thumb, thumbIndex) =>
                                `<img src="/img/${thumb}" alt="Thumbnail" class="thumbnail" data-index="${thumbIndex}">`
                            )
                            .join("")}
                      </div>
  
                      <div class="off">
                          <span class="off-price">${item.discount}% OFF</span>
                      </div>
  
                      <div class="price">
                          <span class="discount-price">$${(
                            item.price -
                            item.price * (item.discount / 100)
                          ).toFixed(0)}</span>
                          <span class="original-price">$${item.price}</span>
                      </div>
                  </div>
                  <button class="buy-now">Buy Now</button>
              </div>
          </div>
        `
      )
      .join("");

    document.getElementById("topwears_products").innerHTML =
      topwearProductsHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

function setupDiscountFilter() {
  const discountCheckboxes = document.querySelectorAll(
    '.accordion-body input[type="checkbox"][id^="discount"]'
  );

  discountCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateFilters);
  });
}

function setupSizeFilter() {
  const sizeCheckboxes = document.querySelectorAll(
    '.accordion-body input[type="checkbox"][id^="size"]'
  );

  sizeCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateFilters);
  });
}

function setupPriceFilter() {
  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");

  priceRange.addEventListener("input", () => {
    priceValue.textContent = `$${priceRange.value}`;
    updateFilters();
  });
}

function updateFilters() {
  const selectedDiscounts = Array.from(
    document.querySelectorAll(
      '.accordion-body input[type="checkbox"][id^="discount"]:checked'
    )
  ).map((cb) => parseInt(cb.id.replace("discount", "")));

  const selectedSizes = Array.from(
    document.querySelectorAll(
      '.accordion-body input[type="checkbox"][id^="size"]:checked'
    )
  ).map((cb) => cb.id.replace("size", ""));

  const selectedPrice = document.getElementById("priceRange").value;

  topwearProducts(selectedDiscounts, selectedSizes, selectedPrice);
}
