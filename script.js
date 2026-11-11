
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

// contact dropdown

const contactModal = document.getElementById("contact-modal");
const openContact = document.getElementById("open-contact");
const closeContact = document.getElementById("close-contact");

function showContactModal() {
    contactModal.classList.add("is-open");
    contactModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("modal-name").focus();
}

function hideContactModal() {
    contactModal.classList.remove("is-open");
    contactModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    openContact.focus();
}

openContact.addEventListener("click", showContactModal);
closeContact.addEventListener("click", hideContactModal);

contactModal.addEventListener("click", (event) => {
    if (event.target === contactModal) {
        hideContactModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        contactModal.classList.contains("is-open")
    ) {
        hideContactModal();
    }
});
