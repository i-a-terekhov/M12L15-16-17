import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective {

  @Input() coolInputDefaultBgColor: string = 'white';
  @Input() coolInputFocusBgColor: string = 'orange';


  constructor(private el: ElementRef,
              // в аргумент конструктора получаем элемент, в котором применяется эта директива
              // модификатор private позволяет под капотом создать свойство, к которому потом можно обращаться через this
              private rend: Renderer2) {
    // console.log(el.nativeElement.innerText);
  }

  private _backgroundColor: string = '';
  @HostBinding('style.backgroundColor')  // синхронизация свойства нашего элемента и переменной (_backgroundColor): меняем значение в переменной -> меняется и свойство элемента
  get getBgColor() {
    return this._backgroundColor;
  }

  private _isOnFocus: boolean = false;
  @HostBinding('class.isOnFocus')  // синхронизация свойства нашего элемента и переменной (_isOnFocus): меняем значение в переменной -> к элементу добавляется класс isOnFocus
  get getIsOnFocus() {
    return this._isOnFocus;
  }

  @HostListener('focus')
  onFocus() {
    this.changeElementBgColor(this.coolInputFocusBgColor);
    this._isOnFocus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.changeElementBgColor(this.coolInputDefaultBgColor);
    this._isOnFocus = false;
  }

  @HostListener('click', ['$event', '$event.target'])
  onClick(event: Event, target: HTMLElement) {
    console.log(event);
    console.log(target);
  }

  ngOnInit() {
    this.changeElementBgColor(this.coolInputDefaultBgColor);

    this.rend.setAttribute(this.el.nativeElement, 'placeholder',
      this.el.nativeElement.getAttribute('placeholder') + '*');
  }

  changeElementBgColor(color: string) {
    this._backgroundColor = color;
  }
}
