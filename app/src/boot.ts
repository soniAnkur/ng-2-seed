import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from 'core/app';
bootstrap(AppComponent)
    .then (success => console.log('Bootstrap successfully!'))
    .catch(err => console.log(err));