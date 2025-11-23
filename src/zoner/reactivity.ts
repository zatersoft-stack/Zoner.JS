// Reatividade simples do Zoner.JS

export type EffectFn = () => void;

let currentEffect: EffectFn | null = null;

export function effect(fn: EffectFn) {
  const runner = () => {
    currentEffect = runner;
    try {
      fn();
    } finally {
      currentEffect = null;
    }
  };

  runner();
  return runner;
}

export class Signal<T> {
  private _value: T;
  private subscribers = new Set<EffectFn>();

  constructor(value: T) {
    this._value = value;
  }

  get(): T {
    if (currentEffect) {
      this.subscribers.add(currentEffect);
    }
    return this._value;
  }

  set(next: T) {
    if (Object.is(this._value, next)) return;
    this._value = next;
    this.subscribers.forEach((fn) => fn());
  }

  update(fn: (current: T) => T) {
    this.set(fn(this._value));
  }

  toString(): string {
    return String(this.get());
  }
}

export function signal<T>(value: T) {
  return new Signal<T>(value);
}

export function computed<T>(fn: () => T) {
  const s = signal(fn());
  effect(() => {
    s.set(fn());
  });
  return s;
}
