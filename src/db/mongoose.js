const mongoose = require( "mongoose" );

mongoose.connect("mongodb+srv://sushmadeegoju:Sushm%4019981981@cluster0.crzrktv.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Add this option to use the new Server Discover and Monitoring engine
});