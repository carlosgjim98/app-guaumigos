import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ResgistroUsuarioPaseadorPage } from './resgistro-usuario-paseador.page';
import { IonicModule } from '@ionic/angular';

describe('ResgistroUsuarioPaseadorPage', () => {
  let component: ResgistroUsuarioPaseadorPage;
  let fixture: ComponentFixture<ResgistroUsuarioPaseadorPage>;


beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    declarations: [ ResgistroUsuarioPaseadorPage ],
    imports: [IonicModule.forRoot()]
  }).compileComponents();

  fixture = TestBed.createComponent(ResgistroUsuarioPaseadorPage);
  component = fixture.componentInstance;
  fixture.detectChanges();
}));

it('should create', () => {
  expect(component).toBeTruthy();
});
});