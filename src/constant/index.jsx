import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/profilepic.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Polaroids", href: "#polaroids" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Swan Htar Ni No",
  info: "Toronto Model and Content Creator",
};

export const ABOUT = {
  text1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
  text2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse vitae sapien nec eros aliquet feugiat. Etiam sed justo vel sapien sodales lacinia. Integer dapibus ante ac lorem convallis, et feugiat nisl consequat. Maecenas finibus, justo et sollicitudin tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse vitae sapien nec eros aliquet feugiat. Etiam sed justo vel sapien sodales lacinia. Integer dapibus ante ac lorem convallis, et feugiat nisl consequat. Maecenas finibus, justo et sollicitudin tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse vitae sapien nec eros aliquet feugiat. Etiam sed justo vel sapien sodales lacinia. Integer dapibus ante ac lorem convallis, et feugiat nisl consequat. Maecenas finibus, justo et sollicitudin tincidunt",
};

export const PROJECTS = [
  {
    title: "Commercial",
    subtitle:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: image1,
  },
  {
    title: "Creative",
    subtitle:
      "A social media application developed using Next.js and Firebase.",
    image: image2,
  },
  {
    title: "Collabration",
    subtitle: "A project management tool built with Django and PostgreSQL.",
    image: image3,
  },
];

export const POLAROIDS = {
  Height: "165cm",
  Bust: "80cm",
  Waist: "64cm",
  Hips: "85cm",
  Dress: "34 EU",
  Shoe: "38",
};
