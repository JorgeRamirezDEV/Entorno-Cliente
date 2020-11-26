const selectButtons = document.querySelectorAll('[data-select]')
const finalColumn = document.querySelector('[data-final-column]')
const SELECTS = [
    {
        name: 'rock',
        emoji: '💎',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '🧻',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✂',
        beats: 'paper'
    }
]

selectButtons.forEach(selectButton => {
    selectButton.addEventListener('click', e => {
        const selectName =  selectButton.dataset.select
        const select = SELECTS.find(select => select.name === selectName)
        makeSelect(select)
    })
})

function makeSelect(select) {
    const cpuSelect = randomSelect()
    const youWin = isWinner(select, cpuSelect)
    const cpuWin = isWinner (cpuSelect, select)

    addSelectResult(cpuSelect, cpuWin)
    addSelectResult(select, youWin)

    
}

function addSelectResult(select, winner) {
    const div = document.createElement('div')
    div.innerText = select.emoji
    div.classList.add('score-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}


function isWinner(select, opponentSelect) {
    return select.beats === opponentSelect.name
}

function randomSelect() {
    const randomIndex = Math.floor(Math.random() * SELECTS.length)
    return SELECTS[randomIndex]
}