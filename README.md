# site-grupowkl

Landpage institucional do **Grupo WKL** — página única, estática, sem build e sem backend.

**No ar:** https://site.grupowkl.com.br

## O que é

Apresentação dos serviços de TI: servidores e virtualização, segurança de rede, backup e
continuidade, redes/Wi-Fi/telefonia, CFTV e monitoramento, sistemas e desenvolvimento,
documentação e gestão, tecnologias e contato.

Cada página é autossuficiente — CSS e JS embutidos, sem dependência além das fontes do Google.

| Página | O que é |
|--------|---------|
| `index.html` | A landpage dos serviços |
| `desenvolvimento.html` | **Desenvolvimento — em aprendizagem** (27/09/2026): vitrine dos sistemas (no ar · em construção · laboratório · ideias). Tom de aprendizado, sem prometer domínio. Ligada pelo menu e pela seção Sistemas |
| `detalhes.js` + `detalhes.css` | Modal de detalhes: cartão com `data-detalhe="<id>"` abre um modal com o texto de `window.DETALHES[id]` e o botão "Falar sobre isso" (WhatsApp com o assunto) |
| `detalhes-desenvolvimento.js` | Os textos dos modais da página Desenvolvimento |

> ⚠️ A Cloudflare guarda `.css` e `.js` por **4 horas**. Mudou um deles? **Suba o `?v=`** na página que o
> referencia, senão o visitante continua vendo a versão antiga.

## Onde roda

Servidor próprio com Nginx, publicado pela internet por um túnel da Cloudflare (sem porta aberta
no firewall). Os detalhes de servidor ficam na documentação interna, não neste repositório público.

## Deploy

```bash
HOST=user@<servidor> DEST=<pasta do site> ./deploy.sh
```

O `deploy.sh` faz backup no servidor (`~/backups-site/<data>`), envia como `.novo`, **confere o MD5**
e só então troca com `mv` (atômico — quem abre a página nunca pega arquivo pela metade). Imprime o
rollback no fim. Página nova entra na lista `ARQUIVOS` do script.

Estático pelo Nginx — sem PM2, sem restart. O server block manda `Cache-Control: no-cache`,
então basta recarregar a página.

## Notas

- **Conteúdo higienizado:** sem IP, sem credencial e sem nome de cliente. Conferido por `grep`
  antes da primeira publicação — manter assim, o repositório existe para ser publicável.
- Os endereços de e-mail chegam ao visitante **ofuscados** pelo Scrape Shield da Cloudflare
  (`/cdn-cgi/l/email-protection`). É a borda que reescreve, não o arquivo: comparar o HTML
  público com o local vai acusar diferença, e isso é esperado.
