import { createNoise2D } from "simplex-noise"

let grass = '#81a358';
let forest = '#476b3f';
let rock = '#909190';
let ocean = '#87b5ff';
let desert = '#fadfa5';

interface world{
    height: number,
    width: number,
    world: Array<Array<{e:number, m:number}>>,
}
export function initWorld(height:number, width: number): world{

    const noise2D = createNoise2D();

    const w = new Array(height);
    for(let i = 0; i < w.length; i++){
        w[i] = new Array(width);
    }

    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            let rx = i/width - 0.5;
            let ry = j/height - 0.5;
            let e = (noise2D(rx, ry)/2 + 0.5);
            let m = (noise2D(rx, ry)/2 + 0.5)
            w[i][j] = {e, m};
        }
    }

    return {
        height: height,
        width: width,
        world: w 
    }
}
export function renderWorld(ctx: any, worldObj: world, mainPlayer: any){
    loop:
    for(let i = 0; i < worldObj.height; i++){
        for(let j = 0; j < worldObj.width; j++){

            if(worldObj.world[i][j].e < 0.1)
                ctx.fillStyle = ocean; 
            if(worldObj.world[i][j].e > 0.1)
                ctx.fillStyle = forest; 
                if(worldObj.world[i][j].m > 0.3)
                    ctx.fillStyle = grass; 
            if(worldObj.world[i][j].e > 0.5)
                ctx.fillStyle = desert;
            if(worldObj.world[i][j].e > 0.7) 
                ctx.fillStyle = rock; 
            if(worldObj.world[i][j].e > 0.9) 
                ctx.fillStyle = '#ffffff'; 

            if(mainPlayer.playerWorldPos[0] == i && mainPlayer.playerWorldPos[1] == j)
                break loop;
        }
    }
    ctx.fillRect(0, 0, 800, 800);
    
}

export function renderMap(ctx: any, worldObj: world, mainPlayer: any){
    for(let i = 0; i < worldObj.height; i++){
        for(let j = 0; j < worldObj.width; j++){

            if(worldObj.world[i][j].e < 0.1)
                ctx.fillStyle = ocean; 
            if(worldObj.world[i][j].e > 0.1)
                ctx.fillStyle = forest; 
                if(worldObj.world[i][j].m > 0.3)
                    ctx.fillStyle = grass; 
            if(worldObj.world[i][j].e > 0.5)
                ctx.fillStyle = desert;
            if(worldObj.world[i][j].e > 0.7) 
                ctx.fillStyle = rock; 
            if(worldObj.world[i][j].e > 0.9) 
                ctx.fillStyle = '#ffffff'; 
            if(mainPlayer.playerWorldPos[0] == i && mainPlayer.playerWorldPos[1] == j){
                ctx.fillStyle = '#ff0022';
            }
            ctx.fillRect(i*4, j*4, 4, 4);
        }
    }
}
