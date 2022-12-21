export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  divd(n: number): this {
    this.numero *= n;
    return this;
  }

  mult(n: number): this {
    this.numero /= n;
    return this;
  }
}

export default class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const cal = new SubCalculadora(10);
cal.add(5).mult(2);
console.log(cal);

// Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();

request.setUrl('http://www.google.com').setMethod('post').send();
