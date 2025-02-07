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
                                <img src="/img/${item.img}" alt="Mens Fashion">
                                <p>${item.name}</p>
                            </div>`
            )
        }).join("")

        if (document.getElementById("mv_mens_fashion")) {
            document.getElementById("mv_mens_fashion").innerHTML = categoryHtml;

            $(".owl-carousel.dk_men_slider").owlCarousel({
                loop: false,
                margin: 10,
                nav: false,
                autoplay: true,
                autoplayTimeout: 2000,
                dots: true,
                responsive: {
                    320: { items: 2, dots: true },
                    375: { items: 2, dots: true },
                    425: { items: 2, dots: true },
                    768: { items: 3, dots: true },
                    1024: { items: 4, dots: true },
                    1199: { items: 4, dots: true },
                    1440: { items: 6, dots: true },
                }
            });
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
    await loadSimilarProduct();
    await loadcartdata();
    // await loadtopwearProduct();

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
                    
                        <div class="dk_browsing_products">
                            <div class="card" data-card-index="${index}">
                                <div class="icon-container">
                                    <span onclick="toggleWishlist(event, ${item.id})" style="cursor: pointer !important; color: ${isWishlist ? '#ff0000' : '#000000'}; class="icon heart" data-product-id="${item.id}">
                                       <i class="fa-${isWishlist ? 'solid' : 'regular'} fa-heart"></i>

                                    </span>
                                    <span onclick="addToCart(event, ${item.id})" style="cursor: pointer !important;">
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
<a href="productdetails.html?id=${item.id}">
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
                                </a>
                            </div>
                            
                            <a href="productdetails.html?id=${item.id}" class="buy-now">Buy Now</a>
                        </div>
                    
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
<a href="productdetails.html?id=${item.id}">
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
                                </a>
                            </div>
                            <a href="productdetails.html?id=${item.id}" class="buy-now">Buy Now</a>
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
                                    <span onclick="addToCart(event, ${item.id})" style="cursor: pointer !important;">
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
<a href="productdetails.html?id=${item.id}">
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
                                </a>
                            </div>
                            <a href="productdetails.html?id=${item.id}" class="buy-now">Buy Now</a>
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
                                    <span onclick="addToCart(event, ${item.id})" style="cursor: pointer !important;">
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
                                <a href="productdetails.html?id=${item.id}">
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
                                </a>
                            </div>
                            <a href="productdetails.html?id=${item.id}" class="buy-now">Buy Now</a>
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
        if (icon) {
            icon.classList.replace('fa-solid', 'fa-regular');
            heartSpan.style.color = '#000000';
        }
    } else {
        wishlist.push(productId);
        if (icon) {
            icon.classList.replace('fa-regular', 'fa-solid');
            heartSpan.style.color = '#ff0000';
        }
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
                                <a href="productdetails.html?id=${item.id}">
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
                                </a>
                            </div>
                            <button class="buy-now" onclick="addToCart(event, ${item.id})">Move to Cart</button>
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
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
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
    if (cart.length > 0) {
        if (document.getElementById('dK_cart_count')) {
            document.getElementById('dK_cart_count').innerHTML = cart.length;
        }
        if (document.getElementById('dK_shoppingcart')) {
            document.getElementById('dK_shoppingcart').innerHTML = cart.length;
        }
    }
    else {
        if (document.getElementById('dK_cart_count')) {
            document.getElementById('dK_cart_count').innerHTML = cart.length;
        }
        if (document.getElementById('dK_shoppingcart')) {
            document.getElementById('dK_shoppingcart').innerHTML = cart.length;
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

function generateStars(review) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= review) {
            starsHTML += '<i class="fas fa-star star-rating ms-1 me-1 dk_yellow"></i>';
        } else {
            starsHTML += '<i class="fa-solid fa-star ms-1 me-1" style="color: #727272;"></i>';
        }
    }
    return starsHTML;
}


function single_data(item) {
    let oneitem = document.getElementById('DK_singleproduct');

    if (oneitem) {
        oneitem.innerHTML = `
        <div class="row">
                <div class="col-lg-4">
                    <div class="swiper r_shadow">
                        <div class="swiper-wrapper">
                        ${item.images.map((img, index) => {
            return (
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
                ${item.images.map((img, index) => {
            return (
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
                                    <img id="mainImage" src="/img/${item.images[0]}" alt="Main Image"
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
                                    ${item.images.map((img, index) => `
                                        <img src="/img/${img}" 
                                             alt="Thumbnail ${index + 1}" 
                                             class="modal-thumbnail ${index === 0 ? 'active' : ''}" 
                                             data-index="${index}"
                                             style="width: 60px; height: 60px; object-fit: cover; cursor: pointer;"
                                        >
                                    `).join("")}
                                        
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
                    
                    ${generateStars(item.totalrank)}

                    
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
                            ${item.size.map((sizename, index) => {
            return (
                `<button class="btn btn-outline-secondary me-2">${sizename}</button>`
            )
        }).join("")}
                            
                        </div>
                        <div class="colors mt-2">
                            <label>Color:</label>
                            ${item.color.map((color, index) => {
            return (
                `<img src="/r_img/${color.colorimg}" class="img-thumbnail me-2" alt="Color 1">`
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
                    ${item.description.map((description, index) => {
            return (
                `<li>${description}</li>`
            )
        }).join("")}
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
                                <div class="rating-number">${item.totalrank}</div>
                            </div>
                            <div>
                                <div class="d-flex">
                                    ${generateStars(item.totalrank)}
                                </div>
                                <div>
                                    <p style="color: #727272;" class="mb-0">from ${item.totalreview} reviews</p>
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
                <input class="form-check-input rating-filter" type="checkbox" id="star5" value="5" onchange="handleRatingFilter(${JSON.stringify(item.reviews).replace(/"/g, '&quot;')})">
                <label class="form-check-label" for="star5">
                    <i class="fas fa-star star-rating"></i> 5
                </label>
            </div>
            <div class="form-check my-2">
                <input class="form-check-input rating-filter" type="checkbox" id="star4" value="4" onchange="handleRatingFilter(${JSON.stringify(item.reviews).replace(/"/g, '&quot;')})">
                <label class="form-check-label" for="star4">
                    <i class="fas fa-star star-rating"></i> 4
                </label>
            </div>
            <div class="form-check my-2">
                <input class="form-check-input rating-filter" type="checkbox" id="star3" value="3" onchange="handleRatingFilter(${JSON.stringify(item.reviews).replace(/"/g, '&quot;')})">
                <label class="form-check-label" for="star3">
                    <i class="fas fa-star star-rating"></i> 3
                </label>
            </div>
            <div class="form-check my-2">
                <input class="form-check-input rating-filter" type="checkbox" id="star2" value="2" onchange="handleRatingFilter(${JSON.stringify(item.reviews).replace(/"/g, '&quot;')})">
                <label class="form-check-label" for="star2">
                    <i class="fas fa-star star-rating"></i> 2
                </label>
            </div>
            <div class="form-check my-2">
                <input class="form-check-input rating-filter" type="checkbox" id="star1" value="1" onchange="handleRatingFilter(${JSON.stringify(item.reviews).replace(/"/g, '&quot;')})">
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
                    <button class="btn r_reviewbutons me-2 active" onclick="filterReviews('all', ${JSON.stringify(item.reviews).replace(/"/g, '&quot;')})">All Reviews</button>
                    <button class="btn r_reviewbutons me-2" onclick="filterReviews('media', ${JSON.stringify(item.reviews).replace(/"/g, '&quot;')})">With Photo & Video</button>
                    <button class="btn r_reviewbutons" onclick="filterReviews('description', ${JSON.stringify(item.reviews).replace(/"/g, '&quot;')})">With Description</button>
                </div>


                                 <div id="filteredReviews">
                    ${generateReviewHTML(item.reviews)}
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
        // Initialize main Swiper for product images
        const thumbSwiper = new Swiper('.thumb-swiper', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });

        const mainSwiper = new Swiper('.main-swiper', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: thumbSwiper,
            },
        });

        // Color and Size Selection
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', function () {
                document.querySelector('.color-option.active').classList.remove('active');
                this.classList.add('active');
            });
        });

        document.querySelectorAll('.size-option').forEach(option => {
            option.addEventListener('click', function () {
                document.querySelector('.size-option.active').classList.remove('active');
                this.classList.add('active');
            });
        });

        document.querySelectorAll('.card').forEach(card => {
            const images = card.querySelectorAll('.slider-image');
            const thumbnails = card.querySelectorAll('.thumbnail');
            const dots = card.querySelectorAll('.dot');
            let currentIndex = 0;


            function showImage(index) {
                images.forEach((img, i) => {
                    img.classList.toggle('active', i === index);
                });
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            }


            const autoplayInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            }, 3000);

            thumbnails.forEach((thumbnail, index) => {
                thumbnail.addEventListener('click', () => {
                    clearInterval(autoplayInterval);
                    currentIndex = index;
                    showImage(currentIndex);
                });
            });

            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    clearInterval(autoplayInterval); // 
                    currentIndex = parseInt(dot.getAttribute('data-index'), 10);
                    showImage(currentIndex);
                });
            });
        });

        const swiper = new Swiper('.swiper', {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: true, // Optional: Enable looping
            breakpoints: {
                768: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
            },
        });

        // Add click event listeners to all thumbnail images
        document.querySelectorAll('.thumbnail').forEach((thumbnail) => {
            thumbnail.addEventListener('click', function () {
                // Get the "data-large" attribute of the clicked thumbnail
                const largeImageUrl = this.getAttribute('data-large');
                // Update the "src" of the modal image
                document.getElementById('modalImage').src = largeImageUrl;
            });
        });



        // JavaScript for handling thumbnail clicks and arrow navigation
        const modal = document.getElementById('imageModal');
        const mainImage = document.getElementById('mainImage');
        const modalThumbnails = modal.querySelectorAll('.modal-thumbnail');
        const prevArrow = document.getElementById('prevArrow');
        const nextArrow = document.getElementById('nextArrow');
        let currentImageIndex = 0;

        let currentIndex = 0;

        // Update the main image and active thumbnail
        function updateModalImage(index) {
            currentImageIndex = index;
            mainImage.src = `/img/${item.images[index]}`;

            // Update active thumbnail
            modalThumbnails.forEach(thumb => thumb.classList.remove('active'));
            modalThumbnails[index].classList.add('active');
        }

        // Thumbnail click event
        modalThumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                updateModalImage(index);
            });
        });

        // Previous arrow click event
        prevArrow.addEventListener('click', () => {
            let newIndex = currentImageIndex - 1;
            if (newIndex < 0) newIndex = item.images.length - 1;
            updateModalImage(newIndex);
        });

        // Next arrow click event
        nextArrow.addEventListener('click', () => {
            let newIndex = currentImageIndex + 1;
            if (newIndex >= item.images.length) newIndex = 0;
            updateModalImage(newIndex);
        });

        document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                updateModalImage(index);
            });
        });

        modal.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevArrow.click();
            } else if (e.key === 'ArrowRight') {
                nextArrow.click();
            }
        });
    }
}

