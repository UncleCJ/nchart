(function(window) {
    var character_info = {
        'colors': {
            'stark': '#7c7c7c',
            'wolf': '#956b41',
            'baratheon': '#ffe557',
            'lannister': '#ff1414',
            'targaryen': '#ac1717',
            'dragon': '#ac1717',
            'night\'s watch': '#000000',
            'greyjoy': '#b15bc9',
            'other': '#ff7a32',
            'tyrell': '#31c105',
            'arryn': '#23d0f5',
            'kingsguard': '#ff7a32'
        },
        
        // Candidates for inclusion:
        // Edmure Tully
        // Walder Frey
        // Roose Bolton
        // Gilly
        // Ygritte
        // Oberyn Martell
        // Podrick Payne
        // Mance Rayder

        'characters': {
            'ned': {'name': 'Eddard Stark',
                    'pov': true,
                    'group': 'stark'},
            'cat': {'name': 'Catelyn Stark',
                    'pov': true,
                    'group': 'stark'},
            'robb': {'name': 'Robb Stark',
                     'pov': false,
                     'group': 'stark'},
            'sansa': {'name': 'Sansa Stark',
                      'pov': true,
                      'group': 'stark'},
            'arya': {'name': 'Arya Stark',
                     'pov': true,
                     'group': 'stark'},
            'bran': {'name': 'Bran Stark',
                     'pov': true,
                     'group': 'stark'},
            'rickon': {'name': 'Rickon Stark',
                       'pov': false,
                       'group': 'stark'},
            'jon': {'name': 'Jon Snow',
                    'pov': true,
                    'group': 'stark'},
            'meera': {'name': 'Meera Reed',
                      'pov': false,
                      'group': 'stark'},
            'jojen': {'name': 'Jojen Reed',
                      'pov': false,
                      'group': 'stark'},

            'grey wind': {'name': 'Grey Wind',
                          'pov': false,
                          'group': 'wolf'},
            'lady': {'name': 'Lady',
                     'pov': false,
                     'group': 'wolf'},
            'nymeria': {'name': 'Nymeria',
                        'pov': false,
                        'group': 'wolf'},
            'summer': {'name': 'Summer',
                       'pov': false,
                       'group': 'wolf'},
            'shaggydog': {'name': 'Shaggydog',
                          'pov': false,
                          'group': 'wolf'},
            'ghost': {'name': 'Ghost',
                      'pov': false,
                      'group': 'wolf'},

            'robert_b': {'name': 'Robert Baratheon',
                         'pov': false,
                         'group': 'baratheon'},
            'joffrey': {'name': 'Joffrey Baratheon',
                        'pov': false,
                        'group': 'baratheon'},
            'myrcella': {'name': 'Myrcella Baratheon',
                         'pov': false,
                         'group': 'baratheon'},
            'tommen': {'name': 'Tommen Baratheon',
                       'pov': false,
                       'group': 'baratheon'},
            'stannis': {'name': 'Stannis Baratheon',
                        'pov': false,
                        'group': 'baratheon'},
            'renly': {'name': 'Renly Baratheon',
                      'pov': false,
                      'group': 'baratheon'},
            'davos': {'name': 'Davos Seaworth',
                      'pov': true,
                      'group': 'baratheon'},
            'brienne': {'name': 'Brienne of Tarth',
                        'pov': false,
                        'group': 'baratheon'},

            'tywin': {'name': 'Tywin Lannister',
                      'pov': false,
                      'group': 'lannister'},
            'cersei': {'name': 'Cersei Lannister',
                       'pov': true,
                       'group': 'lannister'},
            'jaime': {'name': 'Jaime Lannister',
                      'pov': true,
                      'group': 'lannister'},
            'tyrion': {'name': 'Tyrion Lannister',
                       'pov': true,
                       'group': 'lannister'},
            'sandor': {'name': 'Sandor Clegane',
                       'pov': false,
                       'group': 'lannister'},
            'gregor': {'name': 'Gregor Clegane',
                       'pov': false,
                       'group': 'lannister'},
            'ilyn': {'name': 'Ilyn Payne',
                     'pov': false,
                     'group': 'lannister'},

            'daenerys': {'name': 'Daenerys Targaryen',
                         'pov': true,
                         'group': 'targaryen'},
            'viserys': {'name': 'Viserys Targaryen',
                        'pov': false,
                        'group': 'targaryen'},

            'sam': {'name': 'Samwell Tarly',
                    'pov': true,
                    'group': 'night\'s watch'},
            'aemon': {'name': 'Maester Aemon',
                      'pov': false,
                      'group': 'night\'s watch'},
            'jeor': {'name': 'Jeor Mormont',
                     'pov': false,
                     'group': 'night\'s watch'},
            'benjen': {'name': 'Benjen Stark',
                       'pov': false,
                       'group': 'night\'s watch'},
            'will': {'name': 'Will',
                     'pov': true,
                     'group': 'night\'s watch'},
            'waymar': {'name': 'Waymar Royce',
                       'pov': false,
                       'group': 'night\'s watch'},
            'gared': {'name': 'Gared',
                      'pov': false,
                      'group': 'night\'s watch'},

            'theon': {'name': 'Theon Greyjoy',
                      'pov': true,
                      'group': 'greyjoy'},
            'asha': {'name': 'Asha Greyjoy',
                     'pov': true,
                     'group': 'greyjoy'},
            'aeron': {'name': 'Aeron Greyjoy',
                      'pov': true,
                      'group': 'greyjoy'},
            'victarion': {'name': 'Victarion Greyjoy',
                          'pov': true,
                          'group': 'greyjoy'},

            'barristan': {'name': 'Barristan Selmy',
                          'pov': false,
                          'group': 'kingsguard'},

            'petyr': {'name': 'Petyr Baelish',
                      'pov': false,
                      'group': 'other'},
            'varys': {'name': 'Varys',
                      'pov': false,
                      'group': 'other'},
            'pycelle': {'name': 'Pycelle',
                        'pov': false,
                        'group': 'other'},
            'illyrio': {'name': 'Illyrio Mopatis',
                        'pov': false,
                        'group': 'other'},
            'jorah': {'name': 'Jorah Mormont',
                      'pov': false,
                      'group': 'other'},
            'drogo': {'name': 'Drogo',
                      'pov': false,
                      'group': 'other'},
            'mirri': {'name': 'Mirri Maz Duur',
                      'pov': false,
                      'group': 'other'},
            'melisandre': {'name': 'Melisandre',
                           'pov': false,
                           'group': 'other'},
            'gendry': {'name': 'Gendry',
                       'pov': false,
                       'group': 'other'},
            'jaqen': {'name': 'Jaqen H\'ghar',
                      'pov': false,
                      'group': 'other'},
            'coldhands': {'name': 'Coldhands',
                          'pov': false,
                          'group': 'other'},

            'loras': {'name': 'Loras Tyrell',
                      'pov': false,
                      'group': 'tyrell'},
            'margaery': {'name': 'Margaery Tyrell',
                         'pov': false,
                         'group': 'tyrell'},
            'beric': {'name': 'Beric Dondarrion',
                      'pov': false,
                      'group': 'tyrell'},

            'brynden': {'name': 'Brynden Tully',
                        'pov': false,
                        'group': 'arryn'},
            'lysa': {'name': 'Lysa Arryn',
                     'pov': false,
                     'group': 'arryn'},
            'robert_a': {'name': 'Robert Arryn',
                         'pov': false,
                         'group': 'arryn'},

            'drogon': {'name': 'Drogon',
                       'pov': false,
                       'group': 'dragon'},
            'rhaegal': {'name': 'Rhaegal',
                        'pov': false,
                        'group': 'dragon'},
            'viserion': {'name': 'Viserion',
                         'pov': false,
                         'group': 'dragon'},
        }
    };

    window.asoiaf.character_info = character_info;
})(window);