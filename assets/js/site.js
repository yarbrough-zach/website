// Theme switcher. The theme is applied early by the inline snippet in <head>
// (to avoid a flash); this file wires up the footer buttons.
(function () {
  var KEY = "zy-theme";
  var root = document.documentElement;

  function current() { return root.getAttribute("data-theme") || "classic"; }

  function apply(theme) {
    if (theme === "classic") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", theme);
    try { localStorage.setItem(KEY, theme); } catch (e) { /* storage unavailable */ }
    document.querySelectorAll(".theme-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.theme === theme));
    });
  }

  document.querySelectorAll(".theme-switch button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.dataset.theme); });
  });
  apply(current());

  // Assemble the email address at runtime so simple scrapers don't harvest it.
  document.querySelectorAll("[data-email]").forEach(function (a) {
    var addr = a.dataset.user + "@" + a.dataset.domain;
    a.href = "mailto:" + addr;
    if (!a.textContent.trim()) a.textContent = addr;
  });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
