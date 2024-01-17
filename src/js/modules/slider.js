export default class Slider {
    constructor(page, btn) {
        this.page = document.querySelector(page);
        this.slides = Array.from(this.page.children);
        this.btn = document.querySelectorAll(btn);
        this.slideIndex = 1;
    }
    showSlides(n) {
        if(n < 1) {
            this.slideIndex = this.slides.length
        }
        if(n > this.slides.length) {
            this.slideIndex = 1
        }
        this.slides.forEach(slide => {
            slide.style.display = 'none'
        })
        this.slides[this.slideIndex - 1].style.display = 'block'
    }
    plusSlide(n) {
        this.showSlides(this.slideIndex += n);
    }
    render() {
        this.hanson = document.querySelector('.hanson')
        this.hanson.classList.add('animated', 'fadeInUp')

        this.btn.forEach(btn => {
            btn.addEventListener('click', () => {
                console.log(this.slideIndex)
                this.plusSlide(1)
                if(this.slideIndex == 2) {
                    setTimeout(() => {
                        this.hanson.style.display = 'block'
                    }, 3000)
                }
            })
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault()
                this.slideIndex = 1
                this.showSlides(this.slideIndex)
            })
        })

    }
}