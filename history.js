const histData =[
    {
        ques: "who found brahmin kingdom?",
        aop: "vasudev",
        bop: "susharma",
        cop: "shimuk",
        ans: "pushyamitra shungh",

    },
    {
        ques: "indo yunani king meanders defeated by?",
        aop: "vasudev",
        bop: "susharma",
        cop: "shimuk",
        ans: "pushyamitra shungh",

    },
    {
        ques: "who is two times ashvamegh yagh by patanjali?",
        aop: "vasudev",
        bop: "susharma",
        cop: "shimuk",
        ans: "pushyamitra shungh",

    },
    {
        ques: "who made barhut stupa?",
        aop: "vasudev",
        bop: "susharma",
        cop: "shimuk",
        ans: "pushyamitra shungh",

    },
    {
        ques: "who killed last king devbhuti?",
        aop: "pushyamitra sungh",
        bop: "susharma",
        cop: "shimuk",
        ans: "vasudev",

    },
    {
        ques: "who found kanava vansh?",
        ans: "vasudev",
        bop: "susharma",
        cop: "shimuk",
        aop: "pushyamitra shungh",

    },
    {
        ques: "who is last king of kanava vansh?",
        aop: "vasudev",
        ans: "susharma",
        cop: "shimuk",
        bop: "pushyamitra shungh",

    },
    {
        ques: "who killed susharma?",
        aop: "vasudev",
        bop: "susharma",
        cop: "chandragupta",
        ans: "shimuk",

    },
    {
        ques: "who founded stavahna kingdom?",
        aop: "vasudev",
        bop: "susharma",
        cop: "chandragupta",
        ans: "shimuk",

    },
    {
        ques: "which kingdom capital is vidisha?",
        aop: "vasudev",
        bop: "susharma",
        cop: "chandragupta",
        ans: "pushyamitra sungha",

    },
    {
        ques: "pratisthan is capital of which kingdom?",
        aop: "vasudev",
        bop: "susharma",
        cop: "chandragupta",
        ans: "satvahna",

    },
    {
        ques: "ashvamegh or rajshuya is yag of which kingdom?",
        aop: "vasudev",
        bop: "susharma",
        cop: "chandragupta",
        ans: "satvahna or satkarni",

    },
    {
        ques: "gathasaptati is book of which author?",
        aop: "gunadaya",
        bop: "susharma",
        cop: "chandragupta",
        ans: "haal",

    },
    {
        ques: "who use first lead in which rule?",
        aop: "vasudev",
        bop: "susharma",
        cop: "chandragupta",
        ans: "sungh",

    },
    {
        ques: "sungh import lead from which?",
        aop: "china",
        bop: "greece",
        cop: "iran",
        ans: "rome",

    },
    {
        ques: "who start first land donation to brahmin",
        aop: "vasudev",
        bop: "susharma",
        cop: "chandragupta",
        ans: "satvahna",

    },
    {
        ques: "karle ka chaitya or ajanta or ellora cave is work of which kingdom?",
        aop: "vasudev",
        bop: "susharma",
        cop: "chandragupta",
        ans: "satvahana",

    },
    {
        ques: "who known as southern swami?",
        aop: "vasudev",
        bop: "susharma",
        cop: "chandragupta",
        ans: "satvahana",

    },
    {
        ques: "which known as setu as bridge north to south india?",
        aop: "vasudev",
        bop: "susharma",
        cop: "chandragupta",
        ans: "satvahana",

    },
    {
        ques: "karle ka chaitya or ajanta or ellora cave is work of which kingdom?",
        aop: "vasudev",
        bop: "susharma",
        cop: "chandragupta",
        ans: "satvahana",

    },
]
const histHtml = geoData.map(e =>
    `<div class="quesCol">
    <div class="ques">${e.ques}</div>
     <div class="op">${e.aop}</div>
      <div class="ans">${e.ans}</div>
       <div class="op">${e.cop}</div>
        <div class="op">${e.bop}</div>
    </div>
    
    
    `
).join('')
const hist = document.querySelector(".history")
hist.innerHTML = histHtml

let ans = document.querySelectorAll(".ans")
ans.forEach(e => {
    e.addEventListener("click", (i) => {
        i.target.classList.add("green")
    })

})