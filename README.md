# DIMPI

mobile/web app for playing games with friends

Developed with [SolidJS](https://www.solidjs.com/), [Rust](https://www.rust-lang.org/) and  [Tauri](https://tauri.app/)
Everything is open source.
License: [MIT](https://opensource.org/licenses/MIT)
Author: [Ioseb Koplatadze](https://github.com/IosebKoplatadze)

## TODO

!!! Mobile first, Web first, Online first

### Web

* Offline: PWA, save data in local storage
* Online: rest API

### App

* Offline: Rust back-end part of App bundle
* Online: rest API

### Common

* same front-end written in SolidJS
* Repository pattern interface (implemented separately for all combination of web/app offline/online)
* ENTITIES:
  * Games
    * id
    * name
    * description
    * rules
  * Players (offline/online) (online players cannot see some content based on in which team they are)
    * id
    * name
    * status (online/offline)
  * Teams / Squads
    * id
    * name
    * roomId
  * playerInTeam
    * id
    * teamId
    * playerId
  * playerInRoom
    * id
    * roomId
    * playerId
  * Rooms (QR code share)
    * id
    * status (private/public)
    * gameId
  * Matches
    * id
    * status (active/finished)
    * roomId
    * iteration 
  * Score (per game, match, player/team, room; partial/full; sync online)
    * id
    * matchId
    * playerId
    * score
  * Result
    * matchId
    * winnerTeamId
    * winnerPlayerId
    * bestScoreId