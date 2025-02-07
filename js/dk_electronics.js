// .....................................................  electronics page  .................................................................... //

// electronics page top brands
// const top_brands_electonics = [
//     {
//         id: "1",
//         img: "lg.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "2",
//         img: "whirlpool.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "3",
//         img: "sony.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "4",
//         img: "samsung.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "5",
//         img: "haier.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "6",
//         img: "apple.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "7",
//         img: "asus.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "8",
//         img: "hp.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "9",
//         img: "dell_technologies.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "10",
//         img: "vivo.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "11",
//         img: "mi.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "12",
//         img: "godrej.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "13",
//         img: "panasonic.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "14",
//         img: "noice.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "15",
//         img: "jbl.png",
//         discount: "10",
//         link: "productdetails"
//     },
// ];

// const electronicsproduct = top_brands_electonics.map((item, index) => {
//   return `
//         <div class="dk_product-item">
//             <a href="/darshit/${item.link}.html">
//             <img src="../mv_image/${item.img}" alt="${item.img}">
//                 <p style="color: #000000;">Upto ${item.discount}% OFF</p>
//             </a>
//         </div>
//         `;
// }).join("");

// document.getElementById("dk_electronics_top_brand").innerHTML = electronicsproduct;

document.addEventListener("DOMContentLoaded", async () => {
  await electonicsTopBrands();
});

async function electonicsTopBrands() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const electonicsTopBrands = data.electonicsTopBrands;

    const electonicsTopBrandsHtml = electonicsTopBrands
      .map(
        (item) => `
       <div class="dk_product-item">
            <a href="/darshit/${item.link}.html">
            <img src="../mv_image/${item.img}" alt="${item.img}">
                <p style="color: #000000;">Upto ${item.discount}% OFF</p>
            </a>
        </div>
      `
      )
      .join("");

    document.getElementById("dk_electronics_top_brand").innerHTML =
      electonicsTopBrandsHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

//  electronocs page explore more
// const dk_electronics_wear = [
//   {
//     id: "1",
//     img: "mobiles.png",
//     name: "Trolley",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     img: "television.png",
//     name: "Television",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     img: "refrigerators.png",
//     name: "Refrigerators",
//     link: "productdetails",
//   },
//   {
//     id: "4",
//     img: "air_conditioners.png",
//     name: "Air Conditioners",
//     link: "productdetails",
//   },
//   {
//     id: "5",
//     img: "washing_machin.png",
//     name: "Washing Machin",
//     link: "productdetails",
//   },
//   {
//     id: "6",
//     img: "laptop.png",
//     name: "Laptop",
//     link: "productdetails",
//   },
// ];

// const electronicsmorehtml = dk_electronics_wear
//   .map((item, index) => {
//     return `
//         <div class="col-6 col-sm-4 col-md-4 col-lg-2 text-center category">
//         <a href="/darshit/${item.link}.html">
//             <img src="../mv_image/${item.img}" alt="${item.img}">
//             <p style="color: #fff;">${item.name}</p>
//         </a>
//         </div>
//         `;
//   })
//   .join("");

// document.getElementById("dk_electronics_explore_more").innerHTML =
//   electronicsmorehtml;

document.addEventListener("DOMContentLoaded", async () => {
  await electronicsExploreMore();
});

async function electronicsExploreMore() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const electronicsExploreMore = data.electronicsExploreMore;

    const electronicsExploreMoreHtml = electronicsExploreMore
      .map(
        (item) => `
        <div class="col-6 col-sm-4 col-md-4 col-lg-2 text-center category">
        <a href="/darshit/${item.link}.html">
            <img src="../mv_image/${item.img}" alt="${item.img}">
            <p style="color: #fff;">${item.name}</p>
        </a>
        </div>
        `
      )
      .join("");

    document.getElementById("dk_electronics_explore_more").innerHTML =
      electronicsExploreMoreHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

