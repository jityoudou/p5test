import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p5test';

  // 変数resultを初期化
  result = '現在時刻は不明です。';
  result2 = '現在時刻は不明です。';

  // ボタンクリック時に現在時刻を表示
  onclick() {
    this.result = `現在時刻は、${new Date().toLocaleTimeString()}です。`;
  }
  onclick2() {
    this.result2 = `現在時刻は、${new Date().toLocaleTimeString()}です。`;
  }

}
