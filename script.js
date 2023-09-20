//Accordions inicio para fazer as interaçoes do Hobbies

const accordion_item = document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) => {
  const accordion_header_item = item.querySelector(".accordion_header");

  accordion_header_item.addEventListener("click", () => {
    const accordion_content_item = item.querySelector(".accordion_content");

    const item_actived = document.querySelector(".active");

    VerifyActive(item, accordion_content_item, item_actived);
  });
});


//Funçao onde verifica items, contents e seleciona para acontecer as interaçoes do Accordions
function VerifyActive(item, content, content_actived) {
  const icon_item = item.querySelector(".icon");
  const icon_item_active = document.querySelectorAll(".icon");

  // para achar o "item" e ao clicar "+" expande o txt do item 
  icon_item_active.forEach((item) => (item.innerHTML = "+"));

  if (content_actived) {
    content_actived.style.height = 0;
    content_actived.classList.remove("active");
  }

  if (content !== content_actived) {
    icon_item.innerHTML = "-";
    content.classList.add("active");
    content.style.height = content.scrollHeight + 10 + "px";
  }
}
