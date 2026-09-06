function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Transaction Formatter')
    .setWidth(1200)
    .setHeight(800)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
