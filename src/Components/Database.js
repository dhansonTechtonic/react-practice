import artisans from '../Assets/artisans.jpg'
import peacekeepers from '../Assets/peacekeepers.png'
import magiccrafters from '../Assets/magiccrafters.png'
import beastmakers from '../Assets/beastmakers.jpg'
import dreamweavers from '../Assets/dreamweavers.jpg'
import gnastysworld from '../Assets/gnastysworld.png'
import summerforest from '../Assets/summerforest.png'
import autumnplains from '../Assets/autumnplains.png'
import wintertundra from '../Assets/wintertundra.png'
import sunrisespring from '../Assets/sunrisespring.png'
import middaygardens from '../Assets/middaygardens.png'
import eveninglake from '../Assets/eveninglake.png'
import midnightmountain from '../Assets/midnightmountain.png'

export const worldNames = {
    'spyro1': ['Artisans', 'Peacekeepers', 'Magic Crafters', 'Beast Makers', 'Dream Weavers', 'Gnasty\'s World'],
    'spyro2': ['Summer Forest', 'Autumn Plains', 'Winter Tundra'],
    'spyro3': ['Sunrise Spring', 'Midday Gardens', 'Evening Lake', 'Midnight Mountain']
}

export const worldPics = {
    'spyro1': [artisans, peacekeepers, magiccrafters, beastmakers, dreamweavers, gnastysworld],
    'spyro2': [summerforest, autumnplains, wintertundra],
    'spyro3': [sunrisespring, middaygardens, eveninglake, midnightmountain]
}

export const gamePlot = {
    'spyro1': 'In the world of dragons, the Dragon Kingdom consists of five Homeworlds- the Artisans, the Peace Keepers, the Magic Crafters, the Beast Makers, and the Dream Weavers- which have lived in harmony for many years. One day, a TV interview with a pair of dragons from the Artisan realm catches the attention of Gnasty Gnorc, a gnorc (half gnome and half orc) who was banished from the kingdom due to his abrasive demeanor and sent to an abandoned junkyard, which he renames to "Gnasty\'s World." After hearing one of the dragons in the broadcast openly dismiss him as simple-minded and harmless, Gnasty loses his temper and unleashes a full-fledged attack on the kingdom. Using his magical powers, he casts a spell across the land that encases every dragon in a crystal shell; he also steals the dragons\' prized collection of treasure, turning the gemstones into devious gnorc soldiers to help him take over the dragon worlds. Spyro, a young purple dragon, is the only dragon that manages to avoid getting crystallized by the attack. Aided by his dragonfly companion, Sparx, Spyro eagerly sets out to locate and defeat Gnasty.',
    'spyro2': 'Spyro the Dragon and his dragonfly partner Sparx, having enough with the continuous raining in Artisans and wondering when the sun will come out, decide to take a vacation to Dragon Shores. Upon going through the portal, however, Spyro ends up in the fantasy realm of Avalar, having been summoned there by Elora the Faun, Hunter the Cheetah, and the Professor. They explain that whilst experimenting with a large portal device, they inadvertently summoned an iron-fisted angry warlock known as Ripto, along with his minions Crush and Gulp. Pleased to find himself in a world without dragons whom he views as pests, Ripto decided to conquer Avalar, prompting Elora and the others to summon a dragon to fight against him. Currently stranded in Avalar as a result of Ripto destroying the portal he came in through, Spyro agrees to help fight against him, gathering up talismans from the various realms of Avalar in order to confront and defeat Crush and Gulp.',
    'spyro3': 'The game opens with a celebration in the land of the dragons, where Spyro and his kin are celebrating the "Year of the Dragon", an event that occurs every twelve years when new dragon eggs are brought to the realm. During the celebration however, Bianca invades the Dragon Realms with an army of rhino-based creatures called Rhynocs and steals all of the Dragon eggs, bringing them back to the Sorceress, who spreads the eggs throughout several worlds. The worlds are split up into four home realms: Sunrise Spring, Midday Garden, Evening Lake, and Midnight Mountain. Spyro, Sparx, and Hunter are sent down a hole to find the thieves and recover the dragon eggs.'
}

