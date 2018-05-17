var VILLAINS = ["Postmodern Neomarxists", "Feminists (who secretly crave domination)", "Leftist academics", "Dangerous ideologues", "Derrida and Foucault", "Indoctrinated students", "Social justice types", "Radical trans activists", "Politically correct HR departments", "Actual Communists", "The left", "Millennials with a victimhood mentality", "Universities under siege by ideological agendas", "Ungrateful women who complain about the patriarchy", "The modern acolytes of Karl Marx", "So-called tolerant progressives"]; 
var SPICY_VERB_PHRASE = ["are totally corrupting", "have zero respect for", "want to annihilate", "assault the archetype of", "don't bloody believe in", "will quickly diminish", "unleash the Dragon of Chaos upon", "dismiss", "must be stopped from attacking", "will make Gulags out of", "feminize and weaken", "radically undermine"];
var FAVORITE_THINGS = ["the dominance hierarchy", "the metaphorical substrate of our culture", "all Western values", "the classical humanities", "the Englightenment's progress", "the supreme importance of the individual", "the Hero's Journey", "the holistic fabric of Being", "the achievements of Judeo-Christian culture", "Solzhenitsyn's prudent warning in The Gulag Archipelago", "Carl Jung's legacy", "IQ testing's ability to determine achievement", "the divine Logos", "the embodiment of Christ", "the inescapable tragedy and suffering of life", "the humble lobster's quest", "the Jungian architecture of dreams", "the masculine ideal of Order", "Milo's provocative message as a truth-telling trickster archetype", "our most vital Biblical narratives", "the eternal structures of belief"];
var BECAUSE_OF_THEIR = ["because of their", "due to their", "since they insist upon their"];
var EVIL_WEAPONS = ["murderous equity doctrine,", "aspirations towards a dangerous egalitarian utopia,", "tyrannical identity politics,", "hatred of Objective Truth,", "compelled speech,", "group identity,", "Maoist pronouns,", "propaganda from Frozen,", "radical collectivism,", "lens of power that they apply to everything,", "utter contempt for Being,", "reckless Bill C-16, written by ideologues,", "low serotonin levels and poor posture,", "totalitarian ideology which I've been studying for decades,", "agenda-based social science 'research',", "insane multi-cultural and diversity initiatives,", "radical de-centering of all values,"];
var OMINOUS_CONCLUSION = ["-- why aren't the feminists concerned with this?", "-- so much for the 'accepting' social justice types.", "-- just ask Lindsay Shepherd.", "and we can't even have a conversation about it!", "so just ask the Kulaks how that worked out.", "and no one is talking about it!", "as you can bloody well imagine!", "just like the troubled genius Nietzsche prophesized.", "so you should sign up for the Self Authoring Suite.", "and you can be damn sure about that!", "and you know how that worked out in Maoist China.", "so I'll never use those bloody ideological terms.", "which must be true since I'm a British Classical Liberal.", "which is increasingly clear from an evolutionary perspective.", "and I will not be silenced.", "which you can confirm by watching the Rubin Report.", "so young men had bloody well stand up for themselves.", "which I've written about in 12 Rules for Life."];

function generate() {
	var phrase_container = document.getElementById("phrase");

	var phrase = "";
	phrase += VILLAINS[Math.floor(Math.random() * VILLAINS.length)];
	phrase += " ";
	phrase += SPICY_VERB_PHRASE[Math.floor(Math.random() * SPICY_VERB_PHRASE.length)];
	phrase += " ";
	phrase += FAVORITE_THINGS[Math.floor(Math.random() * FAVORITE_THINGS.length)];
	phrase += " ";
	phrase += BECAUSE_OF_THEIR[Math.floor(Math.random() * BECAUSE_OF_THEIR.length)];
	phrase += " ";
	phrase += EVIL_WEAPONS[Math.floor(Math.random() * EVIL_WEAPONS.length)];

	// Trim comma from EVIL_WEAPONS if OMINOUS_CONCLUSION starts with --
	var conclusion_index = Math.floor(Math.random() * OMINOUS_CONCLUSION.length);
	if (conclusion_index <= 2) {
		phrase = phrase.slice(0, phrase.length - 1);
	}

	phrase += " ";
	phrase += OMINOUS_CONCLUSION[conclusion_index];

	phrase_container.innerHTML = phrase;

	// Set up share links
	var share_general = document.getElementById("share-general");
	var share_peterson = document.getElementById("share-peterson");

	share_general.href = "http://twitter.com/share?text=" + stripTags(phrase) + "&url=http://gsajith.com/peterson-generator/";
	share_peterson.href = "http://twitter.com/share?text=@JordanBPeterson " + stripTags(phrase) + "&url=null";
};

function stripTags(string) {
	return string.replace(/<(?:.|\n)*?>/gm, '');
}

window.onload = generate;