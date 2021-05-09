import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeAnimation } from './home.animation';
import { AnimationEvent } from '@angular/animations';
import { GetjsonService } from './../../services/get-json-data/get-json.service';
// import particle from '../../config/particles.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [HomeAnimation.statusChange],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  statusState = 'start-state';
  isLoop = false;
  bgcolor: any = {};
  id = "tsparticles";
  particlesUrl = '';

  constructor(private getjsonService: GetjsonService) { }

  ngOnInit(): void {
    this.onLoopState();
  }

  onAnimationStarted(event: AnimationEvent): void {
    this.bgcolor = this.getjsonService.getBackColor()?.[1];
  }

  onAnimationDone(event: AnimationEvent): void {
    if (this.isLoop) {
      setTimeout(() => {
        this.statusState === 'start-state' ? this.statusState = 'loop-state' : this.statusState = 'start-state';
      }, 0);
    }
  }

  onLoopState() {
    this.isLoop = true;
    this.statusState = 'loop-state';
  }

  particlesLoaded() {
    return this.getjsonService.getBackColor()?.[0].includes('night') ? '../../../assets/particles-midnight.json' : '../../../assets/particles.json';
  }
}
