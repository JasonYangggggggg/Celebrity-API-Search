const form = document.querySelector('#searchForm');
const Clear_but = document.querySelector('#Clear-but');
const Remove_but = document.querySelector('#Remove-but');

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = {params: {q: searchTerm}}
  const res = await axios.get(`https://api.tvmaze.com/search/people`, config);
  let result = res.data;
   for(let results of result){
    if(results.person.image){
        const img = document.createElement('IMG');
             img.setAttribute("id", "move-img");
             img.src = results.person.image.medium;
             document.body.append(img)
    }
   }
   form.elements.query.value = '';
})

Remove_but.addEventListener('click',async function(e){
    e.preventDefault();
    const elements = document.getElementById('move-img');
    elements.remove();
})


Clear_but.addEventListener('click', async function(e){
    e.preventDefault();
    
    const elementss = document.querySelectorAll('#move-img');
    elementss.forEach(e1 =>{
        e1.remove();
    });
    
    
})