// review filter
function handleRatingFilter(reviews) {
    // debugger
    const selectedRatings = Array.from(document.querySelectorAll('.rating-filter:checked'))
        .map(checkbox => parseInt(checkbox.value));

    let filteredReviews = [];

    if (selectedRatings.length === 0) {
        // If no ratings are selected, show all reviews
        filteredReviews = reviews;
    } else {
        // Filter reviews based on selected star ratings
        filteredReviews = reviews.filter(review => selectedRatings.includes(review.star));
    }

    console.log(reviews.filter(review => selectedRatings.includes(review.star)))

    // Update the reviews display
    document.getElementById('filteredReviews').innerHTML = generateReviewHTML(filteredReviews);
}

// filtering review

function filterReviews(filterType, reviews) {
    const buttons = document.querySelectorAll('.r_reviewbutons');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    const selectedRatings = Array.from(document.querySelectorAll('.rating-filter:checked'))
        .map(checkbox => parseInt(checkbox.value));

    let filteredReviews = reviews;

    if (selectedRatings.length > 0) {
        filteredReviews = reviews.filter(review => selectedRatings.includes(review.star));
    }

    // Then apply button filter
    switch (filterType) {
        case 'media':
            filteredReviews = filteredReviews.filter(review => review.img && review.img !== '');
            break;
        case 'description':
            filteredReviews = filteredReviews.filter(review => review.desc && review.desc.trim() !== '');
            break;
    }

    // Update the reviews display
    document.getElementById('filteredReviews').innerHTML = generateReviewHTML(filteredReviews);
}

