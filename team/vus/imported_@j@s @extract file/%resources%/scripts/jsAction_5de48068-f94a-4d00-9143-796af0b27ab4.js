var file = new java.io.File("C:\\Users\\sidda\\OneDrive - TRICENTIS\\Desktop\\NL_demo\\test.txt");
var writer = new java.io.FileWriter(file);
writer.write("NL demo");
writer.close();

logger.debug("File extracted");