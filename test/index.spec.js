import { expect } from "chai"
import testFunction from "../src/index"

describe("Boilerplate tests", () => {
  describe("import function", () => {

    it("should successfully import and call a function", () => {
      const response = testFunction();
      expect(response).to.equal("success")
    })
  })
})
