//javascript program to count repeated character.
const maxChar = (string) => {
    let object = {}
    for (let charater of string) {
        (!object[charater]) ? object[charater] = 1 : object[charater]++;
    }
    return object;

}
