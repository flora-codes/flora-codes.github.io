var signs = document.getElementById('signs');

var sun = document.getElementById('sun');
var moon = document.getElementById('moon');
var rising = document.getElementById('rising');
var bin = document.getElementById('bin');

new Sortable(signs, {
    group: {
        name: "bigthree",
        pull: 'clone',
        put:false,
        revertClone: true,
        swap:true,
    },
    sort:false,

	animation: 150
});

new Sortable(sun, {
    group: {
        name: "bigthree",
        swap: true,
        put: function (to) {
            return to.el.children.length < 1;
        }
    },

	animation: 150
});
new Sortable(moon, {
    group: {
        name: "bigthree",
        swap: true,
        put: function (to) {
            return to.el.children.length < 1;
        }
    },

	animation: 150
});
new Sortable(rising, {
    group: {
        name: "bigthree",
        swap: true,
        put: function (to) {
            return to.el.children.length < 1;
        }
    },
    
	animation: 150
});

new Sortable(bin, {
    group: "bigthree",
    put: true,
    onAdd: function (evt) { 
        this.el.removeChild(evt.item) 
    }
});