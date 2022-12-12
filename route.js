const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleroute();
};

const routes = {
    "/": "/index.html",
  404: "/404.html",
  "/about": "/about.html",
};

const handleroute = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((res) => res.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate=handleroute;
window.route=route;

handleroute();