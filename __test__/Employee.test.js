const Employee = require("../lib/Employee");
describe("Employee", () => {
  let employee;

  beforeEach(() => {
    employee = new Employee(
      "Nate",
      1,
      "natewalchenbach24@gmail.com",
      "Employee"
    );
  });

  describe("getName", () => {
    it("you got the name!", () => {
      const printedName = employee.getName();
      expect(printedName).toBe("Nate");
    });
  });
  describe("getId", () => {
    it("You got the ID", () => {
      const printedId = employee.getId();
      expect(printedId).toBe(1);
    });
  });
  describe("getEmail", () => {
    it("You got the email!", () => {
      const printedEmail = employee.getEmail();
      expect(printedEmail).toBe("natewalchenbach24@gmail.com");
    });
  });
  describe("getRole", () => {
    it("You got the Role", () => {
      const printedRole = employee.getRole();
      expect(printedRole).toBe("Employee");
    });
  });
});