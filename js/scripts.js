function openAboutBlank() {
  const content = document.documentElement.outerHTML;
  const newTab = window.open('about:blank', '_blank');
  newTab.document.open();
  newTab.document.write(content);
  newTab.document.close();
}
