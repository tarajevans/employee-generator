const Employee = require('../lib/Employee.js');
  
test('create an Employee object', () => {
    const employee = new Employee("Becky", 236, "Becky@becky.com");

    expect(employee.name).toBe("Becky");
    expect(employee.id).toBe(236);
    expect(employee.email).toBe("Becky@becky.com");
    expect(employee.getEmail()).toBe("Becky@becky.com");
    expect(employee.getId()).toBe(236);
    expect(employee.getName()).toBe("Becky");
    expect(employee.getRole()).toBe("Employee");
})
