let c: HtmlCanvasElement = document.getElementById('game');
let ctx: CanvasRenderingConstext2D = c.getContext('2D')!;

ctx.font = "30px Arial";
ctx.fillText('O', 100, 50);
