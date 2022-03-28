import {Component, Input, OnInit} from '@angular/core';
import {FakejsonService} from "../services/fakejson.service";
import {HttpClient} from "@angular/common/http";
import {Menu_Icon} from "./dataIcons";
import {Observable} from "rxjs";

// import * as fs from "file-system";

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.scss']
})
export class ShowProjectComponent implements OnInit {
  @Input() menuType = Menu_Icon
  listFolder: any[] = [];
  listFile!: any[];
  listParent: any[] = [];
  listData: any[] = [];
  listIcon: any[] = [];
  temp: any[] = [];
  isBack = false;
  isNext = false;
  showAsList = 0;


  constructor(private serverHttp: FakejsonService, private httpClient: HttpClient) {
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
    this.serverHttp.getIcons().subscribe((data) => {
      this.listIcon = data
    })
  }

  getData() {
    // if (!this.showAsList) {
      let parentId = this.listParent[this.listParent.length - 1].id;
      this.listData = this.listFolder.sort().filter((item: any) => item.parentId == parentId).concat(this.listFile.sort().filter((item: any) => item.parentId == parentId));
    // } else {
    //   this.listFolder.sort((a,b) => a.id - b.id)
    //   console.log(this.listFolder)
    //   this.listFile.map(item => item.id += this.listFolder[this.listFolder.length - 1].id)
       //   this.listData = this.listFolder.concat(this.listFile);
    //   this.listData.sort();
    // }



  }

  moveTo(item: any) {
    if (this.listParent.includes(item)) {
      this.listParent.splice(this.listParent.indexOf(item) + 1, this.listParent.length)
    } else {
      this.listParent.push(item);
    }
      this.getData();
  }

  back() {
    if (this.listParent.length > 1) {
      this.temp.push(this.listParent.pop());
      console.log(this.temp)
      this.getData();
    }
  }

  next() {

  }
  checkType(name: string): any {
    let checkName = name.split('.');
    let type = checkName[checkName.length - 1];

    if (this.menuType[0].typeOfText.includes(type)) {
      return 0
    } else if (this.menuType[0].typeOfImg.includes(type)) {
      return 1
    } else {
      return 2
    }
  }

  changeView() {
    this.showAsList += 1;
    if (this.showAsList == 3) {
      this.showAsList = 0
    }
  }

}
