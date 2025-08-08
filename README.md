<h1 align="center">
    Amigo Secreto
</h1>

<div align="center">

![Maintenance](https://img.shields.io/maintenance/yes/2025?style=for-the-badge)
![License MIT](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

</div>

## 📖 Descrição

Um aplicativo web simples e interativo para realizar sorteios de amigo secreto. Desenvolvido com HTML, CSS e JavaScript vanilla.

## 📋 Funcionalidades

- **Adicionar amigos**: Digite nomes na lista de participantes
- **Remover amigos**: Exclua participantes da lista individualmente
- **Validação de entrada**: Previne nomes duplicados e entradas vazias
- **Sorteio aleatório**: Seleciona um participante aleatoriamente
- **Interface responsiva**: Design adaptável para diferentes dispositivos
- **Feedback visual**: Estados de botões e alertas informativos

## 🚀 Como usar

1. **Adicionar participantes**:

   - Digite o nome de um amigo no campo de texto
   - Clique em "Adicionar" ou pressione Enter
   - O nome será adicionado à lista abaixo

2. **Gerenciar a lista**:

   - Use o botão de lixeira (🗑️) para remover participantes
   - Nomes duplicados não são permitidos

3. **Realizar o sorteio**:
   - Clique no botão "Sortear amigo" quando tiver pelo menos um participante
   - O resultado aparecerá destacado na tela

## 🛠️ Estrutura do projeto

```
├── index.html              # Página principal
├── README.md               # Documentação do projeto
├── assets/
│   └── images/
│       ├── amigo-secreto.png        # Logo do aplicativo
│       └── play_circle_outline.png  # Ícone do botão sortear
├── scripts/
│   └── app.js              # Lógica JavaScript
└── styles/
    └── style.css           # Estilos CSS
```

## 💻 Tecnologias utilizadas

- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização e layout responsivo
- **JavaScript**: Funcionalidades interativas
- **Font Awesome**: Ícones da interface
- **Google Fonts**: Tipografia (Inter e Merriweather)

## 🎨 Design

O projeto utiliza um esquema de cores moderno com:

- **Azul primário** (`#4b69fd`): Fundo principal
- **Bege claro** (`#fff9eb`): Seção de conteúdo
- **Laranja** (`#fe652b`): Botões de ação
- **Cinza** (`#444444`): Textos

## 📱 Responsividade

A interface é totalmente responsiva, adaptando-se a diferentes tamanhos de tela através de:

- Layout flexível
- Unidades relativas
- Design mobile-first

## 🔧 Principais funções JavaScript

- [`adicionarAmigo()`](scripts/app.js): Adiciona um novo participante à lista
- [`removerAmigo(index)`](scripts/app.js): Remove um participante específico
- [`sortearAmigo()`](scripts/app.js): Realiza o sorteio aleatório
- [`atualizarLista()`](scripts/app.js): Atualiza a exibição da lista
- [`atualizarBotaoSortear()`](scripts/app.js): Controla o estado do botão de sortear
- [`atualizarBotaoAdicionar()`](scripts/app.js): Controla o estado do botão de adicionar

## 🌐 Como executar

1. Clone ou baixe os arquivos do projeto
2. Abra o arquivo [`index.html`](index.html) em um navegador web
3. Comece a adicionar nomes e divirta-se!

## ✨ Características especiais

- **Validação em tempo real**: Botões são habilitados/desabilitados conforme necessário
- **Feedback imediato**: Alertas para ações inválidas
- **Acessibilidade**: Uso de ARIA labels e roles
- **Experiência fluida**: Transições e hover effects nos elementos interativos

## 👤 Sobre o Desenvolvedor

<div align="center">

<table>
  <tr>
    <td align="center">
        <br>
        <a href="https://github.com/0nF1REy" target="_blank">
          <img src="./readme_images/alan-ryan.jpg" height="160" alt="Foto de Alan Ryan" style="border-radius:50%;border:3px solid #0077B5;">
        </a>
        </p>
        <a href="https://github.com/0nF1REy" target="_blank">
          <strong>Alan Ryan</strong>
        </a>
        </p>
        ☕ Peopleware | Tech Enthusiast | Code Slinger ☕
        <br>
        Apaixonado por código limpo, arquitetura escalável e experiências digitais envolventes
        </p>
          Conecte-se comigo:
        </p>
        <a href="https://www.linkedin.com/in/alan-ryan-b115ba228" target="_blank">
          <img src="https://img.shields.io/badge/LinkedIn-Alan_Ryan-0077B5?style=flat&logo=linkedin" alt="LinkedIn">
        </a>
        <a href="https://gitlab.com/alanryan619" target="_blank">
          <img src="https://img.shields.io/badge/GitLab-@0nF1REy-FCA121?style=flat&logo=gitlab" alt="GitLab">
        </a>
        <a href="mailto:alanryan619@gmail.com" target="_blank">
          <img src="https://img.shields.io/badge/Email-alanryan619@gmail.com-D14836?style=flat&logo=gmail" alt="Email">
        </a>
        </p>
    </td>
  </tr>
</table>

</div>

---

## 📫 Contribuir

Contribuições são muito bem-vindas! Se você deseja contribuir com o projeto, por favor, siga estes passos:

1.  **Faça um Fork** do repositório.

2.  **Crie uma nova Branch** para sua feature ou correção:

    ```bash
    git checkout -b feature/nome-da-feature
    ```

3.  **Faça suas alterações** e realize o commit:

    ```bash
    git commit -m "feat: Adiciona nova feature"
    ```

4.  **Envie suas alterações** para o seu fork:

    ```bash
    git push origin feature/nome-da-feature
    ```

5.  **Abra um pull request** para a branch `main` do repositório original.

## 📚 Recursos Adicionais

- **<a href="https://www.atlassian.com/br/git/tutorials/making-a-pull-request" target="_blank">📝 Como criar um Pull Request</a>**

- **<a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">💾 Padrão de Commits Convencionais</a>**

## 📜 Licença

Este projeto está sob a **licença MIT**. Consulte o arquivo **[LICENSE](LICENSE)** para obter mais detalhes.

> ℹ️ **Aviso de Licença:** © 2025 Alan Ryan da Silva Domingues. Este projeto está licenciado sob os termos da licença MIT. Isso significa que você pode usá-lo, copiá-lo, modificá-lo e distribuí-lo com liberdade, desde que mantenha os avisos de copyright.

⭐ Se este repositório foi útil para você, considere dar uma estrela!
