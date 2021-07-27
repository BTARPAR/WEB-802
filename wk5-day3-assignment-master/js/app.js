// RECIPE-ITEM COMPONENT
Vue.component('recipe-item', {
    props: ['image', 'name', 'info'],
    template: `
        <div class="grid-element">
            <img src="https://upload.wikimedia.org/wikipedia/commons{{image}}">
            <div class="description">
                <span style="text-transform: capitalize; font-weight: bold">{{name}}</span>
                <span style="font-style:italic; text-align: center;">{{info}}</span>
                <button>Add to Cart</button>
            </div>
        </div>`
})

//Vue instance
const app = new Vue({
    el: '#vue',

    data: {
        recipes: [
            {
                imgSrc: '/f/f0/Spaghetti_aglio%2C_olio_e_peperoncino_%2816284859030%29.jpg',
                name: 'pasta',
                info: 'Healthy Pasta'
            },
            {
                imgSrc: '/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg',
                name: 'red crab',
                info: 'Fresh from Alaska'
            },
            {
                imgSrc: '/0/02/Breakfast_at_Irving_Street_Kitchen.jpg',
                name: 'breakfast special',
                info: 'Good for the soul'
            },
            {
                imgSrc: '/4/4b/Seafood_linguine.jpg',
                name: 'sea shell mix',
                info: 'For the shell lovers'
            },
            {
                imgSrc: '/a/a5/Various_kebab.jpg',
                name: 'ultimate kebab',
                info: 'The best from Middle East'
            },
            {
                imgSrc: '/d/d9/Chicken_steak_with_pepper_sauce.jpg',
                name: 'chicken steak',
                info: 'Grilled to perfection'
            },
            {
                imgSrc: '/1/1a/.Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise%2C_Pastis_Bistro%2C_Palo_Alto.jpg',
                name: 'filet mignon',
                info: 'Juicy steak served with potatoes and gratin'
            },
            {
                imgSrc: '/4/48/Dishes_at_Bistro_C%2C_Hastings_Street%2C_Noosa_Heads%2C_Queensland_02.jpg',
                name: 'bistro brunch',
                info: 'A touch of Australia'
            },
            {
                imgSrc: '/3/32/2011-04-09_17.02.43%2C_Whispers_Cafe_and_Creperie%2C_Belmont%2C_CA_%285982715933%29.jpg',
                name: 'california crepe',
                info: 'Stuffed with grilled shrimp'
            },
            {
                imgSrc: '/d/d4/Hamburguesa_de_carne.jpg',
                name: 'top burger',
                info: 'The tallest hamburger from Peru'
            },
            {
                imgSrc: '/3/33/Round_Table_chicken_%26_garlic_pizza.JPG',
                name: 'chicken garlic pizza',
                info: 'Our speciality pizza'
            },
            {
                imgSrc: '/d/d2/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_%2827159057131%29.jpg',
                name: 'wok away healthy',
                info: 'Healthy blend of noodles and vegies'
            }
        ]
    },

    methods: {
        addItem() {
            this.shoppingList[this.inputItem] = 1
            this.inputItem = ''
            this.reRender()
        },
        addQuantity(item) {
            this.shoppingList[item]++
            this.reRender()
        },
        removeQuantity(item) {
            this.shoppingList[item]--
            if (this.shoppingList[item] === 0) {
                delete this.shoppingList[item]
            }
            this.reRender()
        },
        reRender() {
            this.updateView = false
            this.$nextTick(() => {
                this.updateView = true
            })
        }
    }
})