// The generateReviewHTML function remains the same
function generateReviewHTML(reviews) {
    return reviews.map(review => `
        <div class="review-item">
            <div class="mb-2">
                ${generateStars(review.star)}
            </div>
            <p class="mb-0 fw-bold">${review.desc}</p>
            ${review.img ? `<img src="/r_img/${review.img}" alt="" style="width: 40px; height: 40px;object-fit: cover;box-sizing: border-box;">` : ''}
            <div class="review-date mb-3">${review.datetime}</div>
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <div class="user-avatar me-2">
                        <img src="/r_img/${review.userimg}" alt="">
                    </div>
                    <div>
                        <div class="fw-500">${review.username}</div>
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
    `).join('');
}




async function loadSimilarProduct() {
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
                                    <span onclick="addToCart(event, ${item.id})" style="cursor: pointer !important;">
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
<a href="productdetails.html?id=${item.id}">
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
                                </a>
                            </div>
                            <a href="productdetails.html?id=${item.id}" class="buy-now">Buy Now</a>
                        </div>
                    </a>
                </div>
            `;
        }).join("");

        if (document.getElementById("dk_similarproduct")) {
            document.getElementById("dk_similarproduct").innerHTML = productHtml;
        }

        initializeSliders();

    } catch (error) {
        console.error("Error loading products:", error);
    }
}


function addToCart(event, productId) {
    event.preventDefault();
    event.stopPropagation();

    // Get existing cart items from localStorage or initialize empty array
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if item already exists in cart
    const existingItem = cartItems.find(item => item.id === productId);

    if (!existingItem) {
        fetch('./../data/db.json')
            .then(response => response.json())
            .then(data => {
                const product = data.products.find(item => item.id === productId);

                if (product) {
                    const cartProduct = {
                        ...product,
                        quantity: 1
                    };

                    cartItems.push(cartProduct);



                    localStorage.setItem('cartItems', JSON.stringify(cartItems));

                    alert('Product added to cart successfully!');
                    DK_update_data1();
                }
            })
            .catch(error => {
                console.error('Error adding to cart:', error);
            });
    } else {
        alert('This item is already in your cart!');
    }
}


async function loadcartdata() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const emptycartdata = document.querySelector("#dk_empty_cartdata");
    const dk_cartdata = document.querySelector("#dk_cartdatasection");
    const cartSection = document.querySelector("#dk_cartsection");
    const savedCheckboxStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};
    const isDeliverySection = checkoutStep === 2;

    // For delivery section, only show items that were checked in the cart
    const itemsToDisplay = isDeliverySection ?
        cartItems.filter(item => savedCheckboxStates[item.id]) :
        cartItems;

        if (!cartItems || cartItems.length === 0) {
            if (emptycartdata) emptycartdata.style.display = "block";
            if (dk_cartdata) dk_cartdata.style.display = "none";
            if (cartSection) cartSection.style.display = "none";
            return; 
        }
    
        if (emptycartdata) emptycartdata.style.display = "none";
        if (dk_cartdata) dk_cartdata.style.display = "block";
        if (cartSection) cartSection.style.display = "block";


    const productHtml = itemsToDisplay.map((item, index) => {
        const isChecked = savedCheckboxStates[item.id] !== undefined ? savedCheckboxStates[item.id] : false;
        const itemTotal = item.price * item.quantity;
        const colorNames = item.color.map(col => col.colorname);

        return `
        <div class="">
            <div class="" style="width:100%;">
                <div class="d-flex align-items-center mb-4">
                    ${!isDeliverySection ? `
                    <span class="pe-3">
                        <input class="item-checkbox" style="width: 20px; height: 20px;"
                            type="checkbox" data-item-id="${item.id}" ${isChecked ? 'checked' : ''}>
                    </span>
                    ` : ''}
                    <div class="row justify-content-between w-100 dk_product_card_without_add"
                        style="margin: 0px 0px !important;" data-item-id="${item.id}">
                        <div class="col-xxl-2 col-sm-6">
                            ${item.bestseller === true ? ` <div class="dk_best_seller_cart_add">Best Seller</div>` : ""}
                            <img class="dk_highlander_add w-100"
                                src="/img/${item.images[0]}" alt="">
                        </div>
                        <div class="col-xxl-5 col-sm-6">
                            <h3 class="mb-0">${item.name}</h3>
                            <h6 class="mb-2">${item.categorydesc}</h6>
                            <div class="dk_rating">
                                ${generateStars(item.totalrank)}
                            </div>
                            <div class="dk_pro_size">
                                <p>Size : <b style="color: #000000;">${item.size[0]}</b></p>
                                <p style="padding-left: 16px;">Color : <b style="color: #000000;">${colorNames[0]}</b></p>
                            </div>
                            <p>7 days return</p>
                            <h2 class="dk_pro_price">$${itemTotal}</h2>
                        </div>
                        <div class="col-xxl-5">
                            <div class="dk_move_to_remove">
                                <div class="dk_pro_remove">
                                    ${!isDeliverySection ? `
                                    <a href="" onclick="removeFromCart(${item.id})">Remove</a>
                                    ` : ''}
                                    <p>Delivered by :<b style="color: #000000;">${getDeliveryDate()}</b></p>
                                    ${!isDeliverySection ? `
                                    <div class="align-content-center dk_move_to_wishlist_main">
                                        <div onclick="toggleWishlist(event, ${item.id})">
                                            <button class="dk_move_to_wishlist">Move to Wishlist</button>
                                        </div>
                                        <div class="dk_pro_caounting">
                                            <a class="decrease dk_cursor" onclick="updateQuantity(${item.id}, 'decrease')">
                                                <i class="fa-solid fa-minus" style="padding-right: 15px;"></i>
                                            </a>
                                            <span class="quantity">${item.quantity}</span>
                                            <a class="increase dk_cursor" onclick="updateQuantity(${item.id}, 'increase')">
                                                <i class="fa-solid fa-plus" style="padding-left: 15px;"></i>
                                            </a>
                                        </div>
                                    </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join("");

    const cartContainer = document.getElementById("dk_cartdata");
    if (cartContainer) {
        cartContainer.innerHTML = productHtml;
    }


    // Save checkbox states when moving to delivery section
    if (!isDeliverySection) {
        document.querySelectorAll('.item-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const itemId = e.target.dataset.itemId;
                savedCheckboxStates[itemId] = e.target.checked;
                localStorage.setItem('checkboxStates', JSON.stringify(savedCheckboxStates));
            });
        });
    }

    updateCartTotals();
    if (!isDeliverySection) {
        addItemCheckboxListeners();
        updateSelectAllStatus();
    }
}

// Add this function to clear checkbox states when needed
function clearCheckboxStates() {
    localStorage.removeItem('checkboxStates');
}


function calculateCartTotals(cartItems, couponValue = 0) {
    let subtotal = 0;
    let totalDiscount = 0;
    let itemCount = 0;

    cartItems.forEach(item => {
        const originalPrice = item.price * item.quantity;
        const discountAmount = originalPrice * (item.discount / 100);

        subtotal += originalPrice;
        totalDiscount += discountAmount;
        itemCount += item.quantity;
    });

    const platformFee = 1;
    const deliveryCharge = 0;
    let totalAmount = subtotal - totalDiscount - couponValue + platformFee + deliveryCharge;

    return {
        subtotal,
        totalDiscount,
        itemCount,
        platformFee,
        deliveryCharge,
        couponDiscount: couponValue,
        totalAmount
    };
}

function updateOrderSummary(totals) {
    const orderSummaryHtml = `
    <div class="dk_order_payment_det">
        <div class="dk_order_payment_det_sub">
            <h2>Price (${totals.itemCount} Items)</h2>
            <p>$${totals.subtotal.toFixed(0)}</p>
        </div>
        <div class="dk_order_payment_det_sub">
            <h2>Discount</h2>
            <p style="color:#0F993E;">-$${totals.totalDiscount.toFixed(0)}</p>
        </div>
        <div class="dk_order_payment_det_sub">
            <h2>Platform Fee</h2>
            <p>$${totals.platformFee}</p>
        </div>
        ${totals.couponDiscount ? `
        <div class="dk_coupon_offers">
            <h2>Coupon Offers</h2>
            <p style="color:#0F993E;">-$${totals.couponDiscount}</p>
        </div>
        ` : ''}
        <div class="dk_order_payment_det_sub">
            <h2>Delivery Charges</h2>
            <p style="color: #0F993E;">
                ${totals.deliveryCharge > 0 ?
            `$${totals.deliveryCharge}` :
            `<span style="color: #727272; padding-right: 5px;"><del>$20</del></span>FREE`}
            </p>
        </div>
    </div>
    <div class="dk_total_amount_cwa">
        <h2>Total Amount</h2>
        <p>$${totals.totalAmount.toFixed(0)}</p>
    </div>
    `;

    const orderDetailsElement = document.querySelector('#dk_billcount');
    if (orderDetailsElement) {
        orderDetailsElement.innerHTML = orderSummaryHtml;
    }

    const savingsElement = document.querySelector('.dk_you_will_save h2');
    if (savingsElement) {
        const totalSavings = totals.totalDiscount + (totals.couponDiscount || 0);
        savingsElement.textContent = `You will save $${totalSavings.toFixed(0)} on this order`;
    }
}


function getDeliveryDate() {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);
    return deliveryDate.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        weekday: 'short'
    });
}

async function updateQuantity(productId, action) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemIndex = cartItems.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
        // Update quantity
        if (action === 'increase') {
            cartItems[itemIndex].quantity++;
        } else if (action === 'decrease' && cartItems[itemIndex].quantity > 1) {
            cartItems[itemIndex].quantity--;
        }

        // Update localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Update quantity display in DOM
        const productCard = document.querySelector(`.dk_product_card_without_add[data-item-id="${productId}"]`);
        if (productCard) {
            const quantityElement = productCard.querySelector('.quantity');
            if (quantityElement) {
                quantityElement.textContent = cartItems[itemIndex].quantity;
            }

            // Update item total price
            const discountedPrice = (cartItems[itemIndex].price - (cartItems[itemIndex].price * (cartItems[itemIndex].discount / 100))).toFixed(0);
            const itemTotal = (discountedPrice * cartItems[itemIndex].quantity).toFixed(0);
            const priceElement = productCard.querySelector('.dk_pro_price');
            if (priceElement) {
                priceElement.textContent = `$${cartItems[itemIndex].price * cartItems[itemIndex].quantity}`;
            }
        }

        // Update order summary without reloading cart
        updateCartTotals();
    }
}

function updateCartTotals() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const selectedItems = [];

    // Get selected items based on checkboxes
    document.querySelectorAll('.item-checkbox').forEach((checkbox, index) => {
        if (checkbox.checked && cartItems[index]) {
            selectedItems.push(cartItems[index]);
        }
    });

    // Calculate totals for selected items
    const totals = calculateCartTotals(selectedItems);
    updateOrderSummary(totals);
}

// Cart manipulation functions
function removeFromCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartData();
}

document.addEventListener('DOMContentLoaded', function () {
    const selectAllCheckbox = document.getElementById('selectAll');
    selectAllCheckbox.addEventListener('change', handleSelectAll);

    // Initial load of cart data
    loadcartdata().then(() => {
        // Add listeners to individual checkboxes after cart is loaded
        addItemCheckboxListeners();
    });
});

function handleSelectAll(event) {
    const itemCheckboxes = document.querySelectorAll('.item-checkbox');
    itemCheckboxes.forEach(checkbox => {
        checkbox.checked = event.target.checked;
    });
    calculateSelectedItems();
}

function addItemCheckboxListeners() {
    const itemCheckboxes = document.querySelectorAll('.item-checkbox');
    itemCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateSelectAllStatus();
            calculateSelectedItems();
        });
    });
}

function updateSelectAllStatus() {
    const selectAllCheckbox = document.getElementById('selectAll');
    const itemCheckboxes = document.querySelectorAll('.item-checkbox');
    const allChecked = Array.from(itemCheckboxes).every(checkbox => checkbox.checked);
    // selectAllCheckbox.checked = allChecked;
}

function calculateSelectedItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const selectedItems = [];

    document.querySelectorAll('.item-checkbox').forEach((checkbox, index) => {
        if (checkbox.checked && cartItems[index]) {
            selectedItems.push(cartItems[index]);
        }
    });

    const totals = calculateCartTotals(selectedItems);
    updateOrderSummary(totals);
}


let checkoutStep = 1; // 1: Cart, 2: Delivery, 3: Payment
let selectedCoupon = null;
let selectedDeliveryOption = null;

function handleProceedButton() {
    const proceedButton = document.querySelector('.dk_proceed');
    const cartSection = document.getElementById('dk_cartsection');
    const deliverySection = document.getElementById('dk_deliverysection');
    const couponSection = document.querySelector('.dk_apply_coupon_cwa');
    const selectAllSection = document.querySelector('.dk_select_all');
    const paybtn = document.querySelector(".dk_pay_payment_button");

    if (checkoutStep === 1) {
        const checkedItems = document.querySelectorAll('.item-checkbox:checked');
        if (checkedItems.length === 0) {
            alert('Please select at least one item to proceed');
            return;
        }

        // Handle coupon selection and save checked items
        const selectedCouponRadio = document.querySelector('.dk_coupon_item input[type="radio"]:checked');
        if (selectedCouponRadio) {
            selectedCoupon = {
                code: selectedCouponRadio.closest('.dk_coupon_item').querySelector('h2').textContent,
                value: parseInt(selectedCouponRadio.value)
            };
        }

        // Hide coupon and select all sections
        if (couponSection) couponSection.style.display = 'none';
        if (selectAllSection) selectAllSection.style.display = 'none';

        // Show delivery options offcanvas
        const deliveryOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasRight2'));
        deliveryOffcanvas.show();

        // Save checkbox states
        const checkboxStates = {};
        checkedItems.forEach(checkbox => {
            const itemId = checkbox.dataset.itemId;
            checkboxStates[itemId] = true;
        });
        localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));

        checkoutStep = 2;
        loadcartdata();
        updateOrderTrackingUI(2);
    }
    else if (checkoutStep === 2) {
        // Move to delivery details section
        cartSection.classList.add('d-none');
        deliverySection.classList.remove('d-none');

        updateOrderTrackingUI(3);
        checkoutStep = 3;

        if (proceedButton) {
            proceedButton.style.display = 'none';
        }

        // Show payment button if it exists
        if (paybtn) {
            paybtn.style.display = 'block';
        }
    }
}


function handleCouponSelection() {
    const couponInputs = document.querySelectorAll('.dk_coupon_item input[type="radio"]');
    couponInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            selectedCoupon = {
                code: e.target.closest('.dk_coupon_item').querySelector('h2').textContent,
                value: parseInt(e.target.value)
            };

            // Update the coupon input field
            document.getElementById('coupon-code').value = selectedCoupon.code;

            // Update order summary with coupon
            updateOrderSummaryWithCoupon(selectedCoupon);
        });
    });
}

function handleDeliverySelection() {
    const deliveryOptions = document.querySelectorAll('#offcanvasRight2 input[type="radio"]');
    deliveryOptions.forEach(option => {
        option.addEventListener('change', (e) => {
            selectedDeliveryOption = e.target.id;
            const deliveryCharge = getDeliveryCharge(selectedDeliveryOption);

            // Update order summary with delivery charge
            updateOrderSummaryWithDelivery(deliveryCharge);

            // Close the delivery options offcanvas after a short delay
            setTimeout(() => {
                const deliveryOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasRight2'));
                if (deliveryOffcanvas) {
                    deliveryOffcanvas.hide();
                }
            }, 300);
        });
    });
}

function getDeliveryCharge(option) {
    switch (option) {
        case 'express-delivery':
            return 39;
        case 'standard-delivery':
            return 29;
        case 'free-delivery':
            return 0;
        default:
            return 0;
    }
}

function updateOrderSummaryWithCoupon(coupon) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totals = calculateCartTotals(cartItems, coupon.value);
    updateOrderSummary(totals);
}

function updateOrderSummaryWithDelivery(deliveryCharge) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totals = calculateCartTotals(cartItems, selectedCoupon ? selectedCoupon.value : 0);
    totals.deliveryCharge = deliveryCharge;
    totals.totalAmount = totals.subtotal - totals.totalDiscount -
        (selectedCoupon ? selectedCoupon.value : 0) +
        totals.platformFee + deliveryCharge;

    updateOrderSummary(totals);
}

function updateOrderTrackingUI(step) {
    const circles = document.querySelectorAll('.dk_order_tracking_circle');
    const steps = document.querySelectorAll('.dk_order_tracking_step h4, .dk_order_tracking_step h3');

    circles.forEach((circle, index) => {
        if (index < step) {
            circle.classList.add('dk_order_tracking_active');
        } else {
            circle.classList.remove('dk_order_tracking_active');
        }
    });

    steps.forEach((stepText, index) => {
        if (index < step) {
            stepText.style.color = '#000000';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const proceedButton = document.querySelector('.dk_proceed');
    if (proceedButton) {
        proceedButton.addEventListener('click', handleProceedButton);
    }

    // Initialize delivery option handlers
    handleDeliverySelection();

    // Initialize cart data
    loadcartdata().then(() => {
        addItemCheckboxListeners();
        updateSelectAllStatus();
    });

    // Add coupon selection handler
    const couponInputs = document.querySelectorAll('.dk_coupon_item input[type="radio"]');
    couponInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const couponValue = parseInt(e.target.value);
            const couponCode = e.target.closest('.dk_coupon_item').querySelector('h2').textContent;

            selectedCoupon = {
                code: couponCode,
                value: couponValue
            };

            // Update coupon input field
            document.getElementById('coupon-code').value = couponCode;

            // Update order summary with coupon
            updateOrderSummaryWithDelivery(selectedDeliveryOption ?
                getDeliveryCharge(selectedDeliveryOption) : 0);
        });
    });
})


async function loadSimilarProduct() {
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
                <div class="col-sm-6 col-12">
                    <a href="productdetails.html?id=${item.id}">
                        <div class="dk_browsing_products">
                            <div class="card" data-card-index="${index}">
                                <div class="icon-container">
                                    <span onclick="toggleWishlist(event, ${item.id})" style="cursor: pointer !important; color: ${isWishlist ? '#ff0000' : '#000000'}; class="icon heart" data-product-id="${item.id}">
                                       <i class="fa-${isWishlist ? 'solid' : 'regular'} fa-heart"></i>

                                    </span>
                                    <span onclick="addToCart(event, ${item.id})" style="cursor: pointer !important;">
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
<a href="productdetails.html?id=${item.id}">
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
                                </a>
                            </div>
                            <a href="productdetails.html?id=${item.id}" class="buy-now">Buy Now</a>
                        </div>
                    </a>
                </div>
            `;
        }).join("");

        if (document.getElementById("dk_youlikeproduct")) {
            document.getElementById("dk_youlikeproduct").innerHTML = productHtml;
        }

        initializeSliders();

    } catch (error) {
        console.error("Error loading products:", error);
    }
}

