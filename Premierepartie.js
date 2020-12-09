let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
let SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
let SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

let Mots_Clés = ['Balise','BALISE', 'balise'];
let grammaire = '#JSGF V1.0;grammar Mots_Clés; public <balise> = ' + Mots_Clés.join(' | ') + ' ;'

let reco_vocale = new SpeechRecognition();
let liste_grammaire_reco = new SpeechGrammarList();
liste_grammaire_reco.addFromString(grammaire,1);

reco_vocale.grammars = liste_grammaire_reco;
reco_vocale.continuous = true;
reco_vocale.lang = 'fr-FR';
reco_vocale.interimResults = true;
reco_vocale.maxAlternatives = 1;

