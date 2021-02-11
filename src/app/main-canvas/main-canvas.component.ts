import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';



@Component({
  selector: 'app-main-canvas',
  templateUrl: './main-canvas.component.html',
  styleUrls: ['./main-canvas.component.css']
})
export class MainCanvasComponent implements OnInit {
  public sketch :p5 | null;
  public xList = [20,132,43,55,670];
  public p5f = (p:p5) =>{
    p.setup = () =>{
      // 画面全体に表示する場合
      //p.createCanvas(p.windowWidth, p.windowHeight);
      p.createCanvas(900,700);
    }
    p.draw = () => {
      p.background(0);
      this.xList.forEach( (elm,idx) =>{
        p.circle(elm,elm,elm);
      });
    }
  }
  constructor() {
    this.sketch = null;
  }

  ngOnInit(): void {
    const canvasElm = document.getElementById('mainCanvas') || undefined;
    this.sketch = new p5(this.p5f,canvasElm) ;
  }

}

