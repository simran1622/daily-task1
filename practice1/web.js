function getCount(i)
{
    let count= Number.parseInt(document.getElementById("count").value);
    if(i==1)
    {
        count=count+1;
        document.getElementById("count").value=count;
    }
    else if(i==2)
    {
        if(count>0)



        
        count--;
        document.getElementById("count").value=count;
    }
    
    else

    {
        count=0;
        document.getElementById("count").value=count;
    }
    

}