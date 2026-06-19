# Portal de Emergência

## Descrição

O **Portal de Emergência** é uma plataforma web desenvolvida em contexto académico que simula uma loja online especializada em produtos e kits de preparação para situações de emergência.

O principal objetivo do projeto é promover a importância da prevenção e da preparação antecipada, disponibilizando uma solução digital intuitiva que permite aos utilizadores explorar produtos essenciais, gerir encomendas e simular uma experiência de compra completa.

O projeto integra funcionalidades típicas de uma plataforma de comércio eletrónico, incluindo autenticação de utilizadores, carrinho de compras e gestão de encomendas.

---

## Objetivos do projeto

- Desenvolver uma plataforma web funcional e intuitiva.
- Simular uma experiência de comércio eletrónico.
- Sensibilizar para a importância da preparação perante situações de emergência.
- Aplicar conhecimentos de desenvolvimento web.
- Implementar mecanismos de gestão de utilizadores, produtos e encomendas.

---

## Funcionalidades

### Gestão de produtos

- Catálogo de produtos
- Catálogo de kits de emergência
- Páginas individuais de cada produto
- Organização dos produtos por categorias

### Gestão de utilizadores

- Registo de utilizadores
- Sistema de autenticação
- Área pessoal do utilizador

### Gestão de compras

- Carrinho de compras
- Aplicação de códigos de desconto
- Simulação de métodos de pagamento
- Consulta do histórico de encomendas

---

## Tecnologias utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| HTML5 | Estruturação da aplicação |
| CSS3 | Estilização e design |
| JavaScript | Lógica e interatividade |
| LocalStorage | Armazenamento local |

---

## Estrutura do projeto

```text
Portal-de-emergencia/
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js
│       └── config.js
│
├── index.html
├── googleed6b2cd84610f0cc.html
│
├── account/
│   ├── login.html
│   ├── area-utilizador.html
│   └── minhas-encomendas.html
│
├── docs/
│   └── README_FUNCIONAL.md
│
├── pages/
│   ├── sobre.html
│   ├── contacto.html
│   ├── emergencias.html
│   ├── parcerias.html
│   ├── envio-devolucao.html
│   ├── politica-loja.html
│   └── metodos-pagamento.html
│
├── products/
│   └── páginas individuais de produtos e kits
│
├── shop/
│   ├── loja.html
│   ├── kits.html
│   ├── produtos-individuais.html
│   └── carrinho.html
│
├── .gitignore
└── README.md
```

A raiz fica reservada para a entrada principal do site, ficheiros de configuração/documentação e verificações externas. As páginas foram agrupadas por responsabilidade: conta, loja, páginas institucionais e produtos.

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/LuiscnFigueira/Portal-de-emergencia.git
```

### 2. Entrar na pasta do projeto

```bash
cd Portal-de-emergencia
```

### 3. Executar a aplicação

Abrir o ficheiro `index.html` diretamente no navegador ou utilizar uma extensão como **Live Server** no Visual Studio Code.

---

## Gestão do carrinho

O carrinho utiliza o `localStorage` para armazenar temporariamente os produtos adicionados pelo utilizador durante a navegação.

As funcionalidades implementadas permitem simular uma experiência completa de compra, desde a seleção dos produtos até à consulta das encomendas efetuadas.

---

## Códigos de desconto

O projeto inclui alguns códigos promocionais simulados.

```text
EMERGENCIA10
ISCAC15
PORTAL5
```

---

## Possíveis melhorias futuras

- Integração com uma base de dados dedicada
- Implementação de métodos de pagamento reais
- Reforço dos mecanismos de autenticação
- Dashboard administrativa
- Sistema de notificações
- Melhorias de acessibilidade
- Otimização da experiência do utilizador
- Desenvolvimento de uma versão responsiva mais avançada

---

## Limitações

Este projeto foi desenvolvido exclusivamente para fins académicos.

Não deve ser utilizado em ambiente de produção sem a implementação de mecanismos adicionais de:

- Segurança
- Proteção de dados
- Validação de informação
- Gestão de acessos
- Infraestrutura backend dedicada

---

## Autor

**Luís Figueira**

Licenciatura em Ciência de Dados para a Gestão

ISCAC – Coimbra Business School

---

## Licença

Este projeto foi desenvolvido para fins académicos e educativos.

---

## Última atualização

16/06/2026