export const worldInfo = {
    'artisans': {
        'name': 'Artisans',
        'pic': artisans,
        'description': 'The Artisans Homeworld is Spyro\'s lush, green homeworld.The residents pride themselves in their homes, which is a vast meadow of healthy green grass, several tall trees, and gentle waterfalls feeding into many different ponds in the area.Statues and intricate portals dot the landscape, as well as some marble hallways running through the tall hills.Homes here are made up of small castles, large stone buildings, and the occasional high towers.Flower gardens can be found among the gem- encrusted stone walls, as well as within a few private meadows.Up above, the sky is always blue with a small bit of pink on the horizon. ',
        'residents': 'The Artisan dragons are extremely peaceful and tranquil, taking a calmer approach to their problems (up until Gnasty Gnorc arrived). They provide other dragons with artifacts of culture and beauty in the forms of songs, sculptures, and poetry. The dragons of the Artisans realm are social, smart, and very civilized, and their home is still the most peaceful, even after Gnasty\'s invasion.They love nothing more than to frolic with the other dragons and create beautiful masterpieces. The leader of the Artisans, Nestor, is the first and nearest dragon to Spyro, and he explains the main objective of the homeworld in order to proceed to the next. Spyro himself is part of the Artisan dragon species.',
        'realms': [
            'Stone Hill',
            'Dark Hollow',
            'Town Square',
            'Sunny Flight',
            'Toasty'
        ],
        'enemies': [
            'Goons',
            'Gem Thief'
        ],
        'dragons': [
            'Nestor',
            'Delbin',
            'Tomas',
            'Argus'
        ],
        'characters': [
            'None'
        ],
        'eggs': [
            'None'
        ],
        'orbs': [
            'None'
        ],
    },
    'peacekeepers': {
        'name': 'Peacekeepers',
        'pic': peacekeepers,
        'description': 'The Peace Keepers homeworld and realms are quite possibly the harshest worlds to live in. The homeworld itself is a desert with rocky terrain and cliff walls. Tar pits fill the land as well. The only sort of water the Peace Keepers get here are in the form of bubbling underground hot springs, which they use to collect condensation. Various stone structures are built up from the cracked ground, though most of them are simply archways and lookout towers.The Peace Keepers make a notion to not live in their homeworld, and instead live their militaristic lives in the seclusion of their realms. ',
        'residents': 'The Peace Keepers enforce order throughout the world. They are the strongest of all the Dragon families, and know the most about battling their enemies. They live in the desert sand dunes, tar pits, and ice caves and are always on the lookout for any creatures breaking the peace. Titan is the leader of the Peace Keepers dragons.He is the first dragon to be freed when Spyro enters the Peace Keepers homeworld.Titan welcomes his arrival, and gives Spyro the objective to recover the treasure that was turned into Gnorcs.',
        'realms': [
            'Dry Canyon',
            'Cliff Town',
            'Ice Cavern',
            'Night Flight',
            'Doctor Shemp'
        ],
        'enemies': [
            'Foot soldiers',
            'Cannon control'
        ],
        'dragons': [
            'Titan',
            'Magnus',
            'Gunnar'
        ],
        'characters': [
            'None'
        ],
        'eggs': [
            'None'
        ],
        'orbs': [
            'None'
        ],
    },
    'magiccrafters': {
        'name': 'Magic Crafters',
        'pic': magiccrafters,
        'description': 'The home of the most magically-inclined dragon species is a network of self-constructed plains and meadows connected by tall mountains tips and covered in frost and ice. The Magic Crafters world is littered with icy steps, frosted peaks, supercharge ramps, moving platforms, and alpine trees of all sizes. Pools of crystal-clear water dot each area, and the caves built into the mountains are smooth and decorated with all sorts of pretty patterns. Gems can be seen here or there, but the Magic Crafter dragons never see too fit to flaunt their wealth. The abyss below is a misty, never-ending fall that would spell death to any dragon, but no fear! The fairies here don’t mind catching you and lifting you to safety.',
        'residents': 'The dragons who live in this world are known as the Magic Crafters. They spend their time making magic artifacts used by all the Dragons throughout the rest of the worlds. They are shy around other creatures and like to be alone. They can very happy in their remote mountaintops, ice cliffs and caves, studying their craft in peace. In the original game, a notable feature among Magic Crafter dragons is that most of them speak in an accent that trills the R\'s in the words they speak with. Visually setting them aside from the other dragon families, Magic Crafters have four horns on their heads, and their eyes are fully one color with no visible white or pupils. The leader of the Magic Crafter dragons is Cosmos, as he is the first dragon to be freed when Spyro enters the homeworld and welcomes his arrival, as well as giving him the main objectives. ',
        'realms': [
            'Alpine Ridge',
            'High Caves',
            'Wizard Peak',
            'Crystal Flight',
            'Blowhard'
        ],
        'enemies': [
            'Armored druids',
            'Green druids',
            'Green wizards'
        ],
        'dragons': [
            'Zantor',
            'Boldar',
            'Cosmos'
        ],
        'characters': [
            'None'
        ],
        'eggs': [
            'None'
        ],
        'orbs': [
            'None'
        ],
    },
        'beastmakers': {
        'name': 'Beast Makers',
        'pic': beastmakers,
            'description': 'The home of the most magically-inclined dragon species is a network of self-constructed plains and meadows connected by tall mountains tips and covered in frost and ice. The Magic Crafters world is littered with icy steps, frosted peaks, supercharge ramps, moving platforms, and alpine trees of all sizes. Pools of crystal-clear water dot each area, and the caves built into the mountains are smooth and decorated with all sorts of pretty patterns. Gems can be seen here or there, but the Magic Crafter dragons never see too fit to flaunt their wealth. The abyss below is a misty, never-ending The Beast Maker dragons’ homeworld is a gigantic swamp, with green and black ooze that easily traps any creature smaller than a Beast Maker dragon and suffocates it. Small patches of dry ground harbor wooden huts which serve as homes for the natives, and they are connected by split logs floating in the ooze in between. The horizon is shrouded in an ominous black mist, adding to the eerie feel of the realm. Torches are lit all over to provide lighting. In the middle of the realm is a huge Aztec-like temple with numerous steps. It is used for meetings among the inhabitants.fall that would spell death to any dragon, but no fear! The fairies here don’t mind catching you and lifting you to safety.',
            'residents': 'The Beast Maker dragons are responsible for bringing forth all new species of creatures living in the world. They choose to live in swamps, in tumble-down wood platforms, on stilts in the mud flats and in hollowed-out trees in the thick forests. Here they can find natural claw, roots and other materials to do their work. The leader of the Beast Maker dragons is Bruno, and he is the first dragon that Spyro frees when he enters the homeworld.He informs Spyro what has become of the Beast Makers homeworld since Gnasty Gnorc froze all the dragons. ',
        'realms': [
            'Terrace Village',
            'Misty Bog',
            'Tree Tops',
            'Metalhead',
            'Wild Flight'
        ],
        'enemies': [
            'Electro gnorcs',
            'Boars',
        ],
        'dragons': [
            'Bruno',
            'Cleetus',
            ],
            'characters': [
                'None'
            ],
            'eggs': [
                'None'
            ],
            'orbs': [
                'None'
            ],
    },
    'dreamweavers': {
        'name': 'Dream Weavers',
        'pic': dreamweavers,
        'description': 'This core world is home to the elusive Dream Weavers, the creators of dreams and sworn enemies of nightmares. Living atop a series of floating islands high above the clouds, the Dream Weavers have built elaborate castles and temples on the grassy knolls, as well as crystallized structures for resting, playing, and practicing their arts. Many pools of water confusingly fall up instead of down, swirling in a circle where they collect. The sky is a plethora of colors, constantly changing with the clouds as they pass by. Sparkling funnels of air carry passengers to each island safely, but watch out for the Fools.',
        'residents': 'The Dream Weavers are peacekeepers of the night. From their island in the clouds, they fit through the dreams of other creatures of the world, making sure no nightmares bother dragons while they\'re asleep.Anyone who has bad dreams at night can call on these Dragons for help. The leader of the Dream Weaver dragons is Lateef, as he is the first and nearest dragon to be freed when Spyro enters the homeworld and welcomes his arrival, as well as gives him advice on dealing with Gnasty Gnorc\'s minions in Dream Weavers. ',
        'realms': [
            'Dark Passage',
            'Lofty Castle',
            'Haunted Towers',
            'Jacques',
            'Icy Flight'
        ],
        'enemies': [
            'Carrot-topped monks',
            'Slap-happy armored monks',
            'Clock fools'
        ],
        'dragons': [
            'Lateef',
            'Zikomo',
            'Mazi'
        ],
        'characters': [
            'None'
        ],
        'eggs': [
            'None'
        ],
        'orbs': [
            'None'
        ],
    },

    'gnastysworld': {
        'name': 'Gnasty\'s World',
        'pic': gnastysworld,
        'description': 'The homeworld is a circular metal island with an arm branching out for Hak the Balloonist. Each portal except for Gnorc Cove\'s portal is inside a giant dragon head, like Toasty\'s portal in the Artisans world. To open these heads, you must complete the world that was open before it. The exception is Gnasty\'s Loot, which can only be opened when the player has all the dragons, eggs and gems in the game except those found in Gnasty\'s Loot itself. The homeworld also contains two dragons which both appear in the center; one appears once you first enter the world, then once Gnasty Gnorc is defeated another one will appear in the middle. Every dragon found in Gnasty\'s World, including those in its realms, has been freed before, having attempted to confront Gnasty Gnorc, but wound up getting trapped in crystal again. the clouds as they pass by. Sparkling funnels of air carry passengers to each island safely, but watch out for the Fools.',
        'residents': 'None',
        'realms': [
            'Gnorc Cove',
            'Twilight Harbour',
            'Gnasty Gnorc',
            'Gnasty\s Loot',
        ],
        'enemies': [
            'None'
        ],
        'dragons': [
            'Delbin',
            'Magnus',
        ],
        'characters': [
            'None'
        ],
        'eggs': [
            'None'
        ],
        'orbs': [
            'None'
        ],
    },

    'summerforest': {
        'name': 'Summer Forest',
        'pic': summerforest,
        'description': 'This beautiful core world is a little niche of land covered in tall, majestic trees and fed by a small pond and several running streams. Inside the dip of land lays the first of Avalar’s castles, surrounded by a small rampart and large pillars, as well as grassy forests. This world is constantly stuck in the season of Summer, making it the hottest of the core worlds in Avalar. Inside the castle are small pools of water, marble statues, and a few indoor gardens. However, since it was terrorized by Ripto, the only way to get inside of the castle is through one of its high windows or through an underwater passage found under the pond. ',
        'residents': 'None',
        'realms': [
            'Glimmer',
            'Colossus',
            'Idol Springs',
            'Hurricos',
            'Sunny Beach',
            'Aquaria Towers',
            'Ocean Speedway',
            'Crush\'s Dungeon'
        ],
        'enemies': [
            'Crush',
            'Ripto'
        ],
        'dragons': [
            'None'
        ],
        'characters': [
            'Elora',
            'Hunter',
            'Zoe',
            'Moneybags'
        ],
        'eggs': [
            'None'
        ],
        'orbs': [
            'Hunter\'s Challenge',
            'Behind the Door',
            'On a Secret Ledge',
            'Atop a Ladder'
        ],
    },

    'autumnplains': {
        'name': 'Autumn Plains',
        'pic': autumnplains,
        'description': 'The Autumn Plains can be a bit misleading in its name. It is hardly made of plains, though it is stuck in a perpetual autumn environment. Instead of plains, it is settled on a high-risen plateau shaped to simply look like a plain on the side. The entire location is guarded by massive white-stone walls and gold-crested ramparts, and dominated mostly by a huge castle, abandoned just like the ones in Summer Forest and Winter Tundra. The trees hold gold, brown, and red leaves, scattering them along the grassy courtyard of the castle. An underground stream runs through the area, rising into a marble-carved pool. A few spiral-cased structures standing. While not the largest castle in Avalar, it has hidden rooms, a rooftop gallery, and a giant throne room currently being drained of Ripto’s imported lava.',
        'residents': 'None',
        'realms': [
            'Skelos Badlands',
            'Crystal Glacier',
            'Breeze Harbor',
            'Zephyr',
            'Scorch',
            'Fracture Hills',
            'Magma Cone',
            'Shady Oasis',
            'Metro Speedway',
            'Icy Speedway',
            'Gulp\'s Overlook'
        ],
        'enemies': [
            'Gulp',
            'Ripto'
        ],
        'dragons': [
            'None'
        ],
        'characters': [
            'Elora',
            'The Professor',
            'Moneybags'
        ],
        'eggs': [
            'None'
        ],
        'orbs': [
            'Long glide',
            'End of the castle wall',
        ],
    },
    'wintertundra': {
        'name': 'Winter Tundra',
        'pic': wintertundra,
        'description': 'As its name implies, it composes of a tundra setting: snow, few vegetation, and a midnight setting while calm music plays. In this world, there is a castle with a long set of stairs and the superportal. Outside of the castle, there are two caves and a secret waterfall. The world of Winter Tundra is on the tip of a gigantic mountain, enduring the cold and ice that invades it.Some of the caves inside of the mountain do have a few ice skating rinks.The grass in the massive castle’s courtyard is frigid green- blue, patched with snow puddles here and there, with a single underground pond feeding several streams cutting through the area.The castle itself is the largest castle in Avalar, though most of its doors and windows have been barred shut.The ramparts surrounding the giant mountain top are dull gray and almost frozen. ',
        'residents': 'None',
        'realms': [
            'Mystic Marsh',
            'Cloud Temples',
            'Robotica Farms',
            'Metropolis',
            'Canyon Speedway',
            'Ripto\'s Arena',
            'Dragon Shores'
        ],
        'enemies': [
            'Gulp',
            'Ripto',
            'Crush'
        ],
        'dragons': [
            'None'
        ],
        'characters': [
            'Elora',
            'The Professor',
            'Moneybags',
            'Hunter',
            'Zoe'
        ],
        'eggs': [
            'None'
        ],
        'orbs': [
            'Top of the waterfall',
            'On the tall wall',
            'Smash the rock'
        ],
    },
    'sunrisespring': {
        'name': 'Sunrise Spring',
        'pic': sunrisespring,
        'description': 'Sunrise Spring is a wondrous paradise to any creature waiting to get away from it all. Named for its lengthened morning hours and the beauty of the rising sun, Sunrise Springs is mostly a lush, vast, flat area of soft golden green grass, tall sheltering trees, and harboring a crystal-clear pond that feeds several streams and small waterfalls. In the middle of the world is a tall castle, tall and Victorian-like with walls, mini-mountains, and more hills and ramparts fencing it all in. The arches are scattered about in very scenic locations, giving new arrivals from the realms something beautiful to look at once they step foot here. There is always an endless cerulean sky stretching overhead, crested by only a few indigo-tinted clouds. ',
        'residents': 'None',
        'realms': [
            'Sunny Villa',
            'Cloud Spires',
            'Molten Crater',
            'Seashell Shore',
            'Sheila\'s Alp',
            'Mushroom Speedway',
            'Buzz\'s Dungeon',
            'Crawdad Farm'
        ],
        'enemies': [
            'Buzz'
        ],
        'dragons': [
            'None'
        ],
        'characters': [
            'Hunter',
            'Bianca',
            'Zoe',
            'Sheila',
            'Moneybags',
            'Mayor Leo',
            'Cumulus',
            'Rocky',
            'Snappy'
        ],
        'eggs': [
            'Egg by the Stream',
            'Learn Gliding',
            'Fly Through the Cave',
            'Bottom of the Lake',
            'Head Bash the Rock'
        ],
        'orbs': [
            'None'
        ],
    },
    'middaygardens': {
        'name': 'Midday Gardens',
        'pic': middaygardens,
        'description': 'Midday Gardens is a world surrounded on one side by steadily-rising brown mountains and a dense forest on the other side. Rabbits are abundant here, both the intelligent kind and the fodder kind. Each large garden holds many different flowers during the spring and summer, with small cobblestone pathways leading visitors through each one. There are some small waterfalls and streams running through to provide water for the plants, as well as large trees and stone-built structures to shelter creatures from the sun. The grass here is always green, and many smooth river stones dot the banks. While the temperature here is a bit on the hot side, its subworlds are by far the most different compared to their core world. ',
        'residents': 'None',
        'realms': [
            'Icy Peak',
            'Enchanted Towers',
            'Spooky Swamp',
            'Bamboo Terrace',
            'Country Speedway',
            'Sgt. Byrd\'s Base',
            'Spike\'s Arena',
            'Spider Town'
        ],
        'enemies': [
            'Egg Thief',
            'Bunny Monster'
        ],
        'dragons': [
            'None'
        ],
        'characters': [
            'Hunter',
            'Bianca',
            'Zoe',
            'Sgt. James Byrd',
            'Moneybags',
            'Doug',
            'Jasper',
            'Shiny',
            'Sing Sing'
        ],
        'eggs': [
            'Underwater egg',
            'Secret ice cave',
            'Catch the thief',
            'Superflame the flower pots',
            'Climb to the ledge'
        ],
        'orbs': [
            'None'
        ],
    },
    'eveninglake': {
        'name': 'Evening Lake',
        'pic': eveninglake,
        'description': 'Evening Lake is a large core world made up entirely of a gigantic, clear lake and a giant castle sitting on top of it. It is rimmed by a few hills and has plenty of grass to sleep in, but these places are scarce, as the lake takes up almost all of the area. The castle sitting on top of the lake is rooted via pillars to the bottom of the lake bed, giving swimming adventurers a creepy place to explore. With its high towers and pointed peaks, the castle is the best place to stay if you are ever visiting the Forgotten Worlds and can\'t find an inn! Below, the lake stretched out and seems to engulf anything that gets near it.It has tons of hidden treasures under its surface, including hidden underwater caves, stone cliffs, a sunken pirate ship, and even a live whale! ',
        'residents': 'None',
        'realms': [
            'Bentley\'s Outpost',
            'Frozen Altars',
            'Lost Fleet',
            'Fireworks Factory',
            'Charmed Ridge',
            'Honey Speedway',
            'Scorch\'s Pit',
            'Reef Starfish'
        ],
        'enemies': [
            'Scorch',
        ],
        'dragons': [
            'None'
        ],
        'characters': [
            'Bentley',
            'Bianca',
            'Zoe',
            'Eugene',
            'Moneybags',
            'Crazy Ed',
            'Greta',
            'Princess Ami',
        ],
        'eggs': [
            'Glide to the tower',
            'I\'m invincible' ,
            'On the bridge',
            'Break the tower wall',
            'Belly of the whale'
        ],
        'orbs': [
            'None'
        ],
    },
    'midnightmountain': {
        'name': 'Midnight Mountain',
        'pic': midnightmountain,
        'description': 'This core world is a spectacular place for visitors. Its beauty is surreal compared to the other core worlds, and truly represents the magical nature of the Forgotten Worlds. Settled on the highest peaks of a massive mountain, Midnight Mountain is home to many beautiful huts, towers, and structures of all kinds build or carved into the mountain itself. Every speck of ground is covered in luminescent grass, fed even further by the gigantic rainbow crystals jutting out of the ground and walls. Connected by large bridges to ensure no one falls off, each island is decorated with clear crystals, jewels, and ivory figures. Possibly the only true danger is the glowing pink ooze streams that run through each peak. It is believed to be the excess energy used in creating this wonderful world. Since the peaks are so high into the sky, Midnight Mountain is always stuck at night, with a Milky Way, glittering rainbow of distant galaxies, and two large planets orbiting overhead. And also there is a huge beautiful castle with spiked chains, serpentine gargoyle-like torches, and a secret arena within the walls of the castle at the heart of Midnight Mountain, meaning that this kingdom is also home to the Rhynocs, and their wicked queen, the Sorceress. ',
        'residents': 'None',
        'realms': [
            'Crystal Islands',
            'Desert Ruins',
            'Haunted Tomb',
            'Dino Mines',
            'Harbor Speedway',
            'Agent 9\'s Lab',
            'Sorceress\'s Lair',
            'Bugbot Factory',
            'Super Bonus Round'
        ],
        'enemies': [
            'Egg thief',
            'Moneybags',
            'Sorceress'
        ],
        'dragons': [
            'None'
        ],
        'characters': [
            'Agent 9',
            'Bianca',
            'Zoe',
        ],
        'eggs': [
            'Glide to the island',
            'Shhh it\'s a secret',
            'Catch the thief',
            'Stomp the floor',
            'At the top of the waterfall',
            'Egg for sale'
        ],
        'orbs': [
            'None'
        ],
    }
}