function solution(keyinput, board) {
    let position = [0, 0]
    
    const xLimit = Math.floor(board[0] / 2)
    const yLimit = Math.floor(board[1] / 2)
    
    const moves = {
        "up" : [0, 1],
        "down" : [0, -1],
        "left" : [-1, 0],
        "right" : [1, 0]
    }

    for(let key of keyinput) {
        let move = moves[key]
        let newX = position[0] + move[0]
        let newY = position[1] + move[1]
        
        if(newX >= -xLimit && newX <= xLimit) {
            position[0] = newX
        }
        if(newY >= -yLimit && newY <= yLimit) {
            position[1] = newY
        }       
    }
    return position
}