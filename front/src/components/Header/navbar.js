document.addEventListener("DOMContentLoaded", () => {
  
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

      var tl = new TimelineLite();

      tl.to($menu, 0.4, {
        css: {
          width: 750,
          background: "#000",
          borderRadius: 0,
          borderTop: "1px solid #D8D8D8",
        },
        ease: Expo.easeInOut,
      });
      tl.to($menuTitle, 0.25, { x: 0, y: -110, color: "#fff" });

      /*setTimeout(function(){
      $menuUl.fadeIn();
    }, 250);*/
      $menuUl.style.display = "block";
    } else {
      click = true;
      $menuTitle.style.zIndex = 11;
      event.target.style.borderRadius = "100%";

      var tl = new TimelineLite();

      tl.to($menu, 0.25, {
        css: {
          width: 150,
          background: "#FFF",
          borderRadius: "100%",
          borderTop: "1px solid #D8D8D8",
        },
        ease: Expo.easeInOut,
      });
      tl.to($menuTitle, 0.25, { x: 0, y: 0, color: "#000" });

      $menuUl.style.display = "none";
    }
  });
});
