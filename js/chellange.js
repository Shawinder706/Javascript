freindOneAge=30;
freindOneHeight=161;
freindTwoAge=30;
freindTwoHeight=169;

if(freindOneHeight > freindTwoHeight)
{
    console.log("Friend one is win and his score is "+ (freindOneHeight+(freindOneAge*5)))
}
else if(freindOneHeight < freindTwoHeight)
{
    console.log("Friend two is win and his score is "+ (freindTwoHeight+(freindTwoAge*5)))
}
else
{
    console.log("Game is draw");
}