var initMenu = () => {
  
var $menu = document.querySelector(".menu");
var $menuUl = document.querySelector(".menu ul");
var $menuTitle = document.querySelector(".menuTitle");
var $menuContainer = document.querySelector(".menuContainer");
var count = 0;
var click = true;
  $menuTitle.addEventListener("click", function (event) {
    if (click) {
      click = false;
      $menuTitle.style.zIndex = 9;
      //$menuUl.style.display = "none";

      var tl = new TimelineLite();

      tl.to($menuTitle, 0.25, { x: 0, y: 0, color: "#fff" });
      tl.to($menuContainer, 0.25, {css: {height: 225}});
      tl.to($menu, 0.25, {
        css: {
          width: 1000,
          height: 75,
          x: 0,
          y: 100,
          background: "#000",
          borderRadius: 0,
          borderTop: "1px solid #D8D8D8",
          color: "#fff",
        },
        ease: Expo.easeOut, 
      });
      tl.to($menuUl, 0.1, {css: {display: "block"}});

      /*setTimeout(function(){
      $menuUl.fadeIn();
    }, 250);*/

    } else {
      click = true;
      $menuTitle.style.zIndex = 11;
      event.target.style.borderRadius = "100%";

      var tl = new TimelineLite();

      tl.to($menu, 0.25, {
        css: {
          width: 150,
          height: 150,
          background: "#FFF",
          borderRadius: "100%",
          borderTop: "1px solid #D8D8D8",
        },
        ease: Expo.easeOut,
      });
      tl.to($menu, 0.2, { x: 0, y: 0, color: "#fff" });
      tl.to($menuTitle, 0.2, { x: 0, y: 0, color: "#000" });
      tl.to($menuContainer, 0.1, {css: {height: 150}});
      $menuUl.style.display = "none";
    }
  });
};

export default initMenu;
