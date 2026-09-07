const maps = [
  {
    id: "first-visit",
    title: "The First Visit",
    kind: "Gloamglass memory I",
    cols: 12,
    rows: 8,
    references: [
      { title: "Interior of Shabby Mirror Chamber", src: "reference_images/first_visit_shabby_mirror_chamber.jpg" },
      { title: "Dangerously Hot Glass", src: "reference_images/first_visit_dangerously_hot_glass.jpg" },
      { title: "Wraith Mirror", src: "reference_images/first_visit_wraith_mirror.jpg" }
    ],
    features: [
      { type: "portal", x: 1, y: 3, w: 1, h: 3, label: "ENTRY" },
      { type: "memory", x: 5, y: 2, w: 4, h: 5, label: "SHABBY MIRROR CHAMBER" },
      { type: "mirror", x: 8, y: 3, w: 1, h: 3, label: "WRAITH MIRROR" },
      { type: "hot", x: 10, y: 3, w: 2, h: 3, label: "DANGEROUSLY HOT GLASS" },
      { type: "portal", x: 12, y: 3, w: 1, h: 3, label: "NEXT" },
      { type: "trail red", x: 7, y: 4.5, w: 5, h: .1, label: "", angle: 0 }
    ],
    structure: [
      "12 x 8 landscape grid with narrow three-square portals centered on both short edges.",
      "A 4 x 5 fragment of the shabby Hall occupies the center.",
      "A distinct 2 x 3 bank of heated mirror glass occupies the right side."
    ],
    materials: ["Black reflective dunes", "Worn wagon floorboards", "Cracked and tarnished mirrors", "Scorched iron framing"],
    clear: ["Open approach from the west portal", "Central space between the chamber mirrors", "Access to the hot-glass bank and east portal"],
    lighting: "Dirty candlelight inside the memory, furnace-red light beneath the hot glass, and a thin red fracture leading east.",
    palette: ["#10191a", "#455957", "#72563b", "#9da7a1", "#c5473e"]
  },
  {
    id: "return",
    title: "The Return",
    kind: "Gloamglass memory II",
    cols: 12,
    rows: 8,
    references: [
      { title: "Wagon Exterior", src: "reference_images/return_wagon_exterior.jpg" },
      { title: "Wagon Door", src: "reference_images/return_wagon_door.jpg" },
      { title: "Impossibly Deep Interior", src: "reference_images/return_Impossibly Deep Interior.jpg" },
      { title: "Ilona's Departure", src: "reference_images/return_ Ilona's Departure.jpg" }
    ],
    features: [
      { type: "memory", x: 1, y: 2, w: 4, h: 5, label: "WAGON EXTERIOR" },
      { type: "wagon", x: 5, y: 2, w: 2, h: 5, label: "WAGON DOOR" },
      { type: "memory", x: 7, y: 2, w: 4, h: 5, label: "IMPOSSIBLY DEEP INTERIOR" },
      { type: "mirror", x: 10, y: 3, w: 1, h: 3, label: "ILONA'S DEPARTURE" },
      { type: "portal", x: 12, y: 3, w: 1, h: 3, label: "NEXT" },
      { type: "trail blue", x: 8, y: 4.7, w: 4, h: .1, label: "", angle: 0 }
    ],
    structure: [
      "12 x 8 landscape grid divided by a 2 x 5 wagon doorway left of center.",
      "Open exterior space occupies the west side; a 3 x 5 mirror interior occupies the east.",
      "The interior must appear deeper than the wagon can physically contain."
    ],
    materials: ["Black-glass ground", "Weathered painted wagon wood", "Tarnished brass", "Warped interior mirrors"],
    clear: ["Western gathering area", "The doorway threshold", "A direct route through the interior to the east portal"],
    lighting: "Muted, warmer reflected light outside; cold blue illumination within the wagon; a blue fracture reaches the exit.",
    palette: ["#111a1b", "#495c59", "#795637", "#a07c48", "#3b82bd"]
  },
  {
    id: "cure",
    title: "The Cure",
    kind: "Gloamglass memory III",
    cols: 12,
    rows: 8,
    references: [
      { title: "Open Mirror Enclosure", src: "reference_images/cure_Open Mirror Enclosure.jpg" },
      { title: "Alignment Mirror", src: "reference_images/cure_Alignment Mirror.jpg" },
      { title: "Open Alignment and Hall Entrance", src: "reference_images/cure_Open Alignment and Hall entrence.jpg" }
    ],
    features: [
      { type: "memory", x: 5, y: 2, w: 5, h: 5, label: "OPEN MIRROR ENCLOSURE" },
      { type: "mirror", x: 5.5, y: 3, w: 1, h: 3, label: "ALIGNMENT MIRROR" },
      { type: "lantern", x: 8, y: 3.5, w: 1, h: 2, label: "OPEN LANTERN" },
      { type: "shadow", x: 6, y: 5, w: 1, h: 1.5, label: "" },
      { type: "portal", x: 12, y: 3, w: 1, h: 3, label: "HALL" },
      { type: "trail red", x: 8.5, y: 3.7, w: 3.5, h: .1, label: "", angle: -8 },
      { type: "trail blue", x: 8.5, y: 4.5, w: 3.5, h: .1, label: "", angle: 0 },
      { type: "trail white", x: 8.5, y: 5.3, w: 3.5, h: .1, label: "", angle: 8 }
    ],
    structure: [
      "12 x 8 landscape grid with a loose 5 x 5 mirror enclosure in the center-right.",
      "No solid walls: freestanding mirror planes loosely define the chamber.",
      "A clear full-length mirror stands west of the central lantern; the exit occupies the east edge."
    ],
    materials: ["Polished black glass", "Freestanding silvered mirrors", "Black iron lantern", "Silver mist and broken mirror edges"],
    clear: ["Open western approach", "Space around all sides of the lantern", "Unobstructed sightline between the lantern and alignment mirror"],
    lighting: "The lantern supplies intertwined red, blue, and ivory light. Three matching fractures converge and continue east.",
    palette: ["#0d1415", "#536865", "#9caeaa", "#b4473f", "#f0e7cd"]
  },
  {
    id: "unmade-screams",
    title: "Hall of Unmade Screams",
    kind: "Tactical finale",
    cols: 14,
    rows: 10,
    references: [
      { title: "Anchor", src: "reference_images/unmade_Anchor.jpg" },
      { title: "Lantern Area and Terminal Mirror", src: "reference_images/unmade_Lantern Area and Terminal Mirror.jpg" },
      { title: "Open Nave", src: "reference_images/unmade_The open Nave.jpg" }
    ],
    features: [
      { type: "portal", x: 1, y: 4, w: 1, h: 3, label: "ENTRY" },
      { type: "nave", x: 2, y: 3, w: 9, h: 5, label: "OPEN NAVE" },
      { type: "anchor", x: 2, y: 1, w: 1, h: 2, label: "ANCHOR" },
      { type: "anchor", x: 7, y: 1, w: 1, h: 2, label: "ANCHOR" },
      { type: "anchor", x: 12, y: 1, w: 1, h: 2, label: "ANCHOR" },
      { type: "anchor", x: 2, y: 9, w: 1, h: 2, label: "ANCHOR" },
      { type: "anchor", x: 7, y: 9, w: 1, h: 2, label: "ANCHOR" },
      { type: "anchor", x: 12, y: 9, w: 1, h: 2, label: "ANCHOR" },
      { type: "lantern", x: 10, y: 4, w: 2, h: 3, label: "LANTERN AREA" },
      { type: "pavel", x: 12, y: 4, w: 2, h: 3, label: "TERMINAL MIRROR" },
      { type: "shadow", x: 13, y: 4, w: 1, h: 3, label: "" }
    ],
    structure: [
      "14 x 10 landscape grid with a three-square west entrance and broad central nave.",
      "Six 1 x 2 structural mirrors stand at the north and south thirds.",
      "Adjacent 2 x 3 lantern and terminal-mirror areas occupy the east side."
    ],
    materials: ["Dark reflective stone", "Monumental black mirrors", "Heavy black iron", "Tarnished silver frames and luminous roots"],
    clear: ["The full central nave", "Multiple approaches to the lantern", "Circulation around every anchor mirror", "The route between lantern and terminal mirror"],
    lighting: "The lantern is the primary source. Restrained red, blue, and ivory rays fracture across an otherwise smoke-dark hall.",
    palette: ["#0c1213", "#293837", "#657b78", "#a49a84", "#b3453d", "#3c7eac"]
  }
];

