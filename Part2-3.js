//Anurag-18BCE2335 -> Palindrome(partii-3)
/* Parameters are Original String to replace in, which substring to replace , the new string to be replaced with */
function stringReplace(str, rstr, nstr) 
{
    let newstr = str.replace(rstr,nstr);
    console.log(newstr);
}

const strm = `Hello my name is Anurag`;
//Function Call with parameters of Main String , String to be replaced and Replace wiwth new String.
stringReplace( strm , 'Anurag' ,'Parcha');