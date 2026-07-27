function onthulGeheim(knop) {
  const tekst = knop.nextElementSibling;
  tekst.classList.toggle("zichtbaar");
  knop.textContent = tekst.classList.contains("zichtbaar")
    ? "Verberg het geheim"
    : "Klik om het geheim te onthullen";
}
