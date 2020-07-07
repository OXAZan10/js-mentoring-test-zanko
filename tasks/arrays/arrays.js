const chars = require ('./characters.json');
/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
    return chars.map(char=> char.name); 
}
/**
 * print (console.log) ids of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {// тесты успешно отрабатывают только в случае, если я вывожу console.log(el.name), но по заданию я должна вывести id. 
    chars.forEach(el=>{
        console.log(el.id)
    })
}

/**
 * return an array of non-human characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
    return chars.filter(char=>char.species=="Alien"||char.species=="Mytholog"||char.species=="Poopybutthole"||char.species=="unknown"||char.species=="Humanoid");
 
}

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) { // тесты не проходит, но я не понимаю что не так, если я отдаю все парметры ( чекала через console.log ( getJerryInfo(chars));
    let jerrySmithArr= chars.filter(char=>char.name=="Jerry Smith");
    let objectJerry= jerrySmithArr.reduce((acc, n) => {
        acc[n.name] = n;
        return acc;
      }, {});
      return objectJerry;

}

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {

   return chars.every(char=>char.species=="Human");

}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
    //return chars.indexOf(char=>char.type=="Fish-Person");
    const anyFishPerson= chars.map(char=> char.type);
    if (anyFishPerson.lastIndexOf("Fish-Person")>0){
        return true;
    }else{
        return false;
    }

}
//console.log (isAnyFishPerson(chars));

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 */
function minItem(arr) {
    return arr.reduce(function(accomulator,currentValue,index){
        if (currentValue<arr[accomulator]) {
            return index;
        }

        else{
            return accomulator;
        }
        
    },0);

}

module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};
