// .....................................................  beauty page  .................................................................... //

//  beauty page top brands
// const top_brands_makeup = [
//     {
//         id: "1",
//         img: "lorel.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "2",
//         img: "chenal.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "3",
//         img: "remee.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "4",
//         img: "maybeline.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "5",
//         img: "mac.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "6",
//         img: "iconic.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "7",
//         img: "colorbar.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "8",
//         img: "facescanada.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "9",
//         img: "purpale.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "10",
//         img: "nyka.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "11",
//         img: "mamaearth.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "12",
//         img: "nieva.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "13",
//         img: "plome.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "14",
//         img: "sugar.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "15",
//         img: "lotus.png",
//         discount: "10",
//         link: "productdetails"
//     },
// ];

// const beautyproduct = top_brands_makeup.map((item, index) => {
// return `
//         <a href="/darshit/${item.link}.html">
//             <div class="dk_product-item">
//             <img src="../img/${item.img}" alt="${item.img}">
//             <p>Upto ${item.discount}% OFF</p>
//             </div>
//         </a>
//     `;
// }).join("");

// document.getElementById("dk_beauty_top_brands").innerHTML = beautyproduct;

document.addEventListener("DOMContentLoaded", async () => {
  await beautyTopbrands();
});

async function beautyTopbrands() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const beautyTopbrands = data.beautyTopbrands;

    const beautyTopbrandsHtml = beautyTopbrands
      .map(
        (item) => `
        <a href="/darshit/${item.link}.html">
            <div class="dk_product-item">
                <img src="../img/${item.img}" alt="${item.img}">
                <p>Upto ${item.discount}% OFF</p>
            </div>
        </a>
      `
      )
      .join("");

    document.getElementById("dk_beauty_top_brands").innerHTML =
      beautyTopbrandsHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

//  beauty page explore more
// const dk_beauty_wear = [
//   {
//     id: "1",
//     img: "face.png",
//     name: "Face",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     img: "eyes.png",
//     name: "Eyes",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     img: "lips.png",
//     name: "Lips",
//     link: "productdetails",
//   },
//   {
//     id: "4",
//     img: "skin.png",
//     name: "Skin",
//     link: "productdetails",
//   },
//   {
//     id: "5",
//     img: "hair.png",
//     name: "Hair",
//     link: "productdetails",
//   },
//   {
//     id: "6",
//     img: "aceseress.png",
//     name: "Accessories",
//     link: "productdetails",
//   },
// ];

// const beautymorehtml = dk_beauty_wear
//   .map((item, index) => {
//     return `
//         <div class="col-6 col-sm-4 col-md-4 col-lg-2 text-center category">
//         <a href="/darshit/${item.link}.html">
//             <img src="../img/${item.img}" alt="${item.img}">
//             <p style="color: #fff;">${item.name}</p>
//         </a>
//         </div>
//         `;
//   })
//   .join("");

// document.getElementById("dk_beauty_explore_more").innerHTML = beautymorehtml;

document.addEventListener("DOMContentLoaded", async () => {
  await beautyExploreMore();
});

async function beautyExploreMore() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const beautyExploreMore = data.beautyExploreMore;

    const beautyExploreMoreHtml = beautyExploreMore
      .map(
        (item) => `
        <div class="col-6 col-sm-4 col-md-4 col-lg-2 text-center category">
            <a href="/darshit/${item.link}.html">
                <img src="../img/${item.img}" alt="${item.img}">
                <p style="color: #fff;">${item.name}</p>
            </a>
        </div>
        `
      )
      .join("");

    document.getElementById("dk_beauty_explore_more").innerHTML =
      beautyExploreMoreHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

// beauty page New On Quickcart
// const dk_beauty_new_quickcart = [
//   {
//     id: "1",
//     img1: "iconic2.png",
//     img2: "s_iconic.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     img1: "cenal2.png",
//     img2: "s_chanel.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     img1: "lorel2.png",
//     img2: "s_loreal.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "4",
//     img1: "sugar2.png",
//     img2: "s_sugar.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "5",
//     img1: "mac2.png",
//     img2: "s_mac.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "6",
//     img1: "iconic2.png",
//     img2: "s_iconic.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
// ];

// const dk_beautywere = dk_beauty_new_quickcart
//   .map((item, index) => {
//     return `
//     <div class="swiper-slide">
//     <a href="/darshit/${item.link}.html">
//         <div class="card">
//             <img src="../img/${item.img1}" class="card-img-top" alt="Calvin Klein">

//                 <div class="card-body">
//                     <div>
//                     <img src="../img/${item.img2}" alt="" class="mx-auto" style="height: 25px;">
//                     </div>
//                     <p style="font-size: 12px; line-height: 1" class="card-text text-center mb-0">Up to ${item.discount}% OFF</p>
//                     <small class="text-center mv_trending_card_dis">${item.info}</small>
//                 </div>
//         </div>
//     </a>
//     </div>
//     `;
//   })
//   .join("");

// document.getElementById("dk_beauty_new_on_quickcart").innerHTML = dk_beautywere;

