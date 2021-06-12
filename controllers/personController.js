const Person = require("../models/Person");

exports.createPerson = async (req, res) => {
    try {
        let person;
        person = new Person(req.body);
        await person.save();
        res.send(person);
    } catch (error) {
        console.log(error);   
        res.status(500).send('An error has occurred');
    }
}

exports.findPersons = async (req, res) => {
    try {
        const persons = await Person.find();
        res.send(persons);
    } catch (error) {
        console.log(error);   
        res.status(500).send('An error has occurred');
    }
}