const directions = {
  north: { dx: 0, dy: -1, opposite: "south" },
  east: { dx: 1, dy: 0, opposite: "west" },
  south: { dx: 0, dy: 1, opposite: "north" },
  west: { dx: -1, dy: 0, opposite: "east" }
};

const symbols = {
  mirror: { mark: "M", label: "Mirror" },
  danger: { mark: "!", label: "Dangerous terrain" },
  barrier: { mark: "B", label: "Barrier" },
  creature: { mark: "C", label: "Creature" },
  light: { mark: "L", label: "Light source" }
};

function cellKey(x, y) { return `${x},${y}`; }
function edgeKey(x, y, side) { return `${x},${y},${side}`; }

function createSpec(mapData) {
  const cells = new Map();
  for (let y = 1; y <= mapData.rows; y += 1) {
    for (let x = 1; x <= mapData.cols; x += 1) {
      cells.set(cellKey(x, y), { terrain: "Gloam clear", detail: "Level black-glass ground; unobstructed and traversable.", contents: [] });
    }
  }
  return { cells, edges: new Map() };
}

function setTerrain(spec, x, y, width, height, terrain, detail) {
  for (let row = y; row < y + height; row += 1) {
    for (let col = x; col < x + width; col += 1) {
      Object.assign(spec.cells.get(cellKey(col, row)), { terrain, detail });
    }
  }
}

