# 🧩 Template de Desenvolvimento de Sites – SiteContábil

Para padronizar e facilitar o desenvolvimento e as alterações em novos sites, criamos este **template** que já vem com os plugins e bibliotecas que mais usamos no dia a dia. Isso ajuda a manter a organização dos nossos projetos e tornar o desenvolvimento muito mais ágil. 🚀

---

## 📁 Acesse o template completo

🔗 [Template no Google Drive](https://drive.google.com/file/d/1rzV4ZqM_cB58wbAUDhjCgXUu3yaZDuwP/view?usp=sharing)

---

## ⚙ Estrutura do Projeto

```
├── .vscode/
│   └── tasks.json         # Configurações automáticas para o VSCode
├── build.js               # Script para gerar pastas/arquivos iniciais
├── package.json           # Dependências NPM do projeto
```

- `tasks.json`: configura tarefas automatizadas no VSCode.
- `build.js`: script que cria a estrutura base do projeto automaticamente.
- `package.json`: lista as dependências usadas (como Bootstrap, Sass, etc).

> 💡 Ao abrir o projeto no VSCode, a tarefa configurada já executa o script e instala todas as dependências.

---

## 🎨 SCSS e Organização de Estilos

- `_variables.scss`: contém variáveis reutilizáveis como:
  ```scss
  $urlImg: '../images/';
  background-image: url(#{$urlImg}sua-imagem.png);
  ```
  Inclui também espaçamentos extras (`mt-6` a `mt-10`) que o Bootstrap não oferece por padrão.

- `_base.scss`: funciona como um reset/base para os estilos.

- **Organização no estilo do Bootstrap**: cada componente em seu próprio arquivo, todos importados no `style.scss`.

> ⚠ **Importante**: use as **classes do Bootstrap sempre que possível**. Já estão prontas para uso e são facilmente customizáveis pelas variáveis (como `$primary`).

---

## 📦 Instalação de Dependências

As dependências serão instaladas automaticamente pelo `tasks.json`. Caso precise instalar outras manualmente:

```bash
npm install nome-da-biblioteca
```

Exemplo:
```bash
npm install bootstrap
```

> Use o Google ou ChatGPT se precisar saber como instalar algo. 😄

---

## 🚫 Sobre a pasta `node_modules`

Essa pasta será criada automaticamente ao instalar as dependências. **Não envie ela para o servidor**, pois é muito pesada.

Antes de subir o site, **apague a pasta `node_modules`**.

> Quando precisar editar o site futuramente, basta rodar a tarefa novamente no VSCode que tudo será reinstalado.

---

## ✅ Conclusão

Sigam esse template e a estrutura definida para garantir agilidade, padronização e facilidade de manutenção nos projetos.

Qualquer dúvida, usem o Google ou... me chamem (mas só se não tiver jeito 😅).

Abraços! ✌️


---

## 👨‍💻 Autores

Este template foi desenvolvido por:

- **Carlos**
- **Marlon**

Contribuições, sugestões e melhorias são sempre bem-vindas!
