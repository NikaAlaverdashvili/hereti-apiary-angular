import { AfterViewInit, Component, inject } from '@angular/core';
import { WebsiteRuntimeService } from './website-runtime.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  private readonly runtime = inject(WebsiteRuntimeService);

  ngAfterViewInit(): void {
    this.runtime.initialize();
  }
}
