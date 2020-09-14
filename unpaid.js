(function () {
    // DAILY: will decrement the opacity value daily


    // Change the `type`, `date` and `count` variable to match your preferences
    var date = '2020-09-14'; // the date to start
    var count = 30; // days or weeks after which the contents will disappears completely
    var type = 'DAILY'; // how often to decrease the opacity: 'DAILY' or 'WEEKLY'

    var now = new Date().getTime();
    var start = new Date(date).getTime();
    var day = 60 * 60 * 24 * 1000;
    var week = 60 * 60 * 24 * 7 * 1000;

    var elapsed = now - start; // time elapsed in milliseconds
    var denominator = (type === 'DAILY') ? day : week;
    var complete = Math.floor(elapsed / denominator) // number of complete days or weeks so far
    var value = (count - complete) / count;
    var opacity = (value > 1) ? '1' : (value < 0) ? '0' : parseFloat(value).toFixed(2);

    document.getElementsByTagName('body')[0].style.opacity = opacity;

})();