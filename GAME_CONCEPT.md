2025.01.03 (kid) Some inspiration for the gameplay loop:

- https://www.thecrims.com/ 
- https://www.torn.com/
- https://en.wikipedia.org/wiki/Duels_(video_game)
- https://lobby.gladiatus.gameforge.com/en_GB/

High-level overview:

- Round based nature where devs can iterate features and balancing after each round. All progress is reset at the end of each round.    
-B Round based fights with precalculation and fightingscreens arena rounds which are timed for ranked lists and pvp titles
- One inter-rounds resource to strive for (called **credits** in this document) and one defining stat to strive to maximize at the end of each round (called **reputation** in this document).  
-B Round interround ressource makes only sence with a round like mechanism as in crims but then we would need a way bigger team with communitymanagers etc. 
- Motivation for the gameplay-loop should be progress and learning to game and combine the different gameplay systems to reach as high of a reputation as possible in each round  
- Motiviation should be the funny atmosphere of the game (easier/faster to achieve)

For the MVP there are three main gameplay systems: **Missions**, **Assaults**, **Economy**.

-B **Behoerdengang**, **Kampfarena**, **Bumhole**

Missions:  

- concept of missions is simple // lets think about making the missions more interactive / clicki like you always have somehting to do like in crims but it is more then just a table click
- there's an overarching stat **mission_power** that's calculated off main stats and items
- percentage of successfully finishing a mission (sucess rate) should be calculated with the base: `player's mission_power / expected mission_power`
- the lower the success rate, the higher the stat rewards for the players on successfully completing a mission  
- missions give **Kronkorken** and optionally other items  
- missions can trigger an assault / battle  // B Maybe only battles in the Kampfarena
- missions can be timed but that shouldn't always be the case
- missions use a (rechargable) player resource (in document, called **stamina**) //
- missions can require specific items to initiate // boss fight for next mission class more progress instead of just listhitting
- on mission failure, there's a chance of different failure states to be triggered: light failure (lose HP), medium failure (go to jail), critical failure (lose all HP, go to jail) // just wasted time? positive features instead of bad ones gives broader audience
- losing all HP sends the player to the hospital (player needs to either wait a period of time or spend credits to get out)  
- jail, same same as hospital but with the option to bribe your way out (DECISION: jail breaks, but how to balance it to make it interesting? after MVP maybe. should be multi-step. high risk - high reward?) // -B would drop that superheros in hospital n stuff it works for crims but not for us
- gang missions are like normal missions, but with a queue system. A player initiates a gang mission, other players join and they need to fulfil the mission requirements. (DECISION: allow players of mixed high and low stats to try to tackle harder missions?), (DECISION: does active player count in a gang mission affect the outcome, besides having to fullfil a minimul player count?), (DECISION: after MVP, multi-step missions for gang missions to further differentiate from normal missions and give an incentive for players becoming part of the community?)

Assaults: 

- assaults are PVP or PVE. Turn-based and calculated based on random chance and the players / entities stats
- assaults can be initiated on recently seen players or most-wanted players (DECISION: where do players meet each other in game to be viable for assault? e.g. brothels, clubs?), (DECISION: how to handle and balance PVP gang-assaults? after MVP?)
- players get access to PVE areas where they can regularly engage in safe assaults
- there are boss-level areas meant only for gang-assaults
- players going on a rampage become MOST WANTED (what "going on a rampage" to be defined)
- as stated above, assaults can also be triggered by certain missions

- // -B completly drop the assault stuff for an arena/dungeon like experience 

Economy: 

- main Economy systems: **stock market**, **drugs**, **hookers**, **buildings**  // -B **looting**, **** --- just find something less crimey more superhero bums like
- economy is the main place where a player can snowball  // maybe we should look into more balanced stuff
- stock market is just a bunch of GBM generated random-walks with different parameters, updated each in-game day. Items like boosters can influence return rates, dividents, etc. Further, more complex interactions are out-of-scope for the MVP // drop it like its hot
- buildings and drugs go hand-in-hand. Building produce drugs. Drugs are to be sold on the black market. Further systems I would postpone post-MVP. Amount of buildings, building maintenace and production rate, drug sell prices, etc. to be decided by player stats + player class (level)
- there should be like 10-ish type of hookers which just produce cash passively. The amount of hookers one can have is determined by amount of brothels/clubs owned and player stats + player class (level). Amount of brothers/clubs one can have is determined by player stats + player class (level) // stop the hooker stuff again not a rip off we want kids to play that
- (DECISION: copy Torn / TheCrims and have the **stamina** refilling places to be randomly shown player clubs / brothels instances to create a semi-organic economy and feeling of scope?) // mechanic good but lets do something like AA group or streetworker therapists etc.

-B Overall Question "shall this be a crime related scenery or a funny critique on popculture and society"

