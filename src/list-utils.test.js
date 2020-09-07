const { removeItemFromArrayByIndex } = require('./list-utils')

describe('tests', () => {
  let testArray = []

  beforeEach(() => {
    testArray = resetTestArrayValues()
  })

  describe('removeItemFromArrayByIndex', () => {
    test('removing item from array by index, removes the correct element', () => {
      const INDEX = 0
      const EXPECTED = [testArray[INDEX]]
      const ORIGINAL_ARRAY_LENGTH = testArray.length

      let updatedArray = removeItemFromArrayByIndex(INDEX, testArray)
      expect(updatedArray.length).toEqual(ORIGINAL_ARRAY_LENGTH - 1)
      expect(updatedArray).toEqual(expect.not.arrayContaining(EXPECTED))
    })

    test('attempting to remove item at non-existing index, leaves list untouched', () => {
      const INDEX = 4
      const ORIGINAL_ARRAY_LENGTH = testArray.length

      let updatedArray = removeItemFromArrayByIndex(INDEX, testArray)
      expect(updatedArray.length).toEqual(ORIGINAL_ARRAY_LENGTH)
    })

    test('providing non-list results in error thrown', () => {
      const testObject = {}
      expect( () => {
        removeItemFromArrayByIndex(0, testObject)
      }).toThrow()
    })

    test('providing non-number for index results in error thrown', () => {
      const testObject = {}
      expect( () => {
        removeItemFromArrayByIndex('bad-index', testArray)
      }).toThrow()
    })
  })


})

const resetTestArrayValues = () => {
  let testArray = [
    { id: 0, name: '0123', list: ['a', 'b', 'c'] },
    { id: 78, name: 'banana', list: ['a', 'b', 'c'] },
    { id: 5, name: 'zebra', list: ['a', 'b', 'c'] }
  ]
  return testArray
}
