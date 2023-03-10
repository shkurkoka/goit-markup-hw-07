(() => {
  const refs = {
    openMobileBtn: document.querySelector("[mobile-btn-open-menu]"),
    closeMobileBtn: document.querySelector("[mobile-btn-close-menu]"),
    mobileMenu: document.querySelector("[mobile-menu]"),
  };

  refs.openMobileBtn.addEventListener("click", toggleMobileMenu);
  refs.closeMobileBtn.addEventListener("click", toggleMobileMenu);

  function toggleMobileMenu() {
    refs.mobileMenu.classList.toggle("is-hidden");
  }
})();