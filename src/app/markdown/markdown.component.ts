import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {jsPDF} from "jspdf";
import * as showdown from 'showdown'

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnInit {
  @ViewChild('abc', {read: ElementRef}) abc!: ElementRef;
  markdown = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

### Blockquote
> Blockquote to the max`;

  constructor() {
  }

  ngOnInit(): void {
  }

  hidePreview(e: any) {
    console.log(e.getContent());
  }

  downloadMarkdown() {
    console.log(this.abc.nativeElement.outerHTML);
    const converter = new showdown.Converter();
    const text = this.markdown;
    const convertedMarkdown = converter.makeHtml(text);
    console.log(convertedMarkdown);

    const doc = new jsPDF();
    // doc.setFontSize(10);
    // doc.getFontSize();
    doc.html(convertedMarkdown, {
      callback: function (doc) {
        doc.save('test.pdf');
      },
    });
    // console.log(doc)
  }
}