function addContent(spec, x, y, type, name, detail) {
  spec.cells.get(cellKey(x, y)).contents.push({ type, name, detail });
}

function addToRect(spec, x, y, width, height, type, name, detail) {
  for (let row = y; row < y + height; row += 1) {
    for (let col = x; col < x + width; col += 1) addContent(spec, col, row, type, name, detail);
  }
}

function setBoundary(spec, mapData, x, y, side, type, detail) {
  spec.edges.set(edgeKey(x, y, side), { type, detail });
  const direction = directions[side];
  const neighborX = x + direction.dx;
  const neighborY = y + direction.dy;
  if (neighborX >= 1 && neighborX <= mapData.cols && neighborY >= 1 && neighborY <= mapData.rows) {
    spec.edges.set(edgeKey(neighborX, neighborY, direction.opposite), { type, detail });
  }
}

function getBoundary(spec, mapData, x, y, side) {
  const defined = spec.edges.get(edgeKey(x, y, side));
  if (defined) return defined;
  const direction = directions[side];
  const neighborX = x + direction.dx;
  const neighborY = y + direction.dy;
  if (neighborX < 1 || neighborX > mapData.cols || neighborY < 1 || neighborY > mapData.rows) {
    return { type: "map-edge", detail: "No physical barrier; the Gloam continues beyond the mapped area at the same elevation." };
  }
  return { type: "open", detail: "Open boundary at the same elevation; movement and sight are unobstructed." };
}

