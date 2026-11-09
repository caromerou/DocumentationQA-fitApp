import { Page, Locator } from '@playwright/test';

export class ParqPage {
  readonly page: Page;
  readonly radioSiCardio: Locator;
  readonly radioNoCardio: Locator;
  readonly btnContinuar: Locator;

  constructor(page: Page) {
    this.page = page;
    // Selecciona las opciones del cuestionario PAR-Q
    this.radioNoCardio = page.locator('input[type="radio"][value="no"]').first();
    this.radioSiCardio = page.locator('input[type="radio"][value="si"]').first();
    this.btnContinuar = page.locator('button:has-text("Siguiente"), button:has-text("Continuar")');
  }

  async responderSinRiesgos() {
    // Seleccionar 'No' en las preguntas médicas (Camino Feliz)
    const radiosNo = await this.page.locator('input[type="radio"][value="No"], input[value="no"]').all();
    for (const radio of radiosNo) {
      await radio.click();
    }
    await this.btnContinuar.click();
  }
}