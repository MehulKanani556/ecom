// Home  (Menas Fashion)

async function loadCategory() {
    try {
        const response = await fetch('./../data/db.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const category = data.homecategory;

        const categoryHtml = category.map((item, index) => {
            return (
                `
                <div class="swiper-slide">
                                <img src="../img/man.png" alt="Mens Fashion">
                                <p>Mens Fashion</p>
                            </div>`
            )
        }).join("")

        if (document.getElementById("mv_mens_fashion")) {
            document.getElementById("mv_mens_fashion").innerHTML = categoryHtml;
        }

    } catch (error) {
        console.error("Error loading categories:", error);
    }
}



// const categoryHtml = category.map((item, index) => {
//     return `
//         <a href="../darshit/${item.link}.html">
//             <div class="swiper-slide">
//                 <img src="../img/${item.img}" alt="${item.name}">
//                 <p style="color: #000000; font-weight: 500;">${item.name}</p>
//             </div>
//         </a>`;
// }).join("");

// document.getElementById("mv_mens_fashion").innerHTML = categoryHtml;

// Home  (Footwear & Handbags)

async function loadFootwear() {
    try {
        const response = await fetch('./../data/db.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const footwear = data.homefootwear;

        const footwearHtml = footwear.map((item, index) => {
            return (
                `<div class="col-6 col-sm-4 col-md-4 col-lg-2 text-center category">
            ${item.link ? `<a style="cursor: pointer !important;" href="../darshit/${item.link}.html">` : ""}
                    <img src="../img/${item.img}">
                    <p style="color: #fff; font-weight: 500;">${item.name}</p>
                </a>
        </div>`
            );
        }).join("");

        if (document.getElementById("mv_sport_shoes")) {
            document.getElementById("mv_sport_shoes").innerHTML = footwearHtml;
        }

    } catch (error) {
        console.error("Error loading categories:", error);
    }
}

// Home  (Electronics)

async function loadHomeElectronic() {
    try {
        const response = await fetch('./../data/db.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const homelectronic = data.homebestelectronic;

        const homelectronicHtml = homelectronic.map((item, index) => {
            let priceText = item.startprice.includes('%')
                ? `Up to ${item.startprice} OFF`
                : `Start from <b>${item.startprice}</b>`;

            return (
                `<a href="../darshit/${item.link}.html" class="dk_product-item">
                    <img src="../img/${item.img}" alt="${item.name}">
                    <h5 style="color: #000000; font-weight: 500;">${item.name}</h5>
                    <p style="color: #000000; font-weight: 400;">${priceText}</p>
                </a>`
            )
        }).join("");

        if (document.getElementById("mv_electronic")) {
            document.getElementById("mv_electronic").innerHTML = homelectronicHtml;
        }

    } catch (error) {
        console.error("Error loading home electronics:", error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadCategory();
    await loadFootwear();
    await loadHomeElectronic();
    await loadProduct();
    await loadBestsellerProduct();
    await loadTopsellingSmartphone();
    await loadBrowsingproduct();
    await loadwishlistdata();
    geturl();
});

// Home (Women’s cards)

async function loadProduct() {
    try {
        const response = await fetch('./../data/db.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const product = data.products.slice(0, 4);

        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        const productHtml = product.map((item, index) => {

            const isWishlist = wishlist.includes(item.id);

            return `
                <div class="col-xl-3 col-sm-6 text p-2">
                    <a href="productdetails.html?id=${item.id}">
                        <div class="dk_browsing_products">
                            <div class="card" data-card-index="${index}">
                                <div class="icon-container">
                                    <span onclick="toggleWishlist(event, ${item.id})" style="cursor: pointer !important; color: ${isWishlist ? '#ff0000' : '#000000'}; class="icon heart" data-product-id="${item.id}">
                                       <i class="fa-${isWishlist ? 'solid' : 'regular'} fa-heart"></i>

                                    </span>
                                    <span style="cursor: pointer !important;">
                                        <img height="25px" width="25px" src="/mv_image/icon_cart_selected.png"
                                            alt="Cart Icon" class="cart-icon">
                                    </span>
                                </div>

                                <div class="slider">
                                    ${item.images.map((img, imgIndex) =>
                `<img src="/img/${img}" alt="Product Image" class="slider-image ${imgIndex === 0 ? 'active' : ''}" data-index="${imgIndex}">`
            ).join('')}
                                </div>

                                <div class="dots-container">
                                    ${item.images.map((_, dotIndex) =>
                `<span class="dot ${dotIndex === 0 ? 'active' : ''}" data-index="${dotIndex}"></span>`
            ).join('')}
                                </div>

                                <h2>${item.name}</h2>
                                <p>${item.categorydesc}</p>

                                <div class="thumbnails">
                                    ${item.thumbnail.map((thumb, thumbIndex) =>
                `<img src="/img/${thumb}" alt="Thumbnail" class="thumbnail" data-index="${thumbIndex}">`
            ).join('')}
                                </div>

                                <div class="off">
                                    <span class="off-price">${item.discount}% OFF</span>
                                </div>

                                <div class="price">
                                    <span class="discount-price">$${(item.price - (item.price * (item.discount / 100))).toFixed(0)}</span>
                                    <span class="original-price">$${item.price}</span>
                                </div>
                            </div>
                            <button class="buy-now">Buy Now</button>
                        </div>
                    </a>
                </div>
            `;
        }).join("");

        if (document.getElementById("mv_womens_cards")) {
            document.getElementById("mv_womens_cards").innerHTML = productHtml;
        }

        initializeSliders();

    } catch (error) {
        console.error("Error loading products:", error);
    }
}


// Function to handle image slider functionality
function initializeSliders() {
    document.querySelectorAll('.card').forEach(card => {
        const images = card.querySelectorAll('.slider-image');
        const dots = card.querySelectorAll('.dot');
        const thumbnails = card.querySelectorAll('.thumbnail');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        // Autoplay functionality
        let autoplayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 3000);

        // Dot Click Event
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                clearInterval(autoplayInterval);
                currentIndex = parseInt(dot.getAttribute('data-index'), 10);
                showImage(currentIndex);
            });
        });

        // Thumbnail Click Event
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                clearInterval(autoplayInterval);
                currentIndex = parseInt(thumbnail.getAttribute('data-index'), 10);
                showImage(currentIndex);
            });
        });
    });
}





