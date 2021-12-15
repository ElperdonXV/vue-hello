//BONUS 

//Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
//Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
//Poi aggiungiamo un pulsante per aumentare questo numero.

const app = new Vue(
    {
        el: '#prova',
        data: {
            message: 'Provo ad inserire il testo tramite Vue-Js, che figata',
            image: 'https://www.wikihow.com/images_en/thumb/2/29/Eat-Nutella-Step-1-Version-4.jpg/v4-460px-Eat-Nutella-Step-1-Version-4.jpg.webp',
            text: '',
            placeholder: 'Inserisci qualcosa',
            img: 'https://france-export-fv-online.com/3662-large_default/nutella.jpg',
            num: 10,
        },
        methods: {
            addPr: function () {
                this.num += 1;
                document.getElementById("remove").disabled = false; //abilito il pulsante remove qualora fosse stato azzerato 
            },
            rmvPr: function () {
                if(this.num != 0){
                    this.num -= 1;
                }
                else document.getElementById("remove").disabled = true; //disabilito il pulsante quando si arriva a 0
            }
        }
    }
);