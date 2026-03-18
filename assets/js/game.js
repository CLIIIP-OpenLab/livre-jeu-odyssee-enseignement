const storyArtworks = {
  "chapter-1": [
    {
      src: "assets/media/chapters/chapter-1-1.jpg",
      alt: "Illustration du chapitre Objectifs pédagogiques"
    }
  ],
  "chapter-2": [
    {
      src: "assets/media/chapters/chapter-2-1.png",
      alt: "Illustration du chapitre Attention !"
    }
  ],
  "chapter-3": [
    {
      src: "assets/media/chapters/chapter-3-1.jpg",
      alt: "Illustration du chapitre Un livre différent"
    }
  ],
  "chapter-4": [
    {
      src: "assets/media/chapters/chapter-4-1.jpg",
      alt: "La Vigie, la guide clairvoyante",
      caption: "La Vigie, la guide clairvoyante"
    },
    {
      src: "assets/media/chapters/chapter-4-2.jpg",
      alt: "L'Architecte, le constructeur",
      caption: "L'Architecte, le constructeur"
    }
  ],
  "chapter-5": [
    {
      src: "assets/media/chapters/chapter-5-1.png",
      alt: "Illustration du chapitre Télétransportation"
    }
  ],
  "chapter-6": [
    {
      src: "assets/media/chapters/chapter-6-1.jpg",
      alt: "Illustration du chapitre En route pour l’aventure !"
    }
  ],
  "chapter-7": [
    {
      src: "assets/media/chapters/chapter-7-1.jpg",
      alt: "Illustration du chapitre Développement des personnages"
    }
  ],
  "chapter-8": [
    {
      src: "assets/media/chapters/chapter-8-1.jpg",
      alt: "Illustration du chapitre De l’écho de la vigie"
    }
  ],
  "chapter-9": [
    {
      src: "assets/media/chapters/chapter-9-1.jpg",
      alt: "Illustration du chapitre L'Architecte s’incline"
    }
  ],
  "chapter-10": [
    {
      src: "assets/media/chapters/chapter-10-1.jpg",
      alt: "Illustration du chapitre Complexité des embranchements"
    }
  ],
  "chapter-11": [
    {
      src: "assets/media/chapters/chapter-11-1.jpg",
      alt: "Illustration du chapitre Unis dans l’exploration"
    }
  ],
  "chapter-12": [
    {
      src: "assets/media/chapters/chapter-12-1.jpg",
      alt: "Illustration du chapitre Réutilisabilité et découvrabilité"
    }
  ],
  "chapter-13": [
    {
      src: "assets/media/chapters/chapter-13-1.jpg",
      alt: "Le premier passage par le sentier de la prudence",
      caption: "Le sentier de la prudence"
    },
    {
      src: "assets/media/chapters/chapter-13-2.jpg",
      alt: "Le retour lumineux vers le pont des décisions",
      caption: "Le retour vers le pont"
    }
  ],
  "chapter-14": [
    {
      src: "assets/media/chapters/chapter-14-1.jpg",
      alt: "Illustration du chapitre Profondeur de l’engagement"
    }
  ],
  "chapter-15": [
    {
      src: "assets/media/chapters/chapter-15-1.jpg",
      alt: "Illustration du chapitre Des fresques heuristiques"
    }
  ],
  "chapter-16": [
    {
      src: "assets/media/chapters/chapter-16-1.jpg",
      alt: "Illustration du chapitre Coopération"
    }
  ],
  "chapter-17": [
    {
      src: "assets/media/chapters/chapter-17-1.jpg",
      alt: "Illustration du chapitre L'Architecte clément"
    }
  ],
  "chapter-18": [
    {
      src: "assets/media/chapters/chapter-18-1.jpg",
      alt: "Illustration du chapitre Démêler les fils de l’apprentissage"
    }
  ],
  "chapter-19": [
    {
      src: "assets/media/chapters/chapter-19-1.jpg",
      alt: "Illustration du chapitre Du pont des décisions"
    }
  ],
  "chapter-20": [
    {
      src: "assets/media/chapters/chapter-20-1.jpg",
      alt: "Illustration du chapitre Équilibre entre liberté et direction"
    }
  ],
  "chapter-21": [
    {
      src: "assets/media/chapters/chapter-21-1.jpg",
      alt: "Illustration du chapitre Des limites du système"
    }
  ],
  "chapter-22": [
    {
      src: "assets/media/chapters/chapter-22-1.jpg",
      alt: "Illustration du chapitre De l’inspiration à la création"
    }
  ],
  "chapter-23": [
    {
      src: "assets/media/chapters/chapter-23-1.jpg",
      alt: "Illustration du chapitre Seul face à l’infini de la connaissance"
    }
  ],
  "chapter-24": [
    {
      src: "assets/media/chapters/chapter-24-1.jpg",
      alt: "Illustration du chapitre Ta quête est terminée"
    }
  ],
  "chapter-27": [
    {
      src: "assets/media/chapters/chapter-27-1.jpg",
      alt: "Première illustration du chapitre perdu",
      caption: "L'appel du livre"
    },
    {
      src: "assets/media/chapters/chapter-27-2.jpg",
      alt: "Seconde illustration du chapitre perdu",
      caption: "Les codes du genre"
    }
  ]
};

