# 🚀 Zoner.JS — Next-gen JavaScript Framework by ZaterSoft

Zoner.JS é um framework JavaScript moderno, minimalista e ultra-rápido, criado para desenvolver desde **aplicações simples e intuitivas** até **grandes sistemas corporativos**.  
Ele combina o melhor de três mundos:

- **Simplicidade do Svelte**
- **Facilidade do Vue.js**
- **Organização escalável do Angular**
- **E tudo escrito em TypeScript**

Zoner.JS foi projetado para ser o **framework oficial da ZaterSoft** para aplicações web modernas, modulares e de alto desempenho.

---

## ✨ Características

### 🔹 **1. Mais simples que Vue.js**
API direta, sem complexidade, sem curva dolorosa.

### 🔹 **2. Performance e reatividade estilo Svelte**
Atualização inteligente do DOM com Signals e reatividade baseada em estado.

### 🔹 **3. Estrutura modular inspirada no Angular**
- Módulos  
- Componentes  
- Services  
- Rotas (em desenvolvimento)

Perfeito para sistemas grandes.

### 🔹 **4. 100% TypeScript**
Veio para ser enterprise de verdade.

---

## 📁 Estrutura do Projeto

```
zonerjs-starter/
├── src/
│   ├── core/           # núcleo reativo do framework
│   ├── app/            # AppModule e AppComponent
│   └── main.ts         # bootstrap da aplicação
├── index.html
├── tsconfig.json
├── package.json
└── vite.config.ts
```

---

## 🚀 Como rodar o projeto

### 1. Instale dependências
```bash
npm install
```

### 2. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

### 3. Abra no navegador
```
http://localhost:5173
```

### 4. Build de produção
```bash
npm run build
```

---

## 🧩 Exemplo de Componente Zoner.JS

```ts
import { component, signal, html } from './core/index';

export const AppComponent = component('app-root', () => {
  const count = signal(0);
  const increment = () => count.set(count.get() + 1);

  return () => html`
    <main>
      <h1>Zoner.JS</h1>
      <p>Contador: ${count}</p>
      <button @click=${increment}>+1</button>
    </main>
  `;
});
```

---

## 🛠 Roadmap do Framework

- ✔ Core reativo (Signals, Effects, Computed)
- ✔ Componentes
- ✔ Módulos
- ✔ Tema claro/escuro
- ⏳ Router modular
- ⏳ Diretivas (@click, @model, @show)
- ⏳ Zoner CLI (`zoner create app`)
- ⏳ DevTools
- ⏳ Documentação oficial
- ⏳ Página oficial do framework

---

## 🧑‍💻 Engenharia e Desenvolvimento

**Desenvolvido por:**  
✨ **ZaterSoft**  
👨‍💻 **Engenheiro: Melquisedeque C. Campos (Meck)**  

---

## 📄 Licença

MIT – Livre para usar, modificar e distribuir.

---

## ⭐ Contribua

Sinta-se livre para abrir **issues**, enviar **pull requests** e colaborar com o crescimento do Zoner.JS.  
O futuro do framework está sendo construído agora — e você faz parte disso!
