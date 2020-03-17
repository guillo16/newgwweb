import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Make your dream come true.", "I am Creative.", "I Love Design."],
    typeSpeed: 80,
    loop: true
  });
}

export { loadDynamicBannerText };
