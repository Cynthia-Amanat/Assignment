import { PlaywrightTestConfig, devices } from 'playwright/test';

const config: PlaywrightTestConfig = {
  // test timeout set to 2 minutes
 timeout: 2 * 60 * 1000,
 retries: 2, // Retry flaky tests

  use: {
    screenshot: 'only-on-failure', // Take screenshots only on test failure
    video: 'retain-on-failure', // Record video only on test failure
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop chromium'],
      },
    },
    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'Safari',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
  outputDir: 'test/output/', // Directory for test results
  reporter: [
    ['html', { outputFolder: 'test/report' }],
    ['blob', { outputFolder: 'test/report' }],
], // Open HTML reporter on failure
};

export default config;
