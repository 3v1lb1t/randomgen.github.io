var adversaries = ['admin@338', 'APT1', 'APT12', 'APT16', 'APT17', 'APT18', 'APT19', 'APT28', 'APT29', 'APT3', 'APT30', 'APT32', 'APT33', 'APT37', 'APT38', 'APT39', 'APT41', 'Axiom', 'BlackOasis', 'BRONZE BUTLER', 'Carbanak', 'Charming Kitten', 'Cleaver', 'Cobalt Group', 'CopyKittens', 'Dark Caracal', 'Darkhotel', 'DarkHydrus', 'Deep Panda', 'Dragonfly', 'Dragonfly 2.0', 'DragonOK', 'Dust Storm', 'Elderwood', 'Equation', 'FIN10', 'FIN4', 'FIN5', 'FIN6', 'FIN7', 'FIN8', 'Gallmaker', 'Gamaredon Group', 'GCMAN', 'Gorgon Group', 'Group5', 'Honeybee', 'Ke3chang', 'Kimsuky', 'Lazarus Group', 'Leafminer', 'Leviathan', 'Lotus Blossom', 'Lizard Squad', 'Machete', 'Magic Hound', 'menuPass', 'Moafee', 'Molerats', 'MuddyWater', 'Naikon', 'NEODYMIUM', 'Night Dragon', 'OilRig', 'Orangeworm', 'Patchwork', 'PittyTiger', 'PLATINUM', 'Poseidon Group', 'PROMETHIUM', 'Putter Panda', 'Rancor', 'RTM', 'Sandworm Team', 'Scarlet Mimic', 'Silence', 'SilverTerrier', 'Soft Cell', 'Sowbug', 'Stealth Falcon', 'Stolen Pencil', 'Strider', 'Suckfly', 'TA459', 'TA505', 'Taidoor', 'TEMP.Veles', 'The White Company', 'Threat Group-1314', 'Threat Group-3390', 'Thrip', 'Tropic Trooper', 'Turla', 'Winnti Group', 'WIRTE'];

function newAdversary() {
	var randomNumber = Math.floor(Math.random() * (adversaries.length));
	document.getElementById('adversaryDisplay').innerHTML = adversaries[randomNumber];
}
