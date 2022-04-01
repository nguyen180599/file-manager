import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import * as showdown from 'showdown'

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnInit {
  @ViewChild('abc', { read: ElementRef }) abc!: ElementRef;
  markdown = `## Markdown __rulez__!
---

### Syntax highlight sdfsdf
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

  createStorage(key: string) {
    const store = JSON.parse(localStorage.getItem(key)!) ?? {}

    const save = () => {
      localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
      get(key: string) {
        return store[key]
      },
      set(key: string, value: any) {
        store[key] = value
        save()
      },
      remove(key: string) {
        
      }
    }
  }

  downloadMarkdown() {
    console.log(this.abc.nativeElement.innerHTML);
    console.log(this.markdown);

    // const converter = new showdown.Converter();
    // const text = this.markdown;
    // this.convertedMarkdown = converter.makeHtml(text);
    // console.log(this.convertedMarkdown);

    // var doc = new jsPDF();

    // doc.html(this.abc.nativeElement.outerHTML, {
    //   callback: function (doc) {
    //     // doc.setFontSize(15)
    //     doc.save("test.pdf")
    //   }
    // });

    const markdownHTML = `
      <html>
        <head>
          <title></title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-okaidia.min.css" integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/plugins/line-highlight/prism-line-highlight.min.css" integrity="sha512-nXlJLUeqPMp1Q3+Bd8Qds8tXeRVQscMscwysJm821C++9w6WtsFbJjPenZ8cQVMXyqSAismveQJc0C1splFDCA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/plugins/line-numbers/prism-line-numbers.min.css" integrity="sha512-cbQXwDFK7lj2Fqfkuxbo5iD1dSbLlJGXGpfTDqbggqjHJeyzx88I3rfwjS38WJag/ihH7lzuGlGHpDBymLirZQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css" integrity="sha512-T584yQ/tdRR5QwOpfvDfVQUidzfgc2339Lc8uBDtcp/wYu80d7jwBgAxbyMh0a9YM9F8N3tdErpFI8iaGx6x5g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </head>
        <body>
        <style>
        img {max-width: 100vw;}
        blockquote {
          border-left: 3px solid rgba(0,0,0,0.21);
          padding-left: 12px;
          color: rgba(0,0,0,0.54);
        }
        @media print {
          body {
            -webkit-print-color-adjust:exact;
          }
          @print{
            @page :footer {display: none }
            @page :header {display: none}
          }
        }
        pre {
          word-break: break-all;
          white-space: pre-wrap;
          background: #272822;
        }
        pre code {
          word-break: break-all;
          white-space: pre-wrap !important;
        }
      </style>
          ${this.abc.nativeElement.outerHTML}
        </body>
      </html>
    `

    // DOWNLOAD VỚI WINDOW PRINT
    const myWindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
    myWindow?.document.write(markdownHTML);
    myWindow?.document.close();
    setTimeout(function () {
      myWindow?.focus();
      myWindow?.print();
      myWindow!.onafterprint = () => {
        myWindow?.close();
      }
    }, 1000)
  }
}
