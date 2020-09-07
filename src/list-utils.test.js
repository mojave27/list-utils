const { removeItemFromArrayByIndex } = require('./list-utils')

describe('tests', () => {

  let testArray = []

  beforeEach(() => {
    testArray = resetTestArrayValues()
  })

  test('removing item from array by index, removes the correct element', () => {
    const INDEX = 0
    const EXPECTED = [testArray[INDEX]]
    const ORIGINAL_ARRAY_LENGTH = testArray.length

    let updatedArray = removeItemFromArrayByIndex(INDEX, testArray)
    expect(updatedArray.length).toEqual(ORIGINAL_ARRAY_LENGTH - 1)
    expect(updatedArray).toEqual(
      expect.not.arrayContaining(EXPECTED)
    )
  })

})

const resetTestArrayValues = () => {
  let testArray = [
    {id: 0, name: '0123', list:['a','b','c']},
    {id: 78, name: 'banana', list:['a','b','c']},
    {id: 5, name: 'zebra', list:['a','b','c']},
  ]
  return testArray
}


