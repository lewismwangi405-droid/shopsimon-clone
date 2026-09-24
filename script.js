const cards = [
  { name: "Sneakers", color: "#888", price: 4500 },
  { name: "Handbags", color: "#7a5230", price: 6200 },
  { name: "Accessories", color: "#333", price: 1800 },
  { name: "Outerwear", color: "#555", price: 8900 }
];

const features = [
  { name: "Top Picks", sub: "Up to 60% Off", color: "#111", price: 3200 },
  { name: "New Arrivals", sub: "Shop the set", color: "#3a3a5c", price: 5500 }
];

function formatKES(amount) {
  return "KSh " + amount.toLocaleString("en-KE");
}

const cardRow = document.getElementById("cardRow");
cards.forEach(function (c) {
  const div = document.createElement("div");
  div.className = "card";
  div.style.background = c.color;
  div.innerHTML = `<span>${c.name}<br>${formatKES(c.price)}</span>`;
  cardRow.appendChild(div);
});

const featureRow = document.getElementById("featureRow");
features.forEach(function (f) {
  const div = document.createElement("div");
  div.className = "feature";
  div.style.background = f.color;
  div.innerHTML = `<b>${f.name}</b><span>${f.sub} — ${formatKES(f.price)}</span>`;
  featureRow.appendChild(div);
});

document.getElementById("submitBtn").addEventListener("click", function () {
  alert("Thanks for signing up!");
});
const navRow = document.getElementById("navRow");
const navItems = navRow.querySelectorAll("span");

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navItems.forEach(function (i) {
      i.classList.remove("active");
    });
    item.classList.add("active");
    alert(item.textContent + " category tapped");
  });
});
const cards = [
  { name: "Sneakers", img: "https://example.com/sneakers.jpg", price: 4500 },
  { name: "Handbags", img: "https://example.com/handbag.jpg", price: 6200 },
  { name: "Accessories", img: "https://example.com/accessories.jpg", price: 1800 },
  { name: "Outerwear", img: "https://example.com/jacket.jpg", price: 8900 }
];

const features = [
  { name: "Top Picks", sub: "Up to 60% Off", img: "https://example.com/top-picks.jpg", price: 3200 },
  { name: "New Arrivals", sub: "Shop the set", img: "https://example.com/new-arrivals.jpg", price: 5500 }
];

function formatKES(amount) {
  return "KSh " + amount.toLocaleString("en-KE");
}

const cardRow = document.getElementById("cardRow");
cards.forEach(function (c) {
  const div = document.createElement("div");
  div.className = "card";
  div.style.backgroundImage = `url(${c.img})`;
  div.innerHTML = `<span>${c.name}<br>${formatKES(c.price)}</span>`;
  cardRow.appendChild(div);
});

const featureRow = document.getElementById("featureRow");
features.forEach(function (f) {
  const div = document.createElement("div");
  div.className = "feature";
  div.style.backgroundImage = `url(${f.img})`;
  div.innerHTML = `<b>${f.name}</b><span>${f.sub} — ${formatKES(f.price)}</span>`;
  featureRow.appendChild(div);
});

document.getElementById("submitBtn").addEventListener("click", function () {
  alert("Thanks for signing up!");
});
