var VILLAINS = ["Listen up, bucko. Postmodern Neomarxists", "Feminists (who secretly crave domination)", "Leftist academics", "Dangerous ideologues", "Derrida and Foucault", "Indoctrinated students", "Social justice types", "Radical trans activists", "Politically correct HR departments", "Actual Communists", "<i>The</i> left", "Millennials with a victimhood mentality", "Universities under siege by ideological agendas", "Ungrateful women who complain about the patriarchy", "The modern acolytes of Karl Marx", "So-called tolerant progressives", "Marxist professors teaching <i>Das Kapital</i>", "Need I mention that leftists", "The postmodernists who hate truth", "The 'tolerant' brainwashed masses", "Businesses infiltrated by Postmodern Neomarxists", "Progressives drunk on empathy", "The self-proclaimed diversity advocates", "Critics of free speech on campus", "Those who slander me", "My enemies on the radical left", "Ideological parents with a leftist agenda", "It's still shocking that campus radicals"];
var SPICY_VERB_PHRASE = ["are totally corrupting", "have zero respect for", "want to annihilate", "assault the archetype of", "don't bloody believe in", "will quickly diminish", "unleash the Dragon of Chaos upon", "dismiss", "must be stopped from attacking", "will make Gulags out of", "feminize and weaken", "radically undermine"];
var FAVORITE_THINGS = ["the dominance hierarchy", "the metaphorical substrate of our culture", "all Western values", "the classical humanities", "the Enlightenment's progress", "the supreme importance of the individual", "the Hero's Journey", "the holistic fabric of Being", "the achievements of Judeo-Christian culture", "Solzhenitsyn's prudent warning in <i>The Gulag Archipelago</i>", "Carl Jung's legacy", "the divine Logos", "the embodiment of Christ", "the inescapable tragedy and suffering of life", "the humble lobster's quest", "the Jungian architecture of dreams", "the masculine ideal of Order", "Milo's provocative message as a truth-telling trickster archetype", "our most vital Biblical narratives", "the eternal structures of belief", "the old-school, empirical social sciences"];
var BECAUSE_OF_THEIR = ["because of their", "due to their", "since they insist upon their", "via their", "based on their bloody"];
var EVIL_WEAPONS = ["murderous equity doctrine,", "aspirations towards a dangerous egalitarian utopia,", "tyrannical identity politics,", "hatred of Objective Truth,", "compelled speech,", "group identity,", "Maoist pronouns,", "propaganda from Frozen,", "radical collectivism,", "lens of power that they apply to everything,", "utter contempt for Being,", "reckless Bill C-16, written by ideologues,", "low serotonin levels and poor posture,", "totalitarian ideology which I've been studying for decades,", "agenda-based social science 'research',", "insane multi-cultural and diversity initiatives,", "radical de-centering of all values,"];
var OMINOUS_CONCLUSION = ["-- why aren't the feminists concerned with this?", "-- so much for the 'accepting' social justice types.", "-- just ask Lindsay Shepherd.", "and we can't even have a conversation about it!", "and just ask the Kulaks how that worked out.", "and no one is talking about it!", "as you can bloody well imagine!", "just like the troubled genius Nietzsche predicted.", "so you should sign up for the Self Authoring Suite.", "and you can be damn sure about that!", "and you know how that worked out in Maoist China.", "so I'll never use those bloody ideological terms.", "which must be true since I'm a British Classical Liberal.", "which is increasingly clear from an evolutionary perspective.", "and I will not be silenced.", "which you can confirm by watching the Rubin Report.", "so young men had bloody well stand up for themselves.", "for which Pankaj Mishra deserves a slap.", "which I've written about in <i>12 Rules for Life.</i>", "or maybe they'll come for <i>you</i> next.", "even if I've sometimes disagreed with Laura Southern.", "even if I'm not on the same page as Richard Spencer about that.", "despite all the Western achievements we should be damn grateful for.", "and to top it all off some SJW filled my office's lock with glue.", "archetypally speaking.", "even if I'm not allowed to say that in a so-called 'safe space'."];

var SITE_LINK = "http://gsajith.com/peterson-generator/";
var JBP_HANDLE = "@JordanBPeterson";

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
	var share_general_container = document.getElementById("share-general");
	var share_peterson_container = document.getElementById("share-peterson");
	var share_general_error = document.getElementById("share-general-too-long");
	var share_peterson_error = document.getElementById("share-peterson-too-long");

	share_general_container.style.display = "block";
	share_general_error.style.display = "none";

	share_peterson_container.style.display = "block";
	share_peterson_error.style.display = "none";

	var share_general = document.getElementById("share-link-general");
	var share_peterson = document.getElementById("share-link-peterson");

	var long_general_link = "http://twitter.com/share?text=" + stripTags(phrase) + "&url=" + SITE_LINK;
	var short_general_link = "http://twitter.com/share?text=" + stripTags(phrase) + "&url=null";
	var peterson_link = "http://twitter.com/share?text=" + JBP_HANDLE + " " + stripTags(phrase) + "&url=null"

	if ((stripTags(phrase) + " " + SITE_LINK).length <= 280) {
		share_general.href = long_general_link;
	} else if (stripTags(phrase).length <= 280) {
		share_general.href = short_general_link;
	} else {
		share_general_container.style.display = "none";
		share_general_error.style.display = "block";
	}

	if ((stripTags(phrase) + " " + JBP_HANDLE).length <= 280) {
		share_peterson.href = peterson_link;
	} else {
		share_peterson_container.style.display = "none";
		share_peterson_error.style.display = "block";
	}
};

function stripTags(string) {
	return string.replace(/<(?:.|\n)*?>/gm, '');
}

window.onload = generate;