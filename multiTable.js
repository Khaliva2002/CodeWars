function multiTable(number) {
    let tick = 1;
    let content = " "
    while (tick <= 10) {
        const line = () => tick + " * " + number + " = " + tick * number +"\n";
        content = content + line();
        tick++;
    }
    
  return content.trim();
}

console.log(multiTable(5))