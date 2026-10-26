import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly btnCampanaNotificaciones: Locator;
  readonly btnIniciarCaminar: Locator;
  readonly btnPausarRutina: Locator;
  readonly btnFinalizarRutina: Locator;
  readonly iconoLogout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnCampanaNotificaciones = page.locator('.notification-bell, [aria-label*="Notificaciones"]');
    this.btnIniciarCaminar = page.locator('text=Caminar').locator('..').locator('button:has-text("Iniciar ejercicio")');
    this.btnPausarRutina = page.locator('button:has-text("Pausar sesión")');
    this.btnFinalizarRutina = page.locator('button:has-text("Finalizar sesión")');
    this.iconoLogout = page.locator('.logout-btn, [title*="Salir"], [aria-label*="Salir"]');
  }

  async abrirNotificaciones() {
    await this.btnCampanaNotificaciones.click();
  }

  async iniciarRutinaCaminar() {
    await this.btnIniciarCaminar.click();
  }

  async cerrarSesion() {
    await this.iconoLogout.click();
  }
}