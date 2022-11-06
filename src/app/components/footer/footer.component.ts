import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isPhonePortrait = false;

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {

    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {

        this.isPhonePortrait = false;

        if (result.matches) {
          this.isPhonePortrait = true;
        }

      });

  }

}
