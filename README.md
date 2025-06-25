# ⏱️ Controle de Tempo - Acessibilidade na Web com WCAG 2.2

## 👥 Grupo e Integrantes

<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: nowrap;">
  <a href="https://github.com/artrsousa1" style="text-align: center; display: flex; flex-direction: column; align-items: center;">
    <img src="https://github.com/artrsousa1.png" width="100px" style="border-radius: 50%;" alt="Arthur Ribeiro" />
    <sub><b>Arthur Ribeiro</b></sub>
  </a>

  <a href="https://github.com/matix0" style="text-align: center; display: flex; flex-direction: column; align-items: center;">
    <img src="https://github.com/matix0.png" width="100px" style="border-radius: 50%;" alt="Mateus Vieira" />
    <sub><b>Mateus Vieira</b></sub>
  </a>

  <a href="https://github.com/Joaovitor045" style="text-align: center; display: flex; flex-direction: column; align-items: center;">
    <img src="https://github.com/Joaovitor045.png" width="100px" style="border-radius: 50%;" alt="João Vitor" />
    <sub><b>João Vitor</b></sub>
  </a>

  <a href="https://github.com/lfelipebessa" style="text-align: center; display: flex; flex-direction: column; align-items: center;">
    <img src="https://github.com/lfelipebessa.png" width="100px" style="border-radius: 50%;" alt="Luiz Bessa" />
    <sub><b>Luiz Bessa</b></sub>
  </a>

  <a href="https://github.com/andremeyerr" style="text-align: center; display: flex; flex-direction: column; align-items: center;">
    <img src="https://github.com/andremeyerr.png" width="100px" style="border-radius: 50%;" alt="Andre Meyer" />
    <sub><b>Andre Meyer</b></sub>
  </a>
</div>


---

## 📝 Critérios WCAG 2.2 Implementados

| Critério WCAG 2.2                              | Descrição                                                                                                                                                                                                                                                                                          |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **2.2.1 Tempo Ajustável**                     | Garante que limites de tempo possam ser **desligados**, **ajustados** ou **prolongados**, exceto em situações essenciais ou em tempo real. [[WCAG 2.2 - 2.2.1](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#tempo-ajustavel)]                                                                  |
| **2.2.2 Colocar em Pausa, Parar, Ocultar**    | Permite ao usuário **pausar, parar ou ocultar** conteúdos que se movem, piscam ou atualizam automaticamente, evitando distrações ou barreiras. [[WCAG 2.2 - 2.2.2](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#colocar-em-pausa-parar-ocultar)]                                              |

---

## 🎯 Importância e Público-Alvo

Esses critérios asseguram que **usuários não percam informações importantes ou funcionalidades devido a limitações de tempo ou conteúdo em movimento**, beneficiando:

- **Pessoas com mobilidade reduzida** que precisam de mais tempo para interagir com a interface.
- **Pessoas com deficiências cognitivas ou neurológicas** que podem se distrair ou se sentir pressionadas por contagens regressivas.
- **Pessoas com baixa visão ou que usam leitores de tela**, que precisam de mais tempo para interpretar as informações.
- **Usuários em dispositivos móveis** que podem perder interações por fatores externos (ex.: ligação, notificação).

Esses critérios estão alinhados com o princípio da **Operabilidade (O)** da WCAG 2.2, garantindo que todos os usuários possam **navegar e interagir com o conteúdo sem limitações arbitrárias**.

---

## 💻 Técnicas de Programação Utilizadas

| Técnica | Descrição |
|--------|-----------|
| ⏳ **Controle de tempo com `setInterval`** | Implementa um contador regressivo que simula o tempo de uso da sessão. Quando o tempo expira, um modal é exibido. |
| 🕹️ **Botão para prolongar tempo (`handleAddTime`)** | Permite ao usuário **prolongar o tempo em blocos de 15 minutos** com um clique, atendendo à exigência da WCAG 2.2.1. |
| 🗓️ **Ignorar limite até o final do dia (`handleIgnoreLimit`)** | Dá ao usuário a opção de **ignorar completamente o limite de tempo**, o que equivale a "desligar" o tempo conforme a norma. |
| ⚙️ **Configuração personalizável de tempo** | O usuário pode ajustar o tempo padrão da sessão escolhendo **valor e unidade (minutos ou segundos)** via um modal de configurações. Isso atende à opção “Ajustar” da WCAG 2.2.1. |
| 📢 **Modal acessível com `Dialog`** | A expiração do tempo é comunicada por meio de um modal visual, o que **interrompe o fluxo de forma previsível e clara**, permitindo ação direta do usuário. |
| 👁️‍🗨️ **Iconografia e feedback visual com imagens e ícones** | Utiliza elementos visuais (ex: ampulheta) para reforçar o contexto da expiração, útil para usuários com limitações cognitivas. |
| ⌨️ **Componentes acessíveis com navegação por teclado** | Todos os elementos interativos (botões, inputs, selects) seguem padrões de acessibilidade baseados na biblioteca `shadcn/ui`, que é compatível com **teclado e leitores de tela**. |

---

## 🚀 Como Rodar o Código

### ✅ Requisitos

- Node.js instalado (versão 16 ou superior recomendada).
- Gerenciador de pacotes: `npm` ou `yarn`.
- Navegador moderno (Google Chrome, Firefox, Edge, etc.).

### ✅ Passo a Passo

1. Clone este repositório:

```bash
git clone https://github.com/artrsousa1/wcag-timing.git
```

2. Abra o diretório do projeto:

```bash
cd wcag-timing
```

3. Instale as dependências:

```bash
npm install
````

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra o navegador e acesse:

```
http://localhost:5173
```

---

## 📚 Referências

- **W3C. Critério de Sucesso 2.2.1: Tempo Ajustável.** Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 2023. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#tempo-ajustavel](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#tempo-ajustavel). Acesso em: 20 jun. 2025.

- **W3C. Critério de Sucesso 2.2.2: Colocar em Pausa, Parar, Ocultar.** Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 2023. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#colocar-em-pausa-parar-ocultar](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#colocar-em-pausa-parar-ocultar). Acesso em: 20 jun. 2025.

