const storyArtworks = {
  "chapter-5": "assets/media/un-livre-different.jpg",
  "chapter-6": "assets/media/en-route-aventure.jpg",
  "chapter-7": "assets/media/limites-systeme.jpg",
  "chapter-8": "assets/media/vigie-guide.jpg",
  "chapter-9": "assets/media/architecte-constructeur.jpg",
  "chapter-10": "assets/media/limites-systeme.jpg",
  "chapter-11": "assets/media/fresques-heuristiques.jpg",
  "chapter-12": "assets/media/limites-systeme.jpg",
  "chapter-13": "assets/media/pont-decisions.jpg",
  "chapter-14": "assets/media/limites-systeme.jpg",
  "chapter-15": "assets/media/fresques-heuristiques.jpg",
  "chapter-16": "assets/media/cooperation.jpg",
  "chapter-17": "assets/media/architecte-constructeur.jpg",
  "chapter-18": "assets/media/fils-apprentissage.jpg",
  "chapter-19": "assets/media/pont-decisions.jpg",
  "chapter-20": "assets/media/limites-systeme.jpg",
  "chapter-21": "assets/media/limites-systeme.jpg",
  "chapter-22": "assets/media/en-route-aventure.jpg",
  "chapter-23": "assets/media/panneau-attention.jpg",
  "chapter-24": "assets/media/quete-terminee.jpg",
  "chapter-27": "assets/media/kit-pedagogique.jpg"
};

const storyThemes = {
  "chapter-5": "Choisir un mode d'entrée dans l'aventure pédagogique",
  "chapter-6": "Passage du lecteur au créateur",
  "chapter-7": "Limite narrative : épaisseur des personnages",
  "chapter-8": "Aide, feedback et clarification",
  "chapter-9": "Validation des fondements théoriques",
  "chapter-10": "Limite narrative : maîtriser les embranchements",
  "chapter-11": "Accompagnement vers la création",
  "chapter-12": "Limite narrative : réutilisation et découverte",
  "chapter-13": "Pédagogie par essai-erreur",
  "chapter-14": "Limite narrative : puissance de l'engagement",
  "chapter-15": "Cartes heuristiques et planification",
  "chapter-16": "Coopération et décision collective",
  "chapter-17": "Encouragement et apprentissage accompagne",
  "chapter-18": "Conception guidée de son propre livre-jeu",
  "chapter-19": "Individualisation vs personnalisation",
  "chapter-20": "Limite narrative : liberte et direction",
  "chapter-21": "Explorer les contraintes du format",
  "chapter-22": "Transformation créatrice",
  "chapter-23": "Autonomie et défi conceptuel",
  "chapter-24": "Conclusion ouverte vers l'action pedagogique",
  "chapter-27": "Mémoire du genre et codes du LDVELH"
};

const storyTags = {
  "chapter-5": ["choix", "point de depart", "posture"],
  "chapter-6": ["creation", "transfert", "posture auteur"],
  "chapter-7": ["limites", "narration", "personnages"],
  "chapter-8": ["feedback", "soutien", "guidage"],
  "chapter-9": ["theories", "validation", "cooperation"],
  "chapter-10": ["embranchements", "coherence", "charge cognitive"],
  "chapter-11": ["accompagnement", "ingenierie", "inspiration"],
  "chapter-12": ["rejouabilite", "decouvrabilite", "conception"],
  "chapter-13": ["essai-erreur", "resilience", "apprentissage"],
  "chapter-14": ["engagement", "impact des choix", "immersion"],
  "chapter-15": ["carte mentale", "scenario", "structure"],
  "chapter-16": ["cooperation", "classe heterogene", "decision"],
  "chapter-17": ["accompagnement", "reassurance", "collectif"],
  "chapter-18": ["conception", "meta-reflexion", "guides"],
  "chapter-19": ["individualisation", "personnalisation", "decision"],
  "chapter-20": ["liberte", "cadre", "narration"],
  "chapter-21": ["limites", "diagnostic", "amelioration"],
  "chapter-22": ["inspiration", "design", "creativite"],
  "chapter-23": ["autonomie", "theories", "defi"],
  "chapter-24": ["conclusion", "transfert", "projection"],
  "chapter-27": ["codes du genre", "patrimoine", "rejouabilite"]
};

const chapterMap = new Map(window.gameData.chapters.map((chapter) => [chapter.id, chapter]));
const storageKey = "hdvelh-story-state";
const allChapters = window.gameData.chapters;

