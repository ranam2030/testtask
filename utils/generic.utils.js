class generic {
  async scrollH() {
    const { width, height } = await driver.getWindowSize();
    const startX = width * 0.8; // Start at 80% of the screen width (right side)
    const endX = width * 0.2; // End at 20% of the screen width (left side)
    const y = height / 2; // Swipe at the vertical middle of the screen

    await driver.touchAction([
      { action: "press", x: startX, y: y },
      { action: "wait", ms: 1000 }, // Optional: add a wait to make the swipe slower
      { action: "moveTo", x: endX, y: y },
      "release",
    ]);
  }

  async scrollToMattressBedroom(){
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Mattress Bedroom")');
  }
  async scrollToQuantity(){
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Quantity")');
  }
}
export default new generic();
