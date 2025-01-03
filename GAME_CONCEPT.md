2025.01.03 (kid) Some inspiration for the gameplay loop:

- https://www.thecrims.com/ 
- https://www.torn.com/
- https://en.wikipedia.org/wiki/Duels_(video_game)
- https://lobby.gladiatus.gameforge.com/en_GB/

High-level overview:

- Round based nature where devs can iterate features and balancing after each round. All progress is reset at the end of each round.    
- One inter-rounds resource to strive for (called **credits** in this document) and one defining stat to strive to maximize at the end of each round (called **reputation** in this document).  
- Motivation for the gameplay-loop should be progress and learning to game and combine the different gameplay systems to reach as high of a reputation as possible in each round  

For the MVP there are three main gameplay systems: **Missions**, **Assaults**, **Economy**.

Missions:  

- concept of missions is simple
- there's an overarching stat **mission_power** that's calculated off main stats and items
- percentage of successfully finishing a mission (sucess rate) should be calculated with the base: `player's mission_power / expected mission_power`
- the lower the success rate, the higher the stat rewards for the players on successfully completing a mission  
- missions give **cash** and optionally other items  
- missions can trigger an assault / battle  
- missions can be timed but that shouldn't always be the case
- missions use a (rechargable) player resource (in document, called **stamina**)
- missions can require specific items to initiate
- on mission failure, there's a chance of different failure states to be triggered: light failure (lose HP), medium failure (go to jail), critical failure (lose all HP, go to jail)
- losing all HP sends the player to the hospital (player needs to either wait a period of time or spend credits to get out)  
- jail, same same as hospital but with the option to bribe your way out (DECISION: jail breaks, but how to balance it to make it interesting? after MVP maybe. should be multi-step. high risk - high reward?) 
- gang missions are like normal missions, but with a queue system. A player initiates a gang mission, other players join and they need to fulfil the mission requirements. (DECISION: allow players of mixed high and low stats to try to tackle harder missions?), (DECISION: does active player count in a gang mission affect the outcome, besides having to fullfil a minimul player count?), (DECISION: after MVP, multi-step missions for gang missions to further differentiate from normal missions and give an incentive for players becoming part of the community?)

Assaults: 

- assaults are PVP or PVE. Turn-based and calculated based on random chance and the players / entities stats
- assaults can be initiated on recently seen players or most-wanted players (DECISION: where do players meet each other in game to be viable for assault? e.g. brothels, clubs?), (DECISION: how to handle and balance PVP gang-assaults? after MVP?)
- players get access to PVE areas where they can regularly engage in safe assaults
- there are boss-level areas meant only for gang-assaults
- players going on a rampage become MOST WANTED (what "going on a rampage" to be defined)
- as stated above, assaults can also be triggered by certain missions

Economy: 

- main Economy systems: **stock market**, **drugs**, **hookers**, **buildings**  
- economy is the main place where a player can snowball  
- stock market is just a bunch of GBM generated random-walks with different parameters, updated each in-game day. Items like boosters can influence return rates, dividents, etc. Further, more complex interactions are out-of-scope for the MVP
- buildings and drugs go hand-in-hand. Building produce drugs. Drugs are to be sold on the black market. Further systems I would postpone post-MVP. Amount of buildings, building maintenace and production rate, drug sell prices, etc. to be decided by player stats + player class (level)
- there should be like 10-ish type of hookers which just produce cash passively. The amount of hookers one can have is determined by amount of brothels/clubs owned and player stats + player class (level). Amount of brothers/clubs one can have is determined by player stats + player class (level)
- (DECISION: copy Torn / TheCrims and have the **stamina** refilling places to be randomly shown player clubs / brothels instances to create a semi-organic economy and feeling of scope?)

