const TODO_URL_A = "https://jsonplaceholder.typicode.com/todos/1";
const USER_URL_A = "https://jsonplaceholder.typicode.com/users/1";

async function getTodo() {
  const res = await fetch(TODO_URL_A);
  if (!res.ok) throw new Error(`HTTP ${res.status} для ${TODO_URL_A}`);
  return res.json();
}

async function getUser() {
  const res = await fetch(USER_URL_A);
  if (!res.ok) throw new Error(`HTTP ${res.status} для ${USER_URL_A}`);
  return res.json();
}

(async () => {
  try {
    const [todo, user] = await Promise.all([getTodo(), getUser()]);
    console.log("async/await -> обидва готові:", { todo, user });
  } catch (err) {
    console.error("async/await -> помилка в Promise.all:", err.message);
  }

  try {
    const first = await Promise.race([getTodo(), getUser()]);
    console.log("async/await -> перший результат (race):", first);
  } catch (err) {
    console.error("async/await -> помилка в Promise.race:", err.message);
  }
})();

module.exports = { getTodo, getUser };
