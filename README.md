# ❤️U Festival Webapp

Welkom bij de festivalwebapp voor het ❤️U Festival – een feestelijk initiatief voor (nieuwe) studenten in Utrecht. Deze applicatie biedt bezoekers een overzicht van het programma, locatie-informatie, bereikbaarheid en meer.

## 📚 Inhoudsopgave

- [Installatie](#installatie)
- [Architectuur](#architectuur)
- [Belangrijke keuzes](#belangrijke-keuzes)
- [Technologieën](#technologieën)
- [Gebruik](#gebruik)

---

## 🚀 Installatie

### Vereisten

Zorg dat je [Node.js](https://nodejs.org) (versie 18+) geïnstalleerd hebt.

### Stappen

1. Clone de repository:

```bash
git clone https://github.com/ToastL/loveufestival
cd loveufestival
```

2. Installeer dependencies:

```bash
npm install
```

3.	Start de development server:

```bash
npm run dev
```

De app draait nu lokaal op http://localhost:5173 (standaard Vite-poort).

⸻

## 🧱 Architectuur

Het project is opgezet als een moderne React/Vite-applicatie met TypeScript en TailwindCSS. De structuur is modulair en gericht op uitbreidbaarheid:

```
src/
├── assets/           → afbeeldingen en dummy data
├── components/       → herbruikbare UI-componenten
├── pages/            → pagina's zoals Line-up en Info
├── index.css         → Tailwind-configuratie en globale stijlen
├── main.tsx          → entry point van de app
```

### State Management

Er wordt gebruik gemaakt van eenvoudige lokale state (useState) en prop-drilling. Geen externe state libraries zoals Redux of Pinia zijn nodig in deze scope.

### Routing

Routing wordt afgehandeld via react-router-dom. De belangrijkste routes zijn:
	•	/ → Line-up pagina
	•	/info → Festivalinformatie

## 🧠 Belangrijke keuzes
	•	TypeScript voor typeveiligheid en betere developer experience.
	•	TailwindCSS voor snelle en consistente styling.
	•	Vite als buildtool vanwege snelheid en eenvoud.
	•	Responsieve grid voor line-up: tijdslijn van 10:00 tot 23:45 met 15-minuten slots.
	•	Flexibele datastructuur: line-up accepteert zowel platte acts[] als geneste stages[].

⸻

## 🛠️ Technologieën
	•	React 18+
	•	TypeScript
	•	TailwindCSS
	•	Vite
	•	ESLint + Prettier

⸻

## 🧪 Gebruik
	•	Navigeer tussen dagen met de buttons ‘Zaterdag’ en ‘Zondag’
	•	Klik op ❤️ om artiesten te favoriten
	•	Klik op ℹ️ om details (beschrijving, video, afbeelding) te bekijken
	•	Ga naar de /info pagina voor algemene festivalinformatie