Object.values(storyArtworks).forEach((artworks) => {
  artworks.forEach((artwork) => {
    artwork.src = artwork.src.replace("assets/media/chapters/", "assets/media/chapters-web/");
  });
});

const storyThemes = {
  "chapter-1": "Comprendre la promesse pédagogique du livre",
  "chapter-2": "Entrer dans le pacte de lecture",
  "chapter-3": "Découvrir la promesse du livre-jeu",
  "chapter-4": "Faire connaissance avec les gardiens",
  "chapter-5": "Choisir comment entrer dans l'aventure",
  "chapter-6": "Passage du lecteur au créateur",
  "chapter-7": "Limite narrative : l'épaisseur des personnages",
  "chapter-8": "Demander de l'aide et recevoir du feedback",
  "chapter-9": "Valider ses repères théoriques",
  "chapter-10": "Limite narrative : maîtriser les embranchements",
  "chapter-11": "Être accompagné vers la création",
  "chapter-12": "Limite narrative : rejouabilité et découverte",
  "chapter-13": "Apprendre par essai-erreur",
  "chapter-14": "Limite narrative : profondeur de l'engagement",
  "chapter-15": "Cartographier l'aventure à venir",
  "chapter-16": "Choisir la coopération",
  "chapter-17": "Être guidé sans être dépossédé",
  "chapter-18": "Préparer sa propre conception",
  "chapter-19": "Prendre une décision structurante",
  "chapter-20": "Limiter sans enfermer",
  "chapter-21": "Identifier les limites du système",
  "chapter-22": "Transformer l'inspiration en création",
  "chapter-23": "Faire face seul au savoir",
  "chapter-24": "Clore la quête et relancer le geste d'écriture",
  "chapter-27": "Explorer les codes cachés du genre"
};

const storyTags = {
  "chapter-1": ["objectifs", "entrée", "cadre pédagogique"],
  "chapter-2": ["avertissement", "ton", "mise en condition"],
  "chapter-3": ["promesse", "livre-jeu", "artefacts"],
  "chapter-4": ["vigie", "architecte", "guides"],
  "chapter-5": ["départ", "choix", "posture"],
  "chapter-6": ["création", "transfert", "auteur"],
  "chapter-7": ["limites", "narration", "personnages"],
  "chapter-8": ["feedback", "aide", "vigie"],
  "chapter-9": ["théories", "validation", "partage"],
  "chapter-10": ["embranchements", "cohérence", "structure"],
  "chapter-11": ["accompagnement", "design", "ingénierie"],
  "chapter-12": ["rejouabilité", "découverte", "scénario"],
  "chapter-13": ["essai-erreur", "remédiation", "prudence"],
  "chapter-14": ["engagement", "immersion", "impact"],
  "chapter-15": ["fresques", "carte mentale", "création"],
  "chapter-16": ["coopération", "hétérogénéité", "classe"],
  "chapter-17": ["accompagnement", "collectif", "encouragement"],
  "chapter-18": ["conception", "préparation", "méta-réflexion"],
  "chapter-19": ["décision", "individualisation", "personnalisation"],
  "chapter-20": ["liberté", "cadre", "équilibre"],
  "chapter-21": ["limites", "diagnostic", "amélioration"],
  "chapter-22": ["inspiration", "design", "projection"],
  "chapter-23": ["autonomie", "défi", "bibliothèque"],
  "chapter-24": ["conclusion", "transfert", "projection"],
  "chapter-27": ["codes du genre", "chapitre perdu", "rejouabilité"]
};

