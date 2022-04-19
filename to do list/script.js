let input = document.querySelector('input');

input.addEventListener('click', function(event) {
    event.target.style.outline = '0'
})
input.addEventListener('focus', function(event) {
    event.target.style.outline = '0';
})


let list = document.querySelector('.list');
let btn = document.querySelector('.addbtn')
let noyes = document.querySelector('.sil');
let firstinput = document.querySelector('input');
firstinput.addEventListener('blur', _ => {
    firstinput.setAttribute("value", firstinput.value);
})


function addlistitem() {
    list.innerHTML += `<div class="input">
    <input type="text" name="" id="">
    <button class="sil"></button>
    </div>`;
    list.style.outline = '0'
    let deletebtnnew = document.querySelectorAll('.sil');
    deletebtnnew.forEach(el => {
        el.addEventListener('click', deletefunc)

        function deletefunc(event) {
            event.target.parentElement.remove()
        }
    })


    let inputs = document.querySelectorAll('input');
    inputs.forEach(el => {
        el.addEventListener('click', function(event) {
            event.target.style.outline = '0'
        })
        el.addEventListener('focus', function(event) {
            event.target.style.outline = '0';
        })
        el.addEventListener('blur', _ => {
            el.setAttribute("value", el.value);
        })
    })


    let inpdiv = document.querySelectorAll('.input');
    inpdiv.forEach(el => {
        el.style.border = 'none'
    })
    list.style.border = '1px solid #C4C4C4';
}

btn.addEventListener('click', addlistitem);


// SORT
let arr = [];
let counter = 0;
let sortbtn = document.querySelector('.sortbtn');
sortbtn.addEventListener('click', sorter);
sortbtn.addEventListener('click', demo);
sortbtn.addEventListener('click', firstsort);

function demo() {
    let deletebtnnew = document.querySelectorAll('.sil');
    deletebtnnew.forEach(el => {
        el.addEventListener('click', deletefunc)

        function deletefunc(event) {
            event.target.parentElement.remove()
        }
    })
}

function firstsort() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(el => {

        el.addEventListener('click', function(event) {
            event.target.style.outline = '0'

        })
        el.addEventListener('focus', function(event) {
            event.target.style.outline = '0';
        })

        el.addEventListener('blur', _ => {
            el.setAttribute("value", el.value);
        })
    })

    let inpdiv = document.querySelectorAll('.input');
    inpdiv.forEach(el => {
        el.style.border = 'none'
    })
    list.style.border = '1px solid #C4C4C4';
}


function sorter() {

    let allist = document.querySelectorAll('input');

    allist.forEach(el => arr.push(el.value))
    console.log(arr);
    list.innerHTML = '';

    if (counter == 0) {
        domcreator(counter);
        counter++;
        azalart.src = "images/sortza.png"
    } else {
        domcreator(counter);
        counter--;
        azalart.src = "images/sortaz.png"
    }
    arr = [];
}

function domcreator(el) {
    if (el == 0) {
        let element = ''
        arr.sort(function(a, b) {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        });

        arr.map(c => {
            element += `<div class="input">
            <input type="text" name="" id="" value="${c}">
            <button class="sil"></button>
        </div>`;
        });
        list.innerHTML = element
        console.log(arr);

    } else {
        let element = ''

        arr.sort(function(a, b) {
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            } else {
                return 0;
            }
        });
        arr.map(c => {
            element += `<div class="input">
            <input type="text" name="" id="" value="${c}">
            <button class="sil"></button>
        </div>`;

        });
        list.innerHTML = element
        console.log(arr);
    }
}

//Hover
let azalart = document.querySelector('.sort1')
sortbtn.addEventListener('mouseover', _ => {
    var img = document.getElementById('foto').getAttribute('src');
    if (img == "images/sortza.png") {
        azalart.src = 'images/hvraz.png'
    } else if (img == "images/sortaz.png") {
        azalart.src = 'images/hvrza.png'
    }
})
sortbtn.addEventListener('mouseout', _ => {
    var img = document.getElementById('foto').getAttribute('src');

    if (img == "images/hvraz.png") {
        azalart.src = 'images/sortza.png'

    } else if (img == "images/hvrza.png") {
        azalart.src = 'images/sortaz.png'

    }
})