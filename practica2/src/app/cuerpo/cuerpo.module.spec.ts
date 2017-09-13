import { CuerpoModule } from './cuerpo.module';

describe('CuerpoModule', () => {
  let cuerpoModule: CuerpoModule;

  beforeEach(() => {
    cuerpoModule = new CuerpoModule();
  });

  it('should create an instance', () => {
    expect(cuerpoModule).toBeTruthy();
  });
});