const artifactCatalog = {
  manifeste_objectifs: {
    name: "Manifeste des objectifs",
    description: "Pose le cadre pédagogique et les acquis visés par l'odyssée."
  },
  cle_livre_different: {
    name: "Clé du livre différent",
    description: "Scelle le pacte de lecture entre récit, choix et apprentissage."
  },
  sceau_gardiens: {
    name: "Sceau des gardiens",
    description: "Présente la Vigie et l'Architecte avant l'entrée dans l'aventure."
  },
  lanterne_vigie: {
    name: "Lanterne de la Vigie",
    description: "Éclaire les moments de doute et rappelle la valeur du feedback."
  },
  atlas_autonomie: {
    name: "Atlas de l'autonomie",
    description: "Consigne ce que signifie apprendre seul sans se perdre."
  },
  insigne_cooperation: {
    name: "Insigne de coopération",
    description: "Matérialise la force du collectif face à l'hétérogénéité."
  },
  cle_pont: {
    name: "Clé du pont des décisions",
    description: "Débloque la distinction entre individualisation et personnalisation."
  },
  boussole_remediation: {
    name: "Boussole de remédiation",
    description: "Garde la trace du passage par l'essai, l'erreur et le retour réflexif."
  },
  fresque_heuristique: {
    name: "Fresque heuristique",
    description: "Aide à voir l'architecture d'une histoire à embranchements."
  },
  codex_limites: {
    name: "Codex des limites",
    description: "Réunit les fragilités du format pour mieux les dépasser."
  },
  plume_architecte: {
    name: "Plume de l'Architecte",
    description: "Symbole du passage de lecteur à concepteur."
  },
  eclat_odyssee: {
    name: "Éclat d'odyssée",
    description: "Dernier fragment de la quête, tourné vers la création future."
  },
  grimoire_perdu: {
    name: "Grimoire du chapitre perdu",
    description: "Rappelle les codes fondateurs du livre dont vous êtes le héros."
  }
};

const artifactUnlocks = {
  "chapter-1": ["manifeste_objectifs"],
  "chapter-3": ["cle_livre_different"],
  "chapter-4": ["sceau_gardiens"],
  "chapter-8": ["lanterne_vigie"],
  "chapter-16": ["insigne_cooperation"],
  "chapter-19": ["cle_pont"],
  "chapter-13": ["boussole_remediation"],
  "chapter-15": ["fresque_heuristique"],
  "chapter-21": ["codex_limites"],
  "chapter-23": ["atlas_autonomie"],
  "chapter-6": ["plume_architecte"],
  "chapter-24": ["eclat_odyssee"],
  "chapter-27": ["grimoire_perdu"]
};

const chapterMap = new Map(window.gameData.chapters.map((chapter) => [chapter.id, chapter]));
const allChapters = window.gameData.chapters;
const storageKey = "odysse-web-game-state";
const storageVersion = "intro-sequence-v1";
const introChapterIds = ["chapter-1", "chapter-2", "chapter-3", "chapter-4"];
const interfaceVersion = window.odysseeWebVersion || new Date().toISOString().slice(0, 10);

