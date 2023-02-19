const { gender } = require("../db");

const getDBByGender = async() => {
    const genders = [
        "Female",
        "Male",
        "Genderless",
        "unknown",
    ];

genders.forEach((element)=>{
    gender.findOrCreate({
        where: { name: element }
    });
})

const allGenders = await gender.findAll();
console.log(allGenders)
return allGenders;

};

module.exports = {
    getDBByGender
}