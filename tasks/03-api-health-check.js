// tasks/03-api-health-check.js
import axios from 'axios';

const API_TO_CHECK = 'https://api.github.com'; // A reliable public API

console.log(`[CRON-TASK-HEALTHCHECK] --- Starting API Health Check ---`);
console.log(`[CRON-TASK-HEALTHCHECK] Timestamp: ${new Date().toISOString()}`);
console.log(`[CRON-TASK-HEALTHCHECK] Pinging external API: ${API_TO_CHECK}`);

async function runHealthCheck() {
  try {
    const startTime = Date.now();
    const response = await axios.get(API_TO_CHECK, { timeout: 5000 });
    const endTime = Date.now();
    const duration = endTime - startTime;

    if (response.status >= 200 && response.status < 300) {
      console.log(`[CRON-TASK-HEALTHCHECK] SUCCESS: API responded with status ${response.status}.`);
      console.log(`[CRON-TASK-HEALTHCHECK] Response time: ${duration}ms.`);
      console.log(`[CRON-TASK-HEALTHCHECK] --- API Health Check Finished ---`);
      process.exit(0);
    } else {
      console.error(`[CRON-TASK-HEALTHCHECK] FAILURE: API responded with unexpected status: ${response.status}.`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`[CRON-TASK-HEALTHCHECK] CRITICAL FAILURE: Could not connect to the API.`, error.message);
    process.exit(1);
  }
}

runHealthCheck();
