var cards = [
    {   
        id: 0,
        title:'The Fool',
        description:'Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.',
        image:'./cards/r1.jpg',

    },
    {
        id: 1,
        title: 'The Magician',
        description: 'This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.',
        image: '',

    },
    {
        id: 2,
        title: 'The High Priestess',
        description: ' She has been called occult Science on the threshold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God and man. She represents also the Second Marriage of the Prince who is no longer of this world; she is the spiritual Bride and Mother, the daughter of the stars and the Higher Garden of Eden.She is, in fine, the Queen of the borrowed light, but this is the light of all.She is the Moon nourished by the milk of the Supernal Mother. Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.',
        image: '',

    },
    {
        id: 3,
        title: 'The Empress',
        description: 'the card of the Empress signifies the door or gate by which an entrance is obtained into this life, as into the Garden of Venus; and then the way which leads out therefrom, into that which is beyond, is the secret known to the High Priestess: it is communicated by her to the elect.Most old attributions of this card are completely wrong on the symbolism--as, for example, its identification with the Word, Divine Nature, the Triad, and so forth. Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.',
        image: '',

    },
    {
        id: 4,
        title: 'The Emperor',
        description: 'It should be understood that this card and that of the Empress do not precisely represent the condition of married life, though this state is implied.On the surface, as I have indicated, they stand for mundane royalty, uplifted on the seats of the mighty; but above this there is the suggestion of another presence.They signify also--and the male figure especially--the higher kingship, occupying the intellectual throne.Hereof is the lordship of thought rather than of the animal world.Both personalities, after their own manner, are "full of strange experience," but  theirs is not consciously the wisdom which draws from a higher world. Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.',
        image: '',

    },
    {
        id: 5,
        title: 'The Hierophant',
        description: 'Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.',
        image: '',

    },
    {
        id: 6,
        title: 'The Lovers',
        description: 'Attraction, love, beauty, trials overcome.',
        image: '',

    },
    {
        id: 7,
        title: 'The Chariot',
        description: 'Succour, providence also war, triumph, presumption, vengeance, trouble',
        image: '',

    },
    {
        id: 8,
        title: 'Strength',
        description: 'Power, energy, action, courage, magnanimity; also complete success and honours.',
        image: '',

    },
    {
        id: 9,
        title: 'The Hermit',
        description: 'Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.',
        image: '',

    },
    {
        id: 10,
        title: 'Wheel of Fortune',
        description: 'Destiny, fortune, success, elevation, luck, felicity.',
        image: '',

    },
    {
        id: 11,
        title: 'Justice',
        description: 'Equity, rightness, probity, executive; triumph of the deserving side in law',
        image: '',

    },
    {
        id: 12,
        title: 'The Hanged Man',
        description: 'life in suspension, but life and not death.It is a card of profound significance, but all the significance is veiled. Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.',
        image: '',

    },
    {
        id: 13,
        title: 'Death',
        description: 'End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many contrarieties; for a maid, failure of marriage projects.',
        image: '',

    },
    {
        id: 14,
        title: 'Temperance',
        description: 'Economy, moderation, frugality, management, accommodation.',
        image: '',

    },
    {
        id: 15,
        title: 'The Devil',
        description: 'Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.',
        image: '',

    },
    {
        id: 16,
        title: 'The Tower',
        description: 'Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.',
        image: '',

    },
    {
        id: 17,
        title: 'The Star',
        description: 'Loss, theft, privation, abandonment; another reading says-hope and bright prospects',
        image: '',

    },
    {
        id: 18,
        title: 'The Moon',
        description: 'Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.',
        image: '',

    },
    {
        id: 19,
        title: 'The Sun',
        description: 'Material happiness, fortunate marriage, contentment.',
        image: '',

    },
    {
        id: 20,
        title: 'Judgement',
        description: 'Change of position, renewal, outcome. Another account specifies total loss though lawsuit',
        image: '',

    },
    {
        id: 21,
        title: 'The World',
        description: 'Assured success, recompense, voyage, route, emigration, flight, change of place. ',
        image: '',

    },
    {
        id: 22,
        title: 'Ace of Cups',
        description: ' House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof.',
        image: '',

    },
    {
        id: 23,
        title: '2 of Cups',
        description: 'Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and--as a suggestion apart from all offices of divination--that desire which is not in Nature, but by which Nature is sanctified.',
        image: '',

    },
    {
        id: 24,
        title: '3 of Cups',
        description: 'The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing',
        image: '',

    },
    {
        id: 25,
        title: '4 of Cups',
        description: 'Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein.This is also a card of blended pleasure.',
        image: '',

    },
    {
        id: 26,
        title: '5 of Cups',
        description: 'It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration.',
        image: '',

    },
    {
        id: 27,
        title: '6 of Cups',
        description: 'A card of the past and of memories, looking back, as--for example--on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished.Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct.',
        image: '',

    },
    {
        id: 28,
        title: '7 of Cups',
        description: 'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.',
        image: '',

    },
    {
        id: 29,
        title: '8 of Cups',
        description: ' The card speaks for itself on the surface, but other readings are entirely antithetical--giving joy, mildness, timidity, honour, modesty. In practice, it is usually found that the card shews the decline of a matter, or that a matter which has been thought to be important is really of slight consequence--either for good or evil.',
        image: '',

    }, {
        id: 30,
        title: '9 of Cups',
        description: 'Concord, contentment, physical bien - être; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made',
        image: '',

    },
    {
        id: 31,
        title: '10 of Cups',
        description: 'Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; if with several picture-cards, a person who is taking charge of the Querent\'s interests; also the town, village or country inhabited by the Querent.',
        image: '',

    },
    {
        id: 32,
        title: 'Page of Cups',
        description: 'Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, meditation; also these things directed to business.',
        image: '',

    },
    {
        id: 33,
        title: 'Knight of Cups',
        description: 'Arrival, approach--sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement.',
        image: '',

    },
    {
        id: 34,
        title: 'Queen of Cups',
        description: 'A good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother.',
        image: '',

    },
    {
        id: 35,
        title: 'King of Cups',
        description: 'Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence.',
        image: '',

    },
    {
        id: 36,
        title: 'Ace of Pentacles',
        description: ' Perfect contentment, felicity, ecstasy; also speedy intelligence; gold.',
        image: '',

    },
    {
        id: 37,
        title: '2 of Pentacles',
        description: ' On the one hand it is represented as a card of gaiety, recreation and its connexions, which is the subject of the design; but it is read also as news and messages in writing, as obstacles, agitation, trouble, embroilment.',
        image: '',

    },
    {
        id: 38,
        title: '3 of Pentacles',
        description: ' Métier, trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory.',
        image: '',

    },
    {
        id: 39,
        title: '4 of Pentacles',
        description: 'The surety of possessions, cleaving to that which one has, gift, legacy, inheritance.',
        image: '',

    },
    {
        id: 40,
        title: '5 of Pentacles',
        description: 'The card foretells material trouble above all, whether in the form illustrated--that is, destitution--or otherwise.For some cartomancists, it is a card of love and lovers - wife, husband, friend, mistress; also concordance, affinities.These alternatives cannot be harmonized.',
        image: '',

    },
    {
        id: 41,
        title: '6 of Pentacles',
        description: ' Presents, gifts, gratification another account says attention, vigilance now is the accepted time, present prosperity, etc.',
        image: '',

    },
    {
        id: 42,
        title: '7 of Pentacles',
        description: 'These are exceedingly contradictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrels--and another innocence, ingenuity, purgation.',
        image: '',

    },
    {
        id: 43,
        title: '8 of Pentacles',
        description: 'Work, employment, commission, craftsmanship, skill in craft and business, perhaps in the preparatory stage.',
        image: '',

    },
    {
        id: 44,
        title: '9 of Pentacles',
        description: 'Prudence, safety, success, accomplishment, certitude, discernment.',
        image: '',

    },
    {
        id: 45,
        title: '10 of Pentacles',
        description: 'A man and woman beneath an archway which gives entrance to a house and domain. They are accompanied by a child, who looks curiously at two dogs accosting an ancient personage seated in the foreground.The child\'s hand is on one of them. Divinatory Meanings: Gain, riches; family matters, archives, extraction, the abode of a family.',
        image: '',

    },
    {
        id: 46,
        title: 'Page of Pentacles',
        description: 'Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule management.',
        image: '',

    },
    {
        id: 47,
        title: 'Knight of Pentacles',
        description: 'Utility, serviceableness, interest, responsibility, rectitude-all on the normal and external plane.',
        image: '',

    },
    {
        id: 48,
        title: 'Queen of Pentacles',
        description: 'Opulence, generosity, magnificence, security, liberty.',
        image: '',

    },
    {
        id: 49,
        title: 'King of Pentacles',
        description: 'Valour, realizing intelligence, business and normal intellectual aptitude, sometimes mathematical gifts and attainments of this kind; success in these paths.',
        image: '',

    },
    {
        id: 50,
        title: 'Ace of Swords',
        description: ' Triumph, the excessive degree in everything, conquest, triumph of force. It is a card of great force, in love as well as in hatred.The crown may carry a much higher significance than comes usually within the sphere of fortune-telling.',
        image: '',

    },
    {
        id: 51,
        title: '2 of Swords',
        description: 'Conformity and the equipoise which it suggests, courage, friendship, concord in a state of arms; another reading gives tenderness, affection, intimacy.The suggestion of harmony and other favourable readings must be considered in a qualified manner, as Swords generally are not symbolical of beneficent forces in human affairs.',
        image: '',

    },
    {
        id: 52,
        title: '3 of Swords',
        description: ' Removal, absence, delay, division, rupture, dispersion, and all that the design signifies naturally, being too simple and obvious to call for specific enumeration.',
        image: '',

    },
    {
        id: 53,
        title: '4 of Swords',
        description: 'Vigilance, retreat, solitude, hermit\'s repose, exile, tomb and coffin.It is these last that have suggested the design.',
        image: '',

    },
    {
        id: 54,
        title: '5 of Swords',
        description: 'Degradation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these.',
        image: '',

    },
    {
        id: 55,
        title: '6 of Swords',
        description: 'Journey by water, route, way, envoy, commissionary, expedience.',
        image: '',

    },
    {
        id: 56,
        title: '7 of Swords',
        description: 'Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance.The design is uncertain in its import, because the significations are widely at variance with each other.',
        image: '',

    },
    {
        id: 57,
        title: '8 of Swords',
        description: 'Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calumny; also sickness.',
        image: '',

    },
    {
        id: 58,
        title: '9 of Swords',
        description: 'Death, failure, miscarriage, delay, deception, disappointment, despair.',
        image: '',

    },
    {
        id: 59,
        title: '10 of Swords',
        description: 'Whatsoever is intimated by the design; also pain, affliction, tears, sadness, desolation. It is not especially a card of violent death.',
        image: '',

    },
    {
        id: 60,
        title: 'Page of Swords',
        description: 'Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.',
        image: '',

    },
    {
        id: 61,
        title: 'Knight of Swords',
        description: 'Skill, bravery, capacity, defence, address, enmity, wrath, war, destruction, opposition, resistance, ruin.There is therefore a sense in which the card signifies death, but it carries this meaning only in its proximity to other cards of fatality.',
        image: '',

    },
    {
        id: 62,
        title: 'Queen of Swords',
        description: 'Widowhood, female sadness and embarrassment, absence,sterility, mourning, privation, separation.',
        image: '',

    },
    {
        id: 63,
        title: 'King of Swords',
        description: 'Whatsoever arises out of the idea of judgment and all its connexions-power, command, authority, militant intelligence, law, offices of the crown, and so forth.',
        image: '',

    },
    {
        id: 64,
        title: 'Ace of Wands',
        description: 'Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance.',
        image: '',

    },
    {
        id: 65,
        title: '2 of Wands',
        description: 'Between the alternative readings there is no marriage possible; on the one hand, riches, fortune, magnificence; on the other, physical suffering, disease, chagrin, sadness, mortification.The design gives one suggestion; here is a lord overlooking his dominion and alternately contemplating a globe; it looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world\'s wealth.',
        image: '',

    },
    {
        id: 66,
        title: '3 of Wands',
        description: 'Established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea.The card also signifies able co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you.',
        image: '',

    },
    {
        id: 67,
        title: '4 of Wands',
        description: 'They are for once almost on the surface--country life, haven of refuge, a species of domestic harvest - home, repose, concord, harmony, prosperity, peace, and the perfected work of these.',
        image: '',

    },
    {
        id: 68,
        title: '5 of Wands',
        description: 'Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life.Hence some attributions say that it is a card of gold, gain, opulence.',
        image: '',

    },
    {
        id: 69,
        title: '6 of Wands',
        description: ' The card has been so designed that it can cover several significations; on the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King\'s courier; it is expectation crowned with its own desire, the crown of hope, and so forth.',
        image: '',

    },
    {
        id: 70,
        title: '7 of Wands',
        description: 'It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position.On the intellectual plane, it signifies discussion, wordy strife; in business--negotiations, war of trade, barter, competition.It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him.',
        image: '',

    },
    {
        id: 71,
        title: '8 of Wands',
        description: ' Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love.',
        image: '',

    },
    {
        id: 72,
        title: '9 of Wands',
        description: 'The card signifies strength in opposition.If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist.With this main significance there are all its possible adjuncts--delay, suspension, adjournment.',
        image: '',

    },
    {
        id: 73,
        title: '10 of Wands',
        description: 'A card of many significances, and some of the readings cannot be harmonized. I set aside that which connects it with honour and good faith. The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false - seeming, disguise, perfidy.The place which the figure is approaching may suffer from therods that he carries.Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss.',
        image: '',

    },
    {
        id: 74,
        title: 'Page of Wands',
        description: ' Dark young man, faithful, a lover, an envoy, a postman.Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups.Has the chief qualities of his suit.He may signify family intelligence.',
        image: '',

    },
    {
        id: 75,
        title: 'Knight of Wands',
        description: ' Departure, absence, flight, emigration. A dark young man, friendly. Change of residence.',
        image: '',

    },
    {
        id: 76,
        title: 'Queen of Wands',
        description: 'A dark woman, countrywoman, friendly, chaste, loving, honourable. If the card beside her signifies a man, she is well disposed towards him; if a woman, she is interested in the Querent.Also, love of money, or a certain success in business.',
        image: '',

    },
    {
        id: 77,
        title: 'King of Wands',
        description: ' Dark man, friendly, countryman, generally married, honest and conscientious.The card always signifies honesty, and may mean news concerning an unexpected heritage to fall in before very long.',
        image: '',

    },
    {
        id: 78,
        title: '',
        description: 'lalalallalll alalalalaldj fdakjdkljdfkjdsfkld dskjadslkjf d dakl dk dfjlkd jfkd jf fss fdj dsks fdkd jkfld jad;lkjd a;ljdf lsa;ddad slkl dsjd',
        image: '',

    }

]

export default cards;