// top wear js file

// async function loadtopwearProduct() {
//     try {
//         const response = await fetch('./../data/db.json');

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         const product = data.products;

//         const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

//         const productHtml = product.map((item, index) => {

//             const isWishlist = wishlist.includes(item.id);

//             return `
//                 <div class="col-12 col-md-6 col-lg-3 mb-4">
//                     <a href="productdetails.html?id=${item.id}">
//                         <div class="dk_browsing_products">
//                             <div class="card" data-card-index="${index}">
//                                 <div class="icon-container">
//                                     <span onclick="toggleWishlist(event, ${item.id})" style="cursor: pointer !important; color: ${isWishlist ? '#ff0000' : '#000000'}; class="icon heart" data-product-id="${item.id}">
//                                        <i class="fa-${isWishlist ? 'solid' : 'regular'} fa-heart"></i>

//                                     </span>
//                                     <span onclick="addToCart(event, ${item.id})" style="cursor: pointer !important;">
//                                         <img height="25px" width="25px" src="/mv_image/icon_cart_selected.png"
//                                             alt="Cart Icon" class="cart-icon">
//                                     </span>
//                                 </div>

//                                 <div class="slider">
//                                     ${item.images.map((img, imgIndex) =>
//                 `<img src="/img/${img}" alt="Product Image" class="slider-image ${imgIndex === 0 ? 'active' : ''}" data-index="${imgIndex}">`
//             ).join('')}
//                                 </div>