// electronics page New On Quickcart
// const dk_electronics_new_quickcart = [
//   {
//     id: "1",
//     img1: "new_samsung.png",
//     img2: "logo_samsung.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     img1: "new_asus.png",
//     img2: "logo_asus.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     img1: "new_sony.png",
//     img2: "logo_sony.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "4",
//     img1: "new_noise.png",
//     img2: "logo_noise.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "5",
//     img1: "new_apple.png",
//     img2: "logo_apple.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "6",
//     img1: "new_samsung.png",
//     img2: "logo_samsung.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
// ];

// const dk_electronicwere = dk_electronics_new_quickcart
//   .map((item, index) => {
//     return `
//     <div class="swiper-slide">
//     <a href="/darshit/${item.link}.html">
//         <div class="card">
//             <img src="../mv_image/${item.img1}" class="card-img-top" alt="Calvin Klein">

//                 <div class="card-body">
//                     <div>
//                     <img src="../mv_image/${item.img2}" alt="" class="mx-auto" style="height: 25px;">
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

// document.getElementById("dk_electronics_new_on_quick").innerHTML =
//   dk_electronicwere;

document.addEventListener("DOMContentLoaded", async () => {
  await electronicsNewQuickcart();
});

async function electronicsNewQuickcart() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const electronicsNewQuickcart = data.electronicsNewQuickcart;

    const electronicsNewQuickcartHtml = electronicsNewQuickcart
      .map(
        (item) => `
        <div class="swiper-slide">
            <a href="/darshit/${item.link}.html">
                <div class="card">
                    <img src="../mv_image/${item.img1}" class="card-img-top" alt="Calvin Klein">
                                        
                        <div class="card-body">
                            <div>
                            <img src="../mv_image/${item.img2}" alt="" class="mx-auto" style="height: 25px;">
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

    document.getElementById("dk_electronics_new_on_quick").innerHTML =
      electronicsNewQuickcartHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

// electronics page Trending Deals
// const electronics_trending_dealing = [
//   {
//     id: "1",
//     images: [
//       "new_trending_sony.png",
//       "new_trending_sony.png",
//       "new_trending_sony.png",
//       "new_trending_sony.png",
//       "new_trending_sony.png",
//     ],
//     name: "SONY",
//     categorydesc: "Sony Bravia 9 4k TV ",
//     thumbnail: ["new_trending_sony1.png", "new_trending_sony1.png"],
//     discount: "40",
//     price: "799",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     images: [
//       "new_trending_dell.png",
//       "new_trending_dell.png",
//       "new_trending_dell.png",
//       "new_trending_dell.png",
//       "new_trending_dell.png",
//     ],
//     name: "Dell",
//     categorydesc: "new inspiron 14 plus laptop",
//     thumbnail: ["new_trending_dell1.png"],
//     discount: "50",
//     price: "399",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     images: [
//       "new_trending_lg.png",
//       "new_trending_lg.png",
//       "new_trending_lg.png",
//       "new_trending_lg.png",
//       "new_trending_lg.png",
//     ],
//     name: "LG",
//     categorydesc: "Refrigerator 630L, Side by Side",
//     thumbnail: ["new_trending_lg1.png", "new_trending_lg1.png"],
//     discount: "40",
//     price: "299",
//     link: "productdetails",
//   },
// ];

// const electronicstrending_deals = electronics_trending_dealing
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
//                                 <img src="../mv_image/${img}" alt="${item.name} Image" class="r_v1img">
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
//                                   `<img src="../mv_image/${thumb}" alt="${item.name} Thumbnail">`
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

// document.getElementById("dk_electronics_trend_deals").innerHTML =
//   electronicstrending_deals;

document.addEventListener("DOMContentLoaded", async () => {
  await electronicsTrendingDeal();
});

async function electronicsTrendingDeal() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const electronicsTrendingDeal = data.electronicsTrendingDeal;

    const electronicsTrendingDealHtml = electronicsTrendingDeal
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
                                <img src="../mv_image/${img}" alt="${item.name} Image" class="r_v1img">
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
                                  `<img src="../mv_image/${thumb}" alt="${item.name} Thumbnail">`
                              )
                              .join("")}
                        </div>
                        <div class="mv_discount_text">${
                          item.discount
                        }% OFF</div>
                        <p class="text-start m-0">
                        <strong class="mv_less_discount_price">$${
                          item.price -
                          (item.price * (item.discount / 100)).toFixed(0)
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
    document.getElementById("dk_electronics_trend_deals").innerHTML =
      electronicsTrendingDealHtml;

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

//electronic page Trending in Electronics
// const electronic_trend_accessories = [
//   {
//     id: "1",
//     img: "new_laptop.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     img: "new_vivo.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     img: "new_refrigerators.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "4",
//     img: "new_watch.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "5",
//     img: "new_jbl.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "6",
//     img: "new_laptop.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
// ];

// const electronic_trd_acc = electronic_trend_accessories
//   .map((item, index) => {
//     return `
//                         <div class="swiper-slide">
//                         <a href="/darshit/${item.link}.html">
//                             <div class="card">
//                                 <img src="../mv_image/${item.img}" class="card-img-top" alt="Calvin Klein">

//                                 <div class="card-body">
//                                     <p style="font-size: 12px; line-height: 1" class="card-text text-center">Up to ${item.discount}% OFF</p>
//                                     <span class="text-center mv_trending_card_dis">${item.info}</span>
//                                 </div>
//                             </div>
//                             </a>
//                         </div>
//                         `;
//   })
//   .join("");

// document.getElementById("dk_trending_in_electronics").innerHTML =
//   electronic_trd_acc;

document.addEventListener("DOMContentLoaded", async () => {
  await electronicTrendAcc();
});

async function electronicTrendAcc() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const electronicTrendAcc = data.electronicTrendAcc;

    const electronicTrendAccHtml = electronicTrendAcc
      .map(
        (item) => `
        <div class="swiper-slide">
            <a href="/darshit/${item.link}.html">
                <div class="card">
                    <img src="../mv_image/${item.img}" class="card-img-top" alt="Calvin Klein">
                    
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

    document.getElementById("dk_trending_in_electronics").innerHTML =
      electronicTrendAccHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

//electronic page Explore more box
// const electronic_exporing_box = [
//   {
//     id: "1",
//     img: "electronic_explore_1.png",
//     name: "Audible Accessories",
//     description: "Your comfort, our Priority",
//     btn: "Shop Now",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     img: "electronic_explore_2.png",
//     name: "Home Appliances",
//     btn: "Shop Now",
//     showFinalTouch: "true",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     img: "electronic_explore_3.png",
//     name: "Top deals on Laptops",
//     btn: "Shop Now",
//     link: "productdetails",
//   },
//   {
//     id: "4",
//     img: "electronic_explore_4.png",
//     name: "Cinema is coming home",
//     btn: "Shop Now",
//     link: "productdetails",
//   },
// ];

// const electronic_ex_box = electronic_exporing_box
//   .map((item, index) => {
//     return `
//        <div class="col-md-6 mb-4">
//             <div class="card text-white">
//                 <img src="../mv_image/${item.img}" class="card-img" alt="${
//       item.img
//     }">
//                 <div class="card-img-overlay d-flex flex-column justify-content-center">
//                     <p class="mv_card_title">${item.name}</p>
//                     ${
//                       item.showFinalTouch
//                         ? `
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

// document.getElementById("dk_electronics_explore_box").innerHTML =
//   electronic_ex_box;

document.addEventListener("DOMContentLoaded", async () => {
  await electronicExporingBox();
});

async function electronicExporingBox() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const electronicExporingBox = data.electronicExporingBox;

    const electronicExporingBoxHtml = electronicExporingBox
      .map(
        (item) => `
           <div class="col-md-6 mb-4">
            <div class="card text-white">
                <img src="../mv_image/${item.img}" class="card-img" alt="${
          item.img
        }">
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <p class="mv_card_title">${item.name}</p>
                    ${
                      item.showFinalTouch
                        ? `
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

    document.getElementById("dk_electronics_explore_box").innerHTML =
      electronicExporingBoxHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}
