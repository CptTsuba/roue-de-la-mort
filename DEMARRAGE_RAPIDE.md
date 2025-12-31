# ⚡ DÉMARRAGE RAPIDE - 10 MINUTES CHRONO

## 🎯 OBJECTIF
Avoir l'app en ligne dans 10 minutes pour ce soir !

---

## ⏱️ MINUTE 1-2 : FIREBASE

1. https://console.firebase.google.com
2. **+ Ajouter un projet**
3. Nom : `roue-de-la-mort`
4. ❌ Désactive Analytics
5. **Créer**

---

## ⏱️ MINUTE 3-4 : DATABASE

1. Menu gauche → **Realtime Database**
2. **Créer une base de données**
3. Région : `europe-west1`
4. Mode : **TEST** ⚠️
5. **Activer**

---

## ⏱️ MINUTE 5-6 : RÉCUPÉRER LES CLÉS

1. ⚙️ (Paramètres) → **Paramètres du projet**
2. Scroll ↓ → Icône `</>`
3. Nom : `roue`
4. **Enregistrer**
5. **📋 COPIE tout firebaseConfig**

---

## ⏱️ MINUTE 7 : CONFIGURER LE CODE

1. Ouvre `src/firebase.js`
2. Remplace TOUTES les lignes "VOTRE_XXX"
3. **💾 SAUVEGARDE**

Exemple :
```javascript
// AVANT
apiKey: "VOTRE_API_KEY"

// APRÈS  
apiKey: "AIzaSyC-DhQvMbFw..."
```

---

## ⏱️ MINUTE 8 : INSTALLER

Terminal :
```bash
cd ~/Downloads/roue-de-la-mort
npm install
```

---

## ⏱️ MINUTE 9 : TESTER

```bash
npm start
```

Navigateur s'ouvre → Teste la création de partie

---

## ⏱️ MINUTE 10 : DÉPLOYER

```bash
npm install -g vercel
vercel
```

Réponds **Y** à tout, laisse par défaut.

**TU REÇOIS TON LIEN !** 🎉

---

## 📲 PARTAGER

1. Copie le lien Vercel
2. Envoie à tes potes
3. Ils ouvrent sur leur iPhone
4. **C'EST PARTI !**

---

## 🆘 SI PROBLÈME

**Firebase** : Vérifie que tu as copié toutes les lignes dans firebase.js

**npm install échoue** :
```bash
rm -rf node_modules
npm install
```

**Vercel échoue** :
```bash
vercel --prod
```

---

## ✅ CHECK-LIST FINALE

Avant de commencer la soirée :

- [ ] Firebase configuré
- [ ] npm start fonctionne en local
- [ ] Déployé sur Vercel
- [ ] Lien testé sur iPhone
- [ ] 2+ personnes peuvent rejoindre
- [ ] La roue tourne

**SI TOUT EST ✅ → VOUS ÊTES PRÊTS ! 🍻**

---

Temps réel : **10 minutes**
Difficulté : **Facile** (copier-coller)
Succès garanti : **99%** 🎯
