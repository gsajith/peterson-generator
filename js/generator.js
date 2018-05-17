var VILLAINS = ["Postmodern Neomarxists", "Feminists (who secretly crave domination)", "Leftist academics", "Dangerous ideologues", "Derrida and Foucault", "Indoctrinated students", "Social justice types", "Radical trans activists", "Politically correct HR departments", "Actual Communists", "The left", "Millenials with a victimhood mentality"];
var SPICY_VERB_PHRASE = ["are totally corrupting", "have zero respect for", "want to annihilate", "assault the archetype of", "don't bloody believe in", "will quickly infect", "unleash the Chaos Dragon of", "dismiss and transgress", "must be stopped from attacking", "will make Gulags out of", "feminize and weaken"];
var FAVORITE_THINGS = ["the dominance hierarchy", "the metaphorical substrate", "Western values", "the classical humanities", "the individual", "the Hero's Journey", "the fabric of Being", "Solzhenitsyn's genius", "Carl Jung's legacy", "IQ testing's ability to determine achievement", "the divine Logos", "the inescapable tragedy and suffering of life", "the humble lobster's quest"];
var BECAUSE_OF_THEIR = ["because of their"];
var EVIL_WEAPONS = ["murderous equity doctrine", "dangerous egalitarian utopia", "hatred of Objective Truth", "compelled speech", "group identity", "Maoist pronouns", "propaganda from Frozen", "radical collectivism", "lens of power for everything", "disdain for Being", "ideological bill C-16", "low serotonin levels and poor posture", "totalitarian ideology which I've been studying for decades"];
var OMINOUS_CONCLUSION = ["and we can't even have a conversation about it!", "so just ask the Kulaks how that worked out.", "and no one is talking about it!", "as you can bloody well imagine!", "just like Nietzsche prophesized.", "so you should sign up for the Self Authoring Suite.", "so let me ask you this...", "and you can be damn sure about that!"];

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
	phrase += " ";
	phrase += OMINOUS_CONCLUSION[Math.floor(Math.random() * OMINOUS_CONCLUSION.length)];

	phrase_container.innerText = phrase;

	// Set up share links
	var share_general = document.getElementById("share-general");
	var share_peterson = document.getElementById("share-peterson");

	share_general.href = "http://twitter.com/share?text=" + phrase + "&url=http://gsajith.com/peterson-generator/";
	share_peterson.href = "http://twitter.com/share?text=@JordanBPeterson " + phrase + "&url=null";
};

window.onload = generate;

function generateTweetLink() {
	return "http://twitter.com/share?text=Check out this article I found on http://gsajith.com/peterson-generator/&url=http://gsajith.com/peterson-generator/";
}