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

## Onde roda

| Item | Valor |
|------|-------|
| Servidor | SRV-NGINX (ambiente **Casa**) |
| Caminho | `/var/www/html/site-wkl/` |
| Nginx | server block `site-wkl`, **porta 8080** |
| Externo | rota do túnel Cloudflare `site.grupowkl.com.br` → `http://localhost:8080` |

A porta 8080 é proposital: a 80 é do `portal-casa` (`default_server`) e não deve ser tocada.

## Deploy

```bash
HOST=user@<SRV-NGINX> ./deploy.sh
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
