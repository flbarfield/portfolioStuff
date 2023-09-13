const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let characters = {
    'astarion': {
        'name': 'Astarion',
        'race': 'High Elf',
        'class': 'Rogue',
        'description': 'Astarion is a High Elf Rogue who has prowled the night as a vampire spawn for centuries, serving a sadistic master until he was snatched away. Now he can walk in the light, but can he leave his wicked past behind?'
    },
    'shadowheart': {
        'name': 'Shadowheart',
        'race': 'High Half-Elf',
        'class': 'Trickster Domain Cleric',
        'description': 'A High Half-Elf Trickster Domain Cleric, and one of Shar\'s dark disciples, Shadowheart was sent on a suicide mission to steal an item of great power. While wrestling with her faith and strange, untamed magic, Shadowheart has enemies on all sides - and a long-buried secret to uncover.'
    },
    'gale': {
        'name': 'Gale',
        'race': 'Human',
        'class': 'Wizard',
        'description': 'A Human Wizard, Gale has one ambition: to become the greatest wizard Faerun has ever known. Yet his thirst for magic led to disaster. A Netherese Destruction Orb beats in his chest, counting down to an explosion that can level a city. Gale is confident he\'ll overcome it, but time is not on his side.'
    }, 
    'lae\'zel': {
        'name': 'Lae\'zel',
        'race': 'Githyanki',
        'class': 'Fighter',
        'description': 'Lae\'zel is a consummate Fighter, ferocious even by the standards of a Githyanki creche. Faced with transforming into the very monster she has sworn to destroy, Lae\'zel must prove herself worthy of rejoining her people - if they do not execute her first.'
    },
    'wyll': {
        'name': 'Wyll',
        'race': 'Human',
        'class': 'Warlock',
        'description': 'A Human Warlock, and Noble by birth, Wyll made his name as the heroic \'Blade of Frontiers\'. He keeps his pact with a devil well-hidden and is desperate to escape the hellish bargain - even if that means rescuing the seductive creature that made the deal.'
    },
    'karlach': {
        'name': 'Karlach',
        'race': 'Zariel Tiefling',
        'class': 'Barbarian',
        'description': 'Karlach, a Zariel Tiefling, once committed terrible deeds in the thrall of a powerful Archdevil. This Barbarian has an Infernal Machine for a heart that keeps her body burning red-hot. Newly freed from her master\'s grasp, she seeks revenge on those who sold her to the devil.'
    },
    'unknown' : {
        'name': 'Unknown',
        'race': 'Unknown',
        'class': 'Unknown',
        'description': 'Unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const characterName = req.params.name.toLowerCase()
    if (characters[characterName]){
        res.json(characters[characterName])
    } else {
        res.json(characters['unknown'])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port ${PORT}!`)
})