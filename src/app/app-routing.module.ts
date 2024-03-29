import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadResumeComponent } from './components/upload-resume/upload-resume.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'upload-resume'},
  {path: 'upload-resume', component: UploadResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
