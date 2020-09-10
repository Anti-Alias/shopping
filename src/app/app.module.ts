import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'

import { HeaderComponent } from './header/header/header.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail/recipe-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent
  ],
  imports: [
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
