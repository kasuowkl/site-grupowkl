// Uso: PAGINA=index.html ESPERADO=6 node conferir-pagina-modais.js  (BASE=https://... para testar no ar)
const path = require('path');
const { chromium, webkit } = require(path.join(process.env.PW_DIR, 'node_modules', 'playwright'));
const PAGINA = process.env.PAGINA, ESPERADO = Number(process.env.ESPERADO);
const alvo = process.env.BASE
  ? process.env.BASE + PAGINA + '?x=' + Date.now()
  : 'file:///' + path.join(process.env.SITE_DIR, PAGINA).split(path.sep).join('/');
let falhas = 0;
const ok = (c, m) => { if (!c) falhas++; if (!c || process.env.VERBOSO) console.log((c ? 'OK   ' : 'FALHA') + ' ' + m); };

(async () => {
  for (const [nome, motor] of [['chromium', chromium], ['webkit', webkit]]) {
    const nav = await motor.launch();
    for (const largura of [1400, 390]) {
      const p = await nav.newPage({ viewport: { width: largura, height: 850 } });
      const erros = [];
      p.on('pageerror', (e) => erros.push(e.message));
      await p.goto(alvo, { waitUntil: 'networkidle' });
      await p.evaluate(() => document.querySelectorAll('.fade-up').forEach((el) => { el.style.animation = 'none'; el.style.opacity = 1; }));
      const ids = await p.$$eval('.card[data-detalhe]', (cs) => cs.map((c) => c.dataset.detalhe));
      const semTexto = await p.$$eval('.card[data-detalhe]', (cs) => cs.filter((c) => !c.querySelector('.card-mais')).map((c) => c.dataset.detalhe));
      ok(ids.length === ESPERADO && new Set(ids).size === ids.length, `${nome} ${largura}px ${ids.length} cartões com detalhe, sem repetir (esperado ${ESPERADO})`);
      ok(semTexto.length === 0, `${nome} ${largura}px todo cartão marcado tem texto (sem texto: ${semTexto})`);
      let abriram = 0;
      for (const id of ids) {
        const card = p.locator(`.card[data-detalhe="${id}"]`);
        await card.scrollIntoViewIfNeeded();
        await card.locator('p').first().click();
        const a = await p.evaluate(() => {
          const d = document.querySelector('dialog.detalhe'); const r = d.getBoundingClientRect();
          return { open: d.open, titulo: d.querySelector('#detalhe-titulo').textContent, secoes: d.querySelectorAll('.detalhe-secao').length, cabe: r.left >= 0 && r.right <= innerWidth + 1, zap: d.querySelector('.detalhe-rodape a:last-child').href };
        });
        if (a.open && a.titulo && a.secoes > 0 && a.cabe && a.zap.includes('wa.me/5592984629701?text=')) abriram++;
        else console.log('   problema em', id, JSON.stringify(a));
        await p.keyboard.press('Escape');
        if (await p.evaluate(() => document.querySelector('dialog.detalhe').open)) { falhas++; console.log('   Esc não fechou', id); }
      }
      ok(abriram === ids.length, `${nome} ${largura}px ${abriram}/${ids.length} modais abriram e fecharam com Esc`);
      ok(!(await p.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)), `${nome} ${largura}px sem rolagem lateral`);
      ok(erros.length === 0, `${nome} ${largura}px sem erro de JS ${JSON.stringify(erros)}`);
      if (process.env.FOTO && nome === 'chromium') {
        const card = p.locator(`.card[data-detalhe="${process.env.FOTO}"]`);
        await card.scrollIntoViewIfNeeded(); await card.locator('p').first().click(); await p.waitForTimeout(600);
        await p.screenshot({ path: path.join(process.env.SAIDA_DIR, `modal-${PAGINA.replace('.html', '') || 'raiz'}-${largura}.png`) });
      }
      await p.close();
    }
    await nav.close();
  }
  console.log(falhas ? `${falhas} FALHA(S)` : 'TUDO OK');
  process.exit(falhas ? 1 : 0);
})();
