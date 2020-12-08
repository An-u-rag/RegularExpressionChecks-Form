//Anurag-18BCE2335 -> Finding Day of the Week(partii-2)
function weekDay(str) {
    if (str != null) {
        const str1 = str.toLowerCase();
        let result = '';
        //ternary conditional statement to check the regular expression pattern.
        result = str1.match(/su[a-z]*/) ? '7' : result;
        result = str1.match(/m[a-z]*/) ? '1' : result;
        result = str1.match(/tu[a-z]*/) ? '2' : result;
        result = str1.match(/w[a-z]*/) ? '3' : result;
        result = str1.match(/th[a-z]*/) ? '4' : result;
        result = str1.match(/f[a-z]*/) ? '5' : result;
        result = str1.match(/sa[a-z]*/) ? '6' : result;
        console.log(result);
    }
    else{
        console.log('Please enter a valid Week Day');
    }
}
//sample function calls
weekDay('Saturday');
weekDay('Monday');
weekDay('Wednesday');