function buildFirstVisit(mapData) {
  const spec = createSpec(mapData);
  setTerrain(spec, 5, 2, 4, 5, "Wood/Circus clear", "Worn, level wagon floorboards with faded painted stars.");
  setTerrain(spec, 10, 3, 2, 3, "Dangerous terrain", "Superheated mirror glass; cracked, unstable, and hot enough to burn exposed flesh.");
  addToRect(spec, 10, 3, 2, 3, "danger", "Superheated glass", "Furnace-heated glass with visible heat distortion and scorched framing.");
  addContent(spec, 3, 2, "mirror", "Natural mirror geode", "A low silver-black geode growing from the Gloam floor.");
  addContent(spec, 3, 7, "mirror", "Natural mirror geode", "A low silver-black geode growing from the Gloam floor.");
  addContent(spec, 4, 4, "mirror", "Mirror lying on ground", "A cracked carnival mirror shard lying face-up.");
  addContent(spec, 6, 4, "creature", "Memory of Pavel", "Pavel hides a freshly cut palm.");
  addContent(spec, 7, 4, "light", "Red fear flame", "Small supernatural red flame; initially absent, then revealed during the memory.");
  addContent(spec, 8, 4, "creature", "Memory of the Lantern Wraith", "Visible principally through the mirror boundary east of this space.");
  addContent(spec, 5, 3, "light", "Dirty carnival candle", "One weak mundane candle in a tarnished wall cup.");
  for (let x = 5; x <= 8; x += 1) {
    setBoundary(spec, mapData, x, 2, "north", "wall", "Wooden circus wall: thin painted wagon boards with peeling stars.");
    setBoundary(spec, mapData, x, 6, "south", "wall", "Wooden circus wall: thin painted wagon boards with peeling stars.");
  }
  for (const y of [2, 3, 5, 6]) setBoundary(spec, mapData, 5, y, "west", "wall", "Wooden circus wall; no opening in this section.");
  setBoundary(spec, mapData, 5, 4, "west", "open", "Open circus doorway to the western Gloam approach.");
  setBoundary(spec, mapData, 8, 2, "east", "wall", "Wooden circus wall above the mirror bank.");
  for (const y of [3, 4, 5]) setBoundary(spec, mapData, 8, y, "east", "mirror", "Hung carnival mirror forming the eastern wall; tarnished but intact.");
  setBoundary(spec, mapData, 8, 6, "east", "wall", "Wooden circus wall below the mirror bank.");
  return spec;
}

function buildReturn(mapData) {
  const spec = createSpec(mapData);
  setTerrain(spec, 5, 2, 6, 5, "Wood/Circus clear", "Level, weathered wagon floorboards; the interior is impossibly deep.");
  for (const y of [2, 3, 5, 6]) {
    addContent(spec, 5, y, "barrier", "Wagon facade", "Weathered circus wagon structure; this section is not passable.");
    addContent(spec, 6, y, "barrier", "Wagon facade", "Weathered circus wagon structure; this section is not passable.");
  }
  addContent(spec, 4, 4, "creature", "Memory of Ilona", "Ilona confronts Pavel outside the wagon.");
  addContent(spec, 5, 4, "creature", "Memory of Pavel", "Pavel stands at the threshold before entering.");
  addContent(spec, 9, 4, "light", "Blue fear flame", "Small supernatural blue flame; revealed during the bargain.");
  addContent(spec, 10, 4, "creature", "Memory of the Lantern Wraith", "Waiting in the deep interior beside Ilona's reflected departure.");
  addContent(spec, 10, 3, "mirror", "Freestanding departure mirror", "Tall warped mirror showing Ilona walking away.");
  addContent(spec, 10, 4, "mirror", "Freestanding departure mirror", "Middle section of the tall departure mirror.");
  addContent(spec, 10, 5, "mirror", "Freestanding departure mirror", "Lower section of the tall departure mirror.");
  addContent(spec, 8, 3, "light", "Cold reflected lantern light", "Dim blue-white light with no visible mundane source.");
  for (let x = 5; x <= 10; x += 1) {
    setBoundary(spec, mapData, x, 2, "north", "wall", "Wooden circus wall or wagon roof edge.");
    setBoundary(spec, mapData, x, 6, "south", "wall", "Wooden circus wall or wagon floor edge.");
  }
  for (const y of [2, 3, 5, 6]) {
    setBoundary(spec, mapData, 5, y, "west", "wall", "Wooden circus facade; solid painted boards.");
    setBoundary(spec, mapData, 6, y, "east", "wall", "Wooden circus facade; solid painted boards.");
  }
  setBoundary(spec, mapData, 5, 4, "west", "open", "Open approach to the wagon doorway.");
  setBoundary(spec, mapData, 6, 4, "east", "open", "Open doorway into the impossible interior.");
  for (const y of [2, 3, 4, 5, 6]) setBoundary(spec, mapData, 10, y, "east", "mirror", "Hung mirror wall; cold and warped, with no visible space beyond.");
  return spec;
}

