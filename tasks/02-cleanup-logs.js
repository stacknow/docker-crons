// tasks/02-cleanup-logs.js
console.log(`[CRON-TASK-CLEANUP] --- Starting Cleanup Process ---`);
console.log(`[CRON-TASK-CLEANUP] Timestamp: ${new Date().toISOString()}`);

try {
  const filesToClean = Math.floor(Math.random() * 20) + 5;
  console.log(`[CRON-TASK-CLEANUP] Found ${filesToClean} old log files to remove.`);

  // Simulate the cleanup process
  for (let i = 1; i <= filesToClean; i++) {
    console.log(`[CRON-TASK-CLEANUP] Deleting simulated file: /tmp/log-${i}.tmp... Done.`);
  }

  console.log(`[CRON-TASK-CLEANUP] Successfully cleaned up ${filesToClean} files.`);
  console.log(`[CRON-TASK-CLEANUP] --- Cleanup Process Finished ---`);
  process.exit(0);

} catch (error) {
  console.error('[CRON-TASK-CLEANUP] A critical error occurred during the cleanup process:', error);
  process.exit(1);
}
