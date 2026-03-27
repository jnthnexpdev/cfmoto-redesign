import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    public models = signal(false);
    public menuIsOpen = signal(false);
    public openSection : string | null = null;

    public toggleMenu() : void{
        this.menuIsOpen.update(value => !value);
    }

    public togggleModels() : void{
        this.models.set(!this.models())
    }

    public toggleSection(section : string) : void{
        this.openSection = this.openSection === section ? null : section;
    }

    @HostListener('document:click')
    closeDropdown(){
        this.models.set(false);
    }

}