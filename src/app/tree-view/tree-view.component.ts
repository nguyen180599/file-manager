import {Component, OnInit} from '@angular/core';
import {FakejsonService} from "../services/fakejson.service";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  listFolder: any[] = [];
  listFile!: any[];
  listParent: any[] = [];
  listData: any[] = [];

  constructor(private serverHttp: FakejsonService) {
  }

  ngOnInit(): void {
    this.serverHttp.getFolder().subscribe((data) => {
      if (data) {
        this.listFolder = data;
        this.listParent[0] = this.listFolder[0];
      }
    })
    this.serverHttp.getFile().subscribe((data) => {
      if (data) {
        this.listFile = data
      }
      this.getData()

    })
  }



  getData() {
    this.listFolder.sort((a,b) => a.id - b.id)
    this.listFile.map(item => item.id += this.listFolder[this.listFolder.length - 1].id)

    this.listData = this.listFolder.concat(this.listFile);
  }

  public treeNodes: any[] = [
    {
      id: 1,
      desc: "Root Node 1",
    },
    {
      id: 2,
      desc: "Root Node 2",
    },
    {
      id: 3,
      parentId: 2,
      desc: "Child node of Root Node 2",
    },
  ];
}
