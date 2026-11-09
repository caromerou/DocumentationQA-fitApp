import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Módulo 2: Login y Autenticación', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navegarLogin();
  });

  test('CP-06: Login Exitoso con Correo Institucional (Camino Feliz)', async ({ page }) => {
    await loginPage.iniciarSesion('carora@universidad.edu', 'Password123*');
    await expect(page).toHaveURL(/.*dashboard/);
  });

  test('CP-07: Validación de Correo No Institucional', async ({ page }) => {
    await loginPage.iniciarSesion('usuario@gmail.com', 'Password123*');
    await expect(loginPage.msgError).toBeVisible();
  });

  test('CP-08: Credenciales Erróneas', async ({ page }) => {
    await loginPage.iniciarSesion('carora@universidad.edu', 'ClaveIncorrecta');
    await expect(loginPage.msgError).toBeVisible();
  });

});