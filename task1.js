function delayedLog(text, ms) {
  if (typeof ms !== "number" || ms < 0 || !Number.isFinite(ms)) {
    throw new TypeError("'ms' має бути невід'ємним числом");
  }
  setTimeout(() => console.log(text), ms);
}

delayedLog("Привіт через 2 секунди!", 2000);
