export function renderPrograms(arr){
    const cardStr=arr.map(obj=>
        `
        <div class="card">
            <h3>${obj.title}</h3>
            <h4>Kategória: ${obj.category}</h4>
            <p>Ár: ${obj.price}</p>
            <p>Résztvevők: ${obj.participants}</p>
            <p>Helyek: ${obj.capacity}</p>
            <p>${obj.indoor ? "beltéri":"kültéri"}</p>
      </div>
        `
    ).join('')
    document.querySelector('.programs').innerHTML=cardStr
}


export function renderCateg(arr){
    let categories=arr.map(obj=>obj.category)
    console.log(categories);
    categories=[...new Set(categories)]
    console.log(categories);
    //categories=[...categories,'összes']

    const btnStr=categories.map(ctg=>`
         <button>${ctg}</button>
        `).join('')
    document.querySelector('header').innerHTML='<button class="activeBtn">összes</button>'+btnStr
    
    
}
export function renderStats(programs) {
  const participants = programs.reduce((sum, program) => sum + program.participants, 0);
  const revenue = programs.reduce((sum, program) => sum + program.participants * program.price, 0);
  const averagePrice = programs.reduce((sum, program) => sum + program.price, 0) / programs.length;
  const indoorCount = programs.filter(program => program.indoor).length;

  document.querySelector("footer").innerHTML = `
    <p>Összes résztvevő: ${participants}</p>
    <p>Átlagos részvételi díj: ${averagePrice.toFixed(2)} Ft</p>
    <p>Jelenlegi bevétel: ${revenue} Ft</p>
    <p>Beltéri programok: ${indoorCount}</p>
    <p>Kültéri programok: ${programs.length - indoorCount}</p>
  `;
}