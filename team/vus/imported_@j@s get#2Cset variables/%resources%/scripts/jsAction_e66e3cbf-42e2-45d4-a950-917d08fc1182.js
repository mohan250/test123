// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var RndInt = context.variableManager.getValue("RndInt");
if (RndInt==null) {
        context.fail("Variable 'RndInt' not found");
}
logger.info(" RndInt");




var RndStr = context.variableManager.getValue("RndStr");
if (RndStr==null) {
        context.fail("Variable 'RndStr' not found");
}
logger.info(" RndStr");


// Do some computation using the methods
// you defined in the JS Library
// var computedValue = myLibraryFunction(myVar);
// logger.debug("ComputedValue="+computedValue);
// 
// // Inject the computed value in a runtime variable
// // context.variableManager.setValue("computedVar",computedValue);
