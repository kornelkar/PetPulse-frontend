import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnDestroy,
  } from '@angular/core';
  
  /*
    Rippled element must have included following properties
    ```
      position: relative;
      overflow: hidden;
    ```
   */
  @Directive({
    selector: '[rippleEffect]',
  })
  export class RippleEffectDirective implements OnDestroy {
    public static readonly ANIMATION_NAME = 'ripple';
  
    @Input()
    isDisabled = false;
  
    private _element?: HTMLElement;
  
    constructor(private readonly _elementRef: ElementRef) {}
  
    private readonly _handleEnd = ({ animationName }: AnimationEvent): void => {
      if (animationName === RippleEffectDirective.ANIMATION_NAME) {
        this._removeElementFromParentNode();
      }
    };
  
    private _removeElementFromParentNode(): void {
      if (!this._element) {
        return;
      }
  
      const htmlElement = this._elementRef.nativeElement as HTMLElement;
      if (htmlElement.contains(this._element)) {
        htmlElement.removeChild(this._element);
      }
  
      this._element?.removeEventListener('animationend', this._handleEnd);
    }
  
    @HostListener('click', ['$event'])
    onClick({ clientY, clientX }: PointerEvent): void {
      if (this.isDisabled) {
        return;
      }
  
      this._removeElementFromParentNode();
  
      const htmlElement = this._elementRef.nativeElement as HTMLElement;
      const { left, top, width } = htmlElement.getBoundingClientRect();
  
      this._element = document.createElement('span');
      this._element.style.width = this._element.style.height = `${width / 3}px`;
      this._element.classList.add('ripple-effect');
      this._element.style.top = `${clientY - top}px`;
      this._element.style.left = `${clientX - left}px`;
      this._element.addEventListener('animationend', this._handleEnd);
      htmlElement.append(this._element);
    }
  
    ngOnDestroy(): void {
      this._removeElementFromParentNode();
    }
  }