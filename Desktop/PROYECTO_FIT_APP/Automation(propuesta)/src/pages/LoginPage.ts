import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly inputEmail: Locator;
  readonly inputPassword: Locator;
  readonly btnIngresar: Locator;
  readonly checkboxRecordarme: Locator;
  readonly msgError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputEmail = page.locator('input[type="email"], input[placeholder*="universidad.edu"]');
    this.inputPassword = page.locator('input[type="password"]');
    this.btnIngresar = page.locator('button:has-text("Ingresar")');
    this.checkboxRecordarme = page.locator('input[type="checkbox"]');
    this.msgError = page.locator('.error-message, .toast-error, [role="alert"]');
  }

  async navegarLogin() {
    await this.page.goto('http://localhost:4200/auth/login');
  }

  async iniciarSesion(email: string, pass: string, recordar: boolean = false) {
    await this.inputEmail.fill(email);
    await this.inputPassword.fill(pass);
    if (recordar) {
      await this.checkboxRecordarme.check();
    }
    await this.btnIngresar.click();
  }
}