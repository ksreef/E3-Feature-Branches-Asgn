const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

function buildFace(): SVGSVGElement {
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute(
    "aria-label",
    "sad face with a gray-to-blue gradient and a downward-curved frown",
  );

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const rain = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "linearGradient",
  );
  rain.setAttribute("id", "rain-shade");
  rain.setAttribute("x1", "0%");
  rain.setAttribute("y1", "0%");
  rain.setAttribute("x2", "0%");
  rain.setAttribute("y2", "100%");
  const top = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  top.setAttribute("offset", "0%");
  top.setAttribute("stop-color", "#aab2bb");
  const bottom = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  bottom.setAttribute("offset", "100%");
  bottom.setAttribute("stop-color", "#3f6fb5");
  rain.append(top, bottom);
  defs.append(rain);
  face.append(defs);

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "url(#rain-shade)");
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

  const frown = document.createElementNS("http://www.w3.org/2000/svg", "path");
  frown.setAttribute("d", "M 70 150 Q 100 122 130 150");
  frown.setAttribute("fill", "none");
  frown.setAttribute("stroke", "#302c29");
  frown.setAttribute("stroke-width", "4");
  frown.setAttribute("stroke-linecap", "round");
  face.append(frown);

  return face;
}

const face = buildFace();
portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
