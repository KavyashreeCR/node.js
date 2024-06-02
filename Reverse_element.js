//Write a program to reverse each element in an array

const value =[21,345,29,30];
const num = value.length;
for(let i = 0; i<num; i++)
{
    let rem= num[i]%10;
    rem = rem*10;
    let n = rem+Math.floor(num[i]/10);
    console.log(n);

}