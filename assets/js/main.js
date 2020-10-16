class Links extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ul>
            <li><a href="#section-7">About us</a></li>
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
customElements.define('main-links', Links);
function openDescr(id) {
    const index = id.charAt(id.length - 1) - 1;
    document.querySelectorAll('.section').item(index).classList.add('full-descr');
}