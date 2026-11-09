import { Page, Locator } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly btnComenzarExperiencia: Locator;
  readonly btnExplorarPlataforma: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnComenzarExperiencia = page.locator('text=Comenzar experiencia');
    this.btnExplorarPlataforma = page.locator('text=Explorar plataforma');
  }

  async navegar() {
    await this.page.goto('http://localhost:4200/');
  }

  async clickComenzar() {
    await this.btnComenzarExperiencia.click();
  }
}