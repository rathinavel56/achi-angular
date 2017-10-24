(function() {
    'use strict';
    angular
        .module('app')
        .controller('AchiController', AchiController);

    AchiController.$inject = ['$scope'];

    function AchiController($scope) {
        var model = this,
			cir1 = $('#circle1'),
			cir2 = $('#circle2'),
			cir3 = $('#circle3'),
			cir4 = $('#circle4'),
			cir5 = $('#circle5'),
			cir6 = $('#circle6'),
			cir7 = $('#circle7'),
			cir8 = $('#circle8'),
			cir9 = $('#circle9'),
			playValid = false,
			win = false;
		 /**
         * @ngdoc method
         * @name init
         * @methodOf achi.controller:AchiController
         * @description
         * This method will initialze the click function.
         *
         **/
        model.init = function () {
			$('.achi').on('click', function() {
				var playValid = model.validatePlay(this);
				if (playValid) {
					$(this).removeClass('emptycircle')
							.addClass('played')
							.addClass('user');
					model.checkDrawMatch();
					model.checkAchiWin();
					model.computerplay();
				} else {
					swal("That circle has already been played. Please choose another circle");
				}
			});
        };
        model.init();
		$scope.resetBoard = function() {
			model.clearAchi();
		};
		model.validatePlay = function(circleplayed) {
			var playValid = false;
			if ($(circleplayed).hasClass('emptycircle')) {
				return playValid = true;
			} else {
				return playValid = false;
			}
		};
		model.checkDrawMatch = function() {
			if (!($('.achi').hasClass('emptycircle'))) {
				swal("Match Draw! Try playing again!");
				model.clearAchi();
			}
		};
		model.clearAchi = function() {
			$('.achi').removeClass('played')
					.removeClass('computer')
					.removeClass('user')
					.addClass('emptycircle');
		};
		model.winAchi = function(player) {
			var win = true;
			if (player == "user")
				swal("Congratulations, you beat the computer!");
			else
				swal("You lost the match!");
			model.clearAchi();
		};
		model.checkAchiWin = function() {
			var cir123_user = (cir1.hasClass('user') && cir2.hasClass('user') && cir3.hasClass('user')),
				cir123_computer = (cir1.hasClass('computer') && cir2.hasClass('computer') && cir3.hasClass('computer')),
				cir456_user = (cir4.hasClass('user') && cir5.hasClass('user') && cir6.hasClass('user')),
				cir456_computer = (cir4.hasClass('computer') && cir5.hasClass('computer') && cir6.hasClass('computer')),
				cir789_user = (cir7.hasClass('user') && cir8.hasClass('user') && cir9.hasClass('user')),
				cir789_computer = (cir7.hasClass('computer') && cir8.hasClass('computer') && cir9.hasClass('computer')),
				cir147_user = (cir1.hasClass('user') && cir4.hasClass('user') && cir7.hasClass('user')),
				cir147_computer = (cir1.hasClass('computer') && cir4.hasClass('computer') && cir7.hasClass('computer')),
				cir528_user = (cir5.hasClass('user') && cir2.hasClass('user') && cir8.hasClass('user')),
				cir528_computer = (cir5.hasClass('computer') && cir2.hasClass('computer') && cir8.hasClass('computer')),
				cir693_user = (cir6.hasClass('user') && cir9.hasClass('user') && cir3.hasClass('user')),
				cir693_computer = (cir6.hasClass('computer') && cir9.hasClass('computer') && cir3.hasClass('computer')),
				cir159_user = (cir1.hasClass('user') && cir5.hasClass('user') && cir9.hasClass('user')),
				cir159_computer = (cir1.hasClass('computer') && cir5.hasClass('computer') && cir9.hasClass('computer')),
				cir573_user = (cir5.hasClass('user') && cir7.hasClass('user') && cir3.hasClass('user')),
				cir573_computer = (cir5.hasClass('computer') && cir7.hasClass('computer') && cir3.hasClass('computer'));
			switch (true) {
				case (cir123_user || cir456_user || cir789_user || cir528_user || cir693_user || cir159_user || cir573_user):
					model.winAchi("user");
					break;
				case (cir123_computer || cir456_computer || cir789_computer || cir147_computer || cir528_computer || cir693_computer || cir573_computer):
					model.winAchi("computer");
					break;
			}
		};
		model.computerplay = function() {
			var win123_cir3 = (cir1.hasClass('user') && cir2.hasClass('user') || cir1.hasClass('computer') && cir2.hasClass('computer')) && !(cir3.hasClass('played')),
				win123_cir2 = (cir1.hasClass('user') && cir3.hasClass('user') || cir1.hasClass('computer') && cir3.hasClass('computer')) && !(cir2.hasClass('played')),
				win123_cir1 = (cir3.hasClass('user') && cir2.hasClass('user') || cir3.hasClass('computer') && cir2.hasClass('computer')) && !(cir1.hasClass('played')),
				win456_cir6 = (cir4.hasClass('user') && cir5.hasClass('user') || cir4.hasClass('computer') && cir5.hasClass('computer')) && !(cir6.hasClass('played')),
				win456_cir5 = (cir4.hasClass('user') && cir6.hasClass('user') || cir4.hasClass('computer') && cir6.hasClass('computer')) && !(cir5.hasClass('played')),
				win456_cir4 = (cir5.hasClass('user') && cir6.hasClass('user') || cir5.hasClass('computer') && cir6.hasClass('computer')) && !(cir4.hasClass('played')),
				win789_cir9 = (cir7.hasClass('user') && cir8.hasClass('user') || cir7.hasClass('computer') && cir8.hasClass('computer')) && !(cir9.hasClass('played')),
				win789_cir8 = (cir7.hasClass('user') && cir9.hasClass('user') || cir7.hasClass('computer') && cir9.hasClass('computer')) && !(cir8.hasClass('played')),
				win789_cir7 = (cir8.hasClass('user') && cir9.hasClass('user') || cir8.hasClass('computer') && cir9.hasClass('computer')) && !(cir7.hasClass('played')),
				win147_cir7 = (cir1.hasClass('user') && cir4.hasClass('user') || cir1.hasClass('computer') && cir4.hasClass('computer')) && !(cir7.hasClass('played')),
				win147_cir4 = (cir1.hasClass('user') && cir7.hasClass('user') || cir1.hasClass('computer') && cir7.hasClass('computer')) && !(cir4.hasClass('played')),
				win147_cir1 = (cir4.hasClass('user') && cir7.hasClass('user') || cir4.hasClass('computer') && cir7.hasClass('computer')) && !(cir1.hasClass('played')),
				win528_cir8 = (cir5.hasClass('user') && cir2.hasClass('user') || cir5.hasClass('computer') && cir2.hasClass('computer')) && !(cir8.hasClass('played')),
				win528_cir2 = (cir5.hasClass('user') && cir8.hasClass('user') || cir5.hasClass('computer') && cir8.hasClass('computer')) && !(cir2.hasClass('played')),
				win528_cir5 = (cir2.hasClass('user') && cir8.hasClass('user') || cir2.hasClass('computer') && cir8.hasClass('computer')) && !(cir5.hasClass('played')),
				win693_cir3 = (cir6.hasClass('user') && cir9.hasClass('user') || cir6.hasClass('computer') && cir9.hasClass('computer')) && !(cir3.hasClass('played')),
				win693_cir9 = (cir6.hasClass('user') && cir3.hasClass('user') || cir6.hasClass('computer') && cir3.hasClass('computer')) && !(cir9.hasClass('played')),
				win693_cir6 = (cir9.hasClass('user') && cir3.hasClass('user') || cir9.hasClass('computer') && cir3.hasClass('computer')) && !(cir6.hasClass('played')),
				win159_cir9 = (cir1.hasClass('user') && cir5.hasClass('user') || cir1.hasClass('computer') && cir5.hasClass('computer')) && !(cir9.hasClass('played')),
				win159_cir5 = (cir1.hasClass('user') && cir9.hasClass('user') || cir1.hasClass('computer') && cir9.hasClass('computer')) && !(cir5.hasClass('played')),
				win159_cir1 = (cir5.hasClass('user') && cir9.hasClass('user') || cir5.hasClass('computer') && cir9.hasClass('computer')) && !(cir1.hasClass('played')),
				win573_cir3 = (cir5.hasClass('user') && cir7.hasClass('user') || cir5.hasClass('computer') && cir7.hasClass('computer')) && !(cir3.hasClass('played')),
				win573_cir5 = (cir5.hasClass('user') && cir3.hasClass('user') || cir5.hasClass('computer') && cir3.hasClass('computer')) && !(cir5.hasClass('played')),
				win573_cir7 = (cir7.hasClass('user') && cir3.hasClass('user') || cir7.hasClass('computer') && cir3.hasClass('computer')) && !(cir7.hasClass('played'));


			switch (true) {
				case (win123_cir1 || win147_cir1 || win159_cir1):
					model.computerplaying(cir1);
					break;
				case (win123_cir2 || win528_cir2 || win528_cir2):
					model.computerplaying(cir2);
					break;
				case (win123_cir3 || win693_cir3 || win573_cir3):
					model.computerplaying(cir3);
					break;
				case (win456_cir4 || win147_cir4):
					model.computerplaying(cir4);
					break;
				case (win456_cir5 || win528_cir5 || win573_cir5):
					model.computerplaying(cir5);
					break;
				case (win456_cir6 || win693_cir6):
					model.computerplaying(cir6);
					break;
				case (win789_cir7 || win147_cir7 || win573_cir7):
					model.computerplaying(cir7);
					break;
				case (win789_cir8 || win528_cir8):
					model.computerplaying(cir8);
					break;
				case (win789_cir9 || win693_cir9 || win159_cir9):
					model.computerplaying(cir9);
					break;
				default:
					model.Orandomplay();
					break;
			}
			model.checkDrawMatch();
			model.checkAchiWin();
		};
		model.Orandomplay = function() {
			for (var i = 0; i < 10; i++) {
				var randomNumber = Math.floor((Math.random() * 9) + 1),
					randomcircle = $('#circle' + randomNumber),
					playValid = model.validatePlay(randomcircle);
				if (playValid) {
					randomcircle.removeClass('emptycircle')
								.addClass('played')
								.addClass('computer');
					break;
				}
			}
		};
		model.computerplaying = function(circle) {
			var playValid = model.validatePlay(circle);
			if (playValid)
				circle.removeClass('emptycircle')
						.addClass('played')
						.addClass('computer');
			else
				model.Orandomplay();
		};
    }
})();