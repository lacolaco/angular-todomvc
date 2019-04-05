import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoEffects } from './effects';
import { reducer } from './reducer';
import { todoFeatureName } from './state';

@NgModule({
  imports: [
    StoreModule.forFeature(todoFeatureName, reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  exports: [],
  providers: [],
})
export class TodoStoreModule {}
