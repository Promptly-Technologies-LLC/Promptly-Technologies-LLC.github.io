import { test, expect, Page } from "@playwright/test";

// Wait for the SPA to render, then for fonts and images to load
async function waitForPageReady(page: Page, waitForSelector?: string) {
  // Wait for the React app to mount and render content
  await page.waitForSelector(waitForSelector ?? "main", {
    state: "attached",
    timeout: 15000,
  });
  await page.waitForLoadState("networkidle");
  // Wait for web fonts to load
  await page.evaluate(() => document.fonts.ready);
  // Wait for all images to load
  await page.evaluate(() =>
    Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            })
        )
    )
  );
  // Small settle time for SVG filters and CSS transitions
  await page.waitForTimeout(500);
}

// Shared screenshot options: tolerate minor anti-aliasing differences
const screenshotOptions = {
  maxDiffPixelRatio: 0.02,
  threshold: 0.3,
} as const;

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#/");
    // Wait for the last section to prove the full SPA rendered
    await waitForPageReady(page, "#credits");
  });

  test("full page", async ({ page }) => {
    await expect(page).toHaveScreenshot("home-full.png", {
      fullPage: true,
      timeout: 15000,
      ...screenshotOptions,
    });
  });

  test("hero section", async ({ page }) => {
    const hero = page.locator("#hero");
    await expect(hero).toHaveScreenshot("home-hero.png", screenshotOptions);
  });

  test("contact section", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const contact = page.locator("#contact");
    await expect(contact).toHaveScreenshot(
      "home-contact.png",
      screenshotOptions
    );
  });

  test("story section", async ({ page }) => {
    await page.locator("#story").scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const story = page.locator("#story");
    await expect(story).toHaveScreenshot("home-story.png", screenshotOptions);
  });

  test("events section", async ({ page }) => {
    await page.locator("#events").scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const events = page.locator("#events");
    await expect(events).toHaveScreenshot(
      "home-events.png",
      screenshotOptions
    );
  });

  test("credits section", async ({ page }) => {
    await page.locator("#credits").scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const credits = page.locator("#credits");
    await expect(credits).toHaveScreenshot(
      "home-credits.png",
      screenshotOptions
    );
  });
});

test.describe("Store page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#/Store");
    await waitForPageReady(page);
  });

  test("full page", async ({ page }) => {
    await expect(page).toHaveScreenshot("store-full.png", {
      fullPage: true,
      ...screenshotOptions,
    });
  });
});

test.describe("Legal page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#/Legal");
    await waitForPageReady(page);
  });

  test("full page", async ({ page }) => {
    await expect(page).toHaveScreenshot("legal-full.png", {
      fullPage: true,
      ...screenshotOptions,
    });
  });
});
