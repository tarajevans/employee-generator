const Engineer = require('../lib/Engineer.js');

test('create a Engineer object', ()=>{
    const engineer = new Engineer("Becky", 236, "Becky@becky.com", "Becky");

    expect(engineer.name).toBe("Becky");
    expect(engineer.id).toBe(236);
    expect(engineer.email).toBe("Becky@becky.com");
    expect(engineer.getGithub()).toBe("Becky");
    expect(engineer.getRole()).toBe("Engineer");
})