// Home (Best sellers)

async function loadBestsellerProduct() {
    try {
        const response = await fetch('./../data/db.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const bestsellerProducts = data.products.filter(item => item.bestseller).slice(0, 8);

        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        const bestsellerproductHtml = bestsellerProducts.map((item, index) => {

            const isWishlist = wishlist.includes(item.id);

            return `
                <div class="col-xl-3 col-sm-6 text p-2">
                    <a>
                        <div class="dk_browsing_products">
                            <div class="card" data-card-index="${index}">
                                 <div class="dk_bedge">
                                    ${item.bestseller === true ? `<p class="mb-0">Best Seller</p>` : ""}
                                </div>
                                <div class="slider">
                                    ${item.images.map((img, imgIndex) =>
                `<img src="/img/${img}" alt="Product Image" class="slider-image ${imgIndex === 0 ? 'active' : ''}" data-index="${imgIndex}">`
            ).join('')}
                                </div>

                                <div class="dots-container">
                                    ${item.images.map((_, dotIndex) =>
                `<span class="dot ${dotIndex === 0 ? 'active' : ''}" data-index="${dotIndex}"></span>`
            ).join('')}
                                </div>

                                <h2>${item.name}</h2>
                                <p>${item.categorydesc}</p>

                                <div class="thumbnails">
                                    ${item.thumbnail.map((thumb, thumbIndex) =>
                `<img src="/img/${thumb}" alt="Thumbnail" class="thumbnail" data-index="${thumbIndex}">`
            ).join('')}
                                </div>

                                <div class="off">
                                    <span class="off-price">${item.discount}% OFF</span>
                                </div>

                                <div class="price">
                                    <span class="discount-price">$${(item.price - (item.price * (item.discount / 100))).toFixed(0)}</span>
                                    <span class="original-price">$${item.price}</span>
                                </div>
                            </div>
                            <button class="buy-now">Buy Now</button>
                        </div>
                    </a>
                </div>
            `;
        }).join("");

        if (document.getElementById("mv_best_sellers")) {
            document.getElementById("mv_best_sellers").innerHTML = bestsellerproductHtml;
        }

        initializeSliders();

    } catch (error) {
        console.error("Error loading products:", error);
    }
}

// Home (Top Selling Smartphones)

async function loadTopsellingSmartphone() {
    try {
        const response = await fetch('./../data/db.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const besttopsellingsmartphone = data.products.filter(item => item.category === "electronic").slice(0, 4);

        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        const besttopsellingsmartphoneHtml = besttopsellingsmartphone.map((item, index) => {

            const isWishlist = wishlist.includes(item.id);

            return `
                <div class="col-xl-3 col-sm-6 text p-2">
                    <a>
                        <div class="dk_browsing_products">
                            <div class="card" data-card-index="${index}">
                                 <div class="dk_bedge">
                                    ${item.bestseller === true ? `<p class="mb-0">Best Seller</p>` : ""}
                                </div>
                                <div class="icon-container">
                                    <span onclick="toggleWishlist(event, ${item.id})" style="cursor: pointer !important; color: ${isWishlist ? '#ff0000' : '#000000'}; class="icon heart" data-product-id="${item.id}">
                                       <i class="fa-${isWishlist ? 'solid' : 'regular'} fa-heart"></i>

                                    </span>
                                    <span style="cursor: pointer !important;">
                                        <img height="25px" width="25px" src="/mv_image/icon_cart_selected.png"
                                            alt="Cart Icon" class="cart-icon">
                                    </span>
                                </div>
                                <div class="slider">
                                    ${item.images.map((img, imgIndex) =>
                `<img src="/img/${img}" alt="Product Image" class="slider-image ${imgIndex === 0 ? 'active' : ''}" data-index="${imgIndex}">`
            ).join('')}
                                </div>

                                <div class="dots-container">
                                    ${item.images.map((_, dotIndex) =>
                `<span class="dot ${dotIndex === 0 ? 'active' : ''}" data-index="${dotIndex}"></span>`
            ).join('')}
                                </div>

                                <p>${item.categorydesc}</p>

                                <div class="thumbnails">
                                    ${item.thumbnail.map((thumb, thumbIndex) =>
                `<img src="/img/${thumb}" alt="Thumbnail" class="thumbnail" data-index="${thumbIndex}">`
            ).join('')}
                                </div>

                                <div class="off">
                                    <span class="off-price">${item.discount}% OFF</span>
                                </div>

                                <div class="price">
                                    <span class="discount-price">$${(item.price - (item.price * (item.discount / 100))).toFixed(0)}</span>
                                    <span class="original-price">$${item.price}</span>
                                </div>
                            </div>
                            <button class="buy-now">Buy Now</button>
                        </div>
                    </a>
                </div>
            `;
        }).join("");

        if (document.getElementById("mv_top_selling_phone")) {
            document.getElementById("mv_top_selling_phone").innerHTML = besttopsellingsmartphoneHtml;
        }

        initializeSliders();

    } catch (error) {
        console.error("Error loading products:", error);
    }
}

//Home (Your Browsing products)

async function loadBrowsingproduct() {
    try {
        const response = await fetch('./../data/db.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const broweringproduct = data.products.slice(0, 4);

        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        const broweringproductHtml = broweringproduct.map((item, index) => {

            const isWishlist = wishlist.includes(item.id);

            return `
                <div class="col-xl-3 col-sm-6 text p-2">
                    <a>
                        <div class="dk_browsing_products">
                            <div class="card" data-card-index="${index}">
                                 <div class="dk_bedge">
                                    ${item.bestseller === true ? `<p class="mb-0">Best Seller</p>` : ""}
                                </div>
                                 <div class="icon-container">
                                    <span onclick="toggleWishlist(event, ${item.id})" style="cursor: pointer !important; color: ${isWishlist ? '#ff0000' : '#000000'}; class="icon heart" data-product-id="${item.id}">
                                       <i class="fa-${isWishlist ? 'solid' : 'regular'} fa-heart"></i>

                                    </span>
                                    <span style="cursor: pointer !important;">
                                        <img height="25px" width="25px" src="/mv_image/icon_cart_selected.png"
                                            alt="Cart Icon" class="cart-icon">
                                    </span>
                                </div>
                                <div class="slider">
                                    ${item.images.map((img, imgIndex) =>
                `<img src="/img/${img}" alt="Product Image" class="slider-image ${imgIndex === 0 ? 'active' : ''}" data-index="${imgIndex}">`
            ).join('')}
                                </div>

                                <div class="dots-container">
                                    ${item.images.map((_, dotIndex) =>
                `<span class="dot ${dotIndex === 0 ? 'active' : ''}" data-index="${dotIndex}"></span>`
            ).join('')}
                                </div>
                                
                                <h2>${item.name}</h2>
                                <p>${item.categorydesc}</p>

                                <div class="thumbnails">
                                    ${item.thumbnail.map((thumb, thumbIndex) =>
                `<img src="/img/${thumb}" alt="Thumbnail" class="thumbnail" data-index="${thumbIndex}">`
            ).join('')}
                                </div>

                                <div class="off">
                                    <span class="off-price">${item.discount}% OFF</span>
                                </div>

                                <div class="price">
                                    <span class="discount-price">$${(item.price - (item.price * (item.discount / 100))).toFixed(0)}</span>
                                    <span class="original-price">$${item.price}</span>
                                </div>
                            </div>
                            <button class="buy-now">Buy Now</button>
                        </div>
                    </a>
                </div>
            `;
        }).join("");

        if (document.getElementById("mv_your_browsing_product")) {
            document.getElementById("mv_your_browsing_product").innerHTML = broweringproductHtml;
        }

        initializeSliders();

    } catch (error) {
        console.error("Error loading products:", error);
    }
}

// add wishlist 
async function toggleWishlist(event, productId) {
    event.preventDefault();
    event.stopPropagation();

    const heartSpan = event.currentTarget;
    const icon = heartSpan.querySelector('i');

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        icon.classList.replace('fa-solid', 'fa-regular');
        heartSpan.style.color = '#000000';
    } else {
        wishlist.push(productId);
        icon.classList.replace('fa-regular', 'fa-solid');
        heartSpan.style.color = '#ff0000';
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    await loadwishlistdata();
    await DK_update_data1();
}

// wishlist page 

async function loadwishlistdata() {

    try {
        const response = await fetch('./../data/db.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const emptyWishlist = document.querySelector("#dk_empty_wishlist");
        const dk_wishlistdata = document.querySelector("#dk_wishlistdata");
        const wishlistCount = document.getElementById("wishlist_count");

        const wishlistProducts = data.products.filter(product => wishlist.includes(product.id));

        if (wishlistProducts?.length > 0) {
            if (emptyWishlist) {
                emptyWishlist.style.display = "none";
            }
            if (dk_wishlistdata) {
                dk_wishlistdata.style.display = "block";
            }
            if (wishlistCount) {
                wishlistCount.textContent = wishlist.length;
            }

            const productHtml = wishlistProducts.map((item, index) => {
                return `
                <div class="col-xl-3 col-sm-6 text p-2">
                    <a>
                        <div class="dk_browsing_products">
                            <div class="card" data-card-index="${index}">

                                <div class="dk_wishlist_icon_container">
                                        <span onclick="toggleWishlist(event, ${item.id})" class="icon heart dk_cursor"><i class="fa-solid fa-heart" style="width: 26px; color: #F9595F;" data-product-id="${item.id}"></i></span>
                                        <span onclick="toggleWishlist(event, ${item.id})" class="icon cart dk_cart_icon dk_cursor"><i class="fa-solid fa-xmark" style="width: 26px;" data-product-id="${item.id}"></i></span>
                                    </div>

                                <div class="slider">
                                    ${item.images.map((img, imgIndex) =>
                    `<img src="/img/${img}" alt="Product Image" class="slider-image ${imgIndex === 0 ? 'active' : ''}" data-index="${imgIndex}">`
                ).join('')}
                                </div>

                                <div class="dots-container">
                                    ${item.images.map((_, dotIndex) =>
                    `<span class="dot ${dotIndex === 0 ? 'active' : ''}" data-index="${dotIndex}"></span>`
                ).join('')}
                                </div>

                                <h2>${item.name}</h2>
                                <p>${item.categorydesc}</p>

                                <div class="thumbnails">
                                    ${item.thumbnail.map((thumb, thumbIndex) =>
                    `<img src="/img/${thumb}" alt="Thumbnail" class="thumbnail" data-index="${thumbIndex}">`
                ).join('')}
                                </div>

                                <div class="off">
                                    <span class="off-price">${item.discount}% OFF</span>
                                </div>

                                <div class="price">
                                    <span class="discount-price">$${(item.price - (item.price * (item.discount / 100))).toFixed(0)}</span>
                                    <span class="original-price">$${item.price}</span>
                                </div>
                            </div>
                            <button class="buy-now">Move to Cart</button>
                        </div>
                    </a>
                </div>
            `;
            }).join("");


            if (document.getElementById("mv_wishlist_data")) {
                document.getElementById("mv_wishlist_data").innerHTML = productHtml;
            }
        }
        else {
            emptyWishlist.style.display = "block"
            dk_wishlistdata.style.display = "none"
        }

        initializeSliders();
        DK_update_data1();

    } catch (error) {
        console.error("Error loading products:", error);
    }
}

async function DK_update_data1() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (wishlist.length > 0) {
        if (document.getElementById('dK_wishlist_count')) {
            document.getElementById('dK_wishlist_count').innerHTML = wishlist.length;
        }
    }
    else {
        if (document.getElementById('dK_wishlist_count')) {
            document.getElementById('dK_wishlist_count').innerHTML = wishlist.length;
        }
    }
}

// product details


function geturl() {
    let url = window.location.search;
    let params = new URLSearchParams(url);
    let id = params.get("id");  

    if (id) {
        fetch('../data/db.json') 
            .then(response => response.json())
            .then(data => {
                const product = data.products.find(item => item.id == id); 
                console.log(product)

                if (product) {
                    single_data(product);
                } else {
                    console.error("Product not found");
                }
            })
            .catch(error => console.error("Error fetching product details:", error));
    }
}

function single_data(item) {
    let oneitem = document.getElementById('DK_singleproduct');

    if (oneitem) {
        oneitem.innerHTML = `
        <div class="row">
                <div class="col-lg-4">
                    <div class="swiper r_shadow">
                        <div class="swiper-wrapper">
                        ${item.images.map((img,index) => {
                            return(
                                `
                                <div class="swiper-slide"><img src="/img/${img}" class="img-thumbnail"
                                    alt="Thumb 1">
                            </div>`
                            )
                        })}
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="r_shareicon"><i class="fa-solid fa-share-nodes"></i></div>
                    </div>
                    <div class="thumbnail-images mt-3 d-flex gap-2">
                ${item.images.map((img,index) => {
                    return(
                        `
                        <img src="/img/${img}" class="img-thumbnail thumbnail" alt="Thumb 1" data-bs-toggle="modal"
                            data-bs-target="#imageModal" data-large="/img/${img}">`
                    )
                }).join('')}
                    </div>

                    <!-- Modal -->
                    <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header border-0">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body position-relative">
                                    <!-- Main Image -->
                                    <img id="mainImage" src="../r_img/product-1.png" alt="Main Image"
                                        class="d-block mx-auto">

                                    <!-- Next/Previous Arrows -->
                                    <button id="prevArrow"
                                        class="btn position-absolute top-50 start-0 translate-middle-y"
                                        style="z-index: 10;">
                                        &#10094;
                                    </button>
                                    <button id="nextArrow" class="btn position-absolute top-50 end-0 translate-middle-y"
                                        style="z-index: 10;">
                                        &#10095;
                                    </button>

                                    <!-- Thumbnails -->
                                    <div class="thumbnail-container mt-3 d-flex justify-content-center gap-2 flex-wrap">
                                    ${item.images.map((img,index) => {
                                        return(
                                                ` <img src="/img/${img}" alt="Thumb 1" data-large=""/img/${img}"
                                            class="thumbnail">`
                                        )
                                    }).join("")}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Product Details -->
                <div class="col-lg-8">
                    <h4 class="product-brand mb-1">${item.name}</h4>
                    <p class="product-title mb-0">${item.categorydesc}</p>
                    <div class="d-flex mt-2 mb-2">
                        <i class="fa-solid fa-star" style="color: #F8A120;"></i>
                        <i class="fa-solid fa-star" style="color: #F8A120;"></i>
                        <i class="fa-solid fa-star" style="color: #F8A120;"></i>
                        <i class="fa-solid fa-star" style="color: #F8A120;"></i>
                        <i class="fa-solid fa-star" style="color: #727272;"></i>
                    </div>
                    <p class="price mb-2">
                        <span class="current-price">$${(item.price - (item.price * (item.discount / 100))).toFixed(0)}</span>
                        <span><strike>$${item.price}</strike></span>
                        <span class="discount">${item.discount}% OFF</span>
                    </p>
                    <p class="product-description mb-3">
                        ${item.desc}
                    </p>

                    <!-- Size and Color Options -->
                    <div class="product-options">
                        <div class="sizes">
                            <label>Size:</label>
                            ${item.size.map((sizename,index) => {
                                return(
                                    `<button class="btn btn-outline-secondary me-2">${sizename}</button>`
                                )
                            }).join("")}
                            
                        </div>
                        <div class="colors mt-2">
                            <label>Color:</label>
                            ${item.color.map((colorimg,index) => {
                                return(
                                    `<img src="/r_img/${colorimg}" class="img-thumbnail me-2" alt="Color 1">`
                                )
                            }).join("")}
                        </div>
                    </div>

                    <!-- Buttons for Cart and Wishlist -->
                    <div class="mt-3">
                        <button class="r_buttons me-3">Add to Cart</button>
                        <button class="r_buttons" onclick="toggleWishlist(event, ${item.id})">Add to Wishlist</button>
                    </div>

                    <!-- Delivery Options -->
                    <div class="card p-3 mt-4">
                        <h6 class="card-title">Delivery Options</h6>
                        <p style="font-size: 14px;">Free standard shipping on orders over $35 before tax, plus free
                            returns
                        </p>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr style="font-size: 11px;">
                                        <th scope="col">TYPE</th>
                                        <th scope="col">HOW LONG</th>
                                        <th scope="col">CHARGE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Standard delivery</td>
                                        <td>1-2 business days</td>
                                        <td>$29</td>
                                    </tr>
                                    <tr>
                                        <td>Express delivery</td>
                                        <td>1 business day</td>
                                        <td>$39</td>
                                    </tr>
                                    <tr>
                                        <td>Free delivery</td>
                                        <td>Expected 5-10 days</td>
                                        <td>FREE</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tabs for Additional Information -->
            <!-- Navigation Tabs -->
            <ul class="nav nav-tabs mt-5 r_ulitems " id="productTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="product-details-tab" data-bs-toggle="tab" href="#product-details"
                        role="tab" aria-controls="product-details" aria-selected="true">Product Details</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="rating-reviews-tab" data-bs-toggle="tab" href="#rating-reviews" role="tab"
                        aria-controls="rating-reviews" aria-selected="false">Rating & Reviews</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="offers-tab" data-bs-toggle="tab" href="#offers" role="tab"
                        aria-controls="offers" aria-selected="false">Offers</a>
                </li>
            </ul>

            <!-- Tab Content -->
            <div class="tab-content" id="productTabsContent">

                <!-- Product Details Tab -->
                <div class="tab-pane fade show active" id="product-details" role="tabpanel"
                    aria-labelledby="product-details-tab">
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur. Posuere risus urna vel faucibus at amet elementum
                            purus.
                            Tincidunt cursus dictum auctor viverra nibh at. Facilisis nibh sit lobortis urna dictumst
                            nibh.
                            Aliquam tellus mauris aliquam malesuada accumsan non lorem.</li>
                        <li>Justo elementum in sit mauris metus mattis quis mi enim. Tellus magnis cursus vel neque
                            mattis
                            integer odio tristique consectetur. Maecenas dignissim dictum nisl sagittis. Sapien accumsan
                            id
                            iaculis posuere suspendisse lectus dignissim. Ultrices sed maecenas viverra arcu quisque.
                            Elementum non dictum donec enim ac at ligula vel elit. Nisl ut non ornare massa. Cras fames
                            at
                            rhoncus eu nulla amet leo. </li>
                    </ul>
                    <div class="specs-table">
                        <div class="specs-row">
                            <div class="specs-label">Product Name</div>
                            <div class="specs-value">${item.name}</div>
                        </div>
                        <div class="specs-row">
                            <div class="specs-label">Pattern</div>
                            <div class="specs-value">${item.pattern}</div>
                        </div>
                        <div class="specs-row">
                            <div class="specs-label">Length</div>
                            <div class="specs-value">${item.length}</div>
                        </div>
                        <div class="specs-row">
                            <div class="specs-label">Neck</div>
                            <div class="specs-value">${item.neck}</div>
                        </div>
                        <div class="specs-row">
                            <div class="specs-label">Sleeve</div>
                            <div class="specs-value">${item.sleeve}</div>
                        </div>
                        <div class="specs-row">
                            <div class="specs-label">Fabric</div>
                            <div class="specs-value">${item.fabric}</div>
                        </div>
                        <div class="specs-row">
                            <div class="specs-label">Fit</div>
                            <div class="specs-value">${item.fit}</div>
                        </div>
                        <div class="specs-row">
                            <div class="specs-label">Wash care</div>
                            <div class="specs-value">${item.washcare}</div>
                        </div>
                        <div class="specs-row">
                            <div class="specs-label">Occasional</div>
                            <div class="specs-value">${item.occasional}</div>
                        </div>
                        <div class="specs-row">
                            <div class="specs-label">Sustainable</div>
                            <div class="specs-value">${item.sustainable}</div>
                        </div>
                    </div>
                </div>

                <!-- Rating & Reviews Tab -->
                <div class="tab-pane fade" id="rating-reviews" role="tabpanel" aria-labelledby="rating-reviews-tab">
                    <!-- First Row: Rating Overview -->
                    <div class="row rating-section">
                        <div class="col-md-3 text-center d-flex justify-content-center align-items-center">
                            <div class="rating-circle me-4">
                                <div class="rating-number">4.5</div>
                            </div>
                            <div>
                                <div class="d-flex">
                                    <i class="fas fa-star star-rating ms-1 me-1"></i>
                                    <i class="fas fa-star star-rating ms-1 me-1"></i>
                                    <i class="fas fa-star star-rating ms-1 me-1"></i>
                                    <i class="fas fa-star star-rating ms-1 me-1"></i>
                                    <i class="fas fa-star star-rating ms-1 me-1"></i>
                                </div>
                                <div>
                                    <p style="color: #727272;" class="mb-0">from 1,25k reviews</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="d-flex align-items-center mb-2">
                                <div class="me-2">5.0 <span><i class="fas fa-star star-rating ms-1 "></i></span></div>
                                <div class="progress flex-grow-1">
                                    <div class="progress-bar" style="width: 95%"></div>
                                </div>
                                <div class="rating-count">2823</div>
                            </div>
                            <div class="d-flex align-items-center mb-2">
                                <div class="me-2">4.0 <span><i class="fas fa-star star-rating ms-1 "></i></span></div>
                                <div class="progress flex-grow-1">
                                    <div class="progress-bar" style="width: 4%"></div>
                                </div>
                                <div class="rating-count">38</div>
                            </div>
                            <div class="d-flex align-items-center mb-2">
                                <div class="me-2">3.0 <span><i class="fas fa-star star-rating ms-1 "></i></span></div>
                                <div class="progress flex-grow-1">
                                    <div class="progress-bar" style="width: 1%"></div>
                                </div>
                                <div class="rating-count">4</div>
                            </div>
                            <div class="d-flex align-items-center mb-2">
                                <div class="me-2">2.0 <span><i class="fas fa-star star-rating ms-1 "></i></span></div>
                                <div class="progress flex-grow-1">
                                    <div class="progress-bar" style="width: 0%"></div>
                                </div>
                                <div class="rating-count">0</div>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="me-2">1.0 <span><i class="fas fa-star star-rating ms-1 "></i></span></div>
                                <div class="progress flex-grow-1">
                                    <div class="progress-bar" style="width: 0%"></div>
                                </div>
                                <div class="rating-count">0</div>
                            </div>
                        </div>
                    </div>

                    <!-- Second Row: Filters and Reviews -->
                    <div class="row">
                        <!-- Left Column: Filters -->
                        <div class="col-md-3">
                            <div class="accordion" id="reviewFilters">
                                <!-- Rating Filter -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ratingFilter">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseRating">
                                            Reviews Filter
                                        </button>
                                    </h2>
                                    <div id="collapseRating" class="accordion-collapse collapse show"
                                        data-bs-parent="#reviewFilters">
                                        <div class="accordion-body">
                                            <div>Rating</div>
                                            <div class="form-check my-2">
                                                <input class="form-check-input" type="checkbox" id="star5">
                                                <label class="form-check-label" for="star5">
                                                    <i class="fas fa-star star-rating"></i> 5
                                                </label>
                                            </div>
                                            <div class="form-check my-2">
                                                <input class="form-check-input" type="checkbox" id="star4">
                                                <label class="form-check-label" for="star4">
                                                    <i class="fas fa-star star-rating"></i> 4
                                                </label>
                                            </div>
                                            <div class="form-check my-2">
                                                <input class="form-check-input" type="checkbox" id="star3">
                                                <label class="form-check-label" for="star3">
                                                    <i class="fas fa-star star-rating"></i> 3
                                                </label>
                                            </div>
                                            <div class="form-check my-2">
                                                <input class="form-check-input" type="checkbox" id="star2">
                                                <label class="form-check-label" for="star2">
                                                    <i class="fas fa-star star-rating"></i> 2
                                                </label>
                                            </div>
                                            <div class="form-check my-2">
                                                <input class="form-check-input" type="checkbox" id="star1">
                                                <label class="form-check-label" for="star1">
                                                    <i class="fas fa-star star-rating"></i> 1
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Topics Filter -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="topicsFilter">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTopics">
                                            Review Topics
                                        </button>
                                    </h2>
                                    <div id="collapseTopics" class="accordion-collapse collapse"
                                        data-bs-parent="#reviewFilters">
                                        <div class="accordion-body">
                                            <div class="form-check my-2">
                                                <input class="form-check-input" type="checkbox" id="quality">
                                                <label class="form-check-label" for="quality">
                                                    Product Quality
                                                </label>
                                            </div>
                                            <div class="form-check my-2">
                                                <input class="form-check-input" type="checkbox" id="service">
                                                <label class="form-check-label" for="service">
                                                    Seller Services
                                                </label>
                                            </div>
                                            <div class="form-check my-2">
                                                <input class="form-check-input" type="checkbox" id="price">
                                                <label class="form-check-label" for="price">
                                                    Product Price
                                                </label>
                                            </div>
                                            <div class="form-check my-2">
                                                <input class="form-check-input" type="checkbox" id="shipping">
                                                <label class="form-check-label" for="shipping">
                                                    Shipment
                                                </label>
                                            </div>
                                            <div class="form-check my-2">
                                                <input class="form-check-input" type="checkbox" id="description">
                                                <label class="form-check-label" for="description">
                                                    Match with Description
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Right Column: Reviews -->
                        <div class="col-md-9">
                            <div class="review-list">
                                <div>
                                    <h5>Review Lists</h5>
                                </div>
                                <div class="filter-buttons">
                                    <button class="btn r_reviewbutons me-2">All Reviews</button>
                                    <button class="btn r_reviewbutons me-2">With Photo & Video</button>
                                    <button class="btn r_reviewbutons">With Description</button>
                                </div>

                                <!-- Review Items -->
                                <div class="review-item">
                                    <div class="mb-2">
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                    </div>
                                    <p class="mb-0 fw-bold">This is amazing product I have.</p>
                                    <img src="../r_img/b-4.png" alt=""
                                        style="width: 40px; height: 40px;object-fit: cover;box-sizing: border-box;">
                                    <div class="review-date mb-3">July 2, 2023 03:29 PM</div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <div class="user-avatar me-2">
                                                <img src="../r_img/review-1.png" alt="">
                                            </div>
                                            <div>
                                                <div class="fw-500">Darnell Steward</div>

                                            </div>
                                        </div>
                                        <div>
                                            <button class="btn btn-interaction me-2">
                                                <i class="fas fa-thumbs-up"></i> 128
                                            </button>
                                            <button class="btn btn-interaction">
                                                <i class="fas fa-thumbs-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-item">
                                    <div class="mb-2">
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                    </div>
                                    <p class="mb-0">This is amazing product I have.</p>
                                    <div class="review-date mb-3">July 2, 2023 03:25 PM</div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <div class="user-avatar me-2">
                                                <img src="../r_img/review-2.png" alt="">
                                            </div>
                                            <div>
                                                <div class="fw-500">Darlence Robertson</div>

                                            </div>
                                        </div>
                                        <div>
                                            <button class="btn btn-interaction me-2">
                                                <i class="fas fa-thumbs-up"></i> 128
                                            </button>
                                            <button class="btn btn-interaction">
                                                <i class="fas fa-thumbs-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-item">
                                    <div class="mb-2">
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                    </div>
                                    <p class="mb-0">This is amazing product I have.</p>
                                    <div class="review-date mb-3">July 26, 2020 10:03 PM</div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <div class="user-avatar me-2">
                                                <img src="../r_img/review-3.png" alt="">
                                            </div>
                                            <div>
                                                <div class="fw-500">Kathryn Murphy</div>

                                            </div>
                                        </div>
                                        <div>
                                            <button class="btn btn-interaction me-2">
                                                <i class="fas fa-thumbs-up"></i> 128
                                            </button>
                                            <button class="btn btn-interaction">
                                                <i class="fas fa-thumbs-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-item">
                                    <div class="mb-2">
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                        <i class="fas fa-star star-rating"></i>
                                    </div>
                                    <p class="mb-0">This is amazing product I have.</p>
                                    <div class="review-date mb-3">July 7, 2020 10:14 AM</div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <div class="user-avatar me-2">
                                                <img src="../r_img/review-4.png" alt="">
                                            </div>
                                            <div>
                                                <div class="fw-500">Ronald Richards</div>

                                            </div>
                                        </div>
                                        <div>
                                            <button class="btn btn-interaction me-2">
                                                <i class="fas fa-thumbs-up"></i> 128
                                            </button>
                                            <button class="btn btn-interaction">
                                                <i class="fas fa-thumbs-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Offers Tab -->
                <div class="tab-pane fade" id="offers" role="tabpanel" aria-labelledby="offers-tab">
                    <!-- TD Bank -->
                    <div class="bank-card d-flex align-items-center ">
                        <div class="bank-info">
                            <img src="../r_img/td.png" alt="TD Bank Logo" class="bank-logo">
                        </div>
                        <div>
                            <h2 class="bank-name">TD Bank</h2>
                            <p class="offer-text">Extra ₹500 off on TD Bank Pixel Credit Card EMI Transactions. Min Txn
                                Value: ₹5,000</p>
                        </div>
                    </div>

                    <!-- Capital One -->
                    <div class="bank-card d-flex align-items-center ">
                        <div class="bank-info">
                            <img src="../r_img/capital.png" alt="TD Bank Logo" class="bank-logo">
                        </div>
                        <div>
                            <h2 class="bank-name">Capital One bank</h2>
                            <p class="offer-text">Extra ₹500 off on Capital Bank Pixel Credit Card EMI Transactions. Min
                                Txn
                                Value: ₹5,000</p>
                        </div>
                    </div>

                    <!-- Wells Fargo -->
                    <div class="bank-card d-flex align-items-center ">
                        <div class="bank-info">
                            <img src="../r_img/wells.png" alt="TD Bank Logo" class="bank-logo">
                        </div>
                        <div>
                            <h2 class="bank-name">Wells Fargo Bank</h2>
                            <p class="offer-text">Extra ₹500 off on Wells Fargo Bank Pixel Credit Card EMI Transactions.
                                Min
                                Txn Value: ₹5,000</p>
                        </div>
                    </div>

                    <!-- Citi Bank -->
                    <div class="bank-card d-flex align-items-center ">
                        <div class="bank-info">
                            <img src="../r_img/citi.png" alt="TD Bank Logo" class="bank-logo">
                        </div>
                        <div>
                            <h2 class="bank-name">Citi Bank</h2>
                            <p class="offer-text">Extra ₹500 off on Citi Bank Pixel Credit Card EMI Transactions. Min
                                Txn
                                Value: ₹5,000</p>
                        </div>
                    </div>
                </div>
            </div>`
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // Image Modal Handling
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    let currentIndex = 0;

    // Update the main image and active thumbnail
    function updateMainImage(index) {
        if (!thumbnails.length) return;

        currentIndex = index;
        const largeImageURL = thumbnails[index].getAttribute('data-large');
        
        if (mainImage) {
            mainImage.src = largeImageURL;
        }

        // Update active thumbnail
        thumbnails.forEach((thumb) => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');
    }

    // Thumbnail click event
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            updateMainImage(index);
        });
    });

    // Previous arrow click event
    if (prevArrow) {
        prevArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
            updateMainImage(currentIndex);
        });
    }

    // Next arrow click event
    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % thumbnails.length;
            updateMainImage(currentIndex);
        });
    }

    // Swiper Initialization
    if (typeof Swiper !== 'undefined') {
        const thumbSwiper = new Swiper('.r_shadow', {
            spaceBetween: 10,
            slidesPerView: 4,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: true,
        });
    }
});


window.onload = geturl;

