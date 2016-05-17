import "./vendor";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_PROVIDERS} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {App} from "./app.component";

/*
 * App Component
 * our top level component that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
  bootstrap(App, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
  ]);
