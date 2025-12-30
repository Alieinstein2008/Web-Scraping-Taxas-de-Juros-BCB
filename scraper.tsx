// @ts-check
const playwright = require('playwright');

(async () => {
  
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.bcb.gov.br/estatisticas/reporttxjuros/?codigoSegmento=1&codigoModalidade=218101&historicotaxajurosdiario_atual_page=1&tipoModalidade=D&InicioPeriodo=2025-12-09',  { waitUntil: 'load' });
    await page.locator('table').waitFor({ state: 'visible' });
    const texts = await page.locator('table tr:nth-child(n) > td:nth-child(4)').allTextContents();
    console.log(texts);
    await page.screenshot({ path: `example-${playwright.chromium.name()}.png` });
    
   
    await browser.close();
  
})();
