import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

// Nombre de la prueba
describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      //declarations: [],
      //providers: [],
    });
    guard = TestBed.inject(AuthGuard);
  });

  // Que reberia hacer.
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
