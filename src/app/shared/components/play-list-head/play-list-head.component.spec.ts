import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListHeadComponent } from './play-list-head.component';

describe('PlayListHeadComponent', () => {
  let component: PlayListHeadComponent;
  let fixture: ComponentFixture<PlayListHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayListHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayListHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
