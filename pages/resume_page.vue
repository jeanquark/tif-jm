<template>
    <v-content id="app">
        <v-container style="padding: 0; max-width: 1017px;">         
            <div>
			<h2>Résumé des pages</h2>
			<br /><br /><br />

				<div id="dock-container">
					<ul>
						<li>
							<nuxt-link to="/gamemode_jm">Page d'accueil d'un joueur en mode "Gamemode" avec un match de son équipe favorite.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustration d'une ville (même style que le modèle). Cette ville doit être paramétrable facilement. Il faut pouvoir ajouter et supprimer les divers thèmes facilement.</li>
								<li>Définir les thèmes (shop, stade, bar, église, local des fans, appartement, université, plage, montagne, ...)</li>
								<li>Exemple : Le thème "plage" sera accessible par les fans de Barcelone mais pas par les fans de Madrid</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/gamemode_pasmatch_jm">Page d'accueil d'un joueur en mode "Gamemode" si son équipe favorite ne joue pas aujourd'hui.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustration d'une ville (même style que le modèle). Cette ville doit être paramétrable facilement. Il faut pouvoir ajouter et supprimer les divers thèmes facilement.</li>
								<li>Définir les thèmes (shop, stade, bar, église, local des fans, appartement, université, plage, montagne, ...)</li>
								<li>Exemple : Le thème "plage" sera accessible par les fans de Barcelone mais pas par les fans de Madrid</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/pageEquipePrincipale">Page d'accueil d'une équipe. Sur cette page d'accueil les derniers résultats et le prochain match de l'équipe.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Tout, cette page n'existe pas encore</li>
								<li>Page selon le modèle "sans header et footer"</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/gamemode_theme">Page qui contiendra toutes les actions réalisables par le joueur dans le thème choisis.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Toutes les illustration de background pour tous les thèmes</li>
								<li>Définir tous les thèmes (ex: plage, montagne, pub, stade, gare, etc...)</li>
								<li>Créer toutes les actions liés aux thèmes</li>
								<li>Créer les illustrations liés aux actions</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCards">Détail d'une action avec petite descritpion, résumé des gains/pertes et petit conseil de Mr Fan. (faire un modal ???)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsActivee">Lorsque le joueur active la carte, il faut montrer ce qu'il a gagné et animer la carte.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsJob">Détail d'une action avec petite descritpion, résumé des gains/pertes et petit conseil de Mr Fan. (faire un modal ???)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsJobActivee">Lorsque le joueur active la carte, il faut montrer ce qu'il a gagné et animer la carte.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsFormation">Détail d'une action avec petite descritpion, résumé des gains/pertes et petit conseil de Mr Fan. (faire un modal ???)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsFormationActivee">Lorsque le joueur active la carte, il faut montrer ce qu'il a gagné et animer la carte.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsHobby">Détail d'une action avec petite descritpion, résumé des gains/pertes et petit conseil de Mr Fan. (faire un modal ???)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsHobbyActivee">Lorsque le joueur active la carte, il faut montrer ce qu'il a gagné et animer la carte.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsMatch">Détail d'une action avec petite descritpion, résumé des gains/pertes et petit conseil de Mr Fan. (faire un modal ???)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsMatchActivee">Lorsque le joueur active la carte, il faut montrer ce qu'il a gagné et animer la carte.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsQuotidien">Détail d'une action avec petite descritpion, résumé des gains/pertes et petit conseil de Mr Fan. (faire un modal ???)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsQuotidienActivee">Lorsque le joueur active la carte, il faut montrer ce qu'il a gagné et animer la carte.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsSport">Détail d'une action avec petite descritpion, résumé des gains/pertes et petit conseil de Mr Fan. (faire un modal ???)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsSportActivee">Lorsque le joueur active la carte, il faut montrer ce qu'il a gagné et animer la carte.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsTemps">Détail d'une action avec petite descritpion, résumé des gains/pertes et petit conseil de Mr Fan. (faire un modal ???)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/actionCardsTempsActivee">Lorsque le joueur active la carte, il faut montrer ce qu'il a gagné et animer la carte.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
								<li>Création des actions et de ses attributs (gain, perte, $fans, etc...)</li>
								<li>Créer une animation lors que le joueur utilise l'action</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/skillInfluence">La page d'accueil des compétences (s'ouvre sur la page des compétences "Influence")</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/skillAttribut">Page sur les compétences "Attribut"</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/skillSavoirfaire">Page sur les compétences "Savoir-faire"</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/skillCards">Page détaillée sur une compétence particulière</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustrer les actions</li>
								<li>Définir les couleurs liés aux thèmes</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/myteams">Page d'accueil des équipes liées à un joueur</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création des liens sur la page des équipes</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/inventoryMain">Page d'accueil de l'inventaire d'un joueur. Il a accès à tout son équipement (acheter dans les shops), vêtements et décorations pour son appartement.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création des illlustrations (avec le format d'image svg, nous pourrons facilement (je pense) créer un fichier "t-shirt", par exemple, et lui donner des couleurs grâce à l'encodage de l'image.</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/inventoryAvatar">Page qui concerne le personnage du joueur et comment il est habillé et quels accessoires il a sur lui.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création des illlustrations (avec le format d'image svg, nous pourrons facilement (je pense) créer un fichier "t-shirt", par exemple, et lui donner des couleurs grâce à l'encodage de l'image.</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/inventoryHome">Page qui concerne l'appartement du joueur. Quelles décorations il a installé pour rapporter plus de Ferveur s'il regarde la match chez lui.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création des illlustrations (avec le format d'image svg, nous pourrons facilement (je pense) créer un fichier "t-shirt", par exemple, et lui donner des couleurs grâce à l'encodage de l'image.</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/inventoryCards">Page qui détaille une Card de l'inventaire.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création des illlustrations (avec le format d'image svg, nous pourrons facilement (je pense) créer un fichier "t-shirt", par exemple, et lui donner des couleurs grâce à l'encodage de l'image.</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchAvenir">Page de match - A venir</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchAvenirEquipe">Page de l'effectif des 2 équipes - A venir</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchAvenirStats">Page des stats du match - A venir</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchAvenirJoueur">Page de match - A venir (pas encore jouable par le joueur)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchAvenirEquipeJoueur">Page de l'effectif des 2 équipes - A venir (pas encore jouable par le joueur)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchAvenirStatsJoueur">Page des stats du match - A venir (pas encore jouable par le joueur)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchEncours">Page de match - En cours</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchEncoursEquipe">Page des effectifs des 2 équipes + lins-up si on peut avoir l'information - En cours</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchEncoursStats">Page des stats du match - En cours</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchEncoursJoueur">Page de match - En cours (le joueur n'a pas encore participé)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchEncoursEquipeJoueur">Page des effectifs des 2 équipes + lins-up si on peut avoir l'information - En cours (le joueur n'a pas encore participé)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchEncoursStatsJoueur">Page des stats du match - En cours (le joueur n'a pas encore participé)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchEncoursJoueurAparticipe">Page de match - En cours (le joueur a participé)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchEncoursEquipeJoueurAparticipe">Page des effectifs des 2 équipes + lins-up si on peut avoir l'information - En cours (le joueur a participé)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchEncoursStatsJoueurAparticipe">Page des stats du match - En cours (le joueur a participé)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchTermine">Page de match - Terminé</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchTermineEquipe">Page des effectifs des 2 équipes + lins-up si on peut avoir l'information - Terminé</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchTermineStats">Page des stats du match - Terminé</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchTermineJoueur">Page de match - Terminé (le joueur n'a pas participé)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchTermineEquipeJoueur">Page des effectifs des 2 équipes + lins-up si on peut avoir l'information - Terminé (le joueur n'a pas participé)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchTermineStatsJoueur">Page des stats du match - Terminé (le joueur n'a pas participé)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchTermineJoueurAparticipe">Page de match - Terminé (le joueur a participé)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchTermineEquipeJoueurAparticipe">Page des effectifs des 2 équipes + lins-up si on peut avoir l'information - Terminé (le joueur a participé)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/matchTermineStatsJoueurAparticipe">Page des stats du match - Terminé (le joueur a participé)</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Création d'une image de fond (sous le score).</li>
							</ul>
						</li>
					</ul>
				</div>
            </div>
        </v-container>
  </v-content>
</template>

<script>
    export default {
        layout: 'layoutLandingPage',
        data () {
            return {
                links: [
                    'Home',
                    'About Us',
                    'Team',
                    'Services',
                    'Blog',
                    'Contact Us'
                ]
            } 
        }
    }
</script>

<style scoped>
</style>
