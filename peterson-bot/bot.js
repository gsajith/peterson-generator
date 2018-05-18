var twit = require('twit');
/** 
 * Create your own .env in this directory with consumer key, 
 * consumer secret, access token, and access token secret
 * if you clone this file. 
 */
 var config = require('./config.js'); 
 var Twitter = new twit(config);

 var VILLAINS = ["Postmodern Neomarxists", "Feminists (who secretly crave domination)", "Leftist academics", "Dangerous ideologues", "Derrida and Foucault", "Indoctrinated students", "Social justice types", "Radical trans activists", "Politically correct HR departments", "Actual Communists", "<i>The</i> left", "Millennials with a victimhood mentality", "Universities under siege by ideological agendas", "Sad women complaining about the patriarchy", "The modern acolytes of Karl Marx", "So-called tolerant progressives", "Marxist professors teaching <i>Das Kapital</i>", "Need I mention that leftists", "Spoon-fed radical students", "The postmodernists who hate truth", "The 'tolerant' brainwashed masses", "Businesses infiltrated by Postmodern Neomarxists", "Progressives drunk on empathy", "The self-proclaimed diversity advocates", "Entitled progressive children", "Critics of free speech on campus", "Those who slander me", "My enemies on the radical left", "Ideological parents with a leftist agenda", "It's still shocking that campus radicals", "Safe space warriors"];
 var SPICY_VERB_PHRASE = ["are totally corrupting", "have zero respect for", "want to annihilate", "assault the archetype of", "are hysterically complaining about", "are plotting a 'final solution' for", "don't bloody believe in", "will quickly diminish", "unleash the Dragon of Chaos upon", "dismiss", "must be stopped from attacking", "will make Gulags out of", "feminize and weaken", "radically undermine", "intend to Stalinize", "are always whining about", "sadly act like the Devouring Mother of", "have already contaminated", "find 'problematic'", "are polluting", "are wantonly politicizing"];
 var FAVORITE_THINGS = ["the dominance hierarchy", "my status as the greatest living intellectual", "my work's highly regarded conclusion", "the metaphorical substrate of our culture", "all Western values", "the dream-like significance of revealed Truth", "the classical humanities", "the Enlightenment's progress", "the supreme importance of the individual", "Heidegger's valorization of pure Being", "the Hero's Journey", "the holistic fabric of Being", "the achievements of Judeo-Christian culture", "Solzhenitsyn's prudent warning in <i>The Gulag Archipelago</i>", "Carl Jung's girthy 'Logos'", "the divine Logos", "the embodiment of Christ", "the inescapable tragedy and suffering of life", "the transcendent architecture of Meaning", "the humble lobster's quest", "the <i>manifestations</i> of the divine", "the real presence of the Word", "all messages of masculinity", "the Jungian architecture of dreams", "the <i>masculine</i> ideal of Order", "the configurations of heroic Meaning", "Milo's message as a truth-telling trickster", "our most vital Biblical narratives", "my proud academic legacy", "the Pareto distribution of achievement", "the profoundness of my work", "my brilliant Jungian tradition", "the eternal structures of belief", "the sacred office of fatherhood", "the old-school, empirical social sciences", "the Word <i>within</i> Genesis", "the <i>nobility</i> of the lobster", "the brilliant Intellectual Dark Web"];
 var BECAUSE_OF_THEIR = ["because of their", "probably because of their", "due to their", "since they insist upon their", "via their", "based on their bloody"];
 var EVIL_WEAPONS = ["murderous equity doctrine,", "aspirations towards a dangerous egalitarian utopia,", "so-called 'anti'-fascism,", "lies that Solzhenitsyn revealed,", "intolerance for <i>reason itself</i>,", "tyrannical identity politics,", "hatred of Objective Truth,", "compelled speech,", "group identity,", "Maoist pronouns,", "propaganda from <i>Frozen</i>,", "radical collectivism,", "lens of power that they apply to everything,", "utter contempt for Being,", "reckless Bill C-16, written by ideologues,", "low serotonin levels and poor posture,", "dysfunctional moral 'logic',", "infinite number of postmodern interpretations,", "creeping moral relativism and disdain for science,", "totalitarian ideology which I've been studying for decades,", "nonsense social constructs,", "radical campaigns I've warned you about,", "agenda-based social science 'research',", "insane multi-cultural and diversity initiatives,", "radical de-centering of all values,", "evil deconstructionism,", "claims of 'toxic' masculinity,", "unreadible French intellectuals,", "disturbing hate-speech laws,", "Stalinist speech codes,"];
 var OMINOUS_CONCLUSION = ["-- why aren't the feminists concerned with this?", "-- so much for the 'accepting' social justice types.", "-- just ask Lindsay Shepherd.", "and we can't even have a conversation about it!", "and just ask the Kulaks how that worked out.", "and no one is talking about it!", "as you can bloody well imagine!", "just like the troubled genius Nietzsche predicted.", "so you should sign up for the Self Authoring Suite.", "and you can be damn sure about that!", "insofar as classical liberalism exceeds ideology.", "so don't forget Marx was no better than Hitler.", "and you know how that worked out in Maoist China.", "so I'll never use those bloody ideological terms.", "which must be true since I'm a British Classical Liberal.", "which I've explained at length on Patreon.", "which is increasingly clear from an evolutionary perspective.", "and I will not be silenced.", "which you can confirm by watching the Rubin Report.", "so young men had bloody well stand up for themselves.", "for which Pankaj Mishra deserves a slap.", "which I've written about in <i>12 Rules for Life.</i>", "and I'm still crying for young men today.", "or maybe they'll come for <i>you</i> next.", "even if I've sometimes disagreed with Laura Southern.", "even if I'm not on the same page as Richard Spencer about that.", "despite all the Western achievements we should be damn grateful for.", "and to top it all off some SJW filled my office's lock with glue.", "archetypally speaking.", "even if I'm not allowed to say that in a so-called 'safe space'.", "and after all of this they pretend to be enlightened?", "or maybe they should just go clean their rooms.", "and they don't bloody believe in anything!", "according to Stephen Hicks.", "and I <i>still</i> don't understand Derrida's nonsense.", "so just imagine when they gain more power!", "based on my four decades of experience.", "and they call <i>me</i> a fascist?", "and they pretend <i>I'm</i> the problem?", "so they had better take an IQ test.", "which I predicted in my underappreciated <i>Maps of Meaning</i>.", "and Carl Jung is my daddy."];

 var SITE_LINK = "http://gsajith.com/peterson-generator/";

 function generate(toPerson) {
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

	var general_tweet = stripTags(phrase);
	var follower_tweet = "@" + toPerson + " " + stripTags(phrase);

	if ((toPerson != null) && follower_tweet.length <= 280) {
		return follower_tweet;
	} else if ((toPerson == null) && general_tweet.length <= 280) {
		return general_tweet;
	} else {
		return null;
	}

}

