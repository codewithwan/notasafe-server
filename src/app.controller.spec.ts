import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('checkHealth', () => {
    it('should return health status', () => {
      const result = { status: 'Healthy', timestamp: expect.any(String) };
      expect(appController.checkHealth()).toEqual(result);
    });
  });
});
