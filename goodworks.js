const STORAGE_KEY = "goodworks-state-v1";

const options = {
  causes: [
    "Environment 🌱",
    "Education 📚",
    "Community Service 🤝",
    "Health 🏥",
    "Animals 🐾",
    "Arts and Cultural 🎨"
  ],
  availability: ["Weekdays", "Weekends", "Evenings"],
  eventTypes: [
    "Hands-on volunteering",
    "Social/community",
    "Fundraising",
    "Awareness campaigns"
  ],
  userPostTypes: [
    "Ask a Question",
    "Ask for Help",
    "Create a Community Event"
  ],
  questionCategories: [
    "Homework Help 📚",
    "Career Advice 💼",
    "Event Suggestions 📅",
    "Local Recommendations 📍",
    "General Discussion 💬"
  ],
  helpCategories: [
    "Homework Help 📚",
    "House Work 🏠",
    "Moving Help 📦",
    "Tech Help 💻",
    "Event Setup 🎪",
    "Tutoring 🎓",
    "Errands 🛒",
    "Pet Care 🐾",
    "Elderly Assistance ❤️",
    "Other"
  ],
  communityEventTypes: [
    "Garage Sale 🏷️",
    "Bake Sale 🧁",
    "Park Cleanup 🌱",
    "Study Group 📚",
    "Small Get-Together 🤝",
    "Sports Game ⚽",
    "Fundraiser 💰",
    "Club Meeting 🧑‍🤝‍🧑",
    "Workshop (informal) 🛠️"
  ],
  orgPostTypes: [
    "Event",
    "Sponsorship Request",
    "Promotion / Brand Feature",
    "Discount / Offer",
    "Recruitment / Hiring",
    "Poll / Feedback"
  ],
  orgEventTypes: [
    "Celebration 🎉",
    "Workshop 🛠️",
    "Get-together 🤝",
    "Volunteering 🌱",
    "Fundraiser 💰",
    "Awareness Campaign 📢"
  ]
};

