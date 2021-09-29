import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

export const router: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports:[RouterModule]
})

export class AppRoutingModule{}