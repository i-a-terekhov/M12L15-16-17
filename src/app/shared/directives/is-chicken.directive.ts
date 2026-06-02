import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[isChicken]'
})
export class IsChickenDirective {
// для кастомной структурной директивы, необходимо устанавливать две переменных (см. конструктор) и принимать аргумент description в сеттере ниже
  constructor(
    private templateRef: TemplateRef<any>,  // здесь будет находиться шаблон, т.е. то, что внутри <ng-template>
    private viewContainer: ViewContainerRef  // а это ссылка на весь <ng-template>
  ) {}

  @Input()
  set isChicken(description: string) {
    if (description.toLowerCase().includes('кур')) {  /* выводим только те продукты, в описании которых есть курица */
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
