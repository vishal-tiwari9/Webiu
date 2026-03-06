import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ContributorSearchComponent } from './contributor-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

describe('ContributorSearchComponent', () => {
  let component: ContributorSearchComponent;
  let fixture: ComponentFixture<ContributorSearchComponent>;

  const mockActivatedRoute = {
    queryParams: of({ username: 'someUsername' })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContributorSearchComponent,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),   // ← yeh fix karega
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});