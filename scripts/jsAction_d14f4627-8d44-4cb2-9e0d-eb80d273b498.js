// loop_counter 1 -> line 3
// loop_counter 2 -> line 4
// loop_counter 3 -> line 5
// ...
// line = loop_counter + 2

var loop_counter = context.variableManager.getValue("loop_counter");
var line = Number(loop_counter) + Number(2);
context.variableManager.setValue("line",line);