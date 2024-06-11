import { test, expect } from '@playwright/experimental-ct-react';

import { App } from './App';
import { PortfolioProvider } from './PortfolioContext/PortfolioContext';
import { Portfolio } from './components/Portfolio/Portfolio';

test.use({ viewport: { width: 500, height: 500 } });

test('check for missing styles in app component', async ({ mount }) => {
  const component = await mount(<App />);
  await !expect(component).toHaveCSS;
});

test.use({ viewport: { width: 1280, height: 720 } });

test.describe('Portfolio Component', () => {
  test('should render component', async ({ mount }) => {
    const component = await mount(
      <PortfolioProvider>
        <Portfolio />
      </PortfolioProvider>,
    );

    const totalPriceElement = component.locator(`text=Total Price:`);
    await expect(totalPriceElement).toBeVisible();

    const totalChangeElement = component.locator(`text=Change:`);
    await expect(totalChangeElement).toBeVisible();
  });
});