//                                 <div class="dots-container">
//                                     ${item.images.map((_, dotIndex) =>
//                 `<span class="dot ${dotIndex === 0 ? 'active' : ''}" data-index="${dotIndex}"></span>`
//             ).join('')}
//                                 </div>
// <a href="productdetails.html?id=${item.id}">
//                                 <h2>${item.name}</h2>
//                                 <p>${item.categorydesc}</p>

//                                 <div class="thumbnails">
//                                     ${item.thumbnail.map((thumb, thumbIndex) =>
//                 `<img src="/img/${thumb}" alt="Thumbnail" class="thumbnail" data-index="${thumbIndex}">`
//             ).join('')}
//                                 </div>

//                                 <div class="off">
//                                     <span class="off-price">${item.discount}% OFF</span>
//                                 </div>

//                                 <div class="price">
//                                     <span class="discount-price">$${(item.price - (item.price * (item.discount / 100))).toFixed(0)}</span>
//                                     <span class="original-price">$${item.price}</span>
//                                 </div>
//                                 </a>
//                             </div>
//                             <a href="productdetails.html?id=${item.id}" class="buy-now">Buy Now</a>
//                         </div>
//                     </a>
//                 </div>
//             `;
//         }).join("");

//         if (document.getElementById("topwears_products")) {
//             document.getElementById("topwears_products").innerHTML = productHtml;
//         }

