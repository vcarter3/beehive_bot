
const fs = require( 'fs' ),
      path = require( 'path' ),
      Twit = require( 'twit' ),
      config = require( path.join( __dirname, 'config.js' ) );

const T = new Twit(config);


// every 10 hrs
setInterval(tweetIt, 36000000);



function tweetIt() {
      T.post( 'statuses/update', { status: newhive()
    
      }, function( err, data, response ) {
            console.log( data )
      } );
}

function newhive() {

    const weather = ['. .','...','...','. .','☁️', '❄️','🌧️', '🌩️', '🌨️', '⛅', '☀️','⛈️'];
    const wax = ['🟨','🔶','🟧','🛑',' ⬡ ',' ⬡ ','🐝','🐝','🐝'];
    const bugs = ['へ','へ','へ','へ','へ','へ','へ','🐛','🐜','🦋','🌿','🌿','🌿','🌿','🌿','💐','🍀','🌻'];


    let bugShuffled = bugs.sort(() => 0.5 - Math.random());
    let selectedbugs = bugShuffled.slice(0, 8).join('');

    let weatherShuffled = weather.sort(() => 0.5 - Math.random());
    let selectedWeather = weatherShuffled.slice(0, 6).join('');

    function bees(){
        let beeLine = wax.sort(() => 0.5 - Math.random());
        return beeLine.slice(0, 5).join('');
    }

    console.log("it worked!");

    return   '....' + selectedWeather + '....\n' +
             ".  ___________________\n" +
             "╱| ________________ ╱|\n" +
             '| |'+ bees() + '| |\n' + 
             '| |'+ bees() + '| |\n' + 
             '| |'+ bees() + '| |\n' + 
             "|╱ ⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴|╱\n" +
             " ￣￣￣￣￣￣￣￣\n" +
             selectedbugs;





}