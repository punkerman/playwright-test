import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
use: { 
	baseURL: '',
},
projects: [
    {
      name: 'safari',
      use: {
        ...devices['Desktop Safari'] 
		},
    },
    {
      name: 'iphone14-l-safari',
      use: {
        ...devices['iPhone 14 landscape']
      },
    },
{
      name: 'iphone14-safari',
      use: {
        ...devices['iPhone 14']
      },
    },
  ],
});