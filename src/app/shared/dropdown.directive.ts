import { Directive, ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

//----------------- Alterado para o dropdown ser fechado com um click em qualquer elemento
// export class DropdownDirective{

//     @HostBinding('class.open') isOpen = false;
    
//     @HostListener('click') toggleOpen(){
//         this.isOpen = !this.isOpen;
//     } 
// }

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
}