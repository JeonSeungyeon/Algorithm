function solution(board, k) {
    var answer = 0;
    for(i = 0; i < board.length; i++) {
        for(j = 0; j < board[i].length; j++) {
            i + j <= k ? answer += board[i][j] : 0
        }
    }
    return answer;
}