import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private elementsCard = '.card.mt-4.top-card';

  public async navigateToHome(): Promise<void> {
    await this.navigateTo('https://demoqa.com/');
  }

  public async clickElementsCard(): Promise<void> {
    await this.click(this.elementsCard);
  }

  public async getPageTitle(): Promise<string> {
    return await this.getTitle();
  }
}