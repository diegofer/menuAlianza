import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuALianzaComponent } from './menu-alianza.component';

describe('MenuALianzaComponent', () => {
  let component: MenuALianzaComponent;
  let fixture: ComponentFixture<MenuALianzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuALianzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuALianzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