function buildCure(mapData) {
  const spec = createSpec(mapData);
  addContent(spec, 5, 3, "mirror", "Freestanding alignment mirror", "Upper section of a clear full-length mirror.");
  addContent(spec, 5, 4, "mirror", "Freestanding alignment mirror", "Center section; positioned to reflect Pavel and the Unreflected.");
  addContent(spec, 5, 5, "mirror", "Freestanding alignment mirror", "Lower section of the full-length mirror.");
  addContent(spec, 7, 2, "mirror", "Freestanding mirror plane", "A tall angled mirror defining the chamber without closing it.");
  addContent(spec, 9, 2, "mirror", "Freestanding mirror plane", "A tall angled mirror defining the chamber without closing it.");
  addContent(spec, 7, 6, "mirror", "Natural mirror geode", "A waist-high black geode with silver reflective facets.");
  addContent(spec, 9, 6, "mirror", "Freestanding mirror plane", "A tilted mirror marking the chamber's southern edge.");
  addContent(spec, 6, 4, "creature", "Memory of Pavel", "Pavel faces the open lantern.");
  addContent(spec, 6, 6, "creature", "The Unreflected", "A reflected silhouette that moves before Pavel; not a physical obstacle.");
  addContent(spec, 7, 4, "light", "White fear flame", "Pale ivory supernatural flame; initially absent, then drawn into the lantern.");
  addContent(spec, 8, 4, "light", "Open Wraith lantern", "Iron lantern containing distinct red and blue flames.");
  addContent(spec, 9, 4, "creature", "Memory of the Lantern Wraith", "Calmly faces Pavel across the lantern.");
  for (const x of [7, 9]) setBoundary(spec, mapData, x, 2, "north", "mirror", "Freestanding mirror boundary; blocks movement and sight through its plane.");
  for (const x of [7, 9]) setBoundary(spec, mapData, x, 6, "south", "mirror", "Freestanding mirror boundary; blocks movement and sight through its plane.");
  for (const y of [3, 4, 5]) setBoundary(spec, mapData, 5, y, "west", "mirror", "Full-length freestanding alignment mirror; solid reflective boundary.");
  setBoundary(spec, mapData, 9, 3, "east", "mirror", "Angled freestanding mirror plane.");
  setBoundary(spec, mapData, 9, 5, "east", "mirror", "Angled freestanding mirror plane.");
  return spec;
}

function buildFinale(mapData) {
  const spec = createSpec(mapData);
  for (const x of [2, 7, 12]) {
    for (const y of [1, 2, 9, 10]) addContent(spec, x, y, "mirror", "Freestanding anchor mirror", "Monumental 1 x 2 structural mirror in heavy black-iron framing.");
    setBoundary(spec, mapData, x, 2, "south", "elevation", "One-foot raised anchor plinth; shallow step down into the nave.");
    setBoundary(spec, mapData, x, 9, "north", "elevation", "One-foot raised anchor plinth; shallow step down into the nave.");
  }
  addContent(spec, 9, 5, "creature", "Lantern Wraith", "Large flying creature; can move through mirror spaces.");
  addContent(spec, 10, 4, "light", "Red fear flame", "Red supernatural flame mounted on the Wraith lantern.");
  addContent(spec, 10, 5, "light", "Wraith lantern and blue flame", "Iron objective lantern; blue flame occupies its center shutter.");
  addContent(spec, 10, 6, "light", "White fear flame", "Pale ivory supernatural flame mounted on the Wraith lantern.");
  addContent(spec, 13, 5, "creature", "Pavel", "Pavel stands before the terminal mirror.");
  addContent(spec, 14, 5, "creature", "The Unreflected", "Environmental silhouette visible behind Pavel in the terminal mirror.");
  for (const y of [4, 5, 6]) setBoundary(spec, mapData, 13, y, "east", "mirror", "Hung terminal mirror wall; the Unreflected appears behind its surface.");
  addContent(spec, 4, 3, "mirror", "Mirror lying on ground", "Broken reflective slab embedded flush with the nave floor.");
  addContent(spec, 5, 8, "mirror", "Natural mirror geode", "Low cluster of reflective black crystal; provides visual texture without blocking movement.");
  addContent(spec, 9, 2, "light", "Dim ivory reflection", "Weak reflected lantern light; atmospheric, not a separate object.");
  return spec;
}

