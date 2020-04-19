import { gsap, TweenLite, TweenMax, TimelineLite, TimelineMax } from "gsap";

const menu = document.getElementByClassName("menu");
const wholeMenu = document.getElementByClassName('menu, menuTitle');
const menuUl = document.getElementByClassName('menu ul');
const menuTitle = document.getElementByClassName('menuTitle');
const menuContainer = document.getElementByClassName('menuContainer');
const count = 0;
const click = true;

wholeMenu.click(function () {
  if (click) {
    click = false;
    menuTitle.css({ "z-index": 9 });

    const tl = new TimelineLite();

    tl.to(menu, 0.4, {
      css: {
        width: 750,
        background: "#000",
        borderRadius: 0,
        borderTop: "1px solid #D8D8D8"
      },
      ease: Expo.easeInOut
    });
    tl.to(menuTitle, 0.25, { x: 0, y: -110, color: "#fff" });

    setTimeout(function () {
      menuUl.fadeIn();
    }, 250);
  } else {
    click = true;
    menuTitle.css({ "z-index": 11 });
    (this).css({ borderRadius: "100%" });

    const tl = new TimelineLite();

    tl.to(menu, 0.25, {
      css: {
        width: 150,
        background: "#FFF",
        borderRadius: "100%",
        borderTop: "1px solid #D8D8D8"
      },
      ease: Expo.easeInOut
    });
    tl.to(menuTitle, 0.25, { x: 0, y: 0, color: "#000" });

    menuUl.hide();
  }
});