//         initializeSliders();

//     } catch (error) {
//         console.error("Error loading products:", error);
//     }
// }

// Global variables to store filter states
let activeFilters = {
    discount: [],
    priceRange: 100,
    size: [],
    brand: [],
    color: [],
    rating: [],
    sleeve: [],
    fit: [],
    material: [],
    pattern: [],
    dressStyle: []
};

let originalProducts = [];

async function loadTopwearProducts() {
    try {
        const response = await fetch('./../data/db.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        originalProducts = data.products.slice(0, 8);
        renderProducts(originalProducts);
        initializeFilters();
    } catch (error) {
        console.error("Error loading products:", error);
    }
}

function initializeFilters() {
    // Discount filters
    document.querySelectorAll('[id^="discount"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const discount = parseInt(checkbox.id.replace('discount', ''));
            updateFilter('discount', discount, checkbox.checked);
        });
    });

    // Price range filter
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            activeFilters.priceRange = value;
            priceValue.textContent = `$${value}`;
            applyFilters();
        });
    }

    // Size filters
    document.querySelectorAll('[id^="size"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const size = checkbox.id.replace('size', '');
            updateFilter('size', size, checkbox.checked);
        });
    });

    // Brand filters
    document.querySelectorAll('[id^="brand"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const brandLabel = checkbox.nextElementSibling.textContent.split(' ')[0].trim();
            updateFilter('brand', brandLabel, checkbox.checked);
        });
    });

    // Color filters
    document.querySelectorAll('[id^="color"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const color = checkbox.id.replace('color', '');
            updateFilter('color', color, checkbox.checked);
        });
    });

    // Rating filters
    document.querySelectorAll('[id^="rating"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const rating = parseInt(checkbox.id.replace('rating', ''));
            updateFilter('rating', rating, checkbox.checked);
        });
    });

    // Sleeve type filters
    document.querySelectorAll('[id^="sleeve"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const sleeveType = checkbox.id.replace('sleeve', '');
            updateFilter('sleeve', sleeveType, checkbox.checked);
        });
    });

    // Fit type filters
    document.querySelectorAll('[id^="fit"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const fitType = checkbox.id.replace('fit', '');
            updateFilter('fit', fitType, checkbox.checked);
        });
    });

    // Material filters
    document.querySelectorAll('[id^="material"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const material = checkbox.id.replace('material', '');
            updateFilter('material', material, checkbox.checked);
        });
    });

    // Pattern filters
    document.querySelectorAll('[id^="pattern"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const pattern = checkbox.id.replace('pattern', '');
            updateFilter('pattern', pattern, checkbox.checked);
        });
    });

    // Dress style filters
    document.querySelectorAll('[id^="dress"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const style = checkbox.id.replace('dress', '');
            updateFilter('dressStyle', style, checkbox.checked);
        });
    });

    // Clear all filters
    document.querySelector('.r_clear').addEventListener('click', clearAllFilters);
}

