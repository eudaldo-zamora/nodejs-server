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

exports.updatePerson = async (req, res) => {
    try {
        const { firstname, lastname, birthday } = req.body;
        let person = await Person.findById(req.params.id);

        if (!person) {
            res.status(400).send({msg: 'Person not found'});
        }

        person.firstname = firstname;
        person.lastname = lastname;
        person.birthday = birthday;

        person = await Person.findOneAndUpdate({_id: req.params.id}, person, {new: true});
        res.send(person);
    } catch (error) {
        console.log(error);   
        res.status(500).send('An error has occurred');
    }
}