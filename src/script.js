/* ============================================================
   Exp 3 — Specialty Shots · SNORRICAM
   Each card links to one YouTube clip and opens it on YouTube
   (new tab) when clicked. Edit `id` per card for its own clip.
   Caption types:
     - normal: model + (with camera movement term "term" in prompt)
     - preset: model + ( preset: <preset> )      ← e.g. Higgsfield
   `fail: true` shows a red FAIL marker after the caption.
   ============================================================ */

const YT_ID1 = "IvuliiX0rUc";
const YT_ID2 = "bZhBK71uuL4";
const YT_ID3 = "hDjKRA1RgAE";
const YT_ID4 = "ccKcw2k4UNc";
const YT_ID5 = "cEjkppG5aFw";
const YT_ID6 = "8BOV5KhfUyg";
const YT_ID7 = "NOFc17Ish_0";
// shared link for all boxes

const videos = [
  { title: "02 CSV FPV droneModel",          model: "Cinematic Studio Video_V1.5", term: "FPV Drone",  id: YT_ID1 },
  { title: "02 CSV FPV droneModel",   model: "Cinematic Studio Video_V1.5", preset: "FPV Drone Model",        id: YT_ID2 },
  { title: "Higgsfield DoP FPV DroneModelOnly",     model: "Higgsfield DoP_ ",  preset: "FPV Drone Model" ,  id: YT_ID3 },
  { title: "Kling2 6 FPV droneWord",          model: "Kling2.6_General Model",      term: " FPV Drone ",  id: YT_ID4 },

  { title: "Veo 3 1 FPV Drone",      model: "Veo 3.1 _General Model", term: "FPV Drone",  id: YT_ID5 },
  { title: "Seedance1 5 FPV Drone", model: "Seedance 1.5 _General Model", term: " FPV Drone ", id: YT_ID6 },
   { title: "Minimax Hailuo2 3 FPV Drone", model: "Minimax Hailuo 2.3 _General Model", term: " FPV Drone ", id: YT_ID7 },
];

const grid = document.getElementById("grid");

videos.forEach((v) => {
  const card = document.createElement("article");
  card.className = "vcard";

  const watchUrl = `https://www.youtube.com/watch?v=${v.id}`;
  const thumbUrl = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
  const failMark = v.fail ? ` <span class="failmark">FAIL</span>` : ``;

  // build the caption: preset style vs camera-movement-term style
  let caption;
  if (v.preset) {
    caption = `${v.model} ( preset: ${v.preset} )${failMark}`;
  } else {
    caption =
      `${v.model}<span class="redhint">(with camera movement term</span> ` +
      `"<span class="term">${v.term}</span>" in prompt )${failMark}`;
  }

  card.innerHTML = `
    <a class="vthumb" href="${watchUrl}" target="_blank" rel="noopener"
       style="background-image:url('${thumbUrl}');background-size:cover;background-position:center;"
       aria-label="Open on YouTube: ${v.title}">
      <div class="vbar">
        <span class="vavatar">k</span>
        <span class="vtitle">${v.title}</span>
      </div>
      <span class="vchannel">kayAI</span>
      <span class="vplay" aria-hidden="true"></span>
    </a>
    <p class="vcap">${caption}</p>
  `;

  grid.appendChild(card);
});