function updateFilter(filterType, value, isActive) {
    if (isActive) {
        if (!activeFilters[filterType].includes(value)) {
            activeFilters[filterType].push(value);
        }
    } else {
        activeFilters[filterType] = activeFilters[filterType].filter(v => v !== value);
    }
    applyFilters();
}

function applyFilters() {
    let filteredProducts = originalProducts.filter(product => {
        // Discount filter
        if (activeFilters.discount.length > 0) {
            const meetsDiscount = activeFilters.discount.some(minDiscount => 
                parseInt(product.discount) >= minDiscount
            );
            if (!meetsDiscount) return false;
        }

        // Price filter
        const discountedPrice = product.price - (product.price * (product.discount / 100));
        if (discountedPrice > activeFilters.priceRange) return false;

        // Size filter
        if (activeFilters.size.length > 0) {
            const hasSize = activeFilters.size.some(size => 
                product.size.includes(size)
            );
            if (!hasSize) return false;
        }

        // Brand filter
        if (activeFilters.brand.length > 0) {
            if (!activeFilters.brand.includes(product.brand)) return false;
        }

        // Color filter
        if (activeFilters.color.length > 0) {
            if (!activeFilters.color.some(color => product.color.includes(color))) return false;
        }

        // Rating filter
        if (activeFilters.rating.length > 0) {
            if (!activeFilters.rating.some(rating => product.rating >= rating)) return false;
        }

        // Sleeve filter
        if (activeFilters.sleeve.length > 0) {
            if (!activeFilters.sleeve.includes(product.sleeveType)) return false;
        }

        // Fit filter
        if (activeFilters.fit.length > 0) {
            if (!activeFilters.fit.includes(product.fitType)) return false;
        }

        // Material filter
        if (activeFilters.material.length > 0) {
            if (!activeFilters.material.includes(product.material)) return false;
        }

        // Pattern filter
        if (activeFilters.pattern.length > 0) {
            if (!activeFilters.pattern.includes(product.pattern)) return false;
        }

        // Dress Style filter
        if (activeFilters.dressStyle.length > 0) {
            if (!activeFilters.dressStyle.includes(product.dressStyle)) return false;
        }

        return true;
    });

    renderProducts(filteredProducts);
}

