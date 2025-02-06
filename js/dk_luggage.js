// .....................................................  luggage page  .................................................................... //

// luggage page top brands
// const top_brands_luggage = [
//     {
//         id: "1",
//         img: "Luggage_brand1.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "2",
//         img: "Luggage_brand2.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "3",
//         img: "Luggage_brand3.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "4",
//         img: "Luggage_brand4.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "5",
//         img: "Luggage_brand5.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "6",
//         img: "Luggage_brand6.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "7",
//         img: "Luggage_brand7.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "8",
//         img: "Luggage_brand8.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "9",
//         img: "Luggage_brand9.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "10",
//         img: "Luggage_brand10.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "11",
//         img: "Luggage_brand11.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "12",
//         img: "Luggage_brand12.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "13",
//         img: "Luggage_brand13.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "14",
//         img: "Luggage_brand14.png",
//         discount: "10",
//         link: "productdetails"
//     },
//     {
//         id: "15",
//         img: "Luggage_brand15.png",
//         discount: "10",
//         link: "productdetails"
//     },
// ];

// const luggageproduct = top_brands_luggage.map((item, index) => {
//   return `
//         <div class="dk_product-item">
//             <a href="/darshit/${item.link}.html">
//             <img src="../img/${item.img}" alt="${item.img}">
//                 <p style="color: #000000;">Upto ${item.discount}% OFF</p>
//             </a>
//         </div>
//         `;
// }).join("");

// document.getElementById("dk_luggage_slider1_img_top_brands").innerHTML = luggageproduct;

document.addEventListener("DOMContentLoaded", async () => {
  await luggageTopBrand();
});

async function luggageTopBrand() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const luggageTopBrand = data.luggageTopBrand;

    const luggageTopBrandHtml = luggageTopBrand
      .map(
        (item) => `
         <div class="dk_product-item">
            <a href="/darshit/${item.link}.html">
            <img src="../img/${item.img}" alt="${item.img}">
                <p style="color: #000000;">Upto ${item.discount}% OFF</p>
            </a>
        </div>
      `
      )
      .join("");

    document.getElementById("dk_luggage_slider1_img_top_brands").innerHTML =
      luggageTopBrandHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

//  luggage page explore more
// const dk_luggage_wear = [
//   {
//     id: "1",
//     img: "Luggage_trolly.png",
//     name: "Trolley",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     img: "Luggage_bags.png",
//     name: "Bags",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     img: "Luggage_combos.png",
//     name: "Combos",
//     link: "productdetails",
//   },
//   {
//     id: "4",
//     img: "Luggage_duffle_bags.png",
//     name: "Duffle bags",
//     link: "productdetails",
//   },
//   {
//     id: "5",
//     img: "Luggage_backpaks.png",
//     name: "Backpacks",
//     link: "productdetails",
//   },
//   {
//     id: "6",
//     img: "Luggage_accesseries'.png",
//     name: "Accessories",
//     link: "productdetails",
//   },
// ];

// const luggagemorehtml = dk_luggage_wear
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

// document.getElementById("dk_luggage_explore_more").innerHTML = luggagemorehtml;

document.addEventListener("DOMContentLoaded", async () => {
  await luggageExploreMore();
});

async function luggageExploreMore() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const luggageExploreMore = data.luggageExploreMore;

    const luggageExploreMoreHtml = luggageExploreMore
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

    document.getElementById("dk_luggage_explore_more").innerHTML =
      luggageExploreMoreHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

// luggage page New On Quickcart
// const dk_luggage_new_quickcart = [
//   {
//     id: "1",
//     img1: "monos2.png",
//     img2: "sm_monos.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     img1: "away2.png",
//     img2: "sm_away.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     img1: "rimova2.png",
//     img2: "sm_rimova.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "4",
//     img1: "louis vuitton2.png",
//     img2: "sm_loise_viutton.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "5",
//     img1: "delsay2.png",
//     img2: "sm_dilsay.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "6",
//     img1: "monos2.png",
//     img2: "sm_monos.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
// ];

// const dk_luggagewere = dk_luggage_new_quickcart
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

// document.getElementById("dk_luggage_new_on_quickcart").innerHTML =
//   dk_luggagewere;

document.addEventListener("DOMContentLoaded", async () => {
  await luggageNewQuickcart();
});

async function luggageNewQuickcart() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const luggageNewQuickcart = data.luggageNewQuickcart;

    const luggageNewQuickcartHtml = luggageNewQuickcart
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

    document.getElementById("dk_luggage_new_on_quickcart").innerHTML =
      luggageNewQuickcartHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

