# ⚛️ Web-for-agents

Frontend da aplicação Web-for-agents, construído com uma stack moderna de React e Vite, focada em produtividade, performance e qualidade de código.

---

## 🚀 Tecnologias

Este projeto utiliza um conjunto de ferramentas modernas para o desenvolvimento de interfaces:

- **Framework & Build:**

  - **React 19:** Biblioteca principal para a construção da UI.
  - **Vite:** Ferramenta de build extremamente rápida.
  - **TypeScript:** Para um código mais robusto e seguro.

- **Estilização & UI:**

  - **Tailwind CSS v4:** Framework de estilização Utility-First.
  - **Arquitetura shadcn/ui:** Componentes construídos com Radix UI, CVA e `tailwind-merge`.
  - **Ícones:** `lucide-react`.

- **Roteamento:**

  - **React Router DOM:** Para navegação no estilo SPA (Single Page Application).

- **Gerenciamento de Dados:**

  - **TanStack Query (React Query):** Para gerenciamento de estado do servidor (cache, revalidação, etc.).

- **Qualidade de Código:**
  - **BiomeJS:** Ferramenta unificada para formatação e linting.

---

## 🏛️ Arquitetura

O projeto segue uma arquitetura modular com:

- **Separação de Responsabilidades:** Componentes de UI, hooks, páginas e serviços são separados em pastas distintas.
- **Componentização:** A UI é dividida em componentes pequenos, reutilizáveis e, em muitos casos, seguindo a filosofia "headless".
- **Context API:** Utilizada para gerenciar estados globais como Autenticação (`AuthProvider`) e Tema (`ThemeProvider`).
- **Roteamento Protegido:** Separação entre rotas públicas e privadas para controle de acesso.

---

## ⚙️ Setup e Configuração

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (instalado com o Node.js)

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd agents-web
```
