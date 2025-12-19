


function chc()
{
    outp = document.getElementById("outp");
    inp = document.getElementById("inp").value;
    inp = inp.toUpperCase();
    result = "";
    ende = document.getElementById("ende").checked == true?-1:1;
    offset = document.getElementById("offset").value*ende;
    for(i = 0; i<inp.length; i++)
    {
        if(inp[i].charCodeAt() < 65 || inp[i].charCodeAt() > 91) result += inp[i];
        else
        {
            if(ende == 1 && inp[i].charCodeAt()+offset > 90) result += String.fromCharCode(inp[i].charCodeAt()-26+offset);
            else if(ende == -1 && inp[i].charCodeAt()+offset < 65) result += String.fromCharCode(inp[i].charCodeAt()+26+offset);
            else result += String.fromCharCode(inp[i].charCodeAt()+offset);
        } 
    }
    outp.textContent = result;
    //document.body.style.backgroundColor = "blue";
}