/**
 * DB/Effects/EffectConst.js
 *
 * Effect ID const
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 *
 */

define(function()
{
	"use strict";

	return {
	
		EF_NONE:							-1,
		EF_HIT1:							0,
		EF_HIT2:							1,
		EF_HIT3:							2,
		EF_HIT4:							3,
		EF_HIT5:							4,
		EF_HIT6:							5,
		EF_ENTRY:							6,
		EF_EXIT:							7,
		EF_WARP:							8,
		EF_ENHANCE:							9,
		EF_COIN:							10,
		EF_ENDURE:							11,
		EF_BEGINSPELL:						12,
		EF_GLASSWALL:						13,
		EF_HEALSP:							14,
		EF_SOULSTRIKE:						15,
		EF_BASH:							16,
		EF_MAGNUMBREAK:						17,
		EF_STEAL:							18,
		EF_HIDING:							19,
		EF_PATTACK:							20,
		EF_DETOXICATION:					21,
		EF_SIGHT:							22,
		EF_STONECURSE:						23,
		EF_FIREBALL:						24,
		EF_FIREWALL:						25,
		EF_ICEARROW:						26,
		EF_FROSTDIVER:						27,
		EF_FROSTDIVER2:						28,
		EF_LIGHTBOLT:						29,
		EF_THUNDERSTORM:					30,
		EF_FIREARROW:						31,
		EF_NAPALMBEAT:						32,
		EF_RUWACH:							33,
		EF_TELEPORTATION:					34,
		EF_READYPORTAL:						35,
		EF_PORTAL:							36,
		EF_INCAGILITY:						37,
		EF_DECAGILITY:						38,
		EF_AQUA:							39,
		EF_SIGNUM:							40,
		EF_ANGELUS:							41,
		EF_BLESSING:						42,
		EF_INCAGIDEX:						43,
		EF_SMOKE:							44,
		EF_FIREFLY:							45,
		EF_SANDWIND:						46,
		EF_TORCH:							47,
		EF_SPRAYPOND:						48,
		EF_FIREHIT:							49,
		EF_FIRESPLASHHIT:					50,
		EF_COLDHIT:							51,
		EF_WINDHIT:							52,
		EF_POISONHIT:						53,
		EF_BEGINSPELL2:						54,
		EF_BEGINSPELL3:						55,
		EF_BEGINSPELL4:						56,
		EF_BEGINSPELL5:						57,
		EF_BEGINSPELL6:						58,
		EF_BEGINSPELL7:						59,
		EF_LOCKON:							60,
		EF_WARPZONE:						61,
		EF_SIGHTRASHER:						62,
		EF_BARRIER:							63,
		EF_ARROWSHOT:						64,
		EF_INVENOM:							65,
		EF_CURE:							66,
		EF_PROVOKE:							67,
		EF_MVP:								68,
		EF_SKIDTRAP:						69,
		EF_BRANDISHSPEAR:					70,
		EF_CONE:							71,
		EF_SPHERE:							72,
		EF_BOWLINGBASH:						73,
		EF_ICEWALL:							74,
		EF_GLORIA:							75,
		EF_MAGNIFICAT:						76,
		EF_RESURRECTION:					77,
		EF_RECOVERY:						78,
		EF_EARTHSPIKE:						79,
		EF_SPEARBMR:						80,
		EF_PIERCE:							81,
		EF_TURNUNDEAD:						82,
		EF_SANCTUARY:						83,
		EF_IMPOSITIO:						84,
		EF_LEXAETERNA:						85,
		EF_ASPERSIO:						86,
		EF_LEXDIVINA:						87,
		EF_SUFFRAGIUM:						88,
		EF_STORMGUST:						89,
		EF_LORD:							90,
		EF_BENEDICTIO:						91,
		EF_METEORSTORM:						92,
		EF_YUFITEL:							93,
		EF_YUFITELHIT:						94,
		EF_QUAGMIRE:						95,
		EF_FIREPILLAR:						96,
		EF_FIREPILLARBOMB:					97,
		EF_HASTEUP:							98,
		EF_FLASHER:							99,
		EF_REMOVETRAP:						100,
		EF_REPAIRWEAPON:					101,
		EF_CRASHEARTH:						102,
		EF_PERFECTION:						103,
		EF_MAXPOWER:						104,
		EF_BLASTMINE:						105,
		EF_BLASTMINEBOMB:					106,
		EF_CLAYMORE:						107,
		EF_FREEZING:						108,
		EF_BUBBLE:							109,
		EF_GASPUSH:							110,
		EF_SPRINGTRAP:						111,
		EF_KYRIE:							112,
		EF_MAGNUS:							113,
		EF_BOTTOM:							114,
		EF_BLITZBEAT:						115,
		EF_WATERBALL:						116,
		EF_WATERBALL2:						117,
		EF_FIREIVY:							118,
		EF_DETECTING:						119,
		EF_CLOAKING:						120,
		EF_SONICBLOW:						121,
		EF_SONICBLOWHIT:					122,
		EF_GRIMTOOTH:						123,
		EF_VENOMDUST:						124,
		EF_ENCHANTPOISON:					125,
		EF_POISONREACT:						126,
		EF_POISONREACT2:					127,
		EF_OVERTHRUST:						128,
		EF_SPLASHER:						129,
		EF_TWOHANDQUICKEN:					130,
		EF_AUTOCOUNTER:						131,
		EF_GRIMTOOTHATK:					132,
		EF_FREEZE:							133,
		EF_FREEZED:							134,
		EF_ICECRASH:						135,
		EF_SLOWPOISON:						136,
		EF_BOTTOM2:							137,
		EF_FIREPILLARON:					138,
		EF_SANDMAN:							139,
		EF_REVIVE:							140,
		EF_PNEUMA:							141,
		EF_HEAVENSDRIVE:					142,
		EF_SONICBLOW2:						143,
		EF_BRANDISH2:						144,
		EF_SHOCKWAVE:						145,
		EF_SHOCKWAVEHIT:					146,
		EF_EARTHHIT:						147,
		EF_PIERCESELF:						148,
		EF_BOWLINGSELF:						149,
		EF_SPEARSTABSELF:					150,
		EF_SPEARBMRSELF:					151,
		EF_HOLYHIT:							152,
		EF_CONCENTRATION:					153,
		EF_REFINEOK:						154,
		EF_REFINEFAIL:						155,
		EF_JOBCHANGE:						156,
		EF_LVUP:							157,
		EF_JOBLVUP:							158,
		EF_TOPRANK:							159,
		EF_PARTY:							160,
		EF_RAIN:							161,
		EF_SNOW:							162,
		EF_SAKURA:							163,
		EF_STATUS_STATE:					164,
		EF_BANJJAKII:						165,
		EF_MAKEBLUR:						166,
		EF_TAMINGSUCCESS:					167,
		EF_TAMINGFAILED:					168,
		EF_ENERGYCOAT:						169,
		EF_CARTREVOLUTION:					170,
		EF_VENOMDUST2:						171,
		EF_CHANGEDARK:						172,
		EF_CHANGEFIRE:						173,
		EF_CHANGECOLD:						174,
		EF_CHANGEWIND:						175,
		EF_CHANGEFLAME:						176,
		EF_CHANGEEARTH:						177,
		EF_CHAINGEHOLY:						178,
		EF_CHANGEPOISON:					179,
		EF_HITDARK:							180,
		EF_MENTALBREAK:						181,
		EF_MAGICALATTHIT:					182,
		EF_SUI_EXPLOSION:					183,
		EF_DARKATTACK:						184,
		EF_SUICIDE:							185,
		EF_COMBOATTACK1:					186,
		EF_COMBOATTACK2:					187,
		EF_COMBOATTACK3:					188,
		EF_COMBOATTACK4:					189,
		EF_COMBOATTACK5:					190,
		EF_GUIDEDATTACK:					191,
		EF_POISONATTACK:					192,
		EF_SILENCEATTACK:					193,
		EF_STUNATTACK:						194,
		EF_PETRIFYATTACK:					195,
		EF_CURSEATTACK:						196,
		EF_SLEEPATTACK:						197,
		EF_TELEKHIT:						198,
		EF_PONG:							199,
		EF_LEVEL99:							200,
		EF_LEVEL99_2:						201,
		EF_LEVEL99_3:						202,
		EF_GUMGANG:							203,
		EF_POTION1:							204,
		EF_POTION2:							205,
		EF_POTION3:							206,
		EF_POTION4:							207,
		EF_POTION5:							208,
		EF_POTION6:							209,
		EF_POTION7:							210,
		EF_POTION8:							211,
		EF_DARKBREATH:						212,
		EF_DEFFENDER:						213,
		EF_KEEPING:							214,
		EF_SUMMONSLAVE:						215,
		EF_BLOODDRAIN:						216,
		EF_ENERGYDRAIN:						217,
		EF_POTION_CON:						218,
		EF_POTION_:							219,
		EF_POTION_BERSERK:					220,
		EF_POTIONPILLAR:					221,
		EF_DEFENDER:						222,
		EF_GANBANTEIN:						223,
		EF_WIND:							224,
		EF_VOLCANO:							225,
		EF_GRANDCROSS:						226,
		EF_INTIMIDATE:						227,
		EF_CHOOKGI:							228,
		EF_CLOUD:							229,
		EF_CLOUD2:							230,
		EF_MAPPILLAR:						231,
		EF_LINELINK:						232,
		EF_CLOUD3:							233,
		EF_SPELLBREAKER:					234,
		EF_DISPELL:							235,
		EF_DELUGE:							236,
		EF_VIOLENTGALE:						237,
		EF_LANDPROTECTOR:					238,
		EF_BOTTOM_VO:						239,
		EF_BOTTOM_DE:						240,
		EF_BOTTOM_VI:						241,
		EF_BOTTOM_LA:						242,
		EF_FASTMOVE:						243,
		EF_MAGICROD:						244,
		EF_HOLYCROSS:						245,
		EF_SHIELDCHARGE:					246,
		EF_MAPPILLAR2:						247,
		EF_PROVIDENCE:						248,
		EF_SHIELDBOOMERANG:					249,
		EF_SPEARQUICKEN:					250,
		EF_DEVOTION:						251,
		EF_REFLECTSHIELD:					252,
		EF_ABSORBSPIRITS:					253,
		EF_STEELBODY:						254,
		EF_FLAMELAUNCHER:					255,
		EF_FROSTWEAPON:						256,
		EF_LIGHTNINGLOADER:					257,
		EF_SEISMICWEAPON:					258,
		EF_MAPPILLAR3:						259,
		EF_MAPPILLAR4:						260,
		EF_GUMGANG2:						261,
		EF_TEIHIT1:							262,
		EF_GUMGANG3:						263,
		EF_TEIHIT2:							264,
		EF_TANJI:							265,
		EF_TEIHIT1X:						266,
		EF_CHIMTO:							267,
		EF_STEALCOIN:						268,
		EF_STRIPWEAPON:						269,
		EF_STRIPSHIELD:						270,
		EF_STRIPARMOR:						271,
		EF_STRIPHELM:						272,
		EF_CHAINCOMBO:						273,
		EF_RG_COIN:							274,
		EF_BACKSTAP:						275,
		EF_TEIHIT3:							276,
		EF_BOTTOM_DISSONANCE:				277,
		EF_BOTTOM_LULLABY:					278,
		EF_BOTTOM_RICHMANKIM:				279,
		EF_BOTTOM_ETERNALCHAOS:				280,
		EF_BOTTOM_DRUMBATTLEFIELD:			281,
		EF_BOTTOM_RINGNIBELUNGEN:			282,
		EF_BOTTOM_ROKISWEIL:				283,
		EF_BOTTOM_INTOABYSS:				284,
		EF_BOTTOM_SIEGFRIED:				285,
		EF_BOTTOM_WHISTLE:					286,
		EF_BOTTOM_ASSASSINCROSS:			287,
		EF_BOTTOM_POEMBRAGI:				288,
		EF_BOTTOM_APPLEIDUN:				289,
		EF_BOTTOM_UGLYDANCE:				290,
		EF_BOTTOM_HUMMING:					291,
		EF_BOTTOM_DONTFORGETME:				292,
		EF_BOTTOM_FORTUNEKISS:				293,
		EF_BOTTOM_SERVICEFORYOU:			294,
		EF_TALK_FROSTJOKE:					295,
		EF_TALK_SCREAM:						296,
		EF_POKJUK:							297,
		EF_THROWITEM:						298,
		EF_THROWITEM2:						299,
		EF_CHEMICALPROTECTION:				300,
		EF_POKJUK_SOUND:					301,
		EF_DEMONSTRATION:					302,
		EF_CHEMICAL2:						303,
		EF_TELEPORTATION2:					304,
		EF_PHARMACY_OK:						305,
		EF_PHARMACY_FAIL:					306,
		EF_FORESTLIGHT:						307,
		EF_THROWITEM3:						308,
		EF_FIRSTAID:						309,
		EF_SPRINKLESAND:					310,
		EF_LOUD:							311,
		EF_HEAL:							312,
		EF_HEAL2:							313,
		EF_EXIT2:							314,
		EF_GLASSWALL2:						315,
		EF_READYPORTAL2:					316,
		EF_PORTAL2:							317,
		EF_BOTTOM_MAG:						318,
		EF_BOTTOM_SANC:						319,
		EF_HEAL3:							320,
		EF_WARPZONE2:						321,
		EF_FORESTLIGHT2:					322,
		EF_FORESTLIGHT3:					323,
		EF_FORESTLIGHT4:					324,
		EF_HEAL4:							325,
		EF_FOOT:							326,
		EF_FOOT2:							327,
		EF_BEGINASURA:						328,
		EF_TRIPLEATTACK:					329,
		EF_HITLINE:							330,
		EF_HPTIME:							331,
		EF_SPTIME:							332,
		EF_MAPLE:							333,
		EF_BLIND:							334,
		EF_POISON:							335,
		EF_GUARD:							336,
		EF_JOBLVUP50:						337,
		EF_ANGEL2:							338,
		EF_MAGNUM2:							339,
		EF_CALLZONE:						340,
		EF_PORTAL3:							341,
		EF_COUPLECASTING:					342,
		EF_HEARTCASTING:					343,
		EF_ENTRY2:							344,
		EF_SAINTWING:						345,
		EF_SPHEREWIND:						346,
		EF_COLORPAPER:						347,
		EF_LIGHTSPHERE:						348,
		EF_WATERFALL:						349,
		EF_WATERFALL_90:					350,
		EF_WATERFALL_SMALL:					351,
		EF_WATERFALL_SMALL_90:				352,
		EF_WATERFALL_T2:					353,
		EF_WATERFALL_T2_90:					354,
		EF_WATERFALL_SMALL_T2:				355,
		EF_WATERFALL_SMALL_T2_90:			356,
		EF_MINI_TETRIS:						357,
		EF_GHOST:							358,
		EF_BAT:								359,
		EF_BAT2:							360,
		EF_SOULBREAKER:						361,
		EF_LEVEL99_4:						362,
		EF_VALLENTINE:						363,
		EF_VALLENTINE2:						364,
		EF_PRESSURE:						365,
		EF_BASH3D:							366,
		EF_AURABLADE:						367,
		EF_REDBODY:							368,
		EF_LKCONCENTRATION:					369,
		EF_BOTTOM_GOSPEL:					370,
		EF_ANGEL:							371,
		EF_DEVIL:							372,
		EF_DRAGONSMOKE:						373,
		EF_BOTTOM_BASILICA:					374,
		EF_ASSUMPTIO:						375,
		EF_HITLINE2:						376,
		EF_BASH3D2:							377,
		EF_ENERGYDRAIN2:					378,
		EF_TRANSBLUEBODY:					379,
		EF_MAGICCRASHER:					380,
		EF_LIGHTSPHERE2:					381,
		EF_LIGHTBLADE:						382,
		EF_ENERGYDRAIN3:					383,
		EF_LINELINK2:						384,
		EF_LINKLIGHT:						385,
		EF_TRUESIGHT:						386,
		EF_FALCONASSAULT:					387,
		EF_TRIPLEATTACK2:					388,
		EF_PORTAL4:							389,
		EF_MELTDOWN:						390,
		EF_CARTBOOST:						391,
		EF_REJECTSWORD:						392,
		EF_TRIPLEATTACK3:					393,
		EF_SPHEREWIND2:						394,
		EF_LINELINK3:						395,
		EF_PINKBODY:						396,
		EF_LEVEL99_5:						397,
		EF_LEVEL99_6:						398,
		EF_BASH3D3:							399,
		EF_BASH3D4:							400,
		EF_NAPALMVALCAN:					401,
		EF_PORTAL5:							402,
		EF_MAGICCRASHER2:					403,
		EF_BOTTOM_SPIDER:					404,
		EF_BOTTOM_FOGWALL:					405,
		EF_SOULBURN:						406,
		EF_SOULCHANGE:						407,
		EF_BABY:							408,
		EF_SOULBREAKER2:					409,
		EF_RAINBOW:							410,
		EF_PEONG:							411,
		EF_TANJI2:							412,
		EF_PRESSEDBODY:						413,
		EF_SPINEDBODY:						414,
		EF_KICKEDBODY:						415,
		EF_AIRTEXTURE:						416,
		EF_HITBODY:							417,
		EF_DOUBLEGUMGANG:					418,
		EF_REFLECTBODY:						419,
		EF_BABYBODY:						420,
		EF_BABYBODY2:						421,
		EF_GIANTBODY:						422,
		EF_GIANTBODY2:						423,
		EF_ASURABODY:						424,
		EF_4WAYBODY:						425,
		EF_QUAKEBODY:						426,
		EF_ASURABODY_MONSTER:				427,
		EF_HITLINE3:						428,
		EF_HITLINE4:						429,
		EF_HITLINE5:						430,
		EF_HITLINE6:						431,
		EF_ELECTRIC:						432,
		EF_ELECTRIC2:						433,
		EF_HITLINE7:						434,
		EF_STORMKICK:						435,
		EF_HALFSPHERE:						436,
		EF_ATTACKENERGY:					437,
		EF_ATTACKENERGY2:					438,
		EF_CHEMICAL3:						439,
		EF_ASSUMPTIO2:						440,
		EF_BLUECASTING:						441,
		EF_RUN:								442,
		EF_STOPRUN:							443,
		EF_STOPEFFECT:						444,
		EF_JUMPBODY:						445,
		EF_LANDBODY:						446,
		EF_FOOT3:							447,
		EF_FOOT4:							448,
		EF_TAE_READY:						449,
		EF_GRANDCROSS2:						450,
		EF_SOULSTRIKE2:						451,
		EF_YUFITEL2:						452,
		EF_NPC_STOP:						453,
		EF_DARKCASTING:						454,
		EF_GUMGANGNPC:						455,
		EF_AGIUP:							456,
		EF_JUMPKICK:						457,
		EF_QUAKEBODY2:						458,
		EF_STORMKICK1:						459,
		EF_STORMKICK2:						460,
		EF_STORMKICK3:						461,
		EF_STORMKICK4:						462,
		EF_STORMKICK5:						463,
		EF_STORMKICK6:						464,
		EF_STORMKICK7:						465,
		EF_SPINEDBODY2:						466,
		EF_BEGINASURA1:						467,
		EF_BEGINASURA2:						468,
		EF_BEGINASURA3:						469,
		EF_BEGINASURA4:						470,
		EF_BEGINASURA5:						471,
		EF_BEGINASURA6:						472,
		EF_BEGINASURA7:						473,
		EF_AURABLADE2:						474,
		EF_DEVIL1:							475,
		EF_DEVIL2:							476,
		EF_DEVIL3:							477,
		EF_DEVIL4:							478,
		EF_DEVIL5:							479,
		EF_DEVIL6:							480,
		EF_DEVIL7:							481,
		EF_DEVIL8:							482,
		EF_DEVIL9:							483,
		EF_DEVIL10:							484,
		EF_DOUBLEGUMGANG2:					485,
		EF_DOUBLEGUMGANG3:					486,
		EF_BLACKDEVIL:						487,
		EF_FLOWERCAST:						488,
		EF_FLOWERCAST2:						489,
		EF_FLOWERCAST3:						490,
		EF_MOCHI:							491,
		EF_LAMADAN:							492,
		EF_EDP:								493,
		EF_SHIELDBOOMERANG2:				494,
		EF_RG_COIN2:						495,
		EF_GUARD2:							496,
		EF_SLIM:							497,
		EF_SLIM2:							498,
		EF_SLIM3:							499,
		EF_CHEMICALBODY:					500,
		EF_CASTSPIN:						501,
		EF_PIERCEBODY:						502,
		EF_SOULLINK:						503,
		EF_CHOOKGI2:						504,
		EF_MEMORIZE:						505,
		EF_SOULLIGHT:						506,
		EF_MAPAE:							507,
		EF_ITEMPOKJUK:						508,
		EF_05VAL:							509,
		EF_BEGINASURA11:					510,
		EF_NIGHT:							511,
		EF_CHEMICAL2DASH:					512,
		EF_GROUNDSAMPLE:					513,
		EF_GI_EXPLOSION:					514,
		EF_CLOUD4:							515,
		EF_CLOUD5:							516,
		EF_BOTTOM_HERMODE:					517,
		EF_CARTTER:							518,
		EF_ITEMFAST:						519,
		EF_SHIELDBOOMERANG3:				520,
		EF_DOUBLECASTBODY:					521,
		EF_GRAVITATION:						522,
		EF_TAROTCARD1:						523,
		EF_TAROTCARD2:						524,
		EF_TAROTCARD3:						525,
		EF_TAROTCARD4:						526,
		EF_TAROTCARD5:						527,
		EF_TAROTCARD6:						528,
		EF_TAROTCARD7:						529,
		EF_TAROTCARD8:						530,
		EF_TAROTCARD9:						531,
		EF_TAROTCARD10:						532,
		EF_TAROTCARD11:						533,
		EF_TAROTCARD12:						534,
		EF_TAROTCARD13:						535,
		EF_TAROTCARD14:						536,
		EF_ACIDDEMON:						537,
		EF_GREENBODY:						538,
		EF_THROWITEM4:						539,
		EF_BABYBODY_BACK:					540,
		EF_THROWITEM5:						541,
		EF_BLUEBODY:						542,
		EF_HATED:							543,
		EF_REDLIGHTBODY:					544,
		EF_RO2YEAR:							545,
		EF_SMA_READY:						546,
		EF_STIN:							547,
		EF_RED_HIT:							548,
		EF_BLUE_HIT:						549,
		EF_QUAKEBODY3:						550,
		EF_SMA:								551,
		EF_SMA2:							552,
		EF_STIN2:							553,
		EF_HITTEXTURE:						554,
		EF_STIN3:							555,
		EF_SMA3:							556,
		EF_BLUEFALL:						557,
		EF_BLUEFALL_90:						558,
		EF_FASTBLUEFALL:					559,
		EF_FASTBLUEFALL_90:					560,
		EF_BIG_PORTAL:						561,
		EF_BIG_PORTAL2:						562,
		EF_SCREEN_QUAKE:					563,
		EF_HOMUNCASTING:					564,
		EF_HFLIMOON1:						565,
		EF_HFLIMOON2:						566,
		EF_HFLIMOON3:						567,
		EF_HO_UP:							568,
		EF_HAMIDEFENCE:						569,
		EF_HAMICASTLE:						570,
		EF_HAMIBLOOD:						571,
		EF_HATED2:							572,
		EF_TWILIGHT1:						573,
		EF_TWILIGHT2:						574,
		EF_TWILIGHT3:						575,
		EF_ITEM_THUNDER:					576,
		EF_ITEM_CLOUD:						577,
		EF_ITEM_CURSE:						578,
		EF_ITEM_ZZZ:						579,
		EF_ITEM_RAIN:						580,
		EF_ITEM_LIGHT:						581,
		EF_ANGEL3:							582,
		EF_M01:								583,
		EF_M02:								584,
		EF_M03:								585,
		EF_M04:								586,
		EF_M05:								587,
		EF_M06:								588,
		EF_M07:								589,
		EF_KAIZEL:							590,
		EF_KAAHI:							591,
		EF_CLOUD6:							592,
		EF_FOOD01:							593,
		EF_FOOD02:							594,
		EF_FOOD03:							595,
		EF_FOOD04:							596,
		EF_FOOD05:							597,
		EF_FOOD06:							598,
		EF_SHRINK:							599,
		EF_THROWITEM6:						600,
		EF_SIGHT2:							601,
		EF_QUAKEBODY4:						602,
		EF_FIREHIT2:						603,
		EF_NPC_STOP2:						604,
		EF_NPC_STOP2_DEL:					605,
		EF_FVOICE:							606,
		EF_WINK:							607,
		EF_COOKING_OK:						608,
		EF_COOKING_FAIL:					609,
		EF_TEMP_OK:							610,
		EF_TEMP_FAIL:						611,
		EF_HAPGYEOK:						612,
		EF_THROWITEM7:						613,
		EF_THROWITEM8:						614,
		EF_THROWITEM9:						615,
		EF_THROWITEM10:						616,
		EF_BUNSINJYUTSU:					617,
		EF_KOUENKA:							618,
		EF_HYOUSENSOU:						619,
		EF_BOTTOM_SUITON:					620,
		EF_STIN4:							621,
		EF_THUNDERSTORM2:					622,
		EF_CHEMICAL4:						623,
		EF_STIN5:							624,
		EF_MADNESS_BLUE:					625,
		EF_MADNESS_RED:						626,
		EF_RG_COIN3:						627,
		EF_BASH3D5:							628,
		EF_CHOOKGI3:						629,
		EF_KIRIKAGE:						630,
		EF_TATAMI:							631,
		EF_KASUMIKIRI:						632,
		EF_ISSEN:							633,
		EF_KAEN:							634,
		EF_BAKU:							635,
		EF_HYOUSYOURAKU:					636,
		EF_DESPERADO:						637,
		EF_LIGHTNING_S:						638,
		EF_BLIND_S:							639,
		EF_POISON_S:						640,
		EF_FREEZING_S:						641,
		EF_FLARE_S:							642,
		EF_RAPIDSHOWER:						643,
		EF_MAGICALBULLET:					644,
		EF_SPREADATTACK:					645,
		EF_TRACKCASTING:					646,
		EF_TRACKING:						647,
		EF_TRIPLEACTION:					648,
		EF_BULLSEYE:						649,
		EF_MAP_MAGICZONE:					650,
		EF_MAP_MAGICZONE2:					651,
		EF_DAMAGE1:							652,
		EF_DAMAGE1_2:						653,
		EF_DAMAGE1_3:						654,
		EF_UNDEADBODY:						655,
		EF_UNDEADBODY_DEL:					656,
		EF_GREEN_NUMBER:					657,
		EF_BLUE_NUMBER:						658,
		EF_RED_NUMBER:						659,
		EF_PURPLE_NUMBER:					660,
		EF_BLACK_NUMBER:					661,
		EF_WHITE_NUMBER:					662,
		EF_YELLOW_NUMBER:					663,
		EF_PINK_NUMBER:						664,
		EF_BUBBLE_DROP:						665,
		EF_NPC_EARTHQUAKE:					666,
		EF_DA_SPACE:						667,
		EF_DRAGONFEAR:						668,
		EF_BLEEDING:						669,
		EF_WIDECONFUSE:						670,
		EF_BOTTOM_RUNNER:					671,
		EF_BOTTOM_TRANSFER:					672,
		EF_CRYSTAL_BLUE:					673,
		EF_BOTTOM_EVILLAND:					674,
		EF_GUARD3:							675,
		EF_NPC_SLOWCAST:					676,
		EF_CRITICALWOUND:					677,
		EF_GREEN99_3:						678,
		EF_GREEN99_5:						679,
		EF_GREEN99_6:						680,
		EF_MAPSPHERE:						681,
		EF_POK_LOVE:						682,
		EF_POK_WHITE:						683,
		EF_POK_VALEN:						684,
		EF_POK_BIRTH:						685,
		EF_POK_CHRISTMAS:					686,
		EF_MAP_MAGICZONE3:					687,
		EF_MAP_MAGICZONE4:					688,
		EF_DUST:							689,
		EF_TORCH_RED:						690,
		EF_TORCH_GREEN:						691,
		EF_MAP_GHOST:						692,
		EF_GLOW1:							693,
		EF_GLOW2:							694,
		EF_GLOW4:							695,
		EF_TORCH_PURPLE:					696,
		EF_CLOUD7:							697,
		EF_CLOUD8:							698,
		EF_FLOWERLEAF:						699,
		EF_MAPSPHERE2:						700,
		EF_GLOW11:							701,
		EF_GLOW12:							702,
		EF_CIRCLELIGHT:						703,
		EF_ITEM315:							704,
		EF_ITEM316:							705,
		EF_ITEM317:							706,
		EF_ITEM318:							707,
		EF_STORM_MIN:						708,
		EF_POK_JAP:							709,
		EF_MAP_GREENLIGHT:					710,
		EF_MAP_MAGICWALL:					711,
		EF_MAP_GREENLIGHT2:					712,
		EF_YELLOWFLY1:						713,
		EF_YELLOWFLY2:						714,
		EF_BOTTOM_BLUE:						715,
		EF_BOTTOM_BLUE2:					716,
		EF_WEWISH:							717,
		EF_FIREPILLARON2:					718,
		EF_FORESTLIGHT5:					719,
		EF_SOULBREAKER3:					720,
		EF_ADO_STR:							721,
		EF_IGN_STR:							722,
		EF_CHIMTO2:							723,
		EF_WINDCUTTER:						724,
		EF_DETECT2:							725,
		EF_FROSTMYSTY:						726,
		EF_CRIMSON_STR:						727,
		EF_HELL_STR:						728,
		EF_SPR_MASH:						729,
		EF_SPR_SOULE:						730,
		EF_DHOWL_STR:						731,
		EF_EARTHWALL:						732,
		EF_SOULBREAKER4:					733,
		EF_CHAINL_STR:						734,
		EF_CHOOKGI_FIRE:					735,
		EF_CHOOKGI_WIND:					736,
		EF_CHOOKGI_WATER:					737,
		EF_CHOOKGI_GROUND:					738,
		EF_MAGENTA_TRAP:					739,
		EF_COBALT_TRAP:						740,
		EF_MAIZE_TRAP:						741,
		EF_VERDURE_TRAP:					742,
		EF_NORMAL_TRAP:						743,
		EF_CLOAKING2:						744,
		EF_AIMED_STR:						745,
		EF_ARROWSTORM_STR:					746,
		EF_LAULAMUS_STR:					747,
		EF_LAUAGNUS_STR:					748,
		EF_MILSHIELD_STR:					749,
		EF_CONCENTRATION2:					750,
		EF_FIREBALL2:						751,
		EF_BUNSINJYUTSU2:					752,
		EF_CLEARTIME:						753,
		EF_GLASSWALL3:						754,
		EF_ORATIO:							755,
		EF_POTION_BERSERK2:					756,
		EF_CIRCLEPOWER:						757,
		EF_ROLLING1:						758,
		EF_ROLLING2:						759,
		EF_ROLLING3:						760,
		EF_ROLLING4:						761,
		EF_ROLLING5:						762,
		EF_ROLLING6:						763,
		EF_ROLLING7:						764,
		EF_ROLLING8:						765,
		EF_ROLLING9:						766,
		EF_ROLLING10:						767,
		EF_PURPLEBODY:						768,
		EF_STIN6:							769,
		EF_RG_COIN4:						770,
		EF_POISONWAV:						771,
		EF_POISONSMOKE:						772,
		EF_GUMGANG4:						773,
		EF_SHIELDBOOMERANG4:				774,
		EF_CASTSPIN2:						775,
		EF_VULCANWAV:						776,
		EF_AGIUP2:							777,
		EF_DETECT3:							778,
		EF_AGIUP3:							779,
		EF_DETECT4:							780,
		EF_ELECTRIC3:						781,
		EF_GUARD4:							782,
		EF_BOTTOM_BARRIER:					783,
		EF_BOTTOM_STEALTH:					784,
		EF_REPAIRTIME:						785,
		EF_NC_ANAL:							786,
		EF_FIRETHROW:						787,
		EF_VENOMIMPRESS:					788,
		EF_FROSTMISTY:						789,
		EF_BURNING:							790,
		EF_COLDTHROW:						791,
		EF_MAKEHALLU:						792,
		EF_HALLUTIME:						793,
		EF_INFRAREDSCAN:					794,
		EF_CRASHAXE:						795,
		EF_GTHUNDER:						796,
		EF_STONERING:						797,
		EF_INTIMIDATE2:						798,
		EF_STASIS:							799,
		EF_REDLINE:							800,
		EF_FROSTDIVER3:						801,
		EF_BOTTOM_BASILICA2:				802,
		EF_RECOGNIZED:						803,
		EF_TETRA:							804,
		EF_TETRACASTING:					805,
		EF_FIREBALL3:						806,
		EF_INTIMIDATE3:						807,
		EF_RECOGNIZED2:						808,
		EF_CLOAKING3:						809,
		EF_INTIMIDATE4:						810,
		EF_STRETCH:							811,
		EF_BLACKBODY:						812,
		EF_ENERVATION:						813,
		EF_ENERVATION2:						814,
		EF_ENERVATION3:						815,
		EF_ENERVATION4:						816,
		EF_ENERVATION5:						817,
		EF_ENERVATION6:						818,
		EF_LINELINK4:						819,
		EF_RG_COIN5:						820,
		EF_WATERFALL_ANI:					821,
		EF_BOTTOM_MANHOLE:					822,
		EF_MANHOLE:							823,
		EF_MAKEFEINT:						824,
		EF_FORESTLIGHT6:					825,
		EF_DARKCASTING2:					826,
		EF_BOTTOM_ANI:						827,
		EF_BOTTOM_MAELSTROM:				828,
		EF_BOTTOM_BLOODYLUST:				829,
		EF_BEGINSPELL_N1:					830,
		EF_BEGINSPELL_N2:					831,
		EF_HEAL_N:							832,
		EF_CHOOKGI_N:						833,
		EF_JOBLVUP50_2:						834,
		EF_CHEMICAL2DASH2:					835,
		EF_CHEMICAL2DASH3:					836,
		EF_ROLLINGCAST:						837,
		EF_WATER_BELOW:						838,
		EF_WATER_FADE:						839,
		EF_BEGINSPELL_N3:					840,
		EF_BEGINSPELL_N4:					841,
		EF_BEGINSPELL_N5:					842,
		EF_BEGINSPELL_N6:					843,
		EF_BEGINSPELL_N7:					844,
		EF_BEGINSPELL_N8:					845,
		EF_WATER_SMOKE:						846,
		EF_DANCE1:							847,
		EF_DANCE2:							848,
		EF_LINKPARTICLE:					849,
		EF_SOULLIGHT2:						850,
		EF_SPR_PARTICLE:					851,
		EF_SPR_PARTICLE2:					852,
		EF_SPR_PLANT:						853,
		EF_CHEMICAL_V:						854,
		EF_SHOOTPARTICLE:					855,
		EF_BOT_REVERB:						856,
		EF_RAIN_PARTICLE:					857,
		EF_CHEMICAL_V2:						858,
		EF_SECRA:							859,
		EF_BOT_REVERB2:						860,
		EF_CIRCLEPOWER2:					861,
		EF_SECRA2:							862,
		EF_CHEMICAL_V3:						863,
		EF_ENERVATION7:						864,
		EF_CIRCLEPOWER3:					865,
		EF_SPR_PLANT2:						866,
		EF_CIRCLEPOWER4:					867,
		EF_SPR_PLANT3:						868,
		EF_RG_COIN6:						869,
		EF_SPR_PLANT4:						870,
		EF_CIRCLEPOWER5:					871,
		EF_SPR_PLANT5:						872,
		EF_CIRCLEPOWER6:					873,
		EF_SPR_PLANT6:						874,
		EF_CIRCLEPOWER7:					875,
		EF_SPR_PLANT7:						876,
		EF_CIRCLEPOWER8:					877,
		EF_SPR_PLANT8:						878,
		EF_HEARTASURA:						879,
		EF_BEGINSPELL_150:					880,
		EF_LEVEL99_150:						881,
		EF_PRIMECHARGE:						882,
		EF_GLASSWALL4:						883,
		EF_GRADIUS_LASER:					884,
		EF_BASH3D6:							885,
		EF_GUMGANG5:						886,
		EF_HITLINE8:						887,
		EF_ELECTRIC4:						888,
		EF_TEIHIT1T:						889,
		EF_SPINMOVE:						890,
		EF_FIREBALL4:						891,
		EF_TRIPLEATTACK4:					892,
		EF_CHEMICAL3S:						893,
		EF_GROUNDSHAKE:						894,
		EF_DQ9_CHARGE:						895,
		EF_DQ9_CHARGE2:						896,
		EF_DQ9_CHARGE3:						897,
		EF_DQ9_CHARGE4:						898,
		EF_BLUELINE:						899,
		EF_SELFSCROLL:						900,
		EF_SPR_LIGHTPRINT:					901,
		EF_PNG_TEST:						902,
		EF_BEGINSPELL_YB:					903,
		EF_CHEMICAL2DASH4:					904,
		EF_GROUNDSHAKE2:					905,
		EF_PRESSURE2:						906,
		EF_RG_COIN7:						907,
		EF_PRIMECHARGE2:					908,
		EF_PRIMECHARGE3:					909,
		EF_PRIMECHARGE4:					910,
		EF_GREENCASTING:					911,
		EF_WALLOFTHORN:						912,
		EF_FIREBALL5:						913,
		EF_THROWITEM11:						914,
		EF_SPR_PLANT9:						915,
		EF_DEMONICFIRE:						916,
		EF_DEMONICFIRE2:					917,
		EF_DEMONICFIRE3:					918,
		EF_HELLSPLANT:						919,
		EF_FIREWALL2:						920,
		EF_VACUUM:							921,
		EF_SPR_PLANT10:						922,
		EF_SPR_LIGHTPRINT2:					923,
		EF_POISONSMOKE2:					924,
		EF_MAKEHALLU2:						925,
		EF_SHOCKWAVE2:						926,
		EF_SPR_PLANT11:						927,
		EF_COLDTHROW2:						928,
		EF_DEMONICFIRE4:					929,
		EF_PRESSURE3:						930,
		EF_LINKPARTICLE2:					931,
		EF_SOULLIGHT3:						932,
		EF_CHAREFFECT:						933,
		EF_GUMGANG6:						934,
		EF_FIREBALL6:						935,
		EF_GUMGANG7:						936,
		EF_GUMGANG8:						937,
		EF_GUMGANG9:						938,
		EF_BOTTOM_DE2:						939,
		EF_COLDSTATUS:						940,
		EF_SPR_LIGHTPRINT3:					941,
		EF_WATERBALL3:						942,
		EF_HEAL_N2:							943,
		EF_RAIN_PARTICLE2:					944,
		EF_CLOUD9:							945,
		EF_YELLOWFLY3:						946,
		EF_EL_GUST:							947,
		EF_EL_BLAST:						948,
		EF_EL_AQUAPLAY:						949,
		EF_EL_UPHEAVAL:						950,
		EF_EL_WILD_STORM:					951,
		EF_EL_CHILLY_AIR:					952,
		EF_EL_CURSED_SOIL:					953,
		EF_EL_COOLER:						954,
		EF_EL_TROPIC:						955,
		EF_EL_PYROTECHNIC:					956,
		EF_EL_PETROLOGY:					957,
		EF_EL_HEATER:						958,
		EF_POISON_MIST:						959,
		EF_ERASER_CUTTER:					960,
		EF_SILENT_BREEZE:					961,
		EF_MAGMA_FLOW:						962,
		EF_GRAYBODY:						963,
		EF_LAVA_SLIDE:						964,
		EF_SONIC_CLAW:						965,
		EF_TINDER_BREAKER:					966,
		EF_MIDNIGHT_FRENZY:					967,
		EF_MACRO:							968,
		EF_CHEMICAL_ALLRANGE:				969,
		EF_TETRA_FIRE:						970,
		EF_TETRA_WATER:						971,
		EF_TETRA_WIND:						972,
		EF_TETRA_GROUND:					973,
		EF_EMITTER:							974,
		EF_VOLCANIC_ASH:					975,
		EF_LEVEL99_ORB1:					976,
		EF_LEVEL99_ORB2:					977,
		EF_LEVEL150:						978,
		EF_LEVEL150_SUB:					979,
		EF_THROWITEM4_1:					980,
		EF_THROW_HAPPOKUNAI:				981,
		EF_THROW_MULTIPLE_COIN:				982,
		EF_THROW_BAKURETSU:					983,
		EF_ROTATE_HUUMARANKA:				984,
		EF_ROTATE_BG:						985,
		EF_ROTATE_LINE_GRAY:				986,
		EF_2011RWC:							987,
		EF_2011RWC2:						988,
		EF_KAIHOU:							989,
		EF_GROUND_EXPLOSION:				990,
		EF_KG_KAGEHUMI:						991,
		EF_KO_ZENKAI_WATER:					992,
		EF_KO_ZENKAI_LAND:					993,
		EF_KO_ZENKAI_FIRE:					994,
		EF_KO_ZENKAI_WIND:					995,
		EF_KO_JYUMONJIKIRI:					996,
		EF_KO_SETSUDAN:						997,
		EF_RED_CROSS:						998,
		EF_KO_IZAYOI:						999,
		EF_ROTATE_LINE_BLUE:				1000,
		EF_KG_KYOMU:						1001,
		EF_KO_HUUMARANKA:					1002,
		EF_BLUELIGHTBODY:					1003,
		EF_KAGEMUSYA:						1004,
		EF_OB_GENSOU:						1005,
		EF_NO100_FIRECRACKER:				1006,
		EF_KO_MAKIBISHI:					1007,
		EF_KAIHOU1:							1008,
		EF_AKAITSUKI:						1009,
		EF_ZANGETSU:						1010,
		EF_GENSOU:							1011,
		EF_HAT_EFFECT:						1012,
		EF_CHERRYBLOSSOM:					1013,
		EF_EVENT_CLOUD:						1014,
		EF_RUN_MAKE_OK:						1015,
		EF_RUN_MAKE_FAILURE:				1016,
		EF_MIRESULT_MAKE_OK:				1017,
		EF_MIRESULT_MAKE_FAIL:				1018,
		EF_ALL_RAY_OF_PROTECTION:			1019,
		EF_VENOMFOG:						1020,
		EF_DUSTSTORM:						1021,
		EF_LEVEL160:						1022,
		EF_LEVEL160_SUB:					1023,
		EF_MAPCHAIN:						1024,
		EF_MAGIC_FLOOR:						1025,
		EF_ICEMINE:							1026,
		EF_FLAMECORSS:						1027,
		EF_ICEMINE_1:						1028,
		EF_DANCE_BLADE_ATK:					1029,
		EF_DARKPIERCING:					1030,
		EF_INVINCIBLEOFF2:					1031,
		EF_MAXPAIN:							1032,
		EF_DEATHSUMMON:						1033,
		EF_MOONSTAR:						1034,
		EF_STRANGELIGHTS:					1035,
		EF_SUPER_STAR:						1036,
		EF_YELLOBODY:						1037,
		EF_COLORPAPER2:						1038,
		EF_EVILS_PAW:						1039,
		EF_GC_DARKCROW:						1040,
		EF_RK_DRAGONBREATH_WATER:			1041,
		EF_ALL_FULL_THROTTLE:				1042,
		EF_SR_FLASHCOMBO:					1043,
		EF_RK_LUXANIMA:						1044,
		EF_CLOUD10:							1045,
		EF_SO_ELEMENTAL_SHIELD:				1046,
		EF_AB_OFFERTORIUM:					1047,
		EF_WL_TELEKINESIS_INTENSE:			1048,
		EF_GN_ILLUSIONDOPING:				1049,
		EF_NC_MAGMA_ERUPTION:				1050,
		EF_LG_KINGS_GRACE:					1051,
		EF_BLOODDRAIN2:						1052,
		EF_NPC_WIDEWEB:						1053,
		EF_NPC_BURNT:						1054,
		EF_NPC_CHILL:						1055,
		EF_RA_UNLIMIT:						1056,
		EF_AB_OFFERTORIUM_RING:				1057,
		EF_SC_ESCAPE:						1058,
		EF_WM_FRIGG_SONG:					1059,
		EF_FLICKER:							1060,
		EF_C_MAKER:							1061,
		EF_HAMMER_OF_GOD:					1062,
		EF_MASS_SPIRAL:						1063,
		EF_FIRE_RAIN:						1064,
		EF_WHITEBODY:						1065,
		EF_BANISHING_BUSTER:				1066,
		EF_SLUGSHOT:						1067,
		EF_D_TAIL:							1068,
		EF_BIND_TRAP1:						1069,
		EF_BIND_TRAP2:						1070,
		EF_BIND_TRAP3:						1071,
		EF_JUMPBODY1:						1072,
		EF_ANIMATED_EMITTER:				1073,
		EF_RL_EXPLOSION:					1074,
		EF_C_MAKER_1:						1075,
		EF_QD_SHOT:							1076,
		EF_P_ALTER:							1077,
		EF_S_STORM:							1078,
		EF_MUSIC_HAT:						1079,
		EF_CLOUD_KILL:						1080,
		EF_ESCAPE:							1081,
		EF_XENO_SLASHER:					1082,
		EF_FLOWERSMOKE:						1083,
		EF_FSTONE:							1084,
		EF_QSCARABA:						1085,
		EF_LJOSALFAR:						1086,
		EF_HAPPINESSSTAR:					1087,
		EF_POWER_OF_GAIA:					1088,
		EF_MAPLE_FALLS:						1089,
		EF_MARKING_USE_CHANGEMONSTER:		1090,
		EF_MAGICAL_FEATHER:					1091,
		EF_MERMAID_LONGING:					1092,
		EF_GIFT_OF_SNOW:					1093,
		EF_ACH_COMPLETE:					1094,
		EF_TIME_ACCESSORY:					1095,
		EF_SPRITEMABLE:						1096,
		EF_TUNAPARTY:						1097,
		EF_FRESHSHRIMP:						1098,
		EF_SU_GROOMING:						1123,
		EF_SU_CHATTERING:					1124,
		EF_FIREDANCE:						1133,
		EF_RICHS_COIN_A:					1134,
		EF_E_CHAIN:							1137,
		EF_HEAT_BARREL:						1138,
		EF_H_MINE:							1139,
		EF_FALLEN_ANGEL:					1140,
		EF_IMMUNE_PROPERTY:					1149,
		EF_MOVE_COORDINATE:					1150,
		EF_LIGHTSPHERE_SUN:					1197,
		EF_LIGHTSPHERE_MOON:				1198,
		EF_LIGHTSPHERE_STAR:				1199,
		EF_NOVAEXPLOSING:					1202,
		EF_STAR_EMPEROR:					1203,
		EF_SMA_BLACK:						1204,
		EF_ENERGYDRAIN_BLACK:				1208,
		EF_BLINK_BODY:						1209,
		EF_SOLARBURST:						1218,
		EF_SJ_DOCUMENT:						1219,
		EF_FALLING_STAR:					1220,
		EF_STORMKICK8:						1223,
		EF_NEWMOON_KICK:					1229,
		EF_FULLMOON_KICK:					1230,
		EF_BOOK_OF_DIMENSION:				1231,
		EF_CURSE_EXPLOSION:					1233,
		EF_SOUL_REAPER:						1234,
		EF_SOUL_EXPLOSION:					1242,
		
		// ALWAYS UPDATE TO LARGEST ID + 1
		EF_MAX:								1243,
		
	};
});
