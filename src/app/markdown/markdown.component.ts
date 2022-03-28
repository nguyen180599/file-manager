import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { jsPDF } from "jspdf";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as rankcon from "html-to-pdfmake";

import {Converter} from 'showdown';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnInit {
  @ViewChild('abc',{read : ElementRef}) abc!: ElementRef;
  markdown= `## Markdown __rulez__!
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

  constructor() { }

  ngOnInit(): void {
  }

  hidePreview(e: any) { console.log(e.getContent()); }

  downloadMarkdown() {
    const converter = new Converter();
    console.log(this.abc.nativeElement);
    const doc = new jsPDF();
    // doc.(this.abc.nativeElement, {x: 15, y: 15, width: 150});
    // doc.save("test.pdf");
    console.log(doc)
  }
}
