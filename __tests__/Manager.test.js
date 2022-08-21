const Manager = require('../lib/Manager.js');

test('create a Manager object', ()=>{
    const manager = new Manager("Becky", 236, "Becky@becky.com", 25);

    expect(manager.name).toBe("Becky");
    expect(manager.id).toBe(236);
    expect(manager.email).toBe("Becky@becky.com");
    expect(manager.getOfficeNumber()).toBe(25);
    expect(manager.getRole()).toBe("manager");
})