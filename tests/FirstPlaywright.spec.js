const {test,expect} = require('@playwright/test')


test.skip("My First Test",async function({page}) {
    expect(12).toBe(12)
})

test.skip("My Second Test",async function({page}) {
    expect(100).toBe(111)
})

test.skip("My Third Test",async function({page}) {
    expect(2.0).toBe(2.0)
})

test.skip("My Fourth Test",async function({page}) {
    expect("Lloyd Tagami").toContain("Lloyd")
    expect("Lloyd Tagami").toContain("Lloyd")
})