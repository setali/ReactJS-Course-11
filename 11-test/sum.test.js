const { sum, sumString: mySumString } = require('./sum')

const sumString = jest.fn(mySumString)

beforeAll(() => {
  console.log('Execute before all tests')
})

beforeEach(() => {
  console.log('Execute before each tests')
})

afterEach(() => {
  console.log('Execute after each tests')
})

afterAll(() => {
  console.log('Execute after all tests')
})

describe('Sum features', () => {
  test('sum test', () => {
    expect(sum(2, 5)).toBe(7)
    expect(sum(2, '5')).toBe(7)
    expect(sum('Ali', 1)).toBeNaN()
    expect(sum()).toBeNaN()
    expect(sum(1)).toBeNaN()
    expect(sum(NaN)).toBeNaN()
  })

  test('sumString test', () => {
    expect(sumString(2, 3)).toBe('Sum is 5')
    expect(sumString('Ali', 3)).toBe('Sum is NaN')
    expect(sumString()).toBe('Sum is NaN')
    expect(sumString).toBeCalledTimes(3)
    expect(sumString).toBeCalledWith(2, 3)
    expect(sumString).toBeCalledWith('Ali', 3)
  })
})

// if (sum(2, 5) !== 7) {
//   throw 'Test fails'
// }

// if (sum(2, '5') !== 7) {
//   throw 'Test fails'
// }

// if (!Number.isNaN(sum('Ali', 2))) {
//   throw 'Test fail'
// }

// if (!Number.isNaN(sum())) {
//   throw 'Test fail'
// }
