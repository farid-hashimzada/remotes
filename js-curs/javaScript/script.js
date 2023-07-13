const btn = document.querySelector('#new-qoutes')
const quote = document.querySelector('.quote')
const newQoute = document.querySelector('.person')

const qoutes = [{
    quote: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates facere inventore magnam. Eum
    veritatis dolor qui harum. Odio molestiae, ducimus hic illum quo aut eligendi aliquid sit deserunt
    natus quos!`,
    person: 'Farid Hashimzada'
}, {
    quote: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates facere inventore magnam. Eum
    veritatis dolor qui harum. Odio molestiae, ducimus hic illum quo aut eligendi aliquid sit deserunt
    natus quos!`,
    person: `Nadir Hashimov`
}, {
    quote: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates facere inventore magnam. Eum
    veritatis dolor qui harum. Odio molestiae, ducimus hic illum quo aut eligendi aliquid sit deserunt
    natus quos!`,
    person: `Shahlar Hashimzade`
}, {
    quote: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates facere inventore magnam. Eum
    veritatis dolor qui harum. Odio molestiae, ducimus hic illum quo aut eligendi aliquid sit deserunt
    natus quos!`,
    person: `Tapdiq Quliyev`
},];

btn.addEventListener('click', function () {
    let randomj = Math.floor(Math.random() * qoutes.length);

    quote.innerText = qoutes[randomj].quote
    newQoute.innerText = qoutes[randomj].person
}) 