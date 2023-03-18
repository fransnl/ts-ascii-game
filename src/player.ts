interface player {
    x:number,
    y:number,
    playerWorldPos:number[],
}
export const updatePos = (player:player, x:number, y:number) => {
    player.x = x;
    player.y = y;
}
export const updateWorldPos = (player:player, playerWorldPos:number[]) => {
    player.playerWorldPos = playerWorldPos;
}
export const player = (x:number, y:number, playerWorldPos:number[]) => {
    return {
        x: x,
        y: y,
        playerWorldPos: playerWorldPos,
    }
}