document.addEventListener("DOMContentLoaded", async () => {
  await beautyNewOnQuickCart();
  await beautytrending_deals();
});

async function beautyNewOnQuickCart() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const beautyNewOnQuickCart = data.beautyNewOnQuickCart;

    const beautyNewOnQuickCartHtml = beautyNewOnQuickCart
      .map(
        (item) => `
        <div class="swiper-slide">
            <a href="/darshit/${item.link}.html">
                <div class="card">
                    <img src="../img/${item.img1}" class="card-img-top" alt="Calvin Klein">
                               
                    <div class="card-body">
                        <div>
                            <img src="../img/${item.img2}" alt="" class="mx-auto" style="height: 25px;">
                    </div>
                    <p style="font-size: 12px; line-height: 1" class="card-text text-center mb-0">Up to ${item.discount}% OFF</p>
                    <small class="text-center mv_trending_card_dis">${item.info}</small>
                </div>
                </div>
            </a>    
        </div>
        `
      )
      .join("");

    document.getElementById("dk_beauty_new_on_quickcart").innerHTML =
      beautyNewOnQuickCartHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

// beauty page Trending Deals


async function beautytrending_deals() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const beautyNewOnQuickCart = data.trendingDeal;

    const beautyNewOnQuickCartHtml = beautyNewOnQuickCart
      .map(
        (item) => `
         <div class="swiper-slide">
            <div class="product-card w-100">
            <a href="../darshit/${item.link}.html">                      
                <div class="swiper innerSwiper">
                    <div class="swiper-wrapper">
                            ${item.images
                              .map(
                                (img) =>
                                  `<div class="swiper-slide">
                                <img src="/mv_image/${img}" alt="${item.name} Image" class="r_v1img">
                            </div>`
                              )
                              .join("")}                 
                        </div>               
                            <div class="swiper-pagination"></div>
                        </div>              
                            <h5 style="color: #000000;" class="mv_tsmh">${
                              item.name
                            }</h5>
                            <p  style="color: #000000;" class="mv_tssh text-start">${
                              item.categorydesc
                            }</p>
                        <div class="r_thumbnailimg d-flex align-items-center">
                            ${item.thumbnail
                              .map(
                                (thumb) =>
                                  `<img src="/mv_image/${thumb}" alt="${item.name} Thumbnail">`
                              )
                              .join("")}
                        </div>
                        <div class="mv_discount_text">${
                          item.discount
                        }% OFF</div>
                        <p class="text-start m-0">
                        <strong class="mv_less_discount_price">$${
                          (item.price - item.price * (item.discount / 100)).toFixed(0)
                        }</strong>
                        <del class="mv_without_discount_price">$${
                          item.price
                        }</del>
                    </p>
                     </a>
             </div>
        </div>
        `
      )
      .join("");

    // Append HTML before initializing Swipers
    document.getElementById("beauty_trending_deals").innerHTML = beautyNewOnQuickCartHtml;

    // Initialize inner sliders for each product card
    document.querySelectorAll(".innerSwiper").forEach((innerSlider) => {
      new Swiper(innerSlider, {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: innerSlider.querySelector(".swiper-pagination"),
          clickable: true,
        },
      });
    });

    // Initialize main outer slider for product cards
    var mainSwiper = new Swiper(".mainSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".mainSwiper .swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        425: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

  } catch (error) {
    console.error("Error loading categories:", error);
  }
}


// const beautytrending_deals = beauty_trending_dealing
//   .map((item) => {
//     return `
//         <div class="swiper-slide">
//             <div class="product-card w-100">
//             <a href="../darshit/${item.link}.html">                      
//                 <div class="swiper innerSwiper">
//                     <div class="swiper-wrapper">
//                             ${item.images
//                               .map(
//                                 (img) =>
//                                   `<div class="swiper-slide">
//                                 <img src="../img/${img}" alt="${item.name} Image" class="r_v1img">
//                             </div>`
//                               )
//                               .join("")}                 
//                         </div>               
//                             <div class="swiper-pagination"></div>
//                         </div>              
//                             <h5 style="color: #000000;" class="mv_tsmh">${
//                               item.name
//                             }</h5>
//                             <p  style="color: #000000;" class="mv_tssh text-start">${
//                               item.categorydesc
//                             }</p>
//                         <div class="r_thumbnailimg d-flex align-items-center">
//                             ${item.thumbnail
//                               .map(
//                                 (thumb) =>
//                                   `<img src="../img/${thumb}" alt="${item.name} Thumbnail">`
//                               )
//                               .join("")}
//                         </div>
//                         <div class="mv_discount_text">${
//                           item.discount
//                         }% OFF</div>
//                         <p class="text-start m-0">
//                         <strong class="mv_less_discount_price">$${
//                           item.price -
//                           (item.price * (item.discount / 100)).toFixed(0)
//                         }</strong>
//                         <del class="mv_without_discount_price">$${
//                           item.price
//                         }</del>
//                     </p>
//                      </a>
//              </div>
//         </div>
//     `;
//   })
//   .join("");

