// Weekly Workout Tracker: all functionality uses native browser JavaScript.
const STORAGE_KEY = 'weeklyWorkoutTrackerEntries';
const form = document.querySelector('#workoutForm');
const list = document.querySelector('#workoutList');
const chart = document.querySelector('#chart');
const fields = ['activity', 'category', 'day', 'hours'];

// Load previously saved entries. Invalid or outdated stored data is ignored.
function loadWorkouts() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(data) ? data.filter(item => item && typeof item.id === 'string' && typeof item.activity === 'string' && typeof item.category === 'string' && typeof item.day === 'string' && Number.isFinite(item.hours) && item.hours > 0) : [];
  } catch { return []; }
}
let workouts = loadWorkouts();
function saveWorkouts() { localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts)); }
function setError(id, message) {
  document.getElementById(id).classList.toggle('invalid', Boolean(message));
  document.getElementById(id + 'Error').textContent = message;
}
// Check each field and show a helpful message next to invalid input.
function validate(values) {
  fields.forEach(id => setError(id, ''));
  let valid = true;
  const problems = {};
  if (values.activity.trim().length < 3) problems.activity = 'Enter at least 3 characters.';
  if (!['Strength','Running','Rugby','Football','Recovery','Other'].includes(values.category)) problems.category = 'Choose a category.';
  if (!['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].includes(values.day)) problems.day = 'Choose a day.';
  if (values.hours.trim() === '' || !Number.isFinite(Number(values.hours)) || Number(values.hours) < 0.25 || Number(values.hours) > 24) problems.hours = 'Enter 0.25 to 24 hours.';
  for (const [id, message] of Object.entries(problems)) { setError(id, message); valid = false; }
  return valid;
}
const formatHours = value => Number(value.toFixed(2)).toString();
// Build the history and chart using DOM elements, not HTML strings.
function render() {
  list.replaceChildren(); chart.replaceChildren();
  const total = workouts.reduce((sum, workout) => sum + workout.hours, 0);
  const categories = {};
  workouts.forEach(workout => { categories[workout.category] = (categories[workout.category] || 0) + workout.hours; });
  const sorted = Object.entries(categories).sort((a,b) => b[1] - a[1]);
  document.querySelector('#totalHours').textContent = formatHours(total);
  document.querySelector('#sessionCount').textContent = workouts.length;
  document.querySelector('#topCategory').textContent = sorted[0]?.[0] || '—';
  if (!workouts.length) {
    const empty = document.createElement('p'); empty.className = 'muted'; empty.textContent = 'No workouts logged yet.'; list.append(empty);
    const chartEmpty = empty.cloneNode(true); chartEmpty.textContent = 'Add a workout to see your breakdown.'; chart.append(chartEmpty);
  }
  workouts.forEach(workout => {
    const entry = document.createElement('div'); entry.className = 'entry';
    const info = document.createElement('div');
    const title = document.createElement('strong'); title.textContent = workout.activity;
    const detail = document.createElement('span'); detail.textContent = `${workout.day} · ${workout.category} · ${formatHours(workout.hours)} h`;
    info.append(title, detail);
    const remove = document.createElement('button'); remove.type = 'button'; remove.textContent = 'Remove'; remove.setAttribute('aria-label', `Remove ${workout.activity}`);
    remove.addEventListener('click', () => { workouts = workouts.filter(item => item.id !== workout.id); saveWorkouts(); render(); });
    entry.append(info, remove); list.append(entry);
  });
  sorted.forEach(([name, hours]) => {
    const row = document.createElement('div'); row.className = 'chart-row';
    const label = document.createElement('div'); label.className = 'chart-label';
    const nameSpan = document.createElement('span'); nameSpan.textContent = name;
    const valueSpan = document.createElement('span'); valueSpan.textContent = `${formatHours(hours)} h`;
    label.append(nameSpan, valueSpan);
    const background = document.createElement('div'); background.className = 'bar-bg';
    const bar = document.createElement('div'); bar.className = 'bar'; bar.style.width = `${hours / total * 100}%`;
    background.append(bar); row.append(label, background); chart.append(row);
  });
}
form.addEventListener('submit', event => {
  event.preventDefault();
  const values = Object.fromEntries(fields.map(id => [id, document.getElementById(id).value]));
  if (!validate(values)) return;
  workouts.unshift({ id: crypto.randomUUID(), activity: values.activity.trim(), category: values.category, day: values.day, hours: Number(values.hours) });
  saveWorkouts(); form.reset(); fields.forEach(id => setError(id, '')); render();
});
document.querySelector('#clearAll').addEventListener('click', () => {
  if (workouts.length && window.confirm('Remove all logged workouts?')) { workouts = []; saveWorkouts(); render(); }
});
render();