const elements = {
  badge: document.getElementById("storyBadge"),
  title: document.getElementById("storyTitle"),
  theme: document.getElementById("storyTheme"),
  artwork: document.getElementById("storyArtwork"),
  tags: document.getElementById("storyTags"),
  body: document.getElementById("storyBody"),
  choices: document.getElementById("storyChoices"),
  map: document.getElementById("chapterMap"),
  metrics: document.getElementById("storyMetrics"),
  progress: document.getElementById("storyProgressBar"),
  path: document.getElementById("storyPath"),
  restart: document.getElementById("restartStory"),
  back: document.getElementById("backStory"),
  year: document.getElementById("currentYear")
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createInitialState() {
  return {
    currentId: window.gameData.startId,
    path: [window.gameData.startId],
    visited: [window.gameData.startId]
  };
}

function normaliseState(candidate) {
  const fallback = createInitialState();
  if (!candidate || typeof candidate !== "object") {
    return fallback;
  }

  const currentId = chapterMap.has(candidate.currentId) ? candidate.currentId : fallback.currentId;
  const path = Array.isArray(candidate.path) ? candidate.path.filter((id) => chapterMap.has(id)) : [];
  const visited = Array.isArray(candidate.visited) ? candidate.visited.filter((id) => chapterMap.has(id)) : [];

  const safePath = path.length ? path : [currentId];
  const safeVisited = visited.length ? [...new Set(visited)] : [currentId];

  if (!safeVisited.includes(currentId)) {
    safeVisited.push(currentId);
  }

  if (safePath[safePath.length - 1] !== currentId) {
    safePath.push(currentId);
  }

  return {
    currentId,
    path: safePath,
    visited: safeVisited
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    return normaliseState(raw ? JSON.parse(raw) : null);
  } catch (error) {
    return createInitialState();
  }
}

function persistState(state) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    return;
  }
}

let state = loadState();

function goToChapter(targetId) {
  if (!chapterMap.has(targetId)) {
    return;
  }

  state.currentId = targetId;
  state.path = [...state.path, targetId];
  state.visited = [...new Set([...state.visited, targetId])];
  persistState(state);
  renderStory();
}

function goBack() {
  if (state.path.length <= 1) {
    return;
  }

  const nextPath = [...state.path];
  nextPath.pop();
  state.path = nextPath;
  state.currentId = nextPath[nextPath.length - 1];
  persistState(state);
  renderStory();
}

function restartStory() {
  state = createInitialState();
  persistState(state);
  renderStory();
}

function renderMetrics() {
  const explored = state.visited.length;
  const total = allChapters.length;
  const progress = Math.round((explored / total) * 100);

  elements.progress.style.width = `${progress}%`;
  elements.metrics.innerHTML = `
    <span class="metric-chip">${explored}/${total} chapitres visités</span>
    <span class="metric-chip">${progress}% du parcours web exploré</span>
    <span class="metric-chip">${state.path.length - 1} décisions prises</span>
  `;

  elements.path.innerHTML = state.path
    .map((id) => {
      const chapter = chapterMap.get(id);
      return `<span class="path-pill">#${chapter.number} ${escapeHtml(chapter.title)}</span>`;
    })
    .join("");
}

function renderMap() {
  elements.map.innerHTML = allChapters
    .map((chapter) => {
      const classes = [
        state.currentId === chapter.id ? "is-current" : "",
        state.visited.includes(chapter.id) ? "is-visited" : ""
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <button type="button" class="${classes}" data-target="${chapter.id}">
          <span class="chapter-number">Chapitre ${chapter.number}</span>
          <span>${escapeHtml(chapter.title)}</span>
        </button>
      `;
    })
    .join("");
}

function renderChoices(chapter) {
  if (!chapter.choices.length) {
    const bonusButton =
      chapter.id === "chapter-24"
        ? `<button type="button" class="btn btn-outline-shell story-choice" data-target="chapter-27">Explorer le chapitre perdu</button>`
        : "";

    elements.choices.innerHTML = `
      <div class="surface-card">
        <div class="card-body">
          <p class="card-kicker">Parcours terminé</p>
          <h4 class="mini-title mb-3">Cette section n'ouvre pas de nouveau choix narratif.</h4>
          <div class="d-grid gap-2">
            ${bonusButton}
            <button type="button" class="btn btn-accent story-choice" data-action="restart">Recommencer depuis le début</button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  elements.choices.innerHTML = chapter.choices
    .map(
      (choice) => `
        <button type="button" class="btn btn-outline-shell story-choice" data-target="${choice.target}">
          ${escapeHtml(choice.label)}
        </button>
      `
    )
    .join("");
}

function renderStory() {
  const chapter = chapterMap.get(state.currentId);
  if (!chapter) {
    return;
  }

  elements.badge.textContent = `Chapitre ${chapter.number}`;
  elements.title.textContent = chapter.title;
  elements.theme.textContent = storyThemes[chapter.id] || "Lecture interactive du livre-jeu";

  const artwork = storyArtworks[chapter.id] || "assets/media/cover-odyssee.png";
  elements.artwork.src = artwork;
  elements.artwork.alt = `Illustration pour ${chapter.title}`;

  elements.tags.innerHTML = (storyTags[chapter.id] || [])
    .map((tag) => `<span class="story-tag">${escapeHtml(tag)}</span>`)
    .join("");

  elements.body.innerHTML = chapter.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");

  renderChoices(chapter);
  renderMap();
  renderMetrics();

  elements.back.disabled = state.path.length <= 1;
}

elements.map.addEventListener("click", (event) => {
  const button = event.target.closest("[data-target]");
  if (!button) {
    return;
  }
  goToChapter(button.dataset.target);
});

elements.choices.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action='restart']");
  if (actionButton) {
    restartStory();
    return;
  }

  const targetButton = event.target.closest("[data-target]");
  if (!targetButton) {
    return;
  }

  goToChapter(targetButton.dataset.target);
});

elements.restart.addEventListener("click", restartStory);
elements.back.addEventListener("click", goBack);

if (elements.year) {
  elements.year.textContent = new Date().getFullYear();
}

renderStory();
