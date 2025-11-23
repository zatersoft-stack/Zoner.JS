import { component, signal, effect } from '../zoner';

export const AppComponent = component('app-root', () => {
  const count = signal(0);
  const themeLabel = signal<'Claro' | 'Escuro'>('Claro');

  return () => ({
    template: `
      <div class="app-shell">
        <header class="hero">
          <div class="hero-inner">
            <div class="hero-text">
              <div class="hero-top-row">
                <span class="badge">Zoner.JS • Preview</span>
                <button class="btn-ghost theme-toggle" data-action="theme-toggle">
                  Tema: <span data-bind="theme-label"></span>
                </button>
              </div>

              <h1>Framework JavaScript para quem ama simplicidade.</h1>
              <p class="hero-subtitle">
                Mais fácil que Vue, simples como Svelte e organizado como Angular.
                Tudo isso em TypeScript, pensado para sistemas corporativos e apps rápidos.
              </p>

              <div class="hero-actions">
                <a class="btn-primary" href="#start">Começar agora</a>
                <a class="btn-ghost" href="https://github.com/seu-usuario/zonerjs-starter" target="_blank" rel="noreferrer">
                  Ver no GitHub
                </a>
              </div>

              <div class="hero-meta">
                <span>⚡ Reatividade com <code>signal()</code></span>
                <span>🧩 Módulos estilo Angular</span>
                <span>🌀 Zero boilerplate desnecessário</span>
              </div>
            </div>

            <div class="hero-panel">
              <div class="panel-header">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
                <span class="panel-title">Zoner.JS Preview</span>
              </div>
              <div class="panel-body">
<pre><code class="code-block">import { signal, effect } from 'zoner';

const count = signal(0);

effect(() =&gt; {
  console.log('count =&gt;', count.get());
});

count.set(1); // reatividade simples
</code></pre>
              </div>
            </div>
          </div>
        </header>

        <main class="main" id="start">
          <section class="section">
            <h2>Por que o Zoner.JS?</h2>
            <p class="section-subtitle">
              Pensado para você criar desde MVPs até sistemas corporativos complexos,
              sem a sensação de que precisa ler um livro de 500 páginas antes de codar.
            </p>

            <div class="features-grid">
              <article class="feature-card">
                <h3>1. Mais simples que Vue</h3>
                <p>
                  Poucos conceitos, API reduzida e intuitiva. Você trabalha com
                  <code>createApp</code>, <code>component</code> e <code>signal</code> – e já é produtivo.
                </p>
              </article>

              <article class="feature-card">
                <h3>2. Rápido como Svelte</h3>
                <p>
                  Reatividade baseada em <strong>signals</strong>, evitando renders desnecessários.
                  Atualize só o que realmente mudou.
                </p>
              </article>

              <article class="feature-card">
                <h3>3. Estruturado como Angular</h3>
                <p>
                  Módulos, organização por domínio e mentalidade de
                  <strong>sistema grande</strong> desde o início.
                </p>
              </article>

              <article class="feature-card">
                <h3>4. 100% TypeScript</h3>
                <p>
                  Types fortes para componentes, serviços e estados. Refactors seguros e DX agradável.
                </p>
              </article>
            </div>
          </section>

          <section class="section playground">
            <div class="playground-header">
              <div>
                <h2>Primeiro componente Zoner.JS</h2>
                <p class="section-subtitle">
                  Um contador reativo usando <code>signal()</code> e <code>effect()</code>.
                </p>
              </div>
              <span class="pill">Demo interativa</span>
            </div>

            <div class="playground-layout">
              <div class="playground-card">
                <p class="playground-label">Contador reativo</p>
                <p class="counter-value" data-bind="count"></p>
                <div class="counter-actions">
                  <button class="btn-primary" data-action="inc">+1</button>
                  <button class="btn-ghost" data-action="reset">Resetar</button>
                </div>
                <p class="counter-hint">
                  Este bloco é atualizado automaticamente via <code>signal()</code> e
                  <code>effect()</code>, sem você gerenciar DOM manualmente.
                </p>
              </div>

              <div class="playground-code">
<pre><code class="code-block">const count = signal(0);

effect(() =&gt; {
  counterEl.textContent = 'Clicks: ' + count.get();
});

incBtn.addEventListener('click', () =&gt; {
  count.update(c =&gt; c + 1);
});

resetBtn.addEventListener('click', () =&gt; count.set(0));
</code></pre>
              </div>
            </div>
          </section>
        </main>

        <footer class="footer">
          <p>
            Zoner.JS • Construído para devs que querem velocidade e organização.
          </p>
          <p class="footer-small">
            Desenvolvido por: <strong>ZaterSoft</strong> • Engenheiro: <strong>Melquisedeque C. Campos</strong>
          </p>
        </footer>
      </div>
    `,
    bind(root: HTMLElement) {
      const counterEl = root.querySelector('[data-bind="count"]') as HTMLElement | null;
      const incBtn = root.querySelector('[data-action="inc"]') as HTMLButtonElement | null;
      const resetBtn = root.querySelector('[data-action="reset"]') as HTMLButtonElement | null;

      const themeBtn = root.querySelector('[data-action="theme-toggle"]') as HTMLButtonElement | null;
      const themeLabelEl = root.querySelector('[data-bind="theme-label"]') as HTMLElement | null;

      if (!counterEl || !incBtn || !resetBtn) {
        console.warn('Zoner.JS: elementos da demo de contador não encontrados.');
      } else {
        effect(() => {
          counterEl.textContent = `Clicks: ${count.get()}`;
        });

        incBtn.addEventListener('click', () => {
          count.update((c) => c + 1);
        });

        resetBtn.addEventListener('click', () => {
          count.set(0);
        });
      }

      // Tema
      if (themeLabelEl) {
        effect(() => {
          themeLabelEl.textContent = themeLabel.get();
        });
      }

      if (themeBtn) {
        themeBtn.addEventListener('click', () => {
          const body = document.body;
          const current = body.getAttribute('data-theme') || 'dark';
          const next = current === 'dark' ? 'light' : 'dark';
          body.setAttribute('data-theme', next);
          themeLabel.set(next === 'dark' ? 'Claro' : 'Escuro');
        });
      }

      // Estado inicial do label de tema baseado no body
      const initialTheme = document.body.getAttribute('data-theme') || 'dark';
      themeLabel.set(initialTheme === 'dark' ? 'Claro' : 'Escuro');
    }
  });
});
