var stateObject = {
    "India": { "Delhi": ["new Delhi", "North Delhi"],
    "Uttar Pradesh": ["prayagraj", "varanasi"],
    "Bihar": ["Patna", "Begusarai"],
    },
    "Australia": {
    "South Australia": ["Dunstan", "Mitchell"],
    "Victoria": ["Altona", "Euroa"]
    }, "Canada": {
    "Alberta": ["Acadia", "Bighorn"],
    "Columbia": ["Washington", ""]
    },
    }
    window.onload = function () {
    var countySel = document.getElementById("countySel"),
    stateSel = document.getElementById("stateSel"),
    districtSel = document.getElementById("districtSel");
    for (var country in stateObject) {
    countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
    stateSel.length = 1; 
    districtSel.length = 1; 
    if (this.selectedIndex < 1) return; 
    for (var state in stateObject[this.value]) {
    stateSel.options[stateSel.options.length] = new Option(state, state);
    }
    }
    countySel.onchange(); 
    stateSel.onchange = function () {
    districtSel.length = 1; 
    if (this.selectedIndex < 1) return; 
    var district = stateObject[countySel.value][this.value];
    for (var i = 0; i < district.length; i++) {
    districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
    }
    }
    }