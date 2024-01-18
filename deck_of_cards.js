async function fetch_deck_id() {
  const res = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
  );
  return await res.data.deck_id;
}
const deck_id = fetch_deck_id();
console.log(deck_id);
const btn = document.querySelector("button");
const cards = document.querySelector(".cards");
btn.addEventListener("click", async (evt) => {
  console.log("clicked");
  res = await axios.get(
    `https://deckofcardsapi.com/api/deck/${await deck_id}/draw/?count=1`,
  );

  console.log(res.data);
  console.log(res.data.cards[0].code);
  const template = document.createElement("template");

  template.innerHTML = `<img src="${res.data.cards[0].image}">`;
  const t = template.content;
  cards.prepend(t);
});
