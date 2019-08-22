import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule],
  exports: []
})
export class AuthModule {}
