const numberOfCells = 76

function displayCells() {
    let cellsContainer = document.getElementById('cells-container')
    for (let cellCount = 1 ; cellCount<=numberOfCells ; cellCount++)
    {
        let cellNode = document.createElement('div')
        let cellText = document.createElement('span')
        cellNode.appendChild(cellText)
        cellText.innerText = cellCount
        cellNode.classList.add('cell')
        cellsContainer.appendChild(cellNode)
    }
}
displayCells();