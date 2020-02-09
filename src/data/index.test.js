import { filterIphones, getIphones } from './'

const sampleData = [
  {
    "id": 1,
    "name": "iPhone SE",
    "color": "Silver",
    "capacity": "16GB",
    "price": 629
  },
  {
    "id": 2,
    "name": "iPhone SE",
    "color": "Silver",
    "capacity": "64GB",
    "price": 829
  },
]

describe('Data module', () => {
  describe('filterIphones', () => {
    it(`Should return an empty array when the searchTerm does not exist
    in name, color, or capacity of any iphone`, () => {
      expect(filterIphones(sampleData, 'samsung')).toEqual([])
    })
    it(`Should return an array of all iphones whose name, color, or capacity
    contains the searTerm (case insensitive)`, () => {
      expect(JSON.stringify(filterIphones(sampleData, 'silver'))).toEqual(
        JSON.stringify(sampleData)
      )
      expect(JSON.stringify(filterIphones(sampleData, '16GB'))).toEqual(
        JSON.stringify([sampleData[0]])
      )
    });
  })

  describe('getIphones', () => {
    it('Should call a handleError function when error occurs in fetching data', async () => {
      const error = new Error('test')
      window.fetch = jest.fn().mockRejectedValue(error);
      const handleError = jest.fn();
      await getIphones('', handleError);
      expect(handleError).toHaveBeenCalledWith(error)
    })
  });
})