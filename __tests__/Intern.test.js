const Intern = require('../lib/Intern.js');

test('create an Intern object', ()=>{
    const intern = new Intern("Becky", 236, "Becky@becky.com", "some School");

    expect(intern.name).toBe("Becky");
    expect(intern.id).toBe(236);
    expect(intern.email).toBe("Becky@becky.com");
    expect(intern.getSchool()).toBe("some School");
    expect(intern.getRole()).toBe("Intern");
})

