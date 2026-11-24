(function () {
  // Assemble the email address at runtime so simple scrapers don't harvest it.
  document.querySelectorAll("[data-email]").forEach(function (a) {
    var addr = a.dataset.user + "@" + a.dataset.domain;
    a.href = "mailto:" + addr;
    if (!a.textContent.trim()) a.textContent = addr;
  });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
