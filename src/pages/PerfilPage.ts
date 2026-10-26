import { Page, Locator } from '@playwright/test';

export class PerfilPage {
  readonly page: Page;
  readonly inputFullName: Locator;
  readonly inputPeso: Locator;
  readonly inputTalla: Locator;
  readonly btnSiguiente: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputFullName = page.locator('input[placeholder*="Full Name"], input[name="fullName"]');
    this.inputPeso = page.locator('input[placeholder*="Peso"], input[name="weight"]');
    this.inputTalla = page.locator('input[placeholder*="Talla"], input[name="height"]');
    this.btnSiguiente = page.locator('button:has-text("Siguiente"), button:has-text("Continuar")');
  }

  async llenarPerfil(nombre: string, peso: string, talla: string) {
    await this.inputFullName.fill(nombre);
    await this.inputPeso.fill(peso);
    await this.inputTalla.fill(talla);
    await this.btnSiguiente.click();
  }
}