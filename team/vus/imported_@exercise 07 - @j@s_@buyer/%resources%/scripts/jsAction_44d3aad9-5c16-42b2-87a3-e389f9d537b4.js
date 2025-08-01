// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.
// Get variable value from VariableManager
var category = context.variableManager.getValue("Extracted_Category");
var product = context.variableManager.getValue("Extracted_productId");
var item = context.variableManager.getValue("Extracted_itemId");
if (item==null) { 
context.fail("Variable 'item' not found");
}
// Do some computation using the methods
// you defined in the JS Library
logger.debug("Picked a: "+category+" The product is: "+product+" The Item picked: "+item+" The LG used: "+context.currentLG.name);