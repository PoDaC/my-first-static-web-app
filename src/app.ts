import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Road Fix IT';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        nav: false,
        title: 'Welcome'
      },
      {
        route: 'what-we-do',
        name: 'what-we-do',
        moduleId: PLATFORM.moduleName('./what-we-do'),
        nav: true,
        title: 'What we do?'
      },
      {
        route: 'how-we-do',
        name: 'how-we-do',
        moduleId: PLATFORM.moduleName('./how-we-do'),
        nav: true,
        title: 'How we do?'
      },
      {
        route: 'blog',
        name: 'blog',
        moduleId: PLATFORM.moduleName('./child-router'),
        nav: true,
        title: 'Projects'
      }, {
        route: 'contact',
        name: 'contact',
        moduleId: PLATFORM.moduleName('./contact'),
        nav: true,
        title: 'Contact'
      }
    ]);

    this.router = router;
  }
}
