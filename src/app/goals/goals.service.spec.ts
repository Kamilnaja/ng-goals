import { GoalsService } from './goals.service';

let httpClientSpy: { get: jasmine.Spy };
let service: GoalsService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  service = new GoalsService(<any>httpClientSpy);
});
