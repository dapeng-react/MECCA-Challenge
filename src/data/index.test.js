import { filterIphones } from './'

describe('Data module', () => {
  describe('filterIphones', () => {
    it('Should do something', () => {
      expect(filterIphones([], '')).toEqual([
        { foo: 'bar' }
      ])
    })
  })
})