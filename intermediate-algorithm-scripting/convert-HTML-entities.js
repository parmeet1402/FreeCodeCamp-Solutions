function convertHTML(str) {
  // &colon;&rpar;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, `&apos;`);
}

convertHTML("Hamburgers < Pizza < Tacos");
