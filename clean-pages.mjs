import html2md from "html-to-md";
import { readFile } from "fs/promises";
const pages = JSON.parse(
  await readFile(new URL("./src/data/czarodzieje.json", import.meta.url))
);



function fixEncoding(s) {
  return new TextDecoder().decode(
    new Uint8Array(s.split("").map((r) => r.charCodeAt()))
  );
}

;





const cleaned = pages.map(item => {
    const title = fixEncoding(html2md(item.title.rendered));
    const content = fixEncoding(html2md(item.content.rendered))
    return {content: content, title: title}
})


console.log(JSON.stringify(cleaned, null, 2));
