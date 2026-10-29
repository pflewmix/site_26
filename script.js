
const pages = document.querySelectorAll(".page");

function showPage() {
    const requestedPage = window.location.hash.slice(1) || "home";
    const pageExists = document.getElementById(requestedPage);

    const activePage = pageExists?.classList.contains("page")
        ? requestedPage
        : "home";

    pages.forEach((page) => {
        page.hidden = page.id !== activePage;
    });
}

window.addEventListener("hashchange", showPage);
showPage();
