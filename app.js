function addArt() {
  let img = document.getElementById("img").value;
  let desc = document.getElementById("desc").value;

  if (!img || !desc) {
    alert("Fill both fields!");
    return;
  }

  let gallery = document.getElementById("gallery");

  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${img}" width="200">
    <p>${desc}</p>
  `;

  gallery.appendChild(card);

  saveToStorage(img, desc);
}

function saveToStorage(img, desc) {
  let data = JSON.parse(localStorage.getItem("fanart")) || [];

  data.push({ img, desc });

  localStorage.setItem("fanart", JSON.stringify(data));
}

function loadFanart() {
  let data = JSON.parse(localStorage.getItem("fanart")) || [];

  let gallery = document.getElementById("gallery");

  data.forEach(item => {
    let card = document.createElement("div");

    card.innerHTML = `
      <img src="${item.img}" width="200">
      <p>${item.desc}</p>
    `;

    gallery.appendChild(card);
  });
}

window.onload = loadFanart;
