import * as fs from 'fs';
import * as path from 'path';

export class Configuration {
  private static instance: Configuration;
  private config: any;

  private constructor() {
    const configPath = path.join(__dirname, '../../config/settings.json');
    this.config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  }

  public static getInstance(): Configuration {
    if (!Configuration.instance) {
      Configuration.instance = new Configuration();
    }
    return Configuration.instance;
  }

  public get baseUrl(): string {
    return this.config.baseUrl;
  }

  public get timeout(): number {
    return this.config.timeout;
  }

  public get headless(): boolean {
    return this.config.headless;
  }

  public get browser(): string {
    return this.config.browser;
  }

  public get slowMo(): number {
    return this.config.slowMo;
  }

  public get viewport(): { width: number; height: number } {
    return this.config.viewport;
  }

  public get screenshots(): { onFailure: boolean; path: string } {
    return this.config.screenshots;
  }

  public get videos(): { onFailure: boolean; path: string } {
    return this.config.videos;
  }
}