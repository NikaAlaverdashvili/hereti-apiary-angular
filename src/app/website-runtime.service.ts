import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

/** Loads the self-contained interaction layer after Angular has rendered the page. */
@Injectable({ providedIn: 'root' })
export class WebsiteRuntimeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private initialized = false;

  initialize(): void {
    if (this.initialized || !isPlatformBrowser(this.platformId)) return;
    this.initialized = true;

    const script = this.document.createElement('script');
    script.src = 'js/site-runtime.js';
    script.defer = true;
    script.dataset['heretiRuntime'] = 'true';
    this.document.body.appendChild(script);
  }
}
