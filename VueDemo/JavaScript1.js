const app2 = new Vue({
    el: '#app2',
    data: {
        characters: []
    },
    created() {
        fetch('https://swapi.co/api/people')
            .then(response => response.json())
            .then(json => {
                this.characters = json.characters
            })
    }
})