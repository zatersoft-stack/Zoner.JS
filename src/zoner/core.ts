import type { Signal } from './reactivity';
export { signal, computed, effect, Signal } from './reactivity';

export type BindFn = (root: HTMLElement) => void;

export interface RenderResult {
  template: string;
  bind: BindFn;
}

export type SetupRenderFn = () => RenderResult;

export function component(tag: string, setup: () => SetupRenderFn) {
  return class ZonerComponent {
    static tag = tag;

    static mount(root: HTMLElement) {
      const renderFn = setup();
      const { template, bind } = renderFn();

      root.innerHTML = template;
      bind(root);
    }
  };
}

export interface ModuleConfig {
  bootstrap: any;
  declarations?: any[];
  providers?: any[];
}

export function defineModule(config: ModuleConfig): ModuleConfig {
  return config;
}

export function createApp(module: ModuleConfig) {
  return {
    mount(selector: string) {
      const root = document.querySelector(selector) as HTMLElement | null;

      if (!root) {
        throw new Error(`Zoner.JS: container "${selector}" não encontrado.`);
      }

      const Boot = module.bootstrap;
      Boot.mount(root);
    }
  };
}
