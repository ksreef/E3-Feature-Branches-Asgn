const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// @deno-types="./asset-url.d.ts"
import eyepatchUrl from "./assets/eyepatch.png?no-inline";

// @deno-types="./asset-url.d.ts"
import parrotUrl from "./assets/parrot.png?no-inline";

// eyepatch.png: downloaded as 13147-200.png from The Noun Project,
// https://static.thenounproject.com/png/13147-200.png
// Creators: Sofya Polyakov and Edward Boatman
// License: https://creativecommons.org/licenses/by/3.0/

// parrot.png: downloaded as pngtree-green-little-parrot-png-image_15309509.png from Pngtree,
// https://png.pngtree.com/png-clipart/20240612/original/pngtree-green-little-parrot-png-image_15309509.png
// License: https://pngtree.com/

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "face with an eyepatch over one eye and parrot on shoulder",
);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

//setting images in
const eyepatch = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
eyepatch.setAttribute("href", eyepatchUrl);
eyepatch.setAttribute("x", "50");
eyepatch.setAttribute("y", "37");
eyepatch.setAttribute("width", "80");
eyepatch.setAttribute("height", "80");
face.append(eyepatch);

const parrot = document.createElementNS("http://www.w3.org/2000/svg", "image");
parrot.setAttribute("href", parrotUrl);
parrot.setAttribute("x", "128");
parrot.setAttribute("y", "120");
parrot.setAttribute("width", "70");
parrot.setAttribute("height", "87");
face.append(parrot);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
