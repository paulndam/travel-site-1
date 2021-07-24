var fortunes = [

    'win the jackpot tomorrow',
    'pay off all debts',
    'have the best dinner ever',
    'a ps5 is coming your war'
]


exports.getFortune = function () {
    const index = Math.floor(Math.random() * fortunes.length)
    return fortunes[index]
}