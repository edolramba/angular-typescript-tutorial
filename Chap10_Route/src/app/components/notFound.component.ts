import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    template: '<h1 class="home">Dear friend, this URL was not found</h1>',
    styles:['.home {background: yellow}']
})
export class NotFoundComponent{}