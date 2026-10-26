import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';

test.describe('Módulo 1: Landing Page / Pre-Login', () => {

  test('CP-01: Redirección al hacer clic en "Comenzar experiencia"', async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.navegar();
    
    await landing.clickComenzar();
    
    // Validar que redirige al login
    await expect(page).toHaveURL(/.*auth\/login/);
  });

});