const specBuilders = {
  "first-visit": buildFirstVisit,
  return: buildReturn,
  cure: buildCure,
  "unmade-screams": buildFinale
};

for (const mapData of maps) mapData.spec = specBuilders[mapData.id](mapData);

const mapElement = document.querySelector("#map");
const tabsElement = document.querySelector("#mapTabs");
const gridToggle = document.querySelector("#gridToggle");
const labelToggle = document.querySelector("#labelToggle");
const zoomRange = document.querySelector("#zoomRange");
let activeIndex = 0;
let selectedSpace = null;

function addListItems(targetId, values) {
  const target = document.querySelector(targetId);
  target.replaceChildren(...values.map(value => {
    const item = document.createElement("li");
    item.textContent = value;
    return item;
  }));
}

function inspectSpace(mapData, x, y) {
  selectedSpace = { x, y };
  const cell = mapData.spec.cells.get(cellKey(x, y));
  const contents = cell.contents.length
    ? cell.contents.map(item => `${item.name}: ${item.detail}`).join(" ")
    : "None.";
  const inspector = document.querySelector("#spaceInspector");
  inspector.innerHTML = `
    <strong>Space ${x},${y}</strong>
    <dl>
      <dt>Ground</dt><dd>${cell.terrain}: ${cell.detail}</dd>
      <dt>Contains</dt><dd>${contents}</dd>
      ${Object.keys(directions).map(side => {
        const boundary = getBoundary(mapData.spec, mapData, x, y, side);
        return `<dt>${side}</dt><dd>${boundary.type}: ${boundary.detail}</dd>`;
      }).join("")}
    </dl>`;
  document.querySelectorAll(".space").forEach(space => {
    space.classList.toggle("selected", Number(space.dataset.x) === x && Number(space.dataset.y) === y);
  });
}

function renderSpaces(mapData) {
  for (let y = 1; y <= mapData.rows; y += 1) {
    for (let x = 1; x <= mapData.cols; x += 1) {
      const cell = mapData.spec.cells.get(cellKey(x, y));
      const space = document.createElement("button");
      const terrainClass = cell.terrain === "Wood/Circus clear" ? "terrain-circus" : cell.terrain === "Dangerous terrain" ? "terrain-danger" : "terrain-gloam";
      space.type = "button";
      space.className = `space ${terrainClass}${cell.contents.length ? " has-content" : ""}`;
      space.style.setProperty("--x", x);
      space.style.setProperty("--y", y);
      space.dataset.x = x;
      space.dataset.y = y;
      space.setAttribute("aria-label", `Space ${x},${y}: ${cell.terrain}`);
      const coordinate = document.createElement("span");
      coordinate.className = "coord-label";
      coordinate.textContent = `${x},${y}`;
      space.append(coordinate);
      const marks = document.createElement("span");
      marks.className = "space-symbols";
      for (const item of cell.contents) {
        const symbol = document.createElement("i");
        symbol.className = "space-symbol";
        symbol.textContent = symbols[item.type].mark;
        symbol.title = `${symbols[item.type].label}: ${item.name}`;
        marks.append(symbol);
      }
      space.append(marks);
      for (const side of Object.keys(directions)) {
        const boundary = getBoundary(mapData.spec, mapData, x, y, side);
        if (["wall", "mirror", "elevation"].includes(boundary.type)) {
          const edge = document.createElement("i");
          edge.className = `edge ${side} ${boundary.type}`;
          space.append(edge);
        }
      }
      space.addEventListener("click", () => inspectSpace(mapData, x, y));
      mapElement.append(space);
    }
  }
}

