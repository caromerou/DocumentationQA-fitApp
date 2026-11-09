import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Módulo 7, 8 y 9: Rutinas, Usabilidad en Movimiento y Seguridad', () => {

  test('CP-20: Inicio y Registro de Sesión de Ejercicio (Caminar)', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await login.navegarLogin();
    await login.iniciarSesion('carora@universidad.edu', 'Password123*');

    // Iniciar rutina de caminar
    await dashboard.iniciarRutinaCaminar();

    // Validar cronómetro activo en pantalla
    const cronometro = page.locator('text=00:00:');
    await expect(cronometro).toBeVisible();
  });

  test('CP-24: Control de Sesión y Seguridad (Logout y Botón Atrás)', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await login.navegarLogin();
    await login.iniciarSesion('carora@universidad.edu', 'Password123*');

    // Hacer Logout
    await dashboard.cerrarSesion();
    await expect(page).toHaveURL(/.*auth\/login/);

    // Intentar volver atrás con el navegador
    await page.goBack();
    
    // El sistema debe prohibir el acceso y mantenerlo en login
    await expect(page).toHaveURL(/.*auth\/login/);
  });

});