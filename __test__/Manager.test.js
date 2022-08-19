const Manager = require("../lib/Manager");
describe("Manager", () => {
  let manager;
  beforeEach(() => {
    manager = new Manager("Farrell", 1, "farrell.d.dianni@gmail.com", "7");
  });
  describe("getRole", () => {
    it("You got the Role", () => {
      const printedRole = manager.getRole();
      expect(printedRole).toBe("Manager");
    });
  });
});