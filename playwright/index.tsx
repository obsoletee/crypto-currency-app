import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

export type HooksConfig = {
  enableRouting?: boolean;
};

beforeMount<HooksConfig>(async ({ App, hooksConfig }) => {
  if (hooksConfig?.enableRouting)
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
});