function renderMap() {
  const current = maps[activeIndex];
  mapElement.style.setProperty("--cols", current.cols);
  mapElement.style.setProperty("--rows", current.rows);
  mapElement.classList.toggle("show-grid", gridToggle.checked);
  mapElement.classList.toggle("show-labels", labelToggle.checked);
  mapElement.replaceChildren();

  for (const feature of current.features) {
    const element = document.createElement("div");
    element.className = `feature ${feature.type}`;
    element.style.setProperty("--x", feature.x);
    element.style.setProperty("--y", feature.y);
    element.style.setProperty("--w", feature.w);
    element.style.setProperty("--h", feature.h);
    if (feature.angle !== undefined) element.style.setProperty("--angle", `${feature.angle}deg`);
    const label = document.createElement("span");
    label.textContent = feature.label;
    element.append(label);
    mapElement.append(element);
  }

  renderSpaces(current);

  const compass = document.createElement("div");
  compass.className = "compass";
  compass.textContent = "N";
  mapElement.append(compass);

  document.querySelector("#mapKind").textContent = current.kind;
  document.querySelector("#mapTitle").textContent = current.title;
  document.querySelector("#mapSize").textContent = `${current.cols} x ${current.rows} squares`;
  document.querySelector("#briefTitle").textContent = current.title;
  document.querySelector("#lightingText").textContent = current.lighting;
  addListItems("#structureList", current.structure);
  addListItems("#materialList", current.materials);
  addListItems("#clearList", current.clear);

  const palette = document.querySelector("#palette");
  palette.replaceChildren(...current.palette.map(color => {
    const swatch = document.createElement("i");
    swatch.style.background = color;
    swatch.title = color;
    return swatch;
  }));

  const referenceSection = document.querySelector("#referenceSection");
  const referenceGallery = document.querySelector("#referenceGallery");
  referenceSection.hidden = current.references.length === 0;
  referenceGallery.replaceChildren(...current.references.map(reference => {
    const link = document.createElement("a");
    link.className = "reference-card";
    link.href = reference.src;
    link.target = "_blank";
    link.innerHTML = `<img src="${reference.src}" alt="${reference.title}"><span>${reference.title}</span>`;
    return link;
  }));

  document.querySelectorAll(".map-tab").forEach((tab, index) => {
    tab.classList.toggle("active", index === activeIndex);
    tab.setAttribute("aria-selected", String(index === activeIndex));
  });
  inspectSpace(current, selectedSpace?.x <= current.cols && selectedSpace?.y <= current.rows ? selectedSpace.x : 1, selectedSpace?.x <= current.cols && selectedSpace?.y <= current.rows ? selectedSpace.y : 1);
}

maps.forEach((mapData, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "map-tab";
  button.textContent = `${index + 1}. ${mapData.title}`;
  button.addEventListener("click", () => {
    activeIndex = index;
    renderMap();
  });
  tabsElement.append(button);
});

gridToggle.addEventListener("change", renderMap);
labelToggle.addEventListener("change", renderMap);
zoomRange.addEventListener("input", () => mapElement.style.setProperty("--zoom", zoomRange.value / 100));
const legend = document.querySelector("#symbolLegend");
for (const symbolData of Object.values(symbols)) {
  const item = document.createElement("span");
  item.innerHTML = `<i class="space-symbol">${symbolData.mark}</i>${symbolData.label}`;
  legend.append(item);
}
for (const [mark, label, type] of [["", "Wooden circus wall", "wall"], ["", "Mirror boundary", "mirror"], ["", "Elevation change", "elevation"]]) {
  const item = document.createElement("span");
  item.innerHTML = `<i class="legend-edge edge ${type}">${mark}</i>${label}`;
  legend.append(item);
}
renderMap();
