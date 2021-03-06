const heroData = [
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d1/Tinker_icon.png',
    id: 34,
    name: 'Tinker',
    desc: 'Абсолютно нечестный герой в нынешнем патче. Что при себе имеет: \n - Слишком большой урон с двух кнопок; \n - Меньшую зависимость от таймингов (травела теперь не нужны); \n - Сломанную матрицу, являющуюся кошмаром во плоти (максимум резиста к станам и урону, возможность блинковаться из-под периодического урона); \n - Аганим с АоЕ. \n - Слишком сильный герой в патче. Винрейт 55%+ на всех рейтингах, это жесть. ',
    tier: 'SSS',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/09/Weaver_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214233',
    id: 63,
    name: 'Weaver',
    desc: 'Очень флексовый герой, играющий на любой позиции. Чтобы убить жуков, нужно 2439684396862 ударов, а урона даже на начальных стадиях полно. Я уж не говорю, что это пермабан на всех турнирах, даже виспа обогнал в этом плане.',
    tier: 'S',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/10/Outworld_Destroyer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220923',
    id: 76,
    name: 'Outworld Devourer',
    desc: 'Астрал+метеор. 0 iq gameplay. Лёгкий блинкаут после астрала и чистый урон, зависящий от маны - сейчас это слишком сильный герой. Да, есть возможность его закрывать различными БКБ, форсами и т.д., но метеор стоит копейки, и разогнаться герой может очень легко.',
    tier: 'S',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a1/Queen_of_Pain_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220334',
    id: 39,
    name: 'Queen of Pain',
    desc: 'Очень сильный мидер. Есть: \n - Много урона с прокаста; \n - Чистый урон с ульты; \n - Встроенная мобильность с блинка; \n - Cам блинк с шардом становится в пару раз сильнее. \n В общем, герой очень сильный, но до Тинкера не догягивает, хотя вполне неплохо стоит против него на линии и по игре.',
    tier: 'S',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/12/Marci_icon.png/revision/latest/scale-to-width-down/512?cb=20211029000514',
    id: 666,
    name: 'Marci',
    desc: 'Очевидно сломанная параша с высоким флексом (1-5 позиции). Есть баф, стан, мобильность + сильнейший ульт. Ждём нерфа.',
    tier: 'S',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/df/Spirit_Breaker_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212138',
    id: 71,
    name: 'Spirit Breaker',
    desc: 'Идеальный герой для игры на 3-5 поз. Скрипт игры: дал чардж -> наливаешь пивас -> ультуешь -> делаешь глоток. Бульдоз с огромным статусрезистом даёт дополнительную выживаемость, а ещё можно нулики купить поржать.',
    tier: 'S',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c3/Bane_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215925',
    id: 3,
    name: 'Bane',
    desc: 'Работяга-подпивас? Держи Бэйна. Нажал кнопку R - успеваешь полтораху опрокинуть за время действия ульты. Полезный.',
    tier: 'S',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/51/Sniper_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213053',
    id: 35,
    name: 'Sniper',
    desc: 'Пыщ пыщ пыщ с 4396853978379328 метров. Очень много урона, сломанный третий спелл, позволяющий убивать героев ВООБЩЕ без предметов. А представь, что с предметами будет...',
    tier: 'S',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/99/Void_Spirit_icon.png/revision/latest/scale-to-width-down/256?cb=20210413204208',
    id: 126,
    name: 'Void Spirit',
    desc: 'Крайне сильный герой, ещё Торонтыч на инте на нём OG резал. Куча урона и эскейпов, даже рутами тяжко его останавливать. Убивать можно, но сам по себе очень сильный герой, который залезает-таки в S-тир.',
    tier: 'S',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8d/Io_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210451',
    id: 91,
    name: 'Io',
    desc: 'Висп крайне силён в соревновательной доте, на хайммр тоже очень мощный герой, но в S-тир нельзя его запихнуть из-за лоуптс-пабликов, там висп, может, и силён, но зависимость от кора всё же есть. Играть виспом в качестве кора на лоуптс тоже никто не умеет, да и не так он силён, каким был раньше, в славные времена Ana из OG.',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Mars_icon.png/revision/latest/scale-to-width-down/256?cb=20190401094550',
    id: 129,
    name: 'Mars',
    desc: 'Сильный командный персонаж, имеющий при себе стан (а с шардом и двойной стан), аое-замедление с критом, выживаемость от Bulwark и КРАЙНЕ сильной в этом патче ультой, в которую можно засунуть макропиру, ульт бабки, блэкхол, даже небо, даже Ал...химика первый спелл. Всё, что угодно, отличный геймчендж-ульт.',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1e/Wraith_King_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211746',
    id: 42,
    name: 'Wraith King',
    desc: 'Герой, который живёт дважды. Если думаете, что это слабо - убейте его на 60 минуте. Хотя бы раз. От маны после 20 минуты перестаёт быть зависимым, пуш-потенциал и гарантированные криты - это сильно. На лейнинге всё ещё не особо силён, но перестал быть крипом. Высоко рейтится как на лоуптс, так и в продоте, закрывая героев, зависящих от одной кнопки (которые сейчас в мете)',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f7/Enigma_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220156',
    id: 33,
    name: 'Enigma',
    desc: 'Всегда был довольно сильным героем. Что имеем: \n - Хороший лейнинг (ест рендж крипа, меняя направление линии); \n - Лютейший ульт, который надо уметь давать; \n - Очень сильный ковёр. \n Вообще, нужно сказать, что Энигма очень сильным героем был всегда, но скиллозависимым и закрываемым как минимум Сайленсером. Однако же, его вполне можно спамить на 3 поз (только не фп)',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d6/Lycan_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212224',
    id: 77,
    name: 'Lycan',
    desc: 'Третья позиция в прямых руках жрёт сначала вражеских героев, а потом и вражеский трон. Плюс есть аганим, который просто неистово усиливает твоего кора. Много урона у Ликана, сильный герой, но в соло не вывозит, команда тоже темповать должна.',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/60/Naga_Siren_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213513',
    id: 89,
    name: 'Naga Siren',
    desc: 'Кор крайне сильный, но нишевый. Забанить лес - нага задушена. Сбить тайминги на пару минут - нага почти задушена. Плюс требует неплохого микроконтроля для реализации героя на 100%. Однако, в прямых руках это СЛИШКОМ страшный герой, в особенности при игре 4+1',
    tier: 'A',
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/80/Drow_Ranger_icon.png/revision/latest/scale-to-width-down/256?cb=20190325143546',
    id: 6,
    name: 'Drow Ranger',
    desc: 'Близкий к S-тиру герой. Очень много урона без шмоток, АоЕ-сайленс, мощные статы. Дровка пикается очень часто сейчас, и это не только из-за арканы, так шо пикайте имбу, пока не пофиксили.',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7b/Monkey_King_icon.png/revision/latest/scale-to-width-down/256?cb=20161222035035',
    id: 114,
    name: 'Monkey King',
    desc: 'Хороший флекс (1-2-4 поз), больно бьёт без предметов, с предметами тоже сильный. Имеет очень сложный в исполнении, но крайне сильный додж. Хороший персонаж, но требует очень наглого мышления и какого-никакого понимания игры',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1a/Elder_Titan_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210922',
    id: 103,
    name: 'Elder Titan',
    desc: 'Контра абсолютно любому керри-ловкачу (режет резисты в ноль), имеет абилки, полезные как в начале игры, так и в гиперлейте. Ростик999 на нём в помойку отправляет чемпионов инта, чем вы хуже?',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7a/Snapfire_icon.png/revision/latest/scale-to-width-down/256?cb=20191127043227',
    id: 128,
    name: 'Snapfire',
    desc: 'Бабушка хорошо смотрится на саппорт-позиции: урон с первого и урон+стан со второго скилла - это сильно. Ульт тоже хороший, с кучей урона по области. А вот ещё можно её и в кор-позицию брать: сначала максим 3 спелл, берём предметы на дамаг и на 20 лвле качаем талант на урон к 3 спеллу. В итоге это выглядит прям очень страшно.',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d5/Tidehunter_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211651',
    id: 29,
    name: 'Tidehunter',
    desc: 'Очень... живучий герой, крайне живучий, я бы сказал. Имеет зависимость от кнопки ульты, но физического урона вносит много. Держать тайда в контроле смысла нет, а под его ульт можно раздавать кучу других кнопок (например, катаклизм). Полезность 10 из 10',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8e/Phantom_Assassin_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214013',
    id: 44,
    name: 'Phantom Assassin',
    desc: 'Классический райтклик-керри, имеющий в лейте триллионы урона с критов, а ',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/35/Lina_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215059',
    id: 25,
    name: 'Lina',
    desc: 'Лина - это практический идеальный пример симбиоза райткликера и кастера. Сначала много урона с магии, потом ещё больше урона с руки. Такой огневой потенциал делает Лину очень тонким героем, но далеко не каждый успеет опустить её хп в ноль до отлёта в таверну.',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/13/Storm_Spirit_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214914',
    id: 17,
    name: 'Storm Spirit',
    desc: 'Крайне мобильный герой с очень большим количеством урона и контроля. Контрится сбитием таймингов, но рукастый шторм всё равно своё выфармит и доставит немало проблем.',
    tier: 'A',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a5/Earthshaker_icon.png/revision/latest/scale-to-width-down/256?cb=20160411205323',
    id: 7,
    name: 'Earthshaker',
    desc: 'Добротный герой на 4 позицию, имеющий просто кучу станов по области. Основная сила - эти самые станы и ульт, который уничтожает команду, стоящую впятером. Основная слабость - уже давно никто не стоит впятером.',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/97/Disruptor_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215651',
    id: 87,
    name: 'Disruptor',
    desc: 'Неплохой герой 5 позиции с полезными кнопками. Проблема в том, что все эти кнопки надо уметь нажимать: тандер страйком надо бить так, чтобы не дамажить лайновых крипов, с глимпсом надо знать тайминг возвращения, а третьим скиллом и ультом надо попадать. Ну и в кор-позицию его не одеть никак, в принципе.',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7b/Morphling_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212816',
    id: 10,
    name: 'Morphling',
    desc: 'Несправедливо поставленный сюда герой, можно сказать, НООООО: \n 1) В миде он перестал играться, слишком много нужно \n 2) Убить его стало всё же попроще. \n Несмотря на то, что для игры ему нужен один слот (Ethereal Blade), темп ему сбить довольно легко, да и убивать уже можно вполне успешно, благо, много чего уже хпреген режет.',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/00/Invoker_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220849',
    id: 74,
    name: 'Invoker',
    desc: 'Хороший, толковый герой, как на мид, так и на 4 позицию, но всё же требует достаточно хорошего понимания игры и личного скилла. Пикать можно.',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/91/Ember_Spirit_icon.png/revision/latest/scale-to-width-down/256?cb=20170417182614',
    id: 106,
    name: 'Ember Spirit',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cc/Medusa_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214604',
    id: 94,
    name: 'Medusa',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/ff/Spectre_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214336',
    id: 67,
    name: 'Spectre',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/40/Ursa_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213321',
    id: 70,
    name: 'Ursa',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/15/Night_Stalker_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212027',
    id: 49,
    name: 'Night Stalker',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cb/Clinkz_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214114',
    id: 56,
    name: 'Clinkz',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2f/Jakiro_icon.png/revision/latest/scale-to-width-down/256?cb=20170507134250',
    id: 64,
    name: 'Jakiro',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Ancient_Apparition_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220816',
    id: 68,
    name: 'Ancient Apparition',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/ed/Centaur_Warrunner_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210603',
    id: 96,
    name: 'Centaur Warrunner',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d6/Dawnbreaker_icon.png/revision/latest/scale-to-width-down/256?cb=20210410124439',
    id: 135,
    name: 'Dawnbreaker',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c0/Kunkka_icon.png/revision/latest/scale-to-width-down/256?cb=20160411205729',
    id: 23,
    name: 'Kunkka',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c0/Pudge_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211506',
    id: 14,
    name: 'Pudge',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/79/Sand_King_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211544',
    id: 16,
    name: 'Sand King',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7e/Slardar_icon.png/revision/latest/scale-to-width-down/256?cb=20161213040814',
    id: 28,
    name: 'Slardar',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8e/Anti-Mage_icon.png/revision/latest/scale-to-width-down/256?cb=20200916215957',
    id: 1,
    name: 'Antimage',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a6/Bounty_Hunter_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213244',
    id: 62,
    name: 'Bounty Hunter',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/12/Mirana_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212744',
    id: 9,
    name: 'Mirana',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4e/Pangolier_icon.png/revision/latest/scale-to-width-down/256?cb=20180831204401',
    id: 120,
    name: 'Pangolier',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/81/Phantom_Lancer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212849',
    id: 12,
    name: 'Phantom Lancer',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9c/Templar_Assassin_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213131',
    id: 46,
    name: 'Templar Assassin',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f0/Troll_Warlord_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213539',
    id: 95,
    name: 'Troll Warlord',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/25/Venomancer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213902',
    id: 40,
    name: 'Venomancer',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c5/Dark_Seer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220632',
    id: 55,
    name: 'Dark Seer',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d7/Grimstroke_icon.png/revision/latest/scale-to-width-down/256?cb=20180831203927',
    id: 121,
    name: 'Grimstroke',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b8/Lion_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220032',
    id: 26,
    name: 'Lion',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cd/Pugna_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220442',
    id: 45,
    name: 'Pugna',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/bf/Skywrath_Mage_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215753',
    id: 101,
    name: 'Skywrath Mage',
    desc: 'description template',
    tier: 'B',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9f/Silencer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215503',
    id: 75,
    name: 'Silencer',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/ba/Magnus_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212403',
    id: 97,
    name: 'Magnus',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/26/Leshrac_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220559',
    id: 52,
    name: 'Leshrac',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7d/Luna_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213209',
    id: 48,
    name: 'Luna',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a2/Legion_Commander_icon.png/revision/latest/scale-to-width-down/256?cb=20190401095109',
    id: 104,
    name: 'Legion Commander',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c4/Nature%27s_Prophet_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215241',
    id: 53,
    name: "Nature's Prophet",
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/52/Terrorblade_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214652',
    id: 109,
    name: 'Terrorblade',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d9/Beastmaster_icon.png/revision/latest/scale-to-width-down/256?cb=20160411205834',
    id: 38,
    name: 'Beastmaster',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/13/Puck_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214839',
    id: 13,
    name: 'Puck',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d3/Huskar_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210201',
    id: 59,
    name: 'Huskar',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3f/Zeus_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215025',
    id: 22,
    name: 'Zeus',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/36/Shadow_Fiend_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213752',
    id: 11,
    name: 'Shadow Fiend',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/18/Underlord_icon.png/revision/latest/scale-to-width-down/256?cb=20160828140759',
    id: 108,
    name: 'Underlord',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9a/Timbersaw_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210643',
    id: 98,
    name: 'Timbersaw',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/ce/Tusk_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210826',
    id: 100,
    name: 'Tusk',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/60/Windranger_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214951',
    id: 21,
    name: 'Windranger',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4a/Winter_Wyvern_icon.png/revision/latest/scale-to-width-down/256?cb=20160411221057',
    id: 112,
    name: 'Winter Wyvern',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e0/Ogre_Magi_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215538',
    id: 84,
    name: 'Ogre Magi',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d9/Beastmaster_icon.png/revision/latest/scale-to-width-down/256?cb=20160411205834',
    id: 78,
    name: 'Brewmaster',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/26/Abaddon_icon.png/revision/latest/scale-to-width-down/256?cb=20210125060638',
    id: 102,
    name: 'Abaddon',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Axe_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211422',
    id: 2,
    name: 'Axe',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4d/Bristleback_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210744',
    id: 99,
    name: 'Bristleback',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fe/Chaos_Knight_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212259',
    id: 81,
    name: 'Chaos Knight',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d8/Clockwerk_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210004',
    id: 51,
    name: 'Clockwerk',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/40/Doom_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212104',
    id: 69,
    name: 'Doom',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f0/Troll_Warlord_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213539',
    id: 149,
    name: 'Dragon Knight',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/be/Earth_Spirit_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211247',
    id: 107,
    name: 'Earth Spirit',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2b/Lifestealer_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211952',
    id: 54,
    name: 'Lifestealer',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e2/Omniknight_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210119',
    id: 57,
    name: 'Omniknight',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/14/Phoenix_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211344',
    id: 110,
    name: 'Phoenix',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/55/Tiny_icon.png/revision/latest/scale-to-width-down/256?cb=20160411205608',
    id: 19,
    name: 'Tiny',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/61/Undying_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212333',
    id: 85,
    name: 'Undying',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/56/Bloodseeker_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213712',
    id: 4,
    name: 'Bloodseeker',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/73/Faceless_Void_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213936',
    id: 41,
    name: 'Faceless Void',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4f/Gyrocopter_icon.png/revision/latest/scale-to-width-down/256?cb=20181101233643',
    id: 72,
    name: 'Gyrocopter',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c9/Hoodwink_icon.png/revision/latest/scale-to-width-down/256?cb=20201217205959',
    id: 123,
    name: 'Hoodwink',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/03/Juggernaut_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212710',
    id: 8,
    name: 'Juggernaut',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fa/Nyx_Assassin_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214454',
    id: 88,
    name: 'Nyx Assassin',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/66/Razor_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213830',
    id: 15,
    name: 'Razor',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7d/Riki_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212958',
    id: 32,
    name: 'Riki',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/aa/Slark_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214526',
    id: 93,
    name: 'Slark',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9c/Templar_Assassin_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213131',
    id: 20,
    name: 'Vengeful Spirit',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/20/Vengeful_Spirit_icon.png/revision/latest/scale-to-width-down/256?cb=20160411212927',
    id: 47,
    name: 'Viper',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f2/Batrider_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220708',
    id: 65,
    name: 'Batrider',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3c/Dark_Willow_icon.png/revision/latest/scale-to-width-down/256?cb=20180831204518',
    id: 119,
    name: 'Dark Willow',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d7/Death_Prophet_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220408',
    id: 43,
    name: 'Death Prophet',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/bb/Lich_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215954',
    id: 31,
    name: 'Lich',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/72/Oracle_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215824',
    id: 111,
    name: 'Oracle',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8a/Rubick_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215614',
    id: 86,
    name: 'Rubick',
    desc: 'description template',
    tier: 'C',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/61/Chen_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215432',
    id: 66,
    name: 'Chen',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5d/Lone_Druid_icon.png/revision/latest/scale-to-width-down/256?cb=20160411213427',
    id: 80,
    name: 'Lone Druid',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9e/Visage_icon.png/revision/latest/scale-to-width-down/256?cb=20160411221032',
    id: 92,
    name: 'Visage',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3f/Treant_Protector_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210417',
    id: 83,
    name: 'Treant Protector',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Arc_Warden_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214723',
    id: 113,
    name: 'Arc Warden',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/df/Broodmother_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214142',
    id: 61,
    name: 'Broodmother',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/27/Crystal_Maiden_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214805',
    id: 5,
    name: 'Crystal Maiden',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/41/Enchantress_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215320',
    id: 58,
    name: 'Enchantress',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e6/Dazzle_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220519',
    id: 50,
    name: 'Dazzle',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b9/Keeper_of_the_Light_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215721',
    id: 90,
    name: 'Keeper of the Light',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f3/Shadow_Demon_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220956',
    id: 79,
    name: 'Shadow Demon',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fa/Techies_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215855',
    id: 105,
    name: 'Techies',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/33/Witch_Doctor_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220105',
    id: 30,
    name: 'Witch Doctor',
    desc: 'description template',
    tier: 'D',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1b/Sven_icon.png/revision/latest/scale-to-width-down/256?cb=20160411205500',
    id: 18,
    name: 'Sven',
    desc: 'description template',
    tier: 'G',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/85/Meepo_icon.png/revision/latest/scale-to-width-down/256?cb=20160411214421',
    id: 82,
    name: 'Meepo',
    desc: 'description template',
    tier: 'G',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fe/Alchemist_icon.png/revision/latest/scale-to-width-down/256?cb=20160411210240',
    id: 73,
    name: 'Alchemist',
    desc: 'description template',
    tier: 'G',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3f/Warlock_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220306',
    id: 37,
    name: 'Warlock',
    desc: 'description template',
    tier: 'G',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/96/Shadow_Shaman_icon.png/revision/latest/scale-to-width-down/256?cb=20160411215130',
    id: 27,
    name: 'Shadow Shaman',
    desc: 'description template',
    tier: 'G',
    isFav: false
  },
  {
    img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f2/Primal_Beast_icon.png/revision/latest/scale-to-width-down/110?cb=20220223230622',
    id: 999,
    name: 'Primal Beast',
    desc: 'description template',
    tier: 'S',
    isFav: false
  },
]

export default heroData
