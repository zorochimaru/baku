class Links extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ul>
            <li><div onclick="goTo(this)" style="cursor:pointer" data-index="link-7">About us</div></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"><img
                        src="assets/img/Facebook.svg"></a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"><img
                        src="assets/img/Instagram.svg"></a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"><img
                        src="assets/img/YouTube.svg"></a></li>
         </ul>
      `;
    }
}
class Scroller extends HTMLElement {

    connectedCallback() {
        let secList = [];
        document.querySelectorAll('.section').forEach((section, i) => {
            secList.push(`<li class="anchLink ${ i === 0 ? 'active' : '' }" data-index="link-${ i + 1 }" onclick="goTo(this)"></li>`)

        });
        this.innerHTML = `
        <ul>
            ${ secList.join('') }
        </ul>
      `;
    }
}
customElements.define('anch-links', Scroller);
customElements.define('main-links', Links);
function openDescr(id) {
    const index = id.charAt(id.length - 1) - 1;
    document.querySelectorAll('.section').item(index).classList.add('full-descr', 'fixed-section');
    document.querySelector('#overlay').style.opacity = '1';
    document.querySelector('.close-btn').style.display = 'block';
}
function closeDescr() {

    document.querySelector('.full-descr').classList.remove('full-descr', 'fixed-section');
    document.querySelector('#overlay').style.opacity = '0';
    document.querySelector('.close-btn').style.display = 'none';
}
function goTo(page) {
    const index = page.dataset.index.charAt(page.dataset.index.length - 1);
    document.getElementById(`section-${ index }`).scrollIntoView();
    document.querySelectorAll('.anchLink').forEach(link => {
        link.classList.remove('active');
    })
    document.querySelector(`[data-index=link-${ index }]`).classList.add('active');
}

let scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.anchLink').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`[data-index=link-${ entry.target.id.charAt(entry.target.id.length - 1) }]`).classList.add('active');
        }
    });
}, { threshold: [1] });

document.querySelectorAll("section").forEach(sec => {
    scrollObserver.observe(document.querySelector("#" + sec.id));
})
