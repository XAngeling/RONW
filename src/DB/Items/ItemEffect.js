/**
 * DB/Skills/ItemEffect.js
 *
 * List of items with informations (in progress)
 *
 * This file is part of ROBrowser, Ragnarok Online in the Web Browser (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
//  effectId: hitEffectId: effectIdOnCaster: beforeCastEffectId:
define(function()
{
    'use strict';

    var ItemEffect = {};
	
	//Type 1
	ItemEffect[501] = { effectId: 204 }; //Red Potion
	ItemEffect[502] = { effectId: 205 }; //Orange Potion
	ItemEffect[503] = { effectId: 206 }; //Yellow Potion
	ItemEffect[504] = { effectId: 207 }; //White Potion
	ItemEffect[505] = { effectId: 208 }; //Blue Potion
	ItemEffect[506] = { effectId: 209 }; //Green Potion
	ItemEffect[507] = { effectId: 204 }; //Red Herb
	ItemEffect[508] = { effectId: 206 }; //Yellow Herb
	ItemEffect[509] = { effectId: 207 }; //White Herb
	ItemEffect[510] = { effectId: 208 }; //Blue Herb
	ItemEffect[511] = { effectId: 209 }; //Green Herb
	ItemEffect[512] = { effectId: 204 }; //Apple
	ItemEffect[513] = { effectId: 204 }; //Banana
	ItemEffect[514] = { effectId: 208 }; //Grape
	ItemEffect[515] = { effectId: 204 }; //Carrot
	ItemEffect[516] = { effectId: 204 }; //Potato
	ItemEffect[517] = { effectId: 210 }; //Meat
	ItemEffect[518] = { effectId: 210 }; //Honey
	ItemEffect[519] = { effectId: 210 }; //Milk
	ItemEffect[520] = { effectId: 210 }; //Hinalle Leaflet
	ItemEffect[521] = { effectId: 210 }; //Aloe Leaflet
	ItemEffect[522] = { effectId: 210 }; //Mastela Fruit
	ItemEffect[523] = { effectId: 210 }; //Holy Water
	ItemEffect[525] = { effectId: 210 }; //Panacea
	ItemEffect[526] = { effectId: 210 }; //Royal Jelly
	ItemEffect[528] = { effectId: 210 }; //Monster's Feed
	ItemEffect[529] = { effectId: 210 }; //Candy
	ItemEffect[530] = { effectId: 210 }; //Candy Cane
	ItemEffect[531] = { effectId: 210 }; //Apple Juice
	ItemEffect[532] = { effectId: 210 }; //Banana Juice
	ItemEffect[533] = { effectId: 211 }; //Grape Juice
	ItemEffect[534] = { effectId: 210 }; //Carrot Juice
	ItemEffect[535] = { effectId: 210 }; //Pumpkin
	ItemEffect[536] = { effectId: 210 }; //Ice Cream
	ItemEffect[537] = { effectId: 210 }; //Pet Food
	ItemEffect[538] = { effectId: 210 }; //Well-baked Cookie
	ItemEffect[539] = { effectId: 210 }; //Piece of Cake
	ItemEffect[540] = { effectId: 210 }; //Falcon Food
	ItemEffect[541] = { effectId: 210 }; //PecoPeco Food
	ItemEffect[542] = { effectId: 210 }; //Festival Cookie
	ItemEffect[543] = { effectId: 210 }; //Festival Rainbow Cake
	ItemEffect[544] = { effectId: 210 }; //Raw Fish
	ItemEffect[545] = { effectId: 204 }; //Condensed Red Potion
	ItemEffect[546] = { effectId: 206 }; //Condensed Yellow Potion
	ItemEffect[547] = { effectId: 207 }; //Condensed White Potion
	ItemEffect[548] = { effectId: 210 }; //Cheese
	ItemEffect[549] = { effectId: 204 }; //Yam
	ItemEffect[550] = { effectId: 210 }; //Rice Cake
	ItemEffect[551] = { effectId: 210 }; //Sushi
	ItemEffect[552] = { effectId: 210 }; //Ketupat
	ItemEffect[553] = { effectId: 210 }; //Bao
	ItemEffect[554] = { effectId: 210 }; //Mochi
	ItemEffect[555] = { effectId: 210 }; //Traditional Rice Cake
	ItemEffect[556] = { effectId: 210 }; //Rice Cake Stick
	ItemEffect[557] = { effectId: 204 }; //Neatly Sliced Rice Cake
	ItemEffect[558] = { effectId: 363 }; //Chocolate
	ItemEffect[559] = { effectId: 363 }; //Hand-made Chocolate
	ItemEffect[560] = { effectId: 363 }; //Handmade White Chocolate
	ItemEffect[561] = { effectId: 363 }; //White Chocolate
	ItemEffect[562] = { effectId: 204 }; //Doublecrust Swiss Fondue
	ItemEffect[563] = { effectId: 204 }; //Doublecrust Swiss Fondue
	ItemEffect[564] = { effectId: 204 }; //Rice Ball
	ItemEffect[565] = { effectId: 204 }; //Vita500
	ItemEffect[566] = { effectId: 204 }; //Tom Yum Goong
	ItemEffect[567] = { effectId: 204 }; //Shrimp
	ItemEffect[568] = { effectId: 204 }; //Lemon
	ItemEffect[569] = { effectId: 204 }; //Novice Potion
	ItemEffect[570] = { effectId: 204 }; //Lucky Candy
	ItemEffect[571] = { effectId: 204 }; //Lucky Candy Cane
	ItemEffect[572] = { effectId: 204 }; //Lucky Cookie
	ItemEffect[573] = { effectId: 363 }; //Chocolate Drink
	ItemEffect[574] = { effectId: 204 }; //Egg
	ItemEffect[575] = { effectId: 204 }; //2nd Anniversary Cake
	ItemEffect[576] = { effectId: 204 }; //Prickly Fruit
	ItemEffect[577] = { effectId: 204 }; //Bag of Grain
	ItemEffect[578] = { effectId: 204 }; //Strawberry
	ItemEffect[579] = { effectId: 204 }; //Fresh Fish
	ItemEffect[580] = { effectId: 204 }; //Bread
	ItemEffect[581] = { effectId: 204 }; //Edible Mushroom
	ItemEffect[582] = { effectId: 205 }; //Orange
	ItemEffect[583] = { effectId: 204 }; //Ketupat Sayur
	ItemEffect[584] = { effectId: 204 }; //Fish Cake Soup
	ItemEffect[585] = { effectId: 204 }; //Brusti
	ItemEffect[586] = { effectId: 204 }; //Mother's Cake
	ItemEffect[587] = { effectId: 204 }; //Red Prickly Fruit
	ItemEffect[588] = { effectId: 204 }; //Spaghetti
	ItemEffect[589] = { effectId: 204 }; //Pizza
	ItemEffect[590] = { effectId: 204 }; //Pretzel
	ItemEffect[591] = { effectId: 204 }; //Caviar Pancake
	ItemEffect[592] = { effectId: 204 }; //Jam Pancake
	ItemEffect[593] = { effectId: 204 }; //Honey Pancake
	ItemEffect[594] = { effectId: 204 }; //Sour-Cream Pancake
	ItemEffect[595] = { effectId: 204 }; //Mushroom Pancake
	ItemEffect[596] = { effectId: 204 }; //Cute Strawberry-Choco
	ItemEffect[597] = { effectId: 204 }; //Lovely Choco-Tart
	ItemEffect[598] = { effectId: 204 }; //Light Red Potion
	ItemEffect[599] = { effectId: 205 }; //Light Orange Potion
	ItemEffect[607] = { effectId: 204 }; //Yggdrasil Berry
	ItemEffect[608] = { effectId: 204 }; //Yggdrasil Seed
	ItemEffect[663] = { effectId: 204 }; //Korean Rice Cake
	ItemEffect[669] = { effectId: 204 }; //Tempting Rice-Cake Soup
	ItemEffect[680] = { effectId: 204 }; //Magic Carnation
	ItemEffect[685] = { effectId: 204 }; //Ramadan
	ItemEffect[11500] = { effectId: 206 }; //Light Yellow Potion
	ItemEffect[11501] = { effectId: 207 }; //Light White Potion
	ItemEffect[11502] = { effectId: 208 }; //Light Blue Potion
	ItemEffect[11503] = { effectId: 207 }; //WoE White Potion
	ItemEffect[11504] = { effectId: 208 }; //WoE Blue Potion
	ItemEffect[11505] = { effectId: 204 }; //Iris
	ItemEffect[11506] = { effectId: 205 }; //Fanta Orange
	ItemEffect[11507] = { effectId: 204 }; //Fanta Grape
	ItemEffect[11508] = { effectId: 204 }; //Karada Meguricha
	ItemEffect[11509] = { effectId: 204 }; //Black Tea Kochakaden
	ItemEffect[11510] = { effectId: 204 }; //Coca Cola Zero
	ItemEffect[11511] = { effectId: 204 }; //Diet Coca Cola
	ItemEffect[11512] = { effectId: 204 }; //Coca Cola
	ItemEffect[11513] = { effectId: 204 }; //Protect Neck Candy
	ItemEffect[11514] = { effectId: 204 }; //Enriched Slim Pot
	ItemEffect[11515] = { effectId: 204 }; //Coconut
	ItemEffect[11516] = { effectId: 204 }; //Asai Fruit
	ItemEffect[11517] = { effectId: 204 }; //Puri Potion
	ItemEffect[11518] = { effectId: 208 }; //Blue Potion
	ItemEffect[11519] = { effectId: 204 }; //Beef Toast
	ItemEffect[11520] = { effectId: 204 }; //Mora Mandar
	ItemEffect[11521] = { effectId: 204 }; //Pingui Berry Juice
	ItemEffect[11522] = { effectId: 204 }; //Red Raffle Sap
	ItemEffect[11523] = { effectId: 206 }; //Yellow Raffle Sap
	ItemEffect[11524] = { effectId: 207 }; //White Raffle Sap
	ItemEffect[11525] = { effectId: 204 }; //Mora Hip Tea
	ItemEffect[11526] = { effectId: 204 }; //Rafflecino
	ItemEffect[11527] = { effectId: 204 }; //Baklava
	ItemEffect[11528] = { effectId: 204 }; //Kanafeh
	ItemEffect[11529] = { effectId: 204 }; //Maamoul
	ItemEffect[11530] = { effectId: 204 }; //Jujube
	ItemEffect[11531] = { effectId: 204 }; //Coffee
	ItemEffect[11532] = { effectId: 204 }; //Nasi Goreng
	ItemEffect[11533] = { effectId: 204 }; //Satay
	ItemEffect[11534] = { effectId: 204 }; //Coconut Juice
	ItemEffect[11535] = { effectId: 363 }; //Almond Chocolate
	ItemEffect[11536] = { effectId: 204 }; //Cat Biscuit
	ItemEffect[11537] = { effectId: 204 }; //Rice Weevil Bug
	ItemEffect[11538] = { effectId: 204 }; //Fresh Octopus Legs
	ItemEffect[11539] = { effectId: 204 }; //Athale Choco
	ItemEffect[11540] = { effectId: 204 }; //Shyai Choco
	ItemEffect[11541] = { effectId: 204 }; //Mid Choco
	ItemEffect[11542] = { effectId: 204 }; //Zonda Choco
	ItemEffect[11543] = { effectId: 204 }; //Goedo Choco
	ItemEffect[11544] = { effectId: 204 }; //Huike Choco
	ItemEffect[11545] = { effectId: 204 }; //Rune Choco
	ItemEffect[11546] = { effectId: 204 }; //Pope Choco
	ItemEffect[11547] = { effectId: 204 }; //Siege Purple Potion
	ItemEffect[11548] = { effectId: 207 }; //Siege White Potion
	ItemEffect[11549] = { effectId: 208 }; //Siege Blue Potion
	ItemEffect[11550] = { effectId: 204 }; //Pumpkin Cake
	ItemEffect[11551] = { effectId: 204 }; //Savory Herb Salad
	ItemEffect[11552] = { effectId: 204 }; //Apple Carrot Salad
	ItemEffect[11553] = { effectId: 204 }; //Casual Stew
	ItemEffect[11554] = { effectId: 204 }; //Golden Roasted Apple
	ItemEffect[11555] = { effectId: 204 }; //Red Potion RG
	ItemEffect[11557] = { effectId: 207 }; //TE White Potion
	ItemEffect[11558] = { effectId: 207 }; //TE White Slim Potion
	ItemEffect[11565] = { effectId: 207 }; //White Potion
	ItemEffect[11566] = { effectId: 206 }; //Yellow Potion
	ItemEffect[11567] = { effectId: 204 }; //Novice Potion
	ItemEffect[11568] = { effectId: 204 }; //Red Slim Potion
	ItemEffect[11569] = { effectId: 205 }; //Orange Potion
	ItemEffect[11570] = { effectId: 204 }; //Red Potion
	ItemEffect[11571] = { effectId: 209 }; //Green Potion
	ItemEffect[11572] = { effectId: 208 }; //Blue Potion
	ItemEffect[11573] = { effectId: 207 }; //White Slim Potion
	ItemEffect[11574] = { effectId: 206 }; //Yellow Slim Potion
	ItemEffect[11577] = { effectId: 204 }; //Rice Ball
	ItemEffect[11578] = { effectId: 204 }; //Candy Bar
	ItemEffect[11580] = { effectId: 204 }; //Candy
	ItemEffect[11581] = { effectId: 204 }; //Piece of Cake
	ItemEffect[11582] = { effectId: 204 }; //Well-baked Cookie
	ItemEffect[11583] = { effectId: 363 }; //Chocolate Drink
	ItemEffect[11584] = { effectId: 363 }; //White Chocolate
	ItemEffect[11585] = { effectId: 363 }; //Hand-made Chocolate
	ItemEffect[11586] = { effectId: 363 }; //Hand-made White Chocolate
	ItemEffect[11587] = { effectId: 363 }; //Chocolate
	ItemEffect[11588] = { effectId: 204 }; //Fresh Strawberries
	ItemEffect[11589] = { effectId: 204 }; //Cold Snow Cone
	ItemEffect[11590] = { effectId: 204 }; //Skewer No.5
	ItemEffect[11592] = { effectId: 204 }; //Trans Candy Red
	ItemEffect[11593] = { effectId: 208 }; //Trans Candy Blue
	ItemEffect[11594] = { effectId: 206 }; //Trans Candy Yellow
	ItemEffect[11595] = { effectId: 209 }; //Trans Candy Green
	ItemEffect[11596] = { effectId: 204 }; //Blood In Skull
	ItemEffect[11597] = { effectId: 204 }; //Iron Worm
	ItemEffect[11598] = { effectId: 204 }; //Bitter Cacao Bean
	ItemEffect[11599] = { effectId: 204 }; //Superstar Potion
	ItemEffect[11600] = { effectId: 204 }; //Shining Holy Water
	ItemEffect[11602] = { effectId: 204 }; //Catnip Fruit
	ItemEffect[11605] = { effectId: 204 }; //Cookie Bat
	ItemEffect[11701] = { effectId: 204 }; //Girl's Bouquet
	ItemEffect[11702] = { effectId: 204 }; //Moon Cookie
	ItemEffect[11703] = { effectId: 204 }; //Mystery Blood
	ItemEffect[11704] = { effectId: 204 }; //Ketupat
	ItemEffect[11705] = { effectId: 204 }; //Children's Potion
	ItemEffect[11706] = { effectId: 204 }; //Steak
	ItemEffect[11707] = { effectId: 204 }; //Roast Beef
	ItemEffect[11708] = { effectId: 204 }; //Fore Flank Sirloin
	ItemEffect[11709] = { effectId: 204 }; //Fanta Zero Lemon
	ItemEffect[11710] = { effectId: 204 }; //Sakura Mist
	ItemEffect[11711] = { effectId: 204 }; //Sakura Milk Tea
	ItemEffect[11712] = { effectId: 204 }; //Flower
	ItemEffect[11713] = { effectId: 204 }; //Julia's Candy
	ItemEffect[12021] = { effectId: 204 }; //Pork
	ItemEffect[12022] = { effectId: 204 }; //Galbi
	ItemEffect[12041] = { effectId: 593 }; //Fried Grasshopper Legs
	ItemEffect[12042] = { effectId: 593 }; //Seasoned Sticky Webfoot
	ItemEffect[12043] = { effectId: 593 }; //Bomber Steak
	ItemEffect[12044] = { effectId: 593 }; //Herb Marinade Beef
	ItemEffect[12045] = { effectId: 593 }; //Lutie Lady's Pancake
	ItemEffect[12046] = { effectId: 204 }; //Grape Juice Herbal Tea
	ItemEffect[12047] = { effectId: 204 }; //Autumn Red Tea
	ItemEffect[12048] = { effectId: 204 }; //Honey Herbal Tea
	ItemEffect[12049] = { effectId: 594 }; //Morroc Fruit Wine
	ItemEffect[12050] = { effectId: 594 }; //Mastela Fruit Wine
	ItemEffect[12051] = { effectId: 204 }; //Steamed Crab Nippers
	ItemEffect[12052] = { effectId: 204 }; //Assorted Seafood
	ItemEffect[12053] = { effectId: 204 }; //Clam Soup
	ItemEffect[12054] = { effectId: 595 }; //Seasoned Jellyfish
	ItemEffect[12055] = { effectId: 595 }; //Spicy Fried Bao
	ItemEffect[12056] = { effectId: 204 }; //Frog Egg Squid Ink Soup
	ItemEffect[12057] = { effectId: 204 }; //Smooth Noodle
	ItemEffect[12058] = { effectId: 204 }; //Tentacle Cheese Gratin
	ItemEffect[12059] = { effectId: 596 }; //Lutie Cold Noodle
	ItemEffect[12060] = { effectId: 596 }; //Steamed Bat Wing in Pumpkin
	ItemEffect[12061] = { effectId: 204 }; //Honey Grape Juice
	ItemEffect[12062] = { effectId: 363 }; //Chocolate Mousse Cake
	ItemEffect[12063] = { effectId: 204 }; //Fruit Mix
	ItemEffect[12064] = { effectId: 597 }; //Cream Sandwich
	ItemEffect[12065] = { effectId: 597 }; //Green Salad
	ItemEffect[12066] = { effectId: 204 }; //Fried Monkey Tails
	ItemEffect[12067] = { effectId: 204 }; //Mixed Juice
	ItemEffect[12068] = { effectId: 204 }; //Fried Sweet Potato
	ItemEffect[12069] = { effectId: 598 }; //Steamed Ancient Lips
	ItemEffect[12070] = { effectId: 598 }; //Fried Scorpion Tails
	ItemEffect[12071] = { effectId: 593 }; //Shiny Marinade Beef
	ItemEffect[12072] = { effectId: 593 }; //Whole Roast
	ItemEffect[12073] = { effectId: 593 }; //Bearfoot Special
	ItemEffect[12074] = { effectId: 593 }; //Tendon Satay
	ItemEffect[12075] = { effectId: 593 }; //Steamed Tongue
	ItemEffect[12076] = { effectId: 594 }; //Red Mushroom Wine
	ItemEffect[12077] = { effectId: 594 }; //Special Royal Jelly Herbal Tea
	ItemEffect[12078] = { effectId: 594 }; //Royal Family Tea
	ItemEffect[12079] = { effectId: 594 }; //Tristan XII
	ItemEffect[12080] = { effectId: 594 }; //Dragon Breath Cocktail
	ItemEffect[12081] = { effectId: 595 }; //Awfully Bitter Bracer
	ItemEffect[12082] = { effectId: 595 }; //Sumptuous Feast
	ItemEffect[12083] = { effectId: 595 }; //Giant Burito
	ItemEffect[12084] = { effectId: 595 }; //Ascending Dragon Soup
	ItemEffect[12085] = { effectId: 595 }; //Immortal Stew
	ItemEffect[12086] = { effectId: 596 }; //Chile Shrimp Gratin
	ItemEffect[12087] = { effectId: 596 }; //Steamed Alligator with Vegetable
	ItemEffect[12088] = { effectId: 596 }; //Incredibly Spicy Curry
	ItemEffect[12089] = { effectId: 596 }; //Special Meat Stew
	ItemEffect[12090] = { effectId: 596 }; //Steamed Desert Scorpions
	ItemEffect[12091] = { effectId: 597 }; //Peach Cake
	ItemEffect[12092] = { effectId: 597 }; //Soul Haunted Bread
	ItemEffect[12093] = { effectId: 597 }; //Special Toast
	ItemEffect[12094] = { effectId: 597 }; //Heavenly Fruit Juice
	ItemEffect[12095] = { effectId: 597 }; //Hwergelmir's Tonic
	ItemEffect[12096] = { effectId: 598 }; //Lucky Soup
	ItemEffect[12097] = { effectId: 598 }; //Assorted Shish Kebob
	ItemEffect[12098] = { effectId: 598 }; //Strawberry Flavored Rice Ball
	ItemEffect[12099] = { effectId: 598 }; //Blood Flavored Soda
	ItemEffect[12100] = { effectId: 598 }; //Cooked Nine Tail's Tails
	ItemEffect[12101] = { effectId: 204 }; //Citron
	ItemEffect[12102] = { effectId: 204 }; //Grilled Skewer
	ItemEffect[12131] = { effectId: 204 }; //Lucky Potion
	ItemEffect[12133] = { effectId: 204 }; //McDonald's Ice Cone
	ItemEffect[12188] = { effectId: 204 }; //Grace Moon Cake
	ItemEffect[12192] = { effectId: 204 }; //Pumpkin Pie
	ItemEffect[12195] = { effectId: 204 }; //Plain Rice Cake
	ItemEffect[12196] = { effectId: 204 }; //Hearty Rice Cake
	ItemEffect[12197] = { effectId: 204 }; //Salty Rice Cake
	ItemEffect[12202] = { effectId: 204 }; //Steamed Tongue
	ItemEffect[12203] = { effectId: 204 }; //Steamed Scorpion
	ItemEffect[12204] = { effectId: 204 }; //Dragon Breath Cocktail
	ItemEffect[12205] = { effectId: 204 }; //Hwergelmir's Tonic
	ItemEffect[12206] = { effectId: 204 }; //Cooked Nine Tail's Tails
	ItemEffect[12207] = { effectId: 204 }; //Stew Of Immortality
	ItemEffect[12226] = { effectId: 204 }; //Examination 1
	ItemEffect[12227] = { effectId: 204 }; //Examination 2
	ItemEffect[12228] = { effectId: 204 }; //Examination 3
	ItemEffect[12229] = { effectId: 204 }; //Examination 4
	ItemEffect[12230] = { effectId: 204 }; //Examination 5
	ItemEffect[12231] = { effectId: 204 }; //Examination 6
	ItemEffect[12233] = { effectId: 204 }; //Kvass
	ItemEffect[12234] = { effectId: 204 }; //Fierce Cacao 99%
	ItemEffect[12245] = { effectId: 204 }; //Green Ale
	ItemEffect[12257] = { effectId: 204 }; //Cold Medicine
	ItemEffect[12271] = { effectId: 204 }; //Military Ration A
	ItemEffect[12274] = { effectId: 204 }; //Daehwandan
	ItemEffect[12275] = { effectId: 204 }; //Taecheongdan
	ItemEffect[12292] = { effectId: 204 }; //Unripe Yggdrasilberry
	ItemEffect[12293] = { effectId: 204 }; //Dried Yggdrasilberry
	ItemEffect[12322] = { effectId: 363 }; //Chocolate Pie
	ItemEffect[12331] = { effectId: 204 }; //Ginseng
	ItemEffect[12332] = { effectId: 204 }; //Fruit Juice
	ItemEffect[12335] = { effectId: 204 }; //Grilled Delicious Skewer
	ItemEffect[12336] = { effectId: 204 }; //Grilled Mushroom
	ItemEffect[12337] = { effectId: 204 }; //Grilled Sausages
	ItemEffect[12428] = { effectId: 207 }; //Concentrated White Potion Z
	ItemEffect[12436] = { effectId: 204 }; //Vitata 500
	ItemEffect[12601] = { effectId: 204 }; //Fresh Watermelon Juice
	ItemEffect[12624] = { effectId: 204 }; //Delicious Jelly
	ItemEffect[12704] = { effectId: 204 }; //Elixir of Life
	ItemEffect[12709] = { effectId: 204 }; //Guyak Candy
	ItemEffect[12711] = { effectId: 204 }; //Pretzel
	ItemEffect[12717] = { effectId: 204 }; //Paralyze
	ItemEffect[12718] = { effectId: 204 }; //Leech End
	ItemEffect[12719] = { effectId: 204 }; //Oblivion Curse
	ItemEffect[12720] = { effectId: 204 }; //Disheart
	ItemEffect[12721] = { effectId: 204 }; //Toxin
	ItemEffect[12722] = { effectId: 204 }; //Pyrexia
	ItemEffect[12723] = { effectId: 204 }; //Magic Mushroom
	ItemEffect[12724] = { effectId: 204 }; //Venom Bleed
	ItemEffect[12734] = { effectId: 204 }; //Luxurious Rune
	ItemEffect[12735] = { effectId: 204 }; //Ancient Rune
	ItemEffect[12736] = { effectId: 204 }; //Mystic Rune
	ItemEffect[12737] = { effectId: 204 }; //General Rune
	ItemEffect[12738] = { effectId: 204 }; //Rare Rune
	ItemEffect[14522] = { effectId: 204 }; //Big Bun
	ItemEffect[14523] = { effectId: 204 }; //Pill
	ItemEffect[14524] = { effectId: 204 }; //Superb Fish Slice
	ItemEffect[14551] = { effectId: 204 }; //Fried Grasshopper Legs
	ItemEffect[14552] = { effectId: 204 }; //Seasoned Sticky Webfoot
	ItemEffect[14553] = { effectId: 204 }; //Bomber Steak
	ItemEffect[14554] = { effectId: 594 }; //Grape Juice Herbal Tea
	ItemEffect[14555] = { effectId: 594 }; //Autumn Red Tea
	ItemEffect[14556] = { effectId: 594 }; //Honey Herbal Tea
	ItemEffect[14557] = { effectId: 595 }; //Steamed Crab Nippers
	ItemEffect[14558] = { effectId: 595 }; //Assorted Seafood
	ItemEffect[14559] = { effectId: 595 }; //Clam Soup
	ItemEffect[14560] = { effectId: 596 }; //Frog Egg Squid Ink Soup
	ItemEffect[14561] = { effectId: 596 }; //Smooth Noodle
	ItemEffect[14562] = { effectId: 596 }; //Tentacle Cheese Gratin
	ItemEffect[14563] = { effectId: 597 }; //Honey Grape Juice
	ItemEffect[14564] = { effectId: 597 }; //Chocolate Mousse Cake
	ItemEffect[14565] = { effectId: 597 }; //Fruit Mix
	ItemEffect[14566] = { effectId: 598 }; //Fried Monkey Tails
	ItemEffect[14567] = { effectId: 598 }; //Mixed Juice
	ItemEffect[14568] = { effectId: 598 }; //Fried Sweet Potato
	ItemEffect[14575] = { effectId: 204 }; //Lutie Lady's Pancake
	ItemEffect[14576] = { effectId: 204 }; //Mastela Fruit Wine
	ItemEffect[14577] = { effectId: 204 }; //Spicy Fried Bao
	ItemEffect[14578] = { effectId: 204 }; //Steamed Bat Wing in Pumpkin
	ItemEffect[14579] = { effectId: 204 }; //Green Salad
	ItemEffect[14580] = { effectId: 204 }; //Fried Scorpion Tails
	ItemEffect[14672] = { effectId: 204 }; //Steel Fighter Scroll (Lv20)
	ItemEffect[14673] = { effectId: 204 }; //Steel Fighter Scroll (Lv25)
	ItemEffect[22555] = { effectId: 363 }; //Gourmet Chocolate
	ItemEffect[22556] = { effectId: 363 }; //Luxury Chocolate
	ItemEffect[22557] = { effectId: 363 }; //Masterpieces of Artisan Chocolate
	ItemEffect[22567] = { effectId: 204 }; //Expedition Award Box
	ItemEffect[22568] = { effectId: 204 }; //Nidhoggur Summon Scroll
	ItemEffect[22624] = { effectId: 204 }; //Riesen Bretzel
	ItemEffect[22657] = { effectId: 204 }; //Honey Songpyun
	ItemEffect[22659] = { effectId: 204 }; //Pig Steamed Ribs
	ItemEffect[22658] = { effectId: 204 }; //Cow Steamed Ribs
	ItemEffect[22686] = { effectId: 204 }; //Single Cookie
	ItemEffect[22770] = { effectId: 204 }; //Shark Skewer
	ItemEffect[22771] = { effectId: 204 }; //Bluefin Tuna Skewer
	ItemEffect[22772] = { effectId: 204 }; //Sea Bream Skewer
	ItemEffect[22773] = { effectId: 204 }; //Piranha Skewer
	ItemEffect[22774] = { effectId: 204 }; //Salmon Skewer
	ItemEffect[22775] = { effectId: 204 }; //Eels Skewer
	ItemEffect[22776] = { effectId: 204 }; //Carp Skewer
	ItemEffect[22985] = { effectId: 204 }; //Basil
	
	
	//Type2
	ItemEffect[645] = { effectId: 218 }; //Concentration Potion
	ItemEffect[656] = { effectId: 219 }; //Awakening Potion
	ItemEffect[657] = { effectId: 220 }; //Berserk Potion
	ItemEffect[12016] = { effectId: 519 }; //Speed Potion
	ItemEffect[12017] = { effectId: 210 }; //Slow Potion
	ItemEffect[12028] = { effectId: 576 }; //Box of Thunder
	ItemEffect[12030] = { effectId: 577 }; //Box of Resentment
	ItemEffect[12031] = { effectId: 579 }; //Box of Drowsiness
	ItemEffect[12033] = { effectId: 580 }; //Box of Sunlight
	ItemEffect[12118] = { effectId: 491 }; //Fireproof Potion
	ItemEffect[12119] = { effectId: 491 }; //Coldproof Potion
	ItemEffect[12120] = { effectId: 491 }; //Earthproof Potion
	ItemEffect[12121] = { effectId: 491 }; //Thunderproof Potion
	ItemEffect[12184] = { effectId: 210 }; //Mercenary Red Potion
	ItemEffect[12185] = { effectId: 210 }; //Mercenary Blue Potion
	ItemEffect[12241] = { effectId: 218 }; //Mercenary Concentration Potion
	ItemEffect[12242] = { effectId: 219 }; //Mercenary Awakening Potion
	ItemEffect[12243] = { effectId: 220 }; //Mercenary Berserk Potion
	ItemEffect[12298] = { effectId: 210 }; //SP Consumption Reduction Potion
	ItemEffect[12299] = { effectId: 491 }; //Mega Resist Potion
	ItemEffect[12404] = { effectId: 210 }; //Acti Potion
	ItemEffect[12422] = { effectId: 210 }; //HP Increase Potion (Small)
	ItemEffect[12423] = { effectId: 210 }; //HP Increase Potion (Medium)
	ItemEffect[12424] = { effectId: 210 }; //HP Increase Potion (Large)
	ItemEffect[12425] = { effectId: 210 }; //SP Increase Potion (Small)
	ItemEffect[12426] = { effectId: 210 }; //SP Increase Potion (Medium)
	ItemEffect[12427] = { effectId: 210 }; //SP Increase Potion (Large)
	ItemEffect[12459] = { effectId: 210 }; //F Med Life Potion
	ItemEffect[12460] = { effectId: 210 }; //F Small Life Potion
	ItemEffect[12461] = { effectId: 210 }; //F Regeneration Potion
	ItemEffect[12462] = { effectId: 210 }; //F B Mdef Potion
	ItemEffect[12463] = { effectId: 210 }; //F S Mdef Potion
	ItemEffect[12464] = { effectId: 210 }; //F B Def Potion
	ItemEffect[12465] = { effectId: 210 }; //F S Def Potion
	ItemEffect[12515] = { effectId: 210 }; //E Med Life Potion
	ItemEffect[12516] = { effectId: 210 }; //E Small Life Potion
	ItemEffect[12517] = { effectId: 210 }; //E Regeneration Potion
	ItemEffect[12518] = { effectId: 210 }; //E B Mdef Potion
	ItemEffect[12519] = { effectId: 210 }; //E S Mdef Potion
	ItemEffect[12520] = { effectId: 210 }; //E B Def Potion
	ItemEffect[12521] = { effectId: 210 }; //E S Def Potion
	ItemEffect[12529] = { effectId: 210 }; //White Slim Potion Box
	ItemEffect[12531] = { effectId: 210 }; //White Potion Box
	ItemEffect[12648] = { effectId: 210 }; //Comprehensive Set Of Potions
	ItemEffect[12676] = { effectId: 210 }; //Siege Violet Potion Box
	ItemEffect[12679] = { effectId: 210 }; //Siege White Potion Box
	ItemEffect[12680] = { effectId: 210 }; //Siege Blue Potion Box
	ItemEffect[12683] = { effectId: 210 }; //Siege Violet Potion Box (200)
	ItemEffect[12684] = { effectId: 210 }; //ASPD Potion
	ItemEffect[12774] = { effectId: 210 }; //Empty Potion Bottle
	ItemEffect[12831] = { effectId: 210 }; //Potion Box
	ItemEffect[14534] = { effectId: 210 }; //Small Life Potion
	ItemEffect[14535] = { effectId: 210 }; //Medium Life Potion
	ItemEffect[14537] = { effectId: 210 }; //Regeneration Potion
	ItemEffect[14541] = { effectId: 210 }; //Small Defense Potion
	ItemEffect[14542] = { effectId: 210 }; //Big Defense Potion
	ItemEffect[14543] = { effectId: 210 }; //Small Magic Defense Potion
	ItemEffect[14544] = { effectId: 210 }; //Big Magic Defense Potion
	ItemEffect[14600] = { effectId: 210 }; //Mental Potion
	ItemEffect[14614] = { effectId: 210 }; //Ex Def Potion
	ItemEffect[16254] = { effectId: 210 }; //Energizing Potion Box
	ItemEffect[16481] = { effectId: 210 }; //Small Life Potion Box (10)
	ItemEffect[17263] = { effectId: 218 }; //Infinite Concentration Potion 3rd Box
	ItemEffect[17264] = { effectId: 219 }; //Infinite Awakening Potion 3rd Box
	ItemEffect[17265] = { effectId: 220 }; //Infinite Berserk Potion 3rd Box
	ItemEffect[22542] = { effectId: 218 }; //Concentration Potion
	ItemEffect[22543] = { effectId: 220 }; //Berserk Potion
	ItemEffect[22544] = { effectId: 219 }; //Awakening Potion
	ItemEffect[22545] = { effectId: 519 }; //Speed Potion
	ItemEffect[22546] = { effectId: 210 }; //Slow Potion
	
	//Type2 Firecrackers
	ItemEffect[12018] = { effectId: 508 }; //Firecracker
	ItemEffect[12326] = { effectId: 709 }; //Large Firecracker
	ItemEffect[12788] = { effectId: 612 }; //No100 Firecracker
	ItemEffect[14546] = { effectId: 682 }; //I Love You Firecracker
	ItemEffect[14547] = { effectId: 683 }; //Whiteday Firecracker
	ItemEffect[14548] = { effectId: 684 }; //Valentine's Day Firecracker
	ItemEffect[14549] = { effectId: 685 }; //Birthday Firecracker
	ItemEffect[14550] = { effectId: 686 }; //Xmas Firecracker
	
	//Others
	ItemEffect[662] = { effectId: 507 }; //Authoritative Badge
	ItemEffect[12262] = { effectId: 507 }; //Authoritative Badge

    return ItemEffect;
});