function clearAllFilters() {
    // Reset all checkboxes
    document.querySelectorAll('.form-check-input').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset price range
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.value = 100;
        document.getElementById('priceValue').textContent = '$100';
    }

    // Reset filter state
    activeFilters = {
        discount: [],
        priceRange: 100,
        size: [],
        brand: [],
        color: [],
        rating: [],
        sleeve: [],
        fit: [],
        material: [],
        pattern: [],
        dressStyle: []
    };

    // Reset display to show all products
    renderProducts(originalProducts);
}

function renderProducts(products) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    const productHtml = products.map((item, index) => {
        const isWishlist = wishlist.includes(item.id);
        const discountedPrice = (item.price - (item.price * (item.discount / 100))).toFixed(0);
        
        return `
            <div class="col-12 col-md-6 col-lg-3 mb-4">
                <div class="dk_browsing_products">
                    <div class="card" data-card-index="${index}">
                        <div class="icon-container">
                            <span onclick="toggleWishlist(event, ${item.id})" 
                                  style="cursor: pointer !important; color: ${isWishlist ? '#ff0000' : '#000000'};" 
                                  class="icon heart" 
                                  data-product-id="${item.id}">
                                <i class="fa-${isWishlist ? 'solid' : 'regular'} fa-heart"></i>
                            </span>
                            <span onclick="addToCart(event, ${item.id})" style="cursor: pointer !important;">
                                <img height="25px" width="25px" src="/mv_image/icon_cart_selected.png" alt="Cart Icon" class="cart-icon">
                            </span>
                        </div>

                        <div class="slider">
                            ${item.images.map((img, imgIndex) => `
                                <img src="/img/${img}" 
                                     alt="Product Image" 
                                     class="slider-image ${imgIndex === 0 ? 'active' : ''}" 
                                     data-index="${imgIndex}">
                            `).join('')}
                        </div>

                        <div class="dots-container">
                            ${item.images.map((_, dotIndex) => `
                                <span class="dot ${dotIndex === 0 ? 'active' : ''}" 
                                      data-index="${dotIndex}"></span>
                            `).join('')}
                        </div>

                        <a href="productdetails.html?id=${item.id}">
                            <h2>${item.name}</h2>
                            <p>${item.categorydesc}</p>

                            <div class="thumbnails">
                                ${item.thumbnail.map((thumb, thumbIndex) => `
                                    <img src="/img/${thumb}" 
                                         alt="Thumbnail" 
                                         class="thumbnail" 
                                         data-index="${thumbIndex}">
                                `).join('')}
                            </div>

                            <div class="off">
                                <span class="off-price">${item.discount}% OFF</span>
                            </div>

                            <div class="price">
                                <span class="discount-price">$${discountedPrice}</span>
                                <span class="original-price">$${item.price}</span>
                            </div>
                        </a>
                    </div>
                    <a href="productdetails.html?id=${item.id}" class="buy-now">Buy Now</a>
                </div>
            </div>
        `;
    }).join('');

    const productsContainer = document.getElementById('topwears_products');
    if (productsContainer) {
        productsContainer.innerHTML = productHtml;
    }

    initializeSliders();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', loadTopwearProducts);