import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

import * as mockRaw from '@data/user.json'
import { CookieService } from 'ngx-cookie-service';

describe('AuthService', () => {
  let service: AuthService;
  let userData: any = (mockRaw as any).default;
  let httpClientSpy: {post: jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])

    service = new AuthService(httpClientSpy as any,  new CookieService(document, null));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('⭕ should return a data and token', (done:DoneFn) => {
    const user:any = userData.verifyUser;
    const mockResponse = {
      data: {},
      tokenSession: '0x0x0x'
    }

    httpClientSpy.post.and.returnValue(of(mockResponse));



    service.sendCredentials(user.email, user.passerd).subscribe((data)=>{
      const getProperties = Object.keys(data);
      expect(getProperties).toContain('data');
      expect(getProperties).toContain('tokenSession');
      done();
    });

  })


});


