import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cp1Component } from './cp1/cp1.component';
import { Cp2Component } from './cp2/cp2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    Cp1Component,
    Cp2Component
  ],
  declarations: [Cp1Component, Cp2Component]
})
export class CuerpoModule { }
