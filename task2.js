const TODO_URL = "https://jsonplaceholder.typicode.com/todos/1";
const USER_URL = "https://jsonplaceholder.typicode.com/users/1";

function fetchTodo() {
  return fetch(TODO_URL).then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status} для ${TODO_URL}`);
    return res.json();
  });
}

function fetchUser() {
  return fetch(USER_URL).then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status} для ${USER_URL}`);
    return res.json();
  });
}

const todoPromise = fetchTodo();
const userPromise = fetchUser();

Promise.all([todoPromise, userPromise])
  .then(([todo, user]) => {
    console.log("Promise.all -> обидва готові:", { todo, user });
  })
  .catch((err) => {
    console.error("Promise.all -> помилка:", err.message);
  });

Promise.race([todoPromise, userPromise])
  .then((first) => {
    console.log("Promise.race -> перший результат:", first);
  })
  .catch((err) => {
    console.error("Promise.race -> помилка:", err.message);
  });

module.exports = { fetchTodo, fetchUser };
