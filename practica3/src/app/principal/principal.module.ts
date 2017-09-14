import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalModule } from './principal/principal.module';

@NgModule({
  imports: [
    CommonModule, PrincipalModule
  ],
  declarations: [PrincipalComponent]
})
export class PrincipalModule { }
