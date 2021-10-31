import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';


@NgModule({
  imports: [
    FormsModule,
    FinanceRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ FinanceComponent ]
})
export class FinanceModule { }
