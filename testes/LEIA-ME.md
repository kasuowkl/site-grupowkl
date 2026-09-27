# Testes do site (navegador real)

Rodam com o Playwright (Chromium + WebKit). `PW_DIR` aponta para uma pasta que tenha `node_modules/playwright`
com os navegadores instalados; `SITE_DIR` é esta pasta do repositório; `SAIDA_DIR` recebe as fotos.

| Script | Confere |
|--------|---------|
| `conferir-site.js` | As 2 páginas a 1400 e 390 px: sem erro de JS, sem rolagem lateral, links para a página Desenvolvimento visíveis |
| `conferir-modais.js` | Menu em **uma linha** de 981 a 1920 px e os 13 modais da Desenvolvimento (abrir, X, Esc, fundo, Enter, link do cartão) |
| `conferir-pagina-modais.js` | Qualquer página: `PAGINA=index.html ESPERADO=39` — todo cartão marcado abre o seu modal. Com `BASE=https://site.grupowkl.com.br/` testa **no ar** |
| `conferir-no-ar.js` | O site publicado: menu em uma linha e modal abrindo |

```bash
PW_DIR=<pasta com playwright> SITE_DIR=<este repo> SAIDA_DIR=<pasta de fotos> PAGINA=index.html ESPERADO=39 node testes/conferir-pagina-modais.js
```

Rodar **antes** do `deploy.sh` (local) e **depois** (com `BASE=`, no ar). Mudou cartão, menu ou modal → rodar os quatro.
