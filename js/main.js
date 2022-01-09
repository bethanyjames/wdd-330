const links = [
  {
    label: "Week 01",
    url: "W01/index.html"
  }
]

function loadIndex() {
  const ol = document.querySelector("#linksList");

  links.forEach( link => {
    const li = document.createElement("li");
    const href = document.createElement("a");
    href.setAttribute("href", li.url);
    href.innerText = link.label;

    li.appendChild(href);
    ol.appendChild(li);
  })
}