const defaultState = {
  user: {
    name: "Ava Carter",
    bio: "Student volunteer who loves practical community projects and neighborhood events.",
    school: "Hudson Community College",
    workplace: "Part-time library aide",
    age: 22,
    causes: ["Environment 🌱", "Community Service 🤝"],
    availability: ["Weekends", "Evenings"],
    eventTypes: ["Hands-on volunteering", "Social/community"],
    eventsAttendedThisMonth: 5,
    eventsJoined: ["e1", "e4"],
    savedEvents: ["e2", "e5"]
  },
  organizations: [
    {
      id: "o1",
      name: "Harbor Hands",
      description: "Local nonprofit coordinating shoreline cleanups and youth service days.",
      mission: "Make environmental action feel joyful, local, and repeatable.",
      tags: ["Environment 🌱", "Community Service 🤝"],
      gallery: ["Cleanup day", "Volunteer huddle", "Tools station"]
    }
  ],
  events: [
    {
      id: "e1",
      title: "Beach Cleanup Saturday",
      organization: "Harbor Hands",
      description: "Join neighbors for a shoreline cleanup, sorting recyclables and restoring walking paths.",
      location: "Pier 7, Brooklyn",
      distance: 3,
      dateLabel: "Sat, Mar 30 • 10:00 AM",
      within48h: true,
      isWeekend: true,
      capacity: 30,
      attendees: 22,
      tags: ["Environment 🌱", "Community Service 🤝"],
      eventType: "Hands-on volunteering",
      rsvpType: "Open RSVP",
      matchNote: "Perfect cause overlap and weekend fit.",
      createdBy: "organization"
    },
    {
      id: "e2",
      title: "Community Garden Lesson",
      organization: "Bloom Together",
      description: "A beginner-friendly session on spring planting, composting, and neighborhood food access.",
      location: "Queens Green Lot",
      distance: 8,
      dateLabel: "Sun, Mar 31 • 2:00 PM",
      within48h: true,
      isWeekend: true,
      capacity: 18,
      attendees: 16,
      tags: ["Environment 🌱", "Education 📚"],
      eventType: "Awareness campaigns",
      rsvpType: "Limited RSVP",
      matchNote: "Strong environmental alignment and only 2 spots left.",
      createdBy: "organization"
    },
    {
      id: "e3",
      title: "Hospital Welcome Cart Prep",
      organization: "City Care Collective",
      description: "Pack care kits for new pediatric patients with a team of volunteers and staff.",
      location: "Lower East Side",
      distance: 5,
      dateLabel: "Tue, Apr 2 • 6:30 PM",
      within48h: false,
      isWeekend: false,
      capacity: 12,
      attendees: 7,
      tags: ["Health 🏥", "Community Service 🤝"],
      eventType: "Hands-on volunteering",
      rsvpType: "Approval Required",
      matchNote: "Great service fit, but approval is required because of the hospital setting.",
      createdBy: "organization"
    },
    {
      id: "e4",
      title: "Neighborhood Potluck & Resource Swap",
      organization: "South Block Neighbors",
      description: "A social evening with shared food, local resource tables, and volunteer sign-ups for spring.",
      location: "Prospect Hall",
      distance: 2,
      dateLabel: "Fri, Apr 5 • 7:00 PM",
      within48h: false,
      isWeekend: false,
      capacity: 60,
      attendees: 34,
      tags: ["Community Service 🤝", "Arts and Cultural 🎨"],
      eventType: "Social/community",
      rsvpType: "Open RSVP",
      matchNote: "Evening-friendly and social, with strong community vibes.",
      createdBy: "organization"
    },
    {
      id: "e5",
      title: "After-School Reading Circle",
      organization: "Bright Pages",
      description: "Read with elementary students and support literacy confidence in small groups.",
      location: "Crown Heights Learning Center",
      distance: 11,
      dateLabel: "Wed, Apr 10 • 4:30 PM",
      within48h: false,
      isWeekend: false,
      capacity: 10,
      attendees: 9,
      tags: ["Education 📚", "Community Service 🤝"],
      eventType: "Hands-on volunteering",
      rsvpType: "Approval Required",
      matchNote: "Meaningful fit if the user is open to weekday volunteering.",
      createdBy: "organization"
    }
  ],
  questionPosts: [
    {
      id: "q1",
      author: "Maya R.",
      timeAgo: "1h ago",
      label: "COMMUNITY",
      category: "Event Suggestions 📅",
      title: "Any good volunteer events for first-timers this weekend?",
      description: "Looking for something welcoming where I can meet people and not feel lost.",
      responses: 8
    }
  ],
  helpPosts: [
    {
      id: "h1",
      author: "Jordan P.",
      timeAgo: "2h ago",
      label: "COMMUNITY",
      category: "Moving Help 📦",
      title: "Need help moving a couch",
      description: "Just need one more person to help carry it up a narrow staircase in Bed-Stuy.",
      location: "Bed-Stuy",
      timeNeeded: "Tonight at 6 PM",
      helpersNeeded: 1
    },
    {
      id: "h2",
      author: "Leila S.",
      timeAgo: "4h ago",
      label: "COMMUNITY",
      category: "Elderly Assistance ❤️",
      title: "Looking for someone to help my neighbor with grocery pickup",
      description: "A quick Sunday errand and check-in for an elderly resident on my block.",
      location: "Flatbush",
      timeNeeded: "Sunday morning",
      helpersNeeded: 2
    }
  ],
  orgPosts: []
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    return { ...structuredClone(defaultState), ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return [...document.querySelectorAll(selector)];
}

function init() {
  bindNavigation();
  bindHeroActions();
  renderTagSelectors();
  populateFilters();
  populatePostSelectors();
  renderAll();
}

function bindNavigation() {
  $$(".nav-chip").forEach((chip) => {
    chip.addEventListener("click", () => setView(chip.dataset.view));
  });
}

function bindHeroActions() {
  $$('[data-scroll-target]').forEach((button) => {
    button.addEventListener("click", () => {
      const target = $(button.dataset.scrollTarget);
      if (!target) return;
      setView(target.id);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setView(viewId) {
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  $$(".nav-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.view === viewId));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("visible"), 2600);
}

function computeMatchScore(event) {
  const causeMatches = event.tags.filter((tag) => state.user.causes.includes(tag)).length * 35;
  const timeFit =
    (event.isWeekend && state.user.availability.includes("Weekends")) ||
    (!event.isWeekend && state.user.availability.includes("Weekdays")) ||
    state.user.availability.includes("Evenings");
  const typeFit = state.user.eventTypes.includes(event.eventType);
  const distanceBonus = event.distance <= 5 ? 15 : event.distance <= 10 ? 8 : 2;
  return Math.min(98, causeMatches + (timeFit ? 25 : 0) + (typeFit ? 20 : 0) + distanceBonus);
}

function getMatchLabel(score) {
  if (score >= 80) return { text: "High match", className: "high" };
  if (score >= 55) return { text: "Medium match", className: "medium" };
  return { text: "Low match", className: "low" };
}

function renderTagSelectors() {
  $$(".tag-selector").forEach((container) => {
    const group = container.dataset.group;
    container.innerHTML = "";

    options[group].forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `tag${state.user[group].includes(item) ? " active" : ""}`;
      button.textContent = item;
      button.addEventListener("click", () => {
        const list = state.user[group];
        const index = list.indexOf(item);
        if (index >= 0) {
          list.splice(index, 1);
        } else {
          list.push(item);
        }
        saveState();
        renderTagSelectors();
        renderMatches();
        renderHomeLists();
        renderProfile();
      });
      container.appendChild(button);
    });
  });

  $("#match-form").addEventListener("submit", (event) => {
    event.preventDefault();
    saveState();
    renderAll();
    showToast("Your values were saved. Matches updated.");
  });
}

function populateFilters() {
  $("#cause-filter").innerHTML = ['<option value="all">All causes</option>']
    .concat(options.causes.map((cause) => `<option value="${cause}">${cause}</option>`))
    .join("");

  $("#event-type-filter").innerHTML = ['<option value="all">All event types</option>']
    .concat(options.eventTypes.map((type) => `<option value="${type}">${type}</option>`))
    .join("");

  ["cause-filter", "date-filter", "distance-filter", "event-type-filter", "recommended-toggle"].forEach((id) => {
    $(`#${id}`).addEventListener("change", renderHomeLists);
  });
}

function filteredEvents() {
  const cause = $("#cause-filter").value;
  const date = $("#date-filter").value;
  const distance = $("#distance-filter").value;
  const eventType = $("#event-type-filter").value;
  const recommendedOnly = $("#recommended-toggle").checked;

  return state.events
    .map((event) => ({ ...event, matchScore: computeMatchScore(event) }))
    .filter((event) => {
      if (cause !== "all" && !event.tags.includes(cause)) return false;
      if (date === "48h" && !event.within48h) return false;
      if (date === "weekend" && !event.isWeekend) return false;
      if (distance !== "all" && event.distance > Number(distance)) return false;
      if (eventType !== "all" && event.eventType !== eventType) return false;
      if (recommendedOnly && event.matchScore < 50) return false;
      return true;
    });
}
function eventCardMarkup(event, showMatch) {
  const score = event.matchScore ?? computeMatchScore(event);
  const match = getMatchLabel(score);
  const spotsLeft = event.capacity - event.attendees;
  const urgency = spotsLeft / event.capacity < 0.3 ? `<span class="tiny-pill rsvp-limited">Only ${spotsLeft} spots left</span>` : "";
  const soon = event.within48h ? '<span class="tiny-pill rsvp-open">Starts in 48 hours</span>' : "";

  return `
    <article class="event-card">
      <div class="card-top">
        <div>
          <h4>${event.title}</h4>
          <p>${event.organization} • ${event.dateLabel}</p>
        </div>
        ${showMatch ? `<span class="badge ${match.className}">${score}% ${match.text}</span>` : ""}
      </div>
      <p>${event.description}</p>
      <div class="meta-row">
        ${event.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="chip-row">
        <span class="tiny-pill">${event.location}</span>
        <span class="tiny-pill">${event.attendees}/${event.capacity} going</span>
        <span class="tiny-pill">${event.rsvpType}</span>
        ${urgency}
        ${soon}
      </div>
      <div class="action-row">
        <button class="button secondary small" data-event-detail="${event.id}">View details</button>
        <button class="button primary small" data-rsvp="${event.id}">RSVP</button>
      </div>
    </article>
  `;
}

function bindEventButtons(scope = document) {
  scope.querySelectorAll("[data-event-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      renderEventDetail(button.dataset.eventDetail);
      setView("event-detail");
    });
  });

  scope.querySelectorAll("[data-rsvp]").forEach((button) => {
    button.addEventListener("click", () => {
      const eventId = button.dataset.rsvp;
      if (state.user.eventsJoined.includes(eventId)) {
        showToast("You already joined this event.");
        return;
      }
      state.user.eventsJoined.push(eventId);
      const event = state.events.find((item) => item.id === eventId);
      if (event) event.attendees += 1;
      saveState();
      renderAll();
      showToast("Event added to My Events.");
    });
  });
}

function renderMatches() {
  const rankedEvents = state.events
    .map((event) => ({ ...event, matchScore: computeMatchScore(event) }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);

  $("#match-results").innerHTML = rankedEvents.map((event) => eventCardMarkup(event, true)).join("");
  bindEventButtons($("#match-results"));
}

function renderHomeLists() {
  const events = filteredEvents().sort((a, b) => b.matchScore - a.matchScore);
  const forYou = events.slice(0, 3);
  const nearYou = [...events].sort((a, b) => a.distance - b.distance).slice(0, 3);
  const soon = events.filter((event) => event.within48h).slice(0, 3);

  $("#for-you-list").innerHTML = forYou.map((event) => eventCardMarkup(event, true)).join("");
  $("#near-you-list").innerHTML = nearYou.map((event) => eventCardMarkup(event, false)).join("");
  $("#soon-list").innerHTML = soon.map((event) => eventCardMarkup(event, true)).join("");

  bindEventButtons($("#home"));
}

function renderEventDetail(eventId = "e1") {
  const event = state.events.find((item) => item.id === eventId) || state.events[0];
  const score = computeMatchScore(event);
  const rsvpClass =
    event.rsvpType === "Open RSVP"
      ? "rsvp-open"
      : event.rsvpType === "Limited RSVP"
        ? "rsvp-limited"
        : "rsvp-approval";

  $("#event-detail-card").innerHTML = `
    <article class="detail-card">
      <div class="card-top">
        <div>
          <p class="eyebrow">Featured opportunity</p>
          <h3>${event.title}</h3>
          <p>${event.organization} • ${event.dateLabel}</p>
        </div>
        <span class="rsvp-state ${rsvpClass}">${event.rsvpType}</span>
      </div>
      <p>${event.description}</p>
      <div class="meta-row">
        ${event.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="grid two-col">
        <div class="mini-card"><strong>Location</strong><p>${event.location}</p></div>
        <div class="mini-card"><strong>Attendees</strong><p>${event.attendees} people are going</p></div>
      </div>
      <div class="grid two-col">
        <div class="mini-card"><strong>Trust signal</strong><p>Organizer profile is public with past events and cause tags.</p></div>
        <div class="mini-card"><strong>Match insight</strong><p>${score}% match. ${event.matchNote}</p></div>
      </div>
      <div class="action-row">
        <button class="button primary" data-rsvp="${event.id}">RSVP / request to join</button>
        <button class="button secondary" data-save-event="${event.id}">Save event</button>
        <button class="button tertiary">Share event</button>
      </div>
    </article>
    <aside class="panel">
      <div class="map-card">Map preview for ${event.location}</div>
      <div class="card-list">
        <div class="mini-card"><strong>Reminder system</strong><p>Automatic reminders go out 24 hours and 2 hours before the event.</p></div>
        <div class="mini-card"><strong>Social proof</strong><p>${event.attendees} people are going, and 5 joined today.</p></div>
        <div class="mini-card"><strong>Suggested next step</strong><p>People who joined this also liked community potlucks and cleanup events nearby.</p></div>
      </div>
    </aside>
  `;

  bindEventButtons($("#event-detail-card"));
  $$("#event-detail-card [data-save-event]").forEach((button) => {
    button.addEventListener("click", () => {
      const eventIdToSave = button.dataset.saveEvent;
      if (state.user.savedEvents.includes(eventIdToSave)) {
        showToast("This event is already saved.");
        return;
      }
      state.user.savedEvents.push(eventIdToSave);
      saveState();
      renderMyEvents();
      showToast("Saved to your events list.");
    });
  });
}

function populatePostSelectors() {
  $("#user-post-type").innerHTML = options.userPostTypes.map((type) => `<option value="${type}">${type}</option>`).join("");
  $("#org-post-type").innerHTML = options.orgPostTypes.map((type) => `<option value="${type}">${type}</option>`).join("");

  $("#user-post-type").addEventListener("change", renderUserPostForm);
  $("#org-post-type").addEventListener("change", renderOrgPostForm);

  renderUserPostForm();
  renderOrgPostForm();
}

function renderField(label, type, id, items = [], value = "") {
  if (type === "select") {
    return `
      <label>
        <span>${label}</span>
        <select id="${id}">
          ${items.map((item) => `<option value="${item}">${item}</option>`).join("")}
        </select>
      </label>
    `;
  }

  if (type === "textarea") {
    return `
      <label>
        <span>${label}</span>
        <textarea id="${id}" placeholder="${value}">${value}</textarea>
      </label>
    `;
  }

  return `
    <label>
      <span>${label}</span>
      <input id="${id}" value="${value}">
    </label>
  `;
}

function bindLivePreview(formSelector, renderFn) {
  $(formSelector).querySelectorAll("input, textarea, select").forEach((field) => {
    field.addEventListener("input", renderFn);
    field.addEventListener("change", renderFn);
  });
}
function renderUserPostForm() {
  const type = $("#user-post-type").value;
  let markup = "";

  if (type === "Ask a Question") {
    markup = `
      ${renderField("What is your question about?", "select", "questionCategory", options.questionCategories)}
      ${renderField("Question title", "input", "questionTitle", [], "How can I find a beginner-friendly volunteer event?")}
      ${renderField("Description (optional)", "textarea", "questionDescription", [], "Include details to help the community answer well.")}
      <button type="button" class="button primary" id="publish-user-post">Publish question</button>
    `;
  } else if (type === "Ask for Help") {
    markup = `
      ${renderField("What do you need help with?", "select", "helpCategory", options.helpCategories)}
      ${renderField("Title", "input", "helpTitle", [], "Need help moving a couch")}
      ${renderField("Description", "textarea", "helpDescription", [], "Briefly explain what you need and any important details.")}
      ${renderField("Location", "input", "helpLocation", [], "Approximate location")}
      ${renderField("Time needed", "input", "helpTime", [], "Tonight at 6 PM")}
      ${renderField("Number of helpers", "input", "helpCount", [], "2")}
      <button type="button" class="button primary" id="publish-user-post">Publish help request</button>
    `;
  } else {
    markup = `
      ${renderField("What type of event is this?", "select", "communityEventType", options.communityEventTypes)}
      ${renderField("Title", "input", "communityEventTitle", [], "Sunday study group")}
      ${renderField("Description", "textarea", "communityEventDescription", [], "What should people expect?")}
      ${renderField("Location", "input", "communityEventLocation", [], "Neighborhood library")}
      ${renderField("Date & time", "input", "communityEventTime", [], "Apr 7 at 1 PM")}
      ${renderField("Capacity", "input", "communityEventCapacity", [], "12")}
      ${renderField("Tags", "input", "communityEventTags", [], "Education 📚, Community Service 🤝")}
      <button type="button" class="button primary" id="publish-user-post">Publish community event</button>
    `;
  }

  $("#user-post-form").innerHTML = markup;
  $("#publish-user-post").addEventListener("click", publishUserPost);
  renderUserPostPreview();
  bindLivePreview("#user-post-form", renderUserPostPreview);
}

function renderOrgPostForm() {
  const type = $("#org-post-type").value;
  let markup = "";

  if (type === "Event") {
    markup = `
      ${renderField("Title", "input", "orgEventTitle", [], "Spring volunteer fair")}
      ${renderField("Description", "textarea", "orgEventDescription", [], "Describe what the event is about.")}
      ${renderField("Location", "input", "orgEventLocation", [], "Community center")}
      ${renderField("Date & time", "input", "orgEventTime", [], "Apr 12 at 5 PM")}
      ${renderField("Capacity", "input", "orgEventCapacity", [], "80")}
      ${renderField("Event type", "select", "orgEventType", options.orgEventTypes)}
      ${renderField("Tags", "input", "orgEventTags", [], "Environment 🌱, Community Service 🤝")}
      <button type="button" class="button primary" id="publish-org-post">Publish event</button>
    `;
  } else if (type === "Sponsorship Request") {
    markup = `
      ${renderField("Title", "input", "orgSponsorTitle", [], "Seeking food donors for youth service day")}
      ${renderField("Description", "textarea", "orgSponsorDescription", [], "Explain what you need support for.")}
      ${renderField("What do you need?", "input", "orgSponsorNeed", [], "Snacks, bottled water, print materials")}
      ${renderField("Target audience", "input", "orgSponsorAudience", [], "Local businesses")}
      ${renderField("Contact method", "input", "orgSponsorContact", [], "partnerships@harborhands.org")}
      <button type="button" class="button primary" id="publish-org-post">Publish sponsorship request</button>
    `;
  } else if (type === "Promotion / Brand Feature") {
    markup = `
      ${renderField("Title", "input", "orgPromoTitle", [], "Partner spotlight: River Coffee")}
      ${renderField("Description", "textarea", "orgPromoDescription", [], "Share the promotion details.")}
      ${renderField("Brand name", "input", "orgPromoBrand", [], "River Coffee")}
      ${renderField("Link (optional)", "input", "orgPromoLink", [], "https://")}
      ${renderField("Image upload", "input", "orgPromoImage", [], "promo-banner.png")}
      <button type="button" class="button primary" id="publish-org-post">Publish promotional post</button>
    `;
  } else if (type === "Discount / Offer") {
    markup = `
      ${renderField("Offer title", "input", "orgOfferTitle", [], "15% off volunteer day snacks")}
      ${renderField("Description", "textarea", "orgOfferDescription", [], "What is the offer?")}
      ${renderField("Discount code", "input", "orgOfferCode", [], "GOODWORKS15")}
      ${renderField("Expiry date", "input", "orgOfferExpiry", [], "Apr 30")}
      ${renderField("Location / Online", "input", "orgOfferLocation", [], "Online")}
      <button type="button" class="button primary" id="publish-org-post">Publish offer</button>
    `;
  } else if (type === "Recruitment / Hiring") {
    markup = `
      ${renderField("Role title", "input", "orgRecruitTitle", [], "Part-time program coordinator")}
      ${renderField("Description", "textarea", "orgRecruitDescription", [], "Describe the role and the mission.")}
      ${renderField("Skills needed", "input", "orgRecruitSkills", [], "Community outreach, scheduling")}
      ${renderField("Time commitment", "input", "orgRecruitTime", [], "10 hours/week")}
      ${renderField("Apply link / contact", "input", "orgRecruitContact", [], "careers@harborhands.org")}
      <button type="button" class="button primary" id="publish-org-post">Publish recruitment post</button>
    `;
  } else {
    markup = `
      ${renderField("Question", "input", "orgPollQuestion", [], "What volunteer times work best for you?")}
      ${renderField("Options", "input", "orgPollOptions", [], "Weekdays, Weekends, Evenings")}
      ${renderField("Duration", "input", "orgPollDuration", [], "7 days")}
      <button type="button" class="button primary" id="publish-org-post">Publish poll</button>
    `;
  }

  $("#org-post-form").innerHTML = markup;
  $("#publish-org-post").addEventListener("click", publishOrgPost);
  renderOrgPostPreview();
  bindLivePreview("#org-post-form", renderOrgPostPreview);
}

function previewHeader(label, meta) {
  return `
    <div class="label-row">
      <div class="split">
        <div class="avatar">AC</div>
        <div>
          <strong>${state.user.name}</strong>
          <div class="quiet">${meta}</div>
        </div>
      </div>
      <span class="tiny-pill">${label}</span>
    </div>
  `;
}

function renderUserPostPreview() {
  const type = $("#user-post-type").value;
  const container = $("#user-post-preview");

  if (type === "Ask a Question") {
    container.innerHTML = `
      ${previewHeader($("#questionCategory").value, "COMMUNITY - now")}
      <h4>${$("#questionTitle").value}</h4>
      <p>${$("#questionDescription").value}</p>
      <div class="action-row">
        <button class="button primary small">Answer</button>
        <button class="button secondary small">View responses (0)</button>
        <button class="button tertiary small">Save</button>
      </div>
    `;
    return;
  }

  if (type === "Ask for Help") {
    container.innerHTML = `
      ${previewHeader($("#helpCategory").value, "COMMUNITY - now")}
      <h4>${$("#helpTitle").value}</h4>
      <p>${$("#helpDescription").value}</p>
      <div class="chip-row">
        <span class="tiny-pill">${$("#helpLocation").value}</span>
        <span class="tiny-pill">${$("#helpTime").value}</span>
        <span class="tiny-pill">${$("#helpCount").value} helpers</span>
      </div>
      <div class="action-row">
        <button class="button primary small">I Can Help</button>
        <button class="button secondary small">Comment</button>
        <button class="button tertiary small">Save</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    ${previewHeader($("#communityEventType").value, "COMMUNITY EVENT - now")}
    <h4>${$("#communityEventTitle").value}</h4>
    <p>${$("#communityEventDescription").value}</p>
    <div class="chip-row">
      <span class="tiny-pill">${$("#communityEventLocation").value}</span>
      <span class="tiny-pill">${$("#communityEventTime").value}</span>
      <span class="tiny-pill">Capacity ${$("#communityEventCapacity").value}</span>
    </div>
  `;
}

function renderOrgPostPreview() {
  const type = $("#org-post-type").value;
  const preview = $("#org-post-preview");
  let detail = "";

  if (type === "Event") {
    detail = `
      <h4>${$("#orgEventTitle").value}</h4>
      <p>${$("#orgEventDescription").value}</p>
      <div class="chip-row">
        <span class="tiny-pill">${$("#orgEventType").value}</span>
        <span class="tiny-pill">${$("#orgEventLocation").value}</span>
        <span class="tiny-pill">${$("#orgEventTime").value}</span>
      </div>
    `;
  } else if (type === "Sponsorship Request") {
    detail = `<h4>${$("#orgSponsorTitle").value}</h4><p>${$("#orgSponsorDescription").value}</p><p><strong>Need:</strong> ${$("#orgSponsorNeed").value}</p>`;
  } else if (type === "Promotion / Brand Feature") {
    detail = `<span class="tiny-pill rsvp-approval">Promotional content</span><h4>${$("#orgPromoTitle").value}</h4><p>${$("#orgPromoDescription").value}</p><p><strong>Brand:</strong> ${$("#orgPromoBrand").value}</p>`;
  } else if (type === "Discount / Offer") {
    detail = `<h4>${$("#orgOfferTitle").value}</h4><p>${$("#orgOfferDescription").value}</p><p><strong>Code:</strong> ${$("#orgOfferCode").value}</p>`;
  } else if (type === "Recruitment / Hiring") {
    detail = `<h4>${$("#orgRecruitTitle").value}</h4><p>${$("#orgRecruitDescription").value}</p><p><strong>Skills:</strong> ${$("#orgRecruitSkills").value}</p>`;
  } else {
    detail = `<h4>${$("#orgPollQuestion").value}</h4><p><strong>Options:</strong> ${$("#orgPollOptions").value}</p><p><strong>Duration:</strong> ${$("#orgPollDuration").value}</p>`;
  }

  preview.innerHTML = `
    <div class="label-row">
      <div class="split">
        <div class="avatar">HH</div>
        <div>
          <strong>Harbor Hands</strong>
          <div class="quiet">ORGANIZATION - fully public</div>
        </div>
      </div>
      <span class="tiny-pill">${type}</span>
    </div>
    ${detail}
  `;
}
function publishUserPost() {
  const type = $("#user-post-type").value;

  if (type === "Ask a Question") {
    state.questionPosts.unshift({
      id: `q${Date.now()}`,
      author: state.user.name,
      timeAgo: "just now",
      label: "COMMUNITY",
      category: $("#questionCategory").value,
      title: $("#questionTitle").value,
      description: $("#questionDescription").value,
      responses: 0
    });
    saveState();
    renderCommunityPosts();
    showToast("Question published to the community feed.");
    return;
  }

  if (type === "Ask for Help") {
    state.helpPosts.unshift({
      id: `h${Date.now()}`,
      author: state.user.name,
      timeAgo: "just now",
      label: "COMMUNITY",
      category: $("#helpCategory").value,
      title: $("#helpTitle").value,
      description: $("#helpDescription").value,
      location: $("#helpLocation").value,
      timeNeeded: $("#helpTime").value,
      helpersNeeded: Number($("#helpCount").value) || 1
    });
    saveState();
    renderCommunityPosts();
    showToast("Help request published.");
    return;
  }

  state.events.unshift({
    id: `e${Date.now()}`,
    title: $("#communityEventTitle").value,
    organization: `${state.user.name} Community`,
    description: $("#communityEventDescription").value,
    location: $("#communityEventLocation").value,
    distance: 4,
    dateLabel: $("#communityEventTime").value,
    within48h: false,
    isWeekend: /sat|sun/i.test($("#communityEventTime").value),
    capacity: Number($("#communityEventCapacity").value) || 10,
    attendees: 1,
    tags: $("#communityEventTags").value.split(",").map((tag) => tag.trim()).filter(Boolean),
    eventType: "Social/community",
    rsvpType: "Open RSVP",
    matchNote: "Created by a community member near you.",
    createdBy: "user"
  });
  saveState();
  renderAll();
  showToast("Community event published.");
}

function publishOrgPost() {
  const type = $("#org-post-type").value;

  if (type === "Event") {
    state.events.unshift({
      id: `e${Date.now()}`,
      title: $("#orgEventTitle").value,
      organization: "Harbor Hands",
      description: $("#orgEventDescription").value,
      location: $("#orgEventLocation").value,
      distance: 6,
      dateLabel: $("#orgEventTime").value,
      within48h: false,
      isWeekend: /sat|sun/i.test($("#orgEventTime").value),
      capacity: Number($("#orgEventCapacity").value) || 25,
      attendees: 0,
      tags: $("#orgEventTags").value.split(",").map((tag) => tag.trim()).filter(Boolean),
      eventType: $("#orgEventType").value.includes("Volunteering") ? "Hands-on volunteering" : "Awareness campaigns",
      rsvpType: "Limited RSVP",
      matchNote: "Freshly published by an organization you may trust.",
      createdBy: "organization"
    });
    saveState();
    renderAll();
    showToast("Organization event published.");
    return;
  }

  const titles = {
    "Sponsorship Request": $("#orgSponsorTitle")?.value,
    "Promotion / Brand Feature": $("#orgPromoTitle")?.value,
    "Discount / Offer": $("#orgOfferTitle")?.value,
    "Recruitment / Hiring": $("#orgRecruitTitle")?.value,
    "Poll / Feedback": $("#orgPollQuestion")?.value
  };

  state.orgPosts.unshift({
    id: `o${Date.now()}`,
    type,
    title: titles[type] || type,
    timeAgo: "just now"
  });
  saveState();
  renderOrgDashboard();
  showToast("Organization post published.");
}

function renderCommunityPosts() {
  $("#question-posts").innerHTML = state.questionPosts
    .map((post) => `
      <article class="community-card">
        <div class="label-row">
          <div class="split">
            <div class="avatar">${post.author.slice(0, 1)}</div>
            <div>
              <strong>${post.author}</strong>
              <div class="quiet">${post.label} - ${post.timeAgo}</div>
            </div>
          </div>
          <span class="tiny-pill">${post.category}</span>
        </div>
        <h4>${post.title}</h4>
        <p>${post.description}</p>
        <div class="action-row">
          <button class="button primary small">Answer</button>
          <button class="button secondary small">View responses (${post.responses})</button>
          <button class="button tertiary small">Save</button>
        </div>
      </article>
    `)
    .join("");

  $("#help-posts").innerHTML = state.helpPosts
    .map((post, index) => `
      <article class="community-card">
        <div class="label-row">
          <div class="split">
            <div class="avatar">${post.author.slice(0, 1)}</div>
            <div>
              <strong>${post.author}</strong>
              <div class="quiet">${post.label} - ${post.timeAgo}</div>
            </div>
          </div>
          <span class="tiny-pill">${post.category}</span>
        </div>
        <h4>${post.title}</h4>
        <p>${post.description}</p>
        <div class="chip-row">
          <span class="tiny-pill">${post.location}</span>
          <span class="tiny-pill">${post.timeNeeded}</span>
          <span class="tiny-pill">${post.helpersNeeded} helpers needed</span>
        </div>
        <div class="action-row">
          <button class="button primary small" data-help-index="${index}">I Can Help</button>
          <button class="button secondary small">Comment</button>
          <button class="button tertiary small">Save</button>
        </div>
      </article>
    `)
    .join("");

  $$("[data-help-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const post = state.helpPosts[Number(button.dataset.helpIndex)];
      showToast(`Chat opened with ${post.author}: "Hi! I can help with this."`);
    });
  });
}

function renderMyEvents() {
  const upcoming = state.events.filter((event) => state.user.eventsJoined.includes(event.id));
  const past = state.events.filter((event) => event.id === "e1");
  const saved = state.events.filter((event) => state.user.savedEvents.includes(event.id));

  $("#upcoming-events").innerHTML = upcoming
    .map((event) => `<article class="mini-card"><strong>${event.title}</strong><p>${event.dateLabel}</p></article>`)
    .join("");

  $("#past-events").innerHTML = past
    .map((event) => `<article class="mini-card"><strong>${event.title}</strong><p>You showed up and helped.</p></article>`)
    .join("");

  $("#saved-events").innerHTML = saved
    .map((event) => `<article class="mini-card"><strong>${event.title}</strong><p>${event.location}</p></article>`)
    .join("");
}

function renderProfile() {
  const badge =
    state.user.eventsAttendedThisMonth >= 5
      ? "Community Star"
      : state.user.eventsAttendedThisMonth >= 3
        ? "Active Member"
        : "Getting Started";

  $("#profile-layout").innerHTML = `
    <article class="panel profile-card">
      <div class="profile-header">
        <div class="split">
          <div class="avatar">AC</div>
          <div>
            <h3>${state.user.name}</h3>
            <p>${state.user.bio}</p>
          </div>
        </div>
        <span class="badge high">${badge}</span>
      </div>
      <div class="card-list">
        <div class="mini-card"><strong>Public profile</strong><p>${state.user.school} - ${state.user.workplace} - Age ${state.user.age}</p></div>
        <div class="mini-card"><strong>Causes supported</strong><div class="meta-row">${state.user.causes.map((cause) => `<span class="tag">${cause}</span>`).join("")}</div></div>
        <div class="mini-card"><strong>Events attended</strong><p>${state.user.eventsJoined.length} joined overall.</p></div>
      </div>
    </article>
    <article class="panel profile-card">
      <h3>Impact summary calendar</h3>
      <div class="impact-ring"><span>${state.user.eventsAttendedThisMonth}<br>events this month</span></div>
      <p>You have attended 5 events this month. Your community appreciates you.</p>
      <div class="calendar-grid">
        ${Array.from({ length: 28 }, (_, index) => `<span class="${[1, 4, 10, 16, 23].includes(index + 1) ? "active" : ""}">${index + 1}</span>`).join("")}
      </div>
      <div class="action-row">
        <button class="button primary" id="celebrate-btn">Celebrate</button>
        <button class="button secondary">Rejoin similar events</button>
      </div>
    </article>
  `;

  $("#celebrate-btn").addEventListener("click", () => {
    showToast("Confetti animation: you showed up 5 times this month.");
  });
}

function renderOrgDashboard() {
  const org = state.organizations[0];
  const orgEvents = state.events.filter((event) => event.organization === org.name);

  $("#org-dashboard-layout").innerHTML = `
    <article class="panel org-card">
      <div class="org-header">
        <div>
          <h3>${org.name}</h3>
          <p>${org.description}</p>
        </div>
        <span class="badge high">Fully public</span>
      </div>
      <div class="card-list">
        <div class="mini-card"><strong>Mission</strong><p>${org.mission}</p></div>
        <div class="mini-card"><strong>Cause tags</strong><div class="meta-row">${org.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div></div>
        <div class="mini-card"><strong>Photo gallery</strong><p>${org.gallery.join(" - ")}</p></div>
      </div>
    </article>
    <article class="panel org-card">
      <h3>Manage events</h3>
      <div class="card-list">
        ${orgEvents.map((event) => `
          <article class="mini-card">
            <strong>${event.title}</strong>
            <p>${event.dateLabel}</p>
            <p>${event.attendees}/${event.capacity} attendees - ${event.rsvpType}</p>
            <div class="action-row">
              <button class="button secondary small">See attendee list</button>
              <button class="button tertiary small">Edit details</button>
            </div>
          </article>
        `).join("")}
        ${state.orgPosts.map((post) => `
          <article class="mini-card">
            <strong>${post.type}</strong>
            <p>${post.title}</p>
            <p>${post.timeAgo}</p>
          </article>
        `).join("")}
      </div>
    </article>
  `;
}

function renderAll() {
  renderMatches();
  renderHomeLists();
  renderEventDetail();
  renderCommunityPosts();
  renderMyEvents();
  renderProfile();
  renderOrgDashboard();
}

document.addEventListener("DOMContentLoaded", init);
