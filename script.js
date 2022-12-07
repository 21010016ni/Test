import json from "./data.json" assert {type:"json"};

function formatJSON(json)
{
    console.log(json);

    let html="";
    for(let i of json)
    {
        if(i.type=="normal")
        {
            html+="<div class='normal' id='n"+i.id+"'><div><a>&gt;&gt;<span>"+i.id+"</span></a><span>"+i.name+"</span></div>";
        }
        else if(i.type=="secret")
        {
            html+="<div class='secret' id='s"+i.id+"'><div><a>&gt;&gt;s<span>"+i.id+"</span></a><span>"+i.name+"</span></div>";
        }
        html+="<div>"+i.text+"</div></div>";
    }
    document.getElementById("result").innerHTML=html;
}

window.addEventListener("load",()=>
{
    formatJSON(JSON.parse(json));
});