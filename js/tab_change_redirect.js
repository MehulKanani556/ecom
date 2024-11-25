// // Event listener for "My Orders" link
document.getElementById("redirectToOrders").addEventListener("click", function () {
    // Store target section in session storage
    sessionStorage.setItem("activeSection", "ordersSection");
    console.log(sessionStorage.setItem("activeSection"));
});







// Event listener for "My Orders" link in the footer
// document.addEventListener("DOMContentLoaded", function () {
//     // Ensure the click event works for the "My Orders" link on any page
//     const redirectToOrders = document.getElementById("redirectToOrders");
//     if (redirectToOrders) {
//         redirectToOrders.addEventListener("click", function () {
//             // Store the section and tab info in session storage
//             sessionStorage.setItem("activeSection", "ordersSection");
//             sessionStorage.setItem("activeTab", "home-tab");
//         });
//     }

//     // Call the function to activate the section and tab on page load
//     activateSectionAndTab();
// });












// // Event listener for "My Orders" link (to store active section)
// document.getElementById("redirectToOrders")?.addEventListener("click", function () {
//     // Store target section in local storage
//     localStorage.setItem("activeSection", "ordersSection");
// });