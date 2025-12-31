import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase';
import { ref, set, onValue, get, update } from 'firebase/database';

function App() {
  const [screen, setScreen] = useState('home');
  const [playerName, setPlayerName] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [currentRoom, setCurrentRoom] = useState(null);
  const [players, setPlayers] = useState([]);
  const [isHost, setIsHost] = useState(false);
  const [gameState, setGameState] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (currentRoom) {
      const roomRef = ref(db, `rooms/${currentRoom}`);
      const unsubscribe = onValue(roomRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setPlayers(data.players || []);
          setGameState(data.gameState || null);
          if (data.gameState?.started && screen === 'lobby') {
            setScreen('game');
          }
        }
      });
      return () => unsubscribe();
    }
  }, [currentRoom, screen]);

  const generateRoomCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const createRoom = async () => {
    if (!playerName.trim()) {
      alert('Entre ton nom !');
      return;
    }

    const code = generateRoomCode();
    const roomRef = ref(db, `rooms/${code}`);
    
    await set(roomRef, {
      host: playerName,
      players: [{ name: playerName, id: Date.now() }],
      gameState: null,
      createdAt: Date.now()
    });

    setRoomCode(code);
    setCurrentRoom(code);
    setIsHost(true);
    setScreen('lobby');
  };

  const joinRoom = async () => {
    if (!playerName.trim() || !roomCode.trim()) {
      alert('Entre ton nom et le code !');
      return;
    }

    const roomRef = ref(db, `rooms/${roomCode.toUpperCase()}`);
    const snapshot = await get(roomRef);

    if (!snapshot.exists()) {
      alert('Room introuvable !');
      return;
    }

    const roomData = snapshot.val();
    const newPlayers = [...(roomData.players || []), { name: playerName, id: Date.now() }];

    await update(roomRef, { players: newPlayers });

    setCurrentRoom(roomCode.toUpperCase());
    setIsHost(false);
    setScreen('lobby');
  };

  const startGame = async () => {
    if (players.length < 2) {
      alert('Il faut au moins 2 joueurs !');
      return;
    }

    const roomRef = ref(db, `rooms/${currentRoom}`);
    await update(roomRef, {
      gameState: {
        started: true,
        currentPlayerIndex: 0,
        history: [],
        turnNumber: 0
      }
    });

    setScreen('game');
  };

  const spinWheel = async () => {
    if (spinning) return;

    const currentPlayerIndex = gameState.currentPlayerIndex;
    const myPlayerIndex = players.findIndex(p => p.name === playerName);

    if (currentPlayerIndex !== myPlayerIndex) {
      alert('Ce n\'est pas ton tour !');
      return;
    }

    setSpinning(true);

    setTimeout(async () => {
      const outcomes = [
        { type: 'NOTHING', weight: 30, label: 'Rien', description: 'Tu es sauvé !' },
        { type: 'DRINK', weight: 25, label: '1 gorgée', description: 'Bois 1 gorgée' },
        { type: 'DRINK_2', weight: 20, label: '2 gorgées', description: 'Bois 2 gorgées' },
        { type: 'GIVE', weight: 15, label: 'Distribue 1', description: 'Donne 1 gorgée à quelqu\'un' },
        { type: 'ESTELLE', weight: 10, label: 'Message Estelle', description: 'Envoie un message à Estelle' },
        { type: 'JUSTINE', weight: 10, label: 'Message Justine', description: 'Envoie un message à Justine' },
        { type: 'EVERYONE', weight: 7, label: 'Tout le monde', description: 'Tout le monde boit !' },
        { type: 'ULTIMATE', weight: 3, label: 'CUL SEC', description: 'Finis ton verre !' }
      ];

      const totalWeight = outcomes.reduce((sum, o) => sum + o.weight, 0);
      let random = Math.random() * totalWeight;
      
      let selectedOutcome = outcomes[0];
      for (const outcome of outcomes) {
        if (random < outcome.weight) {
          selectedOutcome = outcome;
          break;
        }
        random -= outcome.weight;
      }

      const newHistory = [
        ...(gameState.history || []),
        {
          player: playerName,
          result: selectedOutcome,
          timestamp: Date.now(),
          turnNumber: gameState.turnNumber + 1
        }
      ];

      const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;

      const roomRef = ref(db, `rooms/${currentRoom}`);
      await update(roomRef, {
        gameState: {
          ...gameState,
          currentPlayerIndex: nextPlayerIndex,
          history: newHistory,
          turnNumber: gameState.turnNumber + 1
        }
      });

      setResult(selectedOutcome);
      setSpinning(false);

      setTimeout(() => setResult(null), 5000);
    }, 2000);
  };

  const renderHome = () => (
    <div className="screen">
      <h1>🎰 Roue de la Mort</h1>
      <p className="subtitle">Jeu de boisson synchronisé</p>
      <input
        type="text"
        placeholder="Ton nom"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        className="input"
      />
      <button onClick={() => setScreen('create')} className="btn btn-primary">
        Créer une partie
      </button>
      <button onClick={() => setScreen('join')} className="btn btn-secondary">
        Rejoindre une partie
      </button>
    </div>
  );

  const renderCreate = () => (
    <div className="screen">
      <h2>Créer une partie</h2>
      <button onClick={createRoom} className="btn btn-primary">
        Générer un code
      </button>
      <button onClick={() => setScreen('home')} className="btn btn-secondary">
        Retour
      </button>
    </div>
  );

  const renderJoin = () => (
    <div className="screen">
      <h2>Rejoindre une partie</h2>
      <input
        type="text"
        placeholder="Code de la partie"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
        className="input"
        maxLength={6}
      />
      <button onClick={joinRoom} className="btn btn-primary">
        Rejoindre
      </button>
      <button onClick={() => setScreen('home')} className="btn btn-secondary">
        Retour
      </button>
    </div>
  );

  const renderLobby = () => (
    <div className="screen">
      <h2>Salon d'attente</h2>
      <div className="room-code">
        Code : <strong>{currentRoom}</strong>
      </div>
      <div className="players-list">
        <h3>Joueurs ({players.length}/10)</h3>
        {players.map((player, idx) => (
          <div key={player.id} className="player-item">
            {idx + 1}. {player.name} {player.name === playerName && '(toi)'}
          </div>
        ))}
      </div>
      {isHost && (
        <button onClick={startGame} className="btn btn-primary">
          Démarrer la partie
        </button>
      )}
      {!isHost && <p className="waiting-text">En attente de l'hôte...</p>}
    </div>
  );

  const renderGame = () => {
    const currentPlayer = players[gameState?.currentPlayerIndex];
    const isMyTurn = currentPlayer?.name === playerName;

    return (
      <div className="screen game-screen">
        <div className="game-header">
          <h3>Tour #{gameState?.turnNumber + 1}</h3>
          <div className="current-player">
            {isMyTurn ? "C'est ton tour !" : `Tour de ${currentPlayer?.name}`}
          </div>
        </div>

        <div className={`wheel ${spinning ? 'spinning' : ''}`}>
          {spinning ? '🎰' : '🎯'}
        </div>

        {result && (
          <div className="result-popup">
            <div className="result-label">{result.label}</div>
            <div className="result-description">{result.description}</div>
          </div>
        )}

        {isMyTurn && !spinning && (
          <button onClick={spinWheel} className="btn btn-primary btn-spin">
            Lancer la roue
          </button>
        )}

        <div className="history">
          <h4>Historique</h4>
          <div className="history-list">
            {gameState?.history?.slice(-5).reverse().map((entry, idx) => (
              <div key={idx} className="history-item">
                <span className="history-player">{entry.player}</span>
                <span className="history-result">{entry.result.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="player-order">
          <h4>Ordre des joueurs</h4>
          {players.map((player, idx) => (
            <span
              key={player.id}
              className={`player-badge ${idx === gameState?.currentPlayerIndex ? 'active' : ''}`}
            >
              {player.name}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      {screen === 'home' && renderHome()}
      {screen === 'create' && renderCreate()}
      {screen === 'join' && renderJoin()}
      {screen === 'lobby' && renderLobby()}
      {screen === 'game' && renderGame()}
    </div>
  );
}

export default App;