// document.getElementById("beauty_trending_deals").innerHTML =
//   beautytrending_deals;

//beauty page Trending in Beauty & Makeup
// const beauty_trend_accessories = [
//   {
//     id: "1",
//     img: "makeup1.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     img: "makeup2.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     img: "makeup3.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "4",
//     img: "makeup4.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "5",
//     img: "makeup5.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "6",
//     img: "makeup1.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
// ];

// const beauty_trd_acc = beauty_trend_accessories
//   .map((item, index) => {
//     return `
//     <div class="swiper-slide">
//     <a href="/darshit/${item.link}.html">
//         <div class="card">
//             <img src="../img/${item.img}" class="card-img-top" alt="Calvin Klein">

//             <div class="card-body">
//                 <p style="font-size: 12px; line-height: 1" class="card-text text-center">Up to ${item.discount}% OFF</p>
//                 <span class="text-center mv_trending_card_dis">${item.info}</span>
//             </div>
//         </div>
//         </a>
//     </div>
//     `;
//   })
//   .join("");

// document.getElementById("dk_trending_makeup").innerHTML = beauty_trd_acc;

document.addEventListener("DOMContentLoaded", async () => {
  await beautyTrendAcc();
});

async function beautyTrendAcc() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const beautyTrendAcc = data.beautyTrendAcc;

    const beautyTrendAccHtml = beautyTrendAcc
      .map(
        (item) => `
          <div class="swiper-slide">
            <a href="/darshit/${item.link}.html">
            <div class="card">
                <img src="../img/${item.img}" class="card-img-top" alt="Calvin Klein">
            
                <div class="card-body">
                    <p style="font-size: 12px; line-height: 1" class="card-text text-center">Up to ${item.discount}% OFF</p>
                    <span class="text-center mv_trending_card_dis">${item.info}</span>
                </div>
            </div>
            </a>
        </div>
          `
      )
      .join("");

    document.getElementById("dk_trending_makeup").innerHTML =
      beautyTrendAccHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

//SportsWear page Explore more box
// const beautyExporingBox = [
//   {
//     id: "1",
//     img: "beauty_ex1.png",
//     name: "It’s Makeup Time",
//     btn: "Shop Now",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     img: "beauty_ex2.png",
//     name: "",
//     btn: "Shop Now",
//     showFinalTouch: "true",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     img: "beauty_ex3.png",
//     name: "NEW STYLES",
//     description: "Beauty meets style",
//     btn: "Shop Now",
//     link: "productdetails",
//   },
//   {
//     id: "4",
//     img: "beauty_ex4.png",
//     name: "Beauty Accessories",
//     description: "Your beauty, our Priority",
//     btn: "Shop Now",
//     link: "productdetails",
//   },
// ];

// const beauty_ex_box = beauty_exporing_box
//   .map((item, index) => {
//     return `
//        <div class="col-md-6 mb-4">
//             <div class="card text-white">
//                 <img src="../img/${item.img}" class="card-img" alt="${
//       item.img
//     }">
//                 <div class="card-img-overlay d-flex flex-column justify-content-center">
//                     <p class="mv_card_title">${item.name}</p>
//                     ${
//                       item.showFinalTouch
//                         ? `
//                        <p class="mv_add_the">
//                        Add the <span style="color: #CF2A2A;">FINAL</span> <br> touch to your <span style="color: #CF2A2A;">beauty</span>
//                        </p>
//                     `
//                         : ""
//                     }
//                       ${
//                         item.description
//                           ? `<p class="mv_run_to">${item.description}</p>`
//                           : ""
//                       }
//                     <div class="mv_explore_shop_more">
//                     <a href="/darshit/${item.link}.html" class="r_shopnowbtn">${
//       item.btn
//     }</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
//   })
//   .join("");

// document.getElementById("dk_beauty_explore_box").innerHTML = beauty_ex_box;

document.addEventListener("DOMContentLoaded", async () => {
  await beautyExporingBox();
});

async function beautyExporingBox() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const beautyExporingBox = data.beautyExporingBox;

    const beautyExporingBoxHtml = beautyExporingBox
      .map(
        (item) => `
         <div class="col-md-6 mb-4">
            <div class="card text-white">
                <img src="../img/${item.img}" class="card-img" alt="${
          item.img
        }">
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <p class="mv_card_title">${item.name}</p>
                    ${
                      item.showFinalTouch
                        ? `
                       <p class="mv_add_the">
                       Add the <span style="color: #CF2A2A;">FINAL</span> <br> touch to your <span style="color: #CF2A2A;">beauty</span>
                       </p>
                    `
                        : ""
                    }
                      ${
                        item.description
                          ? `<p class="mv_run_to">${item.description}</p>`
                          : ""
                      }
                    <div class="mv_explore_shop_more"> 
                    <a href="/darshit/${item.link}.html" class="r_shopnowbtn">${
          item.btn
        }</a>
                    </div>
                </div>
            </div>
        </div>
          `
      )
      .join("");

    document.getElementById("dk_beauty_explore_box").innerHTML =
      beautyExporingBoxHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}
