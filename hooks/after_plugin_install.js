module.exports = function(context) {    
    console.log("\nINIT\n");
    var fs = context.requireCordovaModule("fs");
    var path = context.requireCordovaModule("path");

    const projectRoot = context.opts.projectRoot;
    console.log("projectRoot: "+projectRoot);

    const podsecFile = path.join(projectRoot,"platforms","ios","Podfile");
    console.log("Podfile: "+podsecFile);

    var contents = fs.readFileSync(podsecFile, 'utf8');
    console.log("FileContent: \n"+contents);

    var contentString = new String(contents);
    contentString = contentString.replace("3.2.1","3.2.1.OS");

    console.log("NewContent: \n"+contentString);

    fs.writeFileSync(podsecFile, contentString)
    console.log("\nEND\n");
}