function stripTags(string) {
	return string.replace(/<(?:.|\n)*?>/gm, '');
}

function getRandomHours(startHours, endHours) {
	var startMillis = startHours * 3600000;
	var endMillis = endHours * 3600000;
	return Math.floor(Math.random() * endMillis) + startMillis;
}

function tweetGeneral() {
	var generatedPhrase = generate(null);
	while (generatedPhrase == null) {
		generatedPhrase = generate(null);
	}

	Twitter.post('statuses/update', { status: generatedPhrase }, function(err, data, response) {
		console.log(data)
	});
}

function tweetPeterson() {
	var generatedPhrase = generate("JordanBPeterson");
	while (generatedPhrase == null) {
		generatedPhrase = generate("JordanBPeterson");
	}

	Twitter.post('statuses/update', { status: generatedPhrase }, function(err, data, response) {
		console.log(data)
	});
}

// Tweet at a Peterson-replier
function tweetLobster() {
	var params = {
		q: "to:jordanbpeterson",
		result_type: 'recent',
		lang: 'en'    
	} 

	Twitter.get('search/tweets', params, function(err, data) {
     	// if there no errors
     	if (!err) {
          	// grab ID of tweet to tweet
          	var replyId = data.statuses[0].id;
          	var screenName = data.statuses[0].user.screen_name;
          	var delayCount = 0;
          	for (index = 0; index < data.statuses.length; index++) {
          		var status = data.statuses[index];
          		replyId = status.id;
          		screenName = status.user.screen_name;
          		delayCount = delayCount + 1;
          		if (status.user.screen_name != config.username && status.user.screen_name != "jordanbpeterson" && delayCount > 2) {
          			break;
          		}
          	}

          	var generatedPhrase = generate(screenName);
          	while (generatedPhrase == null) {
          		generatedPhrase = generate(screenName);
          	}

          	var tweet = {
          		status: generatedPhrase,
          		in_reply_to_status_id: replyId,
          	}

          	Twitter.post('statuses/update', tweet,function(err, data, response) {
          		if (response) {
          			console.log(data);
          		}
                // if there was an error while tweeting
                if (err) {
                	console.log('Something went wrong while TWEETING... Duplication maybe...');
                }
            });
          }
        // if unable to Search a tweet
        else {
        	console.log('Something went wrong while SEARCHING...');
        }
    });
}

tweetGeneral();
setInterval(tweetGeneral, 3000000); // General tweet every 50 minutes
setInterval(tweetLobster, getRandomHours(.42, 1)); // Tweet at a JBP follower once every 25-60 minutes
setInterval(tweetPeterson, getRandomHours(20, 30)); // Tweet at JBP once every 20-30 hours

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
	var result = "App is running";
	response.send(result);
}).listen(app.get('port'), function() {
	console.log('App is running, server is listening on port ', app.get('port'));
});
