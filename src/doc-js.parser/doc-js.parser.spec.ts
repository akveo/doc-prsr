import {
  GetStyles,
  GetProperties,
  GetExamples,
  GetMethods,
  Common,
  GetParams
} from './getters';
import {DocJsParser} from './doc-js.parser';
import {CommonOptions} from './doc-js.parser.options';

describe('#DocJsParser', () => {
  test('#Common -> getName', () => {
    const common = new Common();
    const testObj1 = { kind: 'component' };
    const testObj2 = { name: 'Obj name' };

    expect(common.getName(testObj2)).toBe('Obj name');
    expect(common.getName(testObj1)).toBe('');
  });
});