const elements = {
  badge: document.getElementById("storyBadge"),
  title: document.getElementById("storyTitle"),
  theme: document.getElementById("storyTheme"),
  artworkGallery: document.getElementById("storyArtworkGallery"),
  tags: document.getElementById("storyTags"),
  body: document.getElementById("storyBody"),
  choices: document.getElementById("storyChoices"),
  metrics: document.getElementById("storyMetrics"),
  progress: document.getElementById("storyProgressBar"),
  path: document.getElementById("storyPath"),
  restart: document.getElementById("restartStory"),
  back: document.getElementById("backStory"),
  decisions: document.getElementById("decisionLog"),
  artifacts: document.getElementById("artifactGrid"),
  version: document.getElementById("currentVersion")
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getUnlockedArtifactsForChapter(chapterId) {
  return artifactUnlocks[chapterId] || [];
}

function inferTransitionKind(fromId, targetId) {
  if (!chapterMap.has(fromId) || !chapterMap.has(targetId)) {
    return "choice";
  }

  if (fromId === "chapter-24" && targetId === "chapter-27") {
    return "choice";
  }

  const fromChapter = chapterMap.get(fromId);
  if (
    fromChapter.choices.length === 1 &&
    fromChapter.choices[0] &&
    fromChapter.choices[0].target === targetId
  ) {
    return "continue";
  }

  return "choice";
}

function hasIntroSequence(candidate) {
  if (!candidate || !Array.isArray(candidate.visited)) {
    return false;
  }

  return introChapterIds.every((chapterId) => candidate.visited.includes(chapterId));
}

function createInitialState() {
  return {
    version: storageVersion,
    currentId: window.gameData.startId,
    path: [window.gameData.startId],
    visited: [window.gameData.startId],
    decisions: [],
    artifacts: [...getUnlockedArtifactsForChapter(window.gameData.startId)]
  };
}

function normaliseState(candidate) {
  const fallback = createInitialState();
  if (!candidate || typeof candidate !== "object") {
    return fallback;
  }

  if (candidate.version !== storageVersion && !hasIntroSequence(candidate)) {
    return fallback;
  }

  const currentId = chapterMap.has(candidate.currentId) ? candidate.currentId : fallback.currentId;
  const path = Array.isArray(candidate.path) ? candidate.path.filter((id) => chapterMap.has(id)) : [];
  const visited = Array.isArray(candidate.visited) ? candidate.visited.filter((id) => chapterMap.has(id)) : [];
  const decisions = Array.isArray(candidate.decisions)
    ? candidate.decisions.filter((decision) => chapterMap.has(decision.from) && chapterMap.has(decision.target))
    : [];
  const artifacts = Array.isArray(candidate.artifacts)
    ? [...new Set(candidate.artifacts.filter((id) => artifactCatalog[id]))]
    : [];

  const safePath = path.length ? path : [currentId];
  const safeVisited = visited.length ? [...new Set(visited)] : [currentId];

  if (!safeVisited.includes(currentId)) {
    safeVisited.push(currentId);
  }

  if (safePath[safePath.length - 1] !== currentId) {
    safePath.push(currentId);
  }

  const mergedArtifacts = [...new Set([...artifacts, ...getUnlockedArtifactsForChapter(currentId)])];

  return {
    version: storageVersion,
    currentId,
    path: safePath,
    visited: safeVisited,
    decisions,
    artifacts: mergedArtifacts
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

function goToChapter(targetId, label, transitionKind = "choice") {
  if (!chapterMap.has(targetId)) {
    return;
  }

  const currentChapter = chapterMap.get(state.currentId);
  const targetChapter = chapterMap.get(targetId);
  const nextDecisions =
    transitionKind === "choice"
      ? [
          ...state.decisions,
          {
            from: currentChapter.id,
            fromTitle: currentChapter.title,
            target: targetChapter.id,
            targetTitle: targetChapter.title,
            label
          }
        ]
      : state.decisions;

  state.currentId = targetId;
  state.path = [...state.path, targetId];
  state.visited = [...new Set([...state.visited, targetId])];
  state.decisions = nextDecisions;
  state.artifacts = [...new Set([...state.artifacts, ...getUnlockedArtifactsForChapter(targetId)])];

  persistState(state);
  renderStory();
}

function goBack() {
  if (state.path.length <= 1) {
    return;
  }

  const nextPath = [...state.path];
  const removedId = nextPath.pop();
  const previousId = nextPath[nextPath.length - 1];
  const nextDecisions = [...state.decisions];

  if (removedId && previousId && inferTransitionKind(previousId, removedId) === "choice") {
    nextDecisions.pop();
  }

  state.path = nextPath;
  state.decisions = nextDecisions;
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
    <span class="metric-chip">${state.decisions.length} décisions prises</span>
    <span class="metric-chip">${state.artifacts.length} artefacts débloqués</span>
  `;

  elements.path.innerHTML = state.path
    .map((id) => {
      const chapter = chapterMap.get(id);
      return `<span class="path-pill">#${chapter.number} ${escapeHtml(chapter.title)}</span>`;
    })
    .join("");
}

function renderDecisionLog() {
  if (!state.decisions.length) {
    elements.decisions.innerHTML = `<p class="empty-note mb-0">Aucune décision n'a encore été prise. Continuez à tourner les pages jusqu'au prochain embranchement.</p>`;
    return;
  }

  elements.decisions.innerHTML = state.decisions
    .slice()
    .reverse()
    .map(
      (decision) => `
        <article class="decision-item">
          <p class="decision-label">${escapeHtml(decision.label)}</p>
          <p class="decision-meta mb-0">
            ${escapeHtml(decision.fromTitle)} → ${escapeHtml(decision.targetTitle)}
          </p>
        </article>
      `
    )
    .join("");
}

function renderArtifacts() {
  if (!state.artifacts.length) {
    elements.artifacts.innerHTML = `<p class="empty-note mb-0">Aucun artefact n'a encore été ramassé.</p>`;
    return;
  }

  elements.artifacts.innerHTML = state.artifacts
    .map((artifactId) => artifactCatalog[artifactId])
    .map(
      (artifact) => `
        <article class="artifact-card">
          <h4 class="artifact-title">${escapeHtml(artifact.name)}</h4>
          <p class="artifact-copy mb-0">${escapeHtml(artifact.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderArtworks(chapter) {
  const artworks = storyArtworks[chapter.id] || [
    {
      src: "assets/media/cover-odyssee-hero.jpg",
      alt: `Illustration pour ${chapter.title}`
    }
  ];

  elements.artworkGallery.classList.toggle("is-multi", artworks.length > 1);
  elements.artworkGallery.innerHTML = artworks
    .map((artwork) => {
      const caption = artwork.caption
        ? `<figcaption>${escapeHtml(artwork.caption)}</figcaption>`
        : "";

      return `
        <figure class="story-media-card mb-0">
          <img
            class="story-cover"
            src="${escapeHtml(artwork.src)}"
            alt="${escapeHtml(artwork.alt || `Illustration pour ${chapter.title}`)}"
            decoding="async"
          />
          ${caption}
        </figure>
      `;
    })
    .join("");
}

function renderChoices(chapter) {
  if (chapter.choices.length === 1) {
    const [choice] = chapter.choices;

    elements.choices.innerHTML = `
      <div class="surface-card">
        <div class="card-body">
          <p class="card-kicker">Tourner la page</p>
          <h4 class="mini-title mb-3">Aucun choix ici : poursuivez simplement la lecture.</h4>
          <div class="d-grid gap-2">
            <button
              type="button"
              class="btn btn-accent story-choice"
              data-target="${choice.target}"
              data-label="Continuer"
              data-transition-kind="continue"
            >
              Continuer
            </button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (!chapter.choices.length) {
    const bonusButton =
      chapter.id === "chapter-24"
        ? `<button type="button" class="btn btn-outline-shell story-choice" data-target="chapter-27" data-label="Explorer le chapitre perdu">Explorer le chapitre perdu</button>`
        : "";

    elements.choices.innerHTML = `
      <div class="surface-card">
        <div class="card-body">
          <p class="card-kicker">Étape accomplie</p>
          <h4 class="mini-title mb-3">Cette scène clôt provisoirement la route.</h4>
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
        <button
          type="button"
          class="btn btn-outline-shell story-choice"
          data-target="${choice.target}"
          data-label="${escapeHtml(choice.label)}"
        >
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
  elements.theme.textContent = storyThemes[chapter.id] || "Lecture immersive du livre-jeu";
  renderArtworks(chapter);

  elements.tags.innerHTML = (storyTags[chapter.id] || [])
    .map((tag) => `<span class="story-tag">${escapeHtml(tag)}</span>`)
    .join("");

  elements.body.innerHTML = chapter.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");

  renderChoices(chapter);
  renderMetrics();
  renderDecisionLog();
  renderArtifacts();

  elements.back.disabled = state.path.length <= 1;
}

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

  goToChapter(
    targetButton.dataset.target,
    targetButton.dataset.label || targetButton.textContent.trim(),
    targetButton.dataset.transitionKind || "choice"
  );
});

elements.restart.addEventListener("click", restartStory);
elements.back.addEventListener("click", goBack);

if (elements.version) {
  elements.version.textContent = interfaceVersion;
}

renderStory();
