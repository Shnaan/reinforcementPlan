// ---- State (React-style) ----
const state = {
  userName: "Alex",
  placesCount: 0,
  isLoading: false,
  hasError: false,
};

// ---- DOM ----
const welcomeEl = document.getElementById("welcome");
const countEl = document.getElementById("count");
const statusEl = document.getElementById("status");
const debugEl = document.getElementById("debug");

// Buttons
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const loadingBtn = document.getElementById("toggle-loading");
const errorBtn = document.getElementById("toggle-error");
const resetBtn = document.getElementById("reset");

// ---- Derive UI message (NO if/else version) ----
function getStatusMessage() {
  const { isLoading, hasError, placesCount } = state;

  return (
    (isLoading && "Loading...") ||
    (hasError && "Error loading data") ||
    (placesCount === 0 && "No places found") ||
    `Found ${placesCount} places`
  );
}

// ---- Render (single source of truth) ----
function render() {
  welcomeEl.textContent = `Welcome ${state.userName}`;
  countEl.textContent = `Places Count: ${state.placesCount}`;
  statusEl.textContent = getStatusMessage();

  debugEl.textContent = JSON.stringify(state, null, 2);
}

// ---- Events ----
addBtn.addEventListener("click", () => {
  state.placesCount += 1;
  render();
});

removeBtn.addEventListener("click", () => {
  state.placesCount = Math.max(0, state.placesCount - 1);
  render();
});

loadingBtn.addEventListener("click", () => {
  state.isLoading = !state.isLoading;

  // Optional “real app” behavior: if loading starts, clear error
  if (state.isLoading) state.hasError = false;

  render();
});

errorBtn.addEventListener("click", () => {
  state.hasError = !state.hasError;

  // Optional “real app” behavior: if error happens, stop loading
  if (state.hasError) state.isLoading = false;

  render();
});

resetBtn.addEventListener("click", () => {
  state.placesCount = 0;
  state.isLoading = false;
  state.hasError = false;
  render();
});

// Initial render
render();
