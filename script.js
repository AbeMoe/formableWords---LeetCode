//Gameplan: add all the characters in our 'chars'
//          to a 'letters' object keeping count of each.
//          Then Delete chars for the sake of
//          good memory management. Then for each
//          word in our 'words object', create a new data object
//          check if our char is is inthere, if it's not then
//          I want to check if a letter is in our 'charDict'.
//          If it is, and it's not equal to zero,
//          then add that char to our new dataobject (we'll call it tempDict)
//          with value minus one.


const words = ["dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin","ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb","ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl","boygirdlggnh","xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx","nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop","hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx","juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr","lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo","oxgaskztzroxuntiwlfyufddl","tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp","qnagrpfzlyrouolqquytwnwnsqnmuzphne","eeilfdaookieawrrbvtnqfzcricvhpiv","sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz","yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue","hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv","cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo","teyygdmmyadppuopvqdodaczob","qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs","qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs"];
var chars = "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp"
var charDict = {};
var total =0;
for (var char of chars)
{
  if (charDict[char] == undefined)
  {
    charDict[char] = 1;
  }
  else
    charDict[char]+=1;
}
console.log(charDict);
delete chars;
for(var word of words)
{
  var isGood =true;
  var tempDict = {};
  for(var char of word)
  {
    if(charDict[char] != undefined)
    {
      if(tempDict[char] == undefined)
        tempDict[char] = charDict[char]-1;
      else if(tempDict[char] != 0)
      {
        tempDict[char] -=1;
        console.log(tempDict);
      }
      else
      {
        isGood =false;
        break;
      }
    }
    else
    {
      isGood =false;
      break;
    }

  }
  if(isGood)
  {
    console.log(word);
    total+= word.length;
  }
  delete tempDict;
}
console.log(total);
