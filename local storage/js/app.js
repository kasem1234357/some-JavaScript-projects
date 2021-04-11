const input = document.querySelector('input');
const allspan = document.querySelectorAll('.buttons span');
const results = document.querySelector('.results span');
allspan.forEach(span => {
    span.addEventListener('click', (e) =>
    {
        console.log(localStorage.length);
        if (e.target.classList.contains('check')){
            if(input.value !== ""){
                if(localStorage.getItem(input.value))
                {
                    results.innerHTML = ` we found local called <span>${input.value}</span>`
                }
            else{
                results.innerHTML = ` we not found local  <span>${input.value}</span>`
            }
            }
            else{
                showMassege ()
            }
            input.value = "";
        }
        if (e.target.classList.contains('delete')){
            if(input.value !== ""){
                if(localStorage.getItem(input.value))
                {
                    localStorage.removeItem(input.value);
                    results.innerHTML = ` we remove local called <span>${input.value}</span>`;
                }
            else{
                results.innerHTML = ` we not found local called  <span>${input.value}</span>`;
            }
            }
            else{
                showMassege ()
            }
            input.value = "";
        }
        if (e.target.classList.contains('show')){
            if(localStorage.length)
            {
                results.innerHTML = "";
                for(let [key, value] of Object.entries(localStorage))
                {
                    results.innerHTML += `<span>${key} <br></span>`
                }
            }
        }
        if (e.target.classList.contains('add')){
            if(input.value !== ""){
                localStorage.setItem(input.value,'test');
                results.innerHTML = `we added item ${input.value}`;
                input.value = "";
            }
            else{
                results.innerHTML = `you cant add empty value`;
            }
        }
    })
})
function showMassege ()
{
        results.innerHTML = `you cant check empty value`;
}
