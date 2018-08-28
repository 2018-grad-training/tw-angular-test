import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './component/demo/demo.component';
import { StubComponent } from './component/stub/stub.component';
import { UserService } from './component/stub/user.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    StubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
