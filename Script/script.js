const btn = document.querySelector('#enviarbtn');
const section = document.querySelector('#formcont');

if (btn && section) {
    btn.addEventListener('click', function(event) {
        event.preventDefault();

        const iname = document.querySelector('#inome').value;
        const isobrenome = document.querySelector('#isobrenome').value;
        const iemail = document.querySelector('#iemail').value;
        const imessage = document.querySelector('#imensagem').value;

        console.table([iname, isobrenome, iemail, imessage]);

        section.innerHTML = `Obrigado, ${iname}, por entrar em contato conosco! Em breve, responderemos sua mensagem enviada para o email ${iemail}.`;
    });
}


const navbar = document.querySelector('.navbar');
const navlist = document.querySelector('.navlist');
const navul = document.querySelector('.navlist ul');
const mobilemenu = document.querySelector('.mobilemenu');
const mobileul = document.querySelector('.mobilemenu ul');

const itensMoveis = Array.from(document.querySelectorAll('.navlist .navintem'));

function menushow() {
    mobilemenu.classList.toggle('open');
}

function devolverItensParaNavbar() {
    const fixos = document.querySelectorAll('.navlist .navintemf');
    const primeiroFixoDoFim = fixos[1];

    itensMoveis.forEach(function(item) {
        navul.insertBefore(item, primeiroFixoDoFim);
    });
}

function moverUltimoItemParaMenu() {
    const itensNaBarra = Array.from(navul.querySelectorAll('.navintem'));

    if (itensNaBarra.length === 0) {
        return;
    }

    const ultimoItem = itensNaBarra[itensNaBarra.length - 1];

    mobileul.prepend(ultimoItem);
}

function ajustarMenu() {
    mobilemenu.classList.remove('open');

    devolverItensParaNavbar();

    navbar.classList.remove('tem-menu');

    if (navul.scrollWidth <= navlist.clientWidth) {
        return;
    }

    navbar.classList.add('tem-menu');

    while (navul.scrollWidth > navlist.clientWidth) {
        const aindaTemItemMovel = navul.querySelector('.navintem');

        if (!aindaTemItemMovel) {
            break;
        }

        moverUltimoItemParaMenu();
    }
}

window.addEventListener('load', ajustarMenu);
window.addEventListener('resize', ajustarMenu);