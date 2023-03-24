// OBJECTS-LEV-1_2

let person = {
    name: "Claudio",
    age: 35,

    sagNameAlter: () => {
        // window.alert(person.name + person.age)
    }
}

person.sagNameAlter()
console.log(person.name, person.age)

// OBJECTS-LEV-1_4

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1], unsereHaustiere[1].names[2])
console.log(unsereHaustiere[1].names)

unsereHaustiere[1].names = ["Snoopy", "Bello", "Hayvan"]
console.log(unsereHaustiere[1].names)

// OBJECTS-LEV-1_5

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schreibtisch.schublade)
console.log(unserLager.schrank["Untere Schublade"])
console.log(unserLager.schrank["Obere Schublade"].Ordner2)

// OBJECTS-LEV-1_6


let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

console.log(myMusic)
console.log(myMusic[0].kunstler)
console.log(myMusic[1].formate[3])
console.log(myMusic[1].gold)
console.log(myMusic[2].release_jahr, myMusic[3].release_jahr)
console.log(myMusic[3].formate[2])
console.log(myMusic[3].title.slice(17, 21))
console.log(myMusic[2].title.slice(13))
console.log(myMusic[1].kunstler.slice(5))

// OBJECTS-LEV-1_7

let myMusic2 = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

let result = document.getElementById("result")

myMusic2.forEach((music) => {
    result.innerHTML += `${music.kunstler} <br> ${music.title} <br> ${music.formate} <br><br>`
    if (music.release_jahr > 1975) {
        console.log(music.release_jahr)
    }
})

// OBJECTS-LEV-1_8

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach((resSD) => {
    console.log(resSD.name)
    console.log(resSD.coop)
    console.log(resSD.emails)
    console.log(resSD.address.city)
})