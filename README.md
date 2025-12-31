# 🎰 Roue de la Mort - Guide de Déploiement

## 🚀 Installation Rapide (pour ce soir !)

### Étape 1 : Configuration Firebase

1. Va sur https://console.firebase.google.com
2. Clique sur "Ajouter un projet"
3. Nomme-le "roue-de-la-mort" (ou autre)
4. Désactive Google Analytics (pas nécessaire)
5. Clique sur "Créer le projet"

Une fois créé :
6. Dans le menu de gauche, clique sur "Realtime Database"
7. Clique sur "Créer une base de données"
8. Choisis "Commencer en mode test" (pour ce soir)
9. Sélectionne la région la plus proche (europe-west)

Maintenant, récupère tes identifiants :
10. Clique sur l'icône "⚙️" (paramètres) > "Paramètres du projet"
11. Scroll vers le bas et clique sur "</>" (icône web)
12. Enregistre l'application (nom : "roue-de-la-mort")
13. **COPIE TOUT LE CODE DE CONFIGURATION** (firebaseConfig)

### Étape 2 : Configurer le code

1. Ouvre le fichier `src/firebase.js`
2. Remplace les valeurs "VOTRE_XXX" par tes vraies valeurs Firebase
3. Sauvegarde le fichier

### Étape 3 : Lancer l'application en local (test)

Dans ton terminal :
```bash
cd roue-de-la-mort
npm start
```

L'application devrait s'ouvrir dans ton navigateur à http://localhost:3000

Teste que tout fonctionne :
- Crée une partie
- Ouvre un autre onglet en navigation privée
- Rejoins la partie avec le code
- Lance la roue !

### Étape 4 : Déployer sur Vercel (pour que tes potes y accèdent)

**Option A : Avec Vercel CLI (le plus rapide)**

Dans le terminal :
```bash
npm install -g vercel
cd roue-de-la-mort
vercel
```

Suis les instructions :
- Login avec ton compte
- Confirme les paramètres par défaut
- Attends 30 secondes

Tu auras un lien genre : https://roue-de-la-mort.vercel.app

**PARTAGE CE LIEN À TES POTES !**

**Option B : Via le site Vercel**

1. Va sur https://vercel.com
2. Clique sur "Add New" > "Project"
3. Il faut d'abord créer un repo GitHub :
   - Va sur https://github.com/new
   - Nomme le repo "roue-de-la-mort"
   - Crée-le (public ou privé)
   - Ensuite dans ton terminal :
   ```bash
   cd roue-de-la-mort
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TON_USERNAME/roue-de-la-mort.git
   git push -u origin main
   ```
4. Retourne sur Vercel et importe le repo
5. Déploie !

---

## 🎮 Comment jouer ?

1. L'hôte crée une partie et partage le code
2. Les joueurs rejoignent avec le code
3. L'hôte démarre la partie
4. Chacun joue à son tour dans l'ordre
5. La roue décide qui boit !

---

## 🔧 Règles de la roue

- 30% : Rien (sauvé !)
- 25% : 1 gorgée
- 20% : 2 gorgées
- 15% : Distribue 1 gorgée
- 7% : Tout le monde boit
- 3% : CUL SEC !

---

## 🆘 Problèmes courants

**"Room introuvable"** : Vérifie le code, il est sensible aux majuscules

**"Ce n'est pas ton tour"** : Attends ton tour, l'ordre est affiché en bas

**La roue ne tourne pas** : Vérifie ta connexion internet et Firebase

**Firebase non configuré** : Vérifie que tu as bien remplacé les valeurs dans firebase.js

---

## 📱 Optimisé pour iPhone

L'interface est conçue pour être parfaite sur mobile, surtout iPhone.

---

## 🍺 Bon réveillon !

Créé en urgence pour une soirée entre potes. Buvez avec modération (ou pas) ! 🎉
