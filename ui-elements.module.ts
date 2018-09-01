import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RockerComponent } from './components/rocker/rocker.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RockerComponent, ListComponent]
})
export class UIModule {}
