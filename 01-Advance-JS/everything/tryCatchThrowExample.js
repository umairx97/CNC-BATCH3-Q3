// TRY  CATCH THROW

try {
    aler("hello")   // Spelling mistake in alert to generate error
}
catch (err) {
    console.log("There is some problem " + err)
}



try {
    throw "testing try..catch..throw"
}
catch (err) {
    console.log("There is some problem " + err)
}



