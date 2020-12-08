//Anurag-18BCE2335 -> Palindrome(partii-1)
function palindrome(str){
    //finding the length of the string
    const stringLength = str.length;

    //If the length of Palindrome is two, it checks separately to avoid errors.
    if(stringLength == 2){
        if(str.charAt(0)==str.charAt(1)){ //checking both the characters if the match
                console.log(`${str} , It is a Palindrome.`);
                return true;
        }
        else{
            console.log(`${str} , Not a Palindrome.`);
            return false;
        }
    }

    //Finding the mid point of the string given
    let stringMiddle = Math.floor(stringLength/2);

    //same function above represented as a comment below.
    /*for(var i=0; i < stringLength/2; ++i);
    {
        stringMiddle = i;
    }
    stringMiddle--;*/

    //Finding if Palindrome for any other case where length > 2. 
    //Running 2 pointers one back to start from mid, and the other to the last character of the string, and comparing them.
    for(var i = stringMiddle, j = stringMiddle; j<stringLength && i >=0 ; --i, ++j){
        if(str.charAt(i) != str.charAt(j))
        {
            console.log(`${str} , Not a Palindrome.`)
            return false;
        }
        else
            continue;
    }
    console.log(`${str} , It is a Palindrome. `);
    return true;   
}
//Sample function calls
palindrome('mom');
palindrome('Anurag');

