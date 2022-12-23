
class Typer {
  constructor(txtElement, words, wait) {
    this.txtElement = txtElement;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.txt = '';
    this.wordIndex = 0;
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    // full text of current word in words
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      // delete a character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // add a character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // insert txt to html
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // how fast to type
    let typeSpeed = 100;
    // delete faster than typing
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt) {
      // pause before deleting
      typeSpeed = this.wait;
      // start deleting
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex += 1;
      typeSpeed = 200;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

export default function initType() {
  const txtElement = document.querySelector('.txt-type');
  // parsing array
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  
  const wait = txtElement.getAttribute('data-wait');

  new Typer(txtElement, words, wait);
}