import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RecordarContrasenaUsuarioPaseadorPage } from './recordar-contrasena-usuario-paseador.page';
import { IonicModule } from '@ionic/angular';

describe('RecordarContrasenaUsuarioPaseadorPage', () => {
  let component: RecordarContrasenaUsuarioPaseadorPage;
  let fixture: ComponentFixture<RecordarContrasenaUsuarioPaseadorPage>;


beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    declarations: [ RecordarContrasenaUsuarioPaseadorPage ],
    imports: [IonicModule.forRoot()]
  }).compileComponents();

  fixture = TestBed.createComponent(RecordarContrasenaUsuarioPaseadorPage);
  component = fixture.componentInstance;
  fixture.detectChanges();
}));

it('should create', () => {
  expect(component).toBeTruthy();
});
});