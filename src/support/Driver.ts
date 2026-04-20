import { Browser, BrowserContext, Page, chromium, firefox, webkit } from 'playwright';
import { Configuration } from './Configuration';

export class Driver {
  private static instance: Driver;
  private browser!: Browser;
  private context!: BrowserContext;
  private page!: Page;
  private config: Configuration;

  private constructor() {
    this.config = Configuration.getInstance();
  }

  public static getInstance(): Driver {
    if (!Driver.instance) {
      Driver.instance = new Driver();
    }
    return Driver.instance;
  }

  public async initialize(): Promise<void> {
    const browserType = this.config.browser;
    switch (browserType) {
      case 'chromium':
        this.browser = await chromium.launch({ headless: this.config.headless, slowMo: this.config.slowMo });
        break;
      case 'firefox':
        this.browser = await firefox.launch({ headless: this.config.headless, slowMo: this.config.slowMo });
        break;
      case 'webkit':
        this.browser = await webkit.launch({ headless: this.config.headless, slowMo: this.config.slowMo });
        break;
      default:
        throw new Error(`Unsupported browser: ${browserType}`);
    }

    this.context = await this.browser.newContext({
      viewport: this.config.viewport,
    });

    this.page = await this.context.newPage();
  }

  public getPage(): Page {
    return this.page;
  }

  public getContext(): BrowserContext {
    return this.context;
  }

  public async close(): Promise<void> {
    if (this.page) {
      await this.page.close();
    }
    if (this.context) {
      await this.context.close();
    }
    if (this.browser) {
      await this.browser.close();
    }
  }

  public async takeScreenshot(name: string): Promise<void> {
    if (this.config.screenshots.onFailure) {
      await this.page.screenshot({ path: `${this.config.screenshots.path}/${name}.png` });
    }
  }
}