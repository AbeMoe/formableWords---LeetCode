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


words = ["hello","world","leetcode"];
chars = "welldonehoneyr";
charDict = {};
for (char of chars)
{
  if (charDict[char] == undefined)
  {
    charDict[char] = 1;
  }
  else
    charDict[char]+=1;
}
console.log(charDict);
