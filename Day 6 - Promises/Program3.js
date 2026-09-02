function getBrowser() {
  return new Promise((resolve) => {
    resolve("chromium");
  });
}

function getEnvironment() {
  return new Promise((resolve) => {
    resolve("QA");
  });
}

function getTimeout() {
  return new Promise((resolve) => {
    resolve(30000);
  });
}

async function getTestConfig() {
  const [browser, env, timeout] = await Promise.all([
    getBrowser(),
    getEnvironment(),
    getTimeout(),
  ]);

  console.log(`Browser: ${browser}`);
  console.log(`Environment: ${env}`);
  console.log(`Timeout: ${timeout}`);
}

getTestConfig();