// luggage page Trending Deals
const luggage_trending_dealing = [
  {
    id: "1",
    images: [
      "lagage_safari_dels.png",
      "lagage_safari_dels.png",
      "lagage_safari_dels.png",
      "lagage_safari_dels.png",
      "lagage_safari_dels.png",
    ],
    name: "SAFARI",
    categorydesc: "Polaris Castle Black Trolley Bag  ",
    thumbnail: ["lagage_safari_dels1.png", "lagage_safari_dels1.png"],
    discount: "40",
    price: "799",
    link: "productdetails",
  },
  {
    id: "2",
    images: [
      "lagage_paris_dels.png",
      "lagage_paris_dels.png",
      "lagage_paris_dels.png",
      "lagage_paris_dels.png",
      "lagage_paris_dels.png",
    ],
    name: "DELSEY PARIS",
    categorydesc: "TURENNE Duffle Bag (55cm)",
    thumbnail: ["lagage_paris_dels1.png", "lagage_paris_dels1.png"],
    discount: "50",
    price: "399",
    link: "productdetails",
  },
  {
    id: "3",
    images: [
      "lagage_remova_dels.png",
      "lagage_remova_dels.png",
      "lagage_remova_dels.png",
      "lagage_remova_dels.png",
      "lagage_remova_dels.png",
    ],
    name: "REMOWA",
    categorydesc: "Signature - Flap Backpack Large",
    thumbnail: [
      "lagage_remova_dels1.png",
      "lagage_remova_dels1.png",
      "lagage_remova_dels1.png",
    ],
    discount: "40",
    price: "299",
    link: "productdetails",
  },
];

const luggagetrending_deals = luggage_trending_dealing
  .map((item) => {
    return `
        <div class="swiper-slide">
            <div class="product-card w-100">
            <a href="../darshit/${item.link}.html">                      
                <div class="swiper innerSwiper">
                    <div class="swiper-wrapper">
                            ${item.images
                              .map(
                                (img) =>
                                  `<div class="swiper-slide">
                                <img src="../img/${img}" alt="${item.name} Image" class="r_v1img">
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
                                  `<img src="../img/${thumb}" alt="${item.name} Thumbnail">`
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
    `;
  })
  .join("");


document.getElementById("dk_luggage_trending").innerHTML =
  luggagetrending_deals;

//luggage page Trending in Beauty & Makeup
// const luggage_trend_accessories = [
//   {
//     id: "1",
//     img: "Luggage_trand1.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     img: "Luggage_trand2.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     img: "Luggage_trand3.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "4",
//     img: "Luggage_trand4.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "5",
//     img: "Luggage_trand5.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
//   {
//     id: "6",
//     img: "Luggage_trand2.png",
//     discount: "20",
//     info: "*T&C Apply",
//     link: "productdetails",
//   },
// ];

// const luggage_trd_acc = luggage_trend_accessories
//   .map((item, index) => {
//     return `
//                         <div class="swiper-slide">
//                         <a href="/darshit/${item.link}.html">
//                             <div class="card">
//                                 <img src="../img/${item.img}" class="card-img-top" alt="Calvin Klein">

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

// document.getElementById("dk_trending_in_luggage").innerHTML = luggage_trd_acc;

document.addEventListener("DOMContentLoaded", async () => {
  await luggageTrendAcc();
});

async function luggageTrendAcc() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const luggageTrendAcc = data.luggageTrendAcc;

    const luggageTrendAccHtml = luggageTrendAcc
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

    document.getElementById("dk_trending_in_luggage").innerHTML =
      luggageTrendAccHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

//luggage page Explore more box
// const luggage_exporing_box = [
//   {
//     id: "1",
//     img: "lagage_ex4.png",
//     name: "Keep up with the Trends",
//     btn: "Shop Now",
//     link: "productdetails",
//   },
//   {
//     id: "2",
//     img: "lagage_ex1.png",
//     name: "Voyage Premium Luggage",
//     btn: "Shop Now",
//     showFinalTouch: "true",
//     link: "productdetails",
//   },
//   {
//     id: "3",
//     img: "lagage_ex3.png",
//     name: "Travel with Culture",
//     btn: "Shop Now",
//     link: "productdetails",
//   },
//   {
//     id: "4",
//     img: "lagage_ex2.png",
//     name: "Luggage Accessories",
//     description: "Travel in Style & Comfort",
//     btn: "Shop Now",
//     link: "productdetails",
//   },
// ];

// const luggage_ex_box = luggage_exporing_box
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

// document.getElementById("dk_luggage_explore_box").innerHTML = luggage_ex_box;

document.addEventListener("DOMContentLoaded", async () => {
  await luggageExporingBox();
});

async function luggageExporingBox() {
  try {
    const response = await fetch("./../data/db.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const luggageExporingBox = data.luggageExporingBox;

    const luggageExporingBoxHtml = luggageExporingBox
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

    document.getElementById("dk_luggage_explore_box").innerHTML =
      luggageExporingBoxHtml;
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}
