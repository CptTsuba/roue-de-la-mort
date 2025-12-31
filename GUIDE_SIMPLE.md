# 🎯 GUIDE ULTRA-SIMPLE - À SUIVRE DANS L'ORDRE

## ✅ CE QUE TU AS DÉJÀ FAIT
- ✅ Compte Firebase créé
- ✅ Compte Vercel créé
- ✅ Application téléchargée

---

## 🔥 ÉTAPE 1 : CONFIGURER FIREBASE (5 minutes)

### 1.1 - Créer le projet Firebase
1. Va sur https://console.firebase.google.com
2. Clique "Ajouter un projet"
3. Nom : "roue-de-la-mort"
4. **DÉCOCHE** Google Analytics
5. Clique "Créer le projet"
6. Attends 30 secondes
7. Clique "Continuer"

### 1.2 - Créer la base de données
1. Dans le menu de gauche, cherche "Realtime Database"
2. Clique "Créer une base de données"
3. Choisis la région : **europe-west1** (ou la plus proche)
4. **IMPORTANT** : Choisis "Commencer en mode test"
5. Clique "Activer"

### 1.3 - Récupérer les identifiants
1. Clique sur l'icône ⚙️ en haut à gauche
2. Clique "Paramètres du projet"
3. Scroll en bas jusqu'à "Vos applications"
4. Clique sur l'icône `</>`  (Web)
5. Nom de l'app : "roue-de-la-mort"
6. **NE COCHE PAS** Firebase Hosting
7. Clique "Enregistrer l'application"
8. **COPIE TOUT LE BLOC** `firebaseConfig = {...}`

Tu devrais avoir quelque chose comme :
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC-xxx...",
  authDomain: "roue-de-la-mort-xxx.firebaseapp.com",
  databaseURL: "https://roue-de-la-mort-xxx-default-rtdb.firebaseio.com",
  projectId: "roue-de-la-mort-xxx",
  storageBucket: "roue-de-la-mort-xxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### 1.4 - Mettre les identifiants dans le code

1. Ouvre le dossier `roue-de-la-mort` que je t'ai créé
2. Va dans `src` > `firebase.js`
3. Ouvre `firebase.js` avec TextEdit ou VSCode
4. Remplace **LIGNE PAR LIGNE** :
   - `"VOTRE_API_KEY"` → ton `apiKey` (garde les guillemets)
   - `"VOTRE_PROJECT_ID.firebaseapp.com"` → ton `authDomain`
   - `"https://VOTRE_PROJECT_ID-default-rtdb.firebaseio.com"` → ton `databaseURL`
   - Et ainsi de suite pour TOUTES les lignes
5. **SAUVEGARDE** le fichier

---

## 💻 ÉTAPE 2 : TESTER EN LOCAL (2 minutes)

### 2.1 - Lancer l'application
1. Ouvre le **Terminal** sur ton Mac (Cmd + Espace, tape "Terminal")
2. Tape :
```bash
cd ~/Downloads/roue-de-la-mort
npm start
```
3. Attends 10-20 secondes
4. Ton navigateur s'ouvre automatiquement sur http://localhost:3000

### 2.2 - Test rapide
1. Entre ton nom
2. Clique "Créer une partie"
3. Note le code qui s'affiche
4. Ouvre un **nouvel onglet en navigation privée** (Cmd + Shift + N)
5. Va sur http://localhost:3000
6. Entre un autre nom
7. Clique "Rejoindre une partie"
8. Entre le code
9. Tu devrais voir les 2 joueurs !

**SI ÇA MARCHE** : Continue à l'étape 3
**SI ÇA NE MARCHE PAS** : Vérifie firebase.js

---

## 🚀 ÉTAPE 3 : DÉPLOYER SUR VERCEL (5 minutes)

### Option la plus simple : Vercel CLI

1. Dans le Terminal, tape :
```bash
npm install -g vercel
```

2. Attends que ça s'installe (1 minute)

3. Ensuite tape :
```bash
cd ~/Downloads/roue-de-la-mort
vercel
```

4. Questions qui vont apparaître :
   - "Set up and deploy?" → Tape **Y** (Enter)
   - "Which scope?" → Choisis ton compte (Enter)
   - "Link to existing project?" → Tape **N** (Enter)
   - "What's your project's name?" → Tape **roue-de-la-mort** (Enter)
   - "In which directory is your code located?" → Laisse vide (Enter)
   - "Want to override the settings?" → Tape **N** (Enter)

5. Attends 30 secondes

6. Tu verras :
```
✅  Production: https://roue-de-la-mort-xxx.vercel.app
```

**C'EST CE LIEN QUE TU PARTAGES À TES POTES !**

---

## 📱 ÉTAPE 4 : JOUER CE SOIR !

1. Partage le lien Vercel à tous tes potes
2. Tu crées la partie
3. Tu leur donnes le code
4. Ils rejoignent
5. Tu démarres
6. C'EST PARTI ! 🎉

---

## 🆘 AIDE RAPIDE

**Erreur Firebase** : Vérifie que tu as bien copié TOUTES les valeurs dans firebase.js

**"Room introuvable"** : Le code est sensible aux majuscules

**L'app ne se lance pas** : 
```bash
cd ~/Downloads/roue-de-la-mort
npm install
npm start
```

**Questions ?** Demande-moi dans le chat !

---

## ⏰ TEMPS TOTAL : 15 MINUTES MAX

Tu devrais être prêt pour ce soir ! 🍻
