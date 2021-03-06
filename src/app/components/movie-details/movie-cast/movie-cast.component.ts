import { Cast } from './../../../models/cast.model';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from '@angular/core';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.css']
})
export class MovieCastComponent implements OnInit {
  @Input('casts') casts: Cast[];
  isCollapsed: boolean = false;
  castsMore: Cast[];
  castsLess: Cast[];
  profile_photo: string;
  constructor() {}

  ngOnInit() {
    if (this.casts.length > 4) {
      this.castsLess = this.casts.slice(0, 4);
      this.castsMore = this.casts.slice(4);
    } else {
      this.castsLess = this.casts;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const casts: SimpleChange = changes.casts;
    this.casts = casts.currentValue;
    if (this.casts.length > 4) {
      this.castsLess = this.casts.slice(0, 4);
      this.castsMore = this.casts.slice(4);
    } else {
      this.castsLess = this.casts;
    }
  }
}
