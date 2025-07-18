var status = context.variableManager.getValue("ExtractedVariable_0");
if(status != 'PASSED' && status != 'FAILED'){
  context.fail("Invalid status: " + status);
} else {
    logger.info("Status: "+ status);
}