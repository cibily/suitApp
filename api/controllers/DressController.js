/**
 * DressController
 *
 * @description :: Server-side logic for managing Dresses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	today: function(req, res) {

    Dress.find().then(function(listOfDresses) {

      console.log("=======", listOfDresses.length, listOfDresses);

      res.view('dress/today', {
        numOfDresses: listOfDresses.length,
        listOfDresses: listOfDresses
      });

    });

  }
};

