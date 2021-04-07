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
      p.createCanvas(900, 700);
      p.background(200);
    }
    let posx = 450;
    let posy = 350;
    let prepos: number[] = [-100, 350];
    let posr = 0;
    let postheta = 0;

    p.draw = () => {
      //p.background(100);
      prepos = [posx, posy];

      posr += p.random(-20, 20);
      while (Math.abs(posr) > 200) {
        posr += p.random(-20, 20);
      }
      console.log(posr);
      postheta += Math.PI / 5 * (p.random()-0.5);
      posx = 450 + posr * Math.cos(postheta);
      posy = 350 + posr * Math.sin(postheta);

      //let temp = p.noise(posx * 0.02) * 700;
      //posy = temp;
      //console.log(p.random());

      if (posx > 900) {
        posx = posx - 900;
        prepos[0] = posx;
      }
      if (posx < 0) {
        posx = posx + 900;
        prepos[0] = posx;
      }
      if (posy > 700) {
        posy = posy - 700;
        prepos[1] = posy;
      }
      if (posy < 0) {
        posy = posy + 700
        prepos[1] = posy;
      }

      p.line(prepos[0], prepos[1], posx, posy);
      p.circle(posx, posy, 10);
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

