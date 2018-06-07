
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosTableComponent } from './usuarios-table.component';

describe('UsuariosTableComponent', () => {
  let component: UsuariosTableComponent;
  let fixture: ComponentFixture<UsuariosTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
