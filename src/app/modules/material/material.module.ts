import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDividerModule,
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDividerModule,
  ]
})
export class MaterialModule { }
