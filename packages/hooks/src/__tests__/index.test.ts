import * as reactHooks from '..';
describe('reactHooks', () => { 
  test('exports modules should be defined', () => { 
    Object.keys(reactHooks).forEach((module) => {
      expect(reactHooks[module]).toBeDefined()
    })
  })
})