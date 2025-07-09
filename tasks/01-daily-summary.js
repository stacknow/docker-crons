// tasks/01-daily-summary.js
console.log(`[CRON-TASK-SUMMARY] --- Starting Daily Summary Report ---`);
console.log(`[CRON-TASK-SUMMARY] Timestamp: ${new Date().toISOString()}`);

try {
  // Simulate fetching data from a database or service
  const totalUsers = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
  const newSignups = Math.floor(totalUsers / 10);
  const revenue = (Math.random() * (2500 - 500) + 500).toFixed(2);

  console.log(`[CRON-TASK-SUMMARY] Simulating data aggregation...`);
  
  // Simulate a delay
  setTimeout(() => {
    console.log(`[CRON-TASK-SUMMARY] --- Report Data ---`);
    console.log(`[CRON-TASK-SUMMARY] Total Active Users: ${totalUsers}`);
    console.log(`[CRON-TASK-SUMMARY] New Signups Today: ${newSignups}`);
    console.log(`[CRON-TASK-SUMMARY] Daily Revenue: $${revenue}`);
    console.log(`[CRON-TASK-SUMMARY] --- Daily Summary Report Finished ---`);
    process.exit(0); // Exit successfully
  }, 2000);

} catch (error) {
  console.error('[CRON-TASK-SUMMARY] An error occurred while generating the summary report:', error);
  process.exit(1); // Exit with an error code
}
