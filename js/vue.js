/*
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Vi ricordo le funzionalità minime
Deve vedersi un'immagine grande che è l'immagine principale
Devono vedersi i thumbnails
Il thumbnails che corrisponde all'immagine grande deve essere graficamente messo in risalto con una classe active
Deve essere possibile cambiare l'immagine principale con le freccette prev e next
Bisogna fare in modo che il carosello sia "infinito": se clicco sul next e sono all'ultima immagine, ricomincio dalla prima; se sono alla prima immagine e clicco sul prev vado all'ultima.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/
console.log('Vue ok', Vue);

const app = Vue.createApp({
    data() {
        return {
            currentIndex: 0,
            database,
            autoPlay: false,            
        }
    },
    computed: {
        lastElement() {
            return this.database.length -1
        },    
    },
    methods: {
        goTo(target) {
            if(target === 'next'){
                this.currentIndex++;
                if( this.currentIndex > this.lastElement) {
                    this.currentIndex = 0;
                }
            } else if (target === 'prev'){
                this.currentIndex--;
                if( this.currentIndex < 0) {
                    this.currentIndex = this.lastElement;
                }
            } else {
                this.currentIndex = target;
            }
        },
        auto() {
            this.autoPlay = setInterval(() => {
                this.goTo('next')
            }, 3000);            
        },   
        stop() {
            clearInterval(this.autoPlay)
        }
        
    },
    mounted() {
        this.auto();
    }
});

app.mount('#root');

