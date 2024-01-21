import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultValue } from '../../../core/decorators/default-value.decorator';

@Component({
  selector: 'base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss'],
})
export class BaseButtonComponent {
  @DefaultValue()
  @Input()
  link = '';
  @DefaultValue()
  @Input()
  isNativeLink = false;
  @DefaultValue()
  @Input()
  type: 'submit' | 'button' = 'button';
  @DefaultValue()
  @Input()
  kind:
    | 'filled-shadow-blue'
    | 'filled-shadow-white-blue'
    | 'text-blue'
    | 'none' = 'filled-shadow-blue';
  @DefaultValue()
  @Input()
  display: 'icon' | 'initial' = 'initial';
  @DefaultValue()
  @Input()
  font: 'large' | 'normal' | 'small' | 'tiny' = 'normal';
  @DefaultValue()
  @Input()
  padding: 'normal' | 'small' | 'tiny' | 'none' = 'normal';
  @DefaultValue()
  @Input()
  isDisabled = false;
  @DefaultValue()
  @Input()
  isReadonly = false;
  @DefaultValue()
  @Input()
  target: '_blank' | '_self' | '_parent' | '_top' | 'framename' = '_self';
  @Output()
  pointerClick = new EventEmitter<Event>();

  constructor(private readonly _router: Router) {}

  onClick(event: Event): void {
    if (this.isDisabled || this.isReadonly) return;

    if (!this.isNativeLink && this.link.length) {
      this._router.navigateByUrl(this.link);
      return;
    }

    this.pointerClick.emit(event);
  }
}