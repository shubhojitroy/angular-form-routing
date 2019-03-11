import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';

@NgModule({
  declarations: [ConvertToSpacesPipe, StarComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, ConvertToSpacesPipe, StarComponent]
})
export class SharedModule {}
