import { Page } from 'playwright';
import { Driver } from '../support/Driver';

export class BasePage {
  protected get page(): Page {
    return Driver.getInstance().getPage();
  }

  public async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  public async waitForLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  public async getTitle(): Promise<string> {
    return await this.page.title();
  }

  public async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  public async type(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }

  public async getText(selector: string): Promise<string> {
    return await this.page.textContent(selector) || '';
  }

  public async isVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }
}