import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PerfilPage } from '../pages/PerfilPage';
import { ParqPage } from '../pages/ParqPage';

test.describe('Módulo 5: Cuestionario PAR-Q y Reglas de Negocio', () => {

  test('CP-17: Cuestionario PAR-Q sin riesgos (Camino Feliz)', async ({ page }) => {
    const login = new LoginPage(page);
    const perfil = new PerfilPage(page);
    const parq = new ParqPage(page);

    await login.navegarLogin();
    await login.iniciarSesion('carora@universidad.edu', 'Password123*');
    
    await perfil.llenarPerfil('Carolina Romero', '70', '1.75');
    
    // Responder negativamente a riesgos médicos
    await parq.responderSinRiesgos();
    
    // Validar asignación de rutina estándar
    await expect(page).toHaveURL(/.*historial|.*dashboard/);
  });

});