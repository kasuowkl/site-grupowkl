// Confere index.html e desenvolvimento.html do site-grupowkl num navegador real (headless).
const path = require('path');
const { chromium, webkit } = require(path.join(process.env.PW_DIR, 'node_modules', 'playwright'));

const SITE = process.env.SITE_DIR;
const SAIDA = process.env.SAIDA_DIR;
const url = (f) => 'file:///' + path.join(SITE, f).replace(/\\/g, '/');

(async () => {
  let falhas = 0;
  for (const [nomeMotor, motor] of [['chromium', chromium], ['webkit', webkit]]) {
    const nav = await motor.launch();
    for (const largura of [1400, 390]) {
      for (const pagina of ['desenvolvimento.html', 'index.html']) {
        const ctx = await nav.newContext({ viewport: { width: largura, height: 900 } });
        const p = await ctx.newPage();
        const erros = [];
        p.on('pageerror', (e) => erros.push(e.message));
        p.on('console', (m) => { if (m.type() === 'error' && !/fonts\.g/.test(m.text())) erros.push(m.text()); });
        await p.goto(url(pagina));
        await p.waitForTimeout(600);
        const m = await p.evaluate(() => {
          document.querySelectorAll('.fade-up').forEach((el) => { el.style.animation = 'none'; el.style.opacity = 1; });
          const sw = document.documentElement.scrollWidth, cw = document.documentElement.clientWidth;
          const linkDev = [...document.querySelectorAll('a[href="desenvolvimento.html"]')].filter((a) => a.checkVisibility()).length;
          const cards = document.querySelectorAll('article.card').length;
          return { rolagemLateral: sw > cw, sw, cw, linkDevVisivel: linkDev, cards };
        });
        const ok = !m.rolagemLateral && erros.length === 0 && (pagina !== 'index.html' || m.linkDevVisivel >= 1);
        if (!ok) falhas++;
        console.log(`${ok ? 'OK ' : 'FALHA'} ${nomeMotor} ${largura}px ${pagina}: scroll ${m.sw}/${m.cw}, cards ${m.cards}, links p/ dev visiveis ${m.linkDevVisivel}, erros ${JSON.stringify(erros)}`);
        if (nomeMotor === 'chromium') await p.screenshot({ path: path.join(SAIDA, `${pagina.replace('.html', '')}-${largura}.png`), fullPage: true });
        await ctx.close();
      }
    }
    await nav.close();
  }
  process.exit(falhas ? 1 : 0);
})();
