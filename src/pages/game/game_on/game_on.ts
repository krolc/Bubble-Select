import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BubbleComponent} from "../../../app/components/bubble/bubble.component";

@Component({
  selector: 'page-game-on',
  templateUrl: 'game_on.html'
})
export class GameOnPage {

  constructor(
    public navCtrl: NavController,
    private bubble: BubbleComponent) {


  }

}
