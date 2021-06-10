import Race from "./race";

const Races = ({racedata}) => {
    const horsecatergory = '4a2788f8-e825-4d36-9894-efd4baf1cfae';
    const harnesscatergory = '161d9be2-e909-4326-8c2c-35ed71fb460b';
    const greyhoundcatergory = '9daef0d7-bf3c-4f50-921d-8e818c60fe61';
    const horse = [];
    const harness = [];
    const greyhound = [];
    const i = Object.values(racedata);

    i.sort((a, b) => (a.advertised_start.seconds > b.advertised_start.seconds) ? 1 : -1)

   

    i.forEach(race => {
        if(race.category_id === horsecatergory && (race.advertised_start.seconds - Math.floor(new Date().getTime()/1000.0)) > - 10){
            horse.push(race);
        }
        else if(race.category_id === harnesscatergory && (race.advertised_start.seconds - Math.floor(new Date().getTime()/1000.0)) > - 10){
            harness.push(race);
        }
        else if(race.category_id === greyhoundcatergory && (race.advertised_start.seconds - Math.floor(new Date().getTime()/1000.0)) > - 10){
            greyhound.push(race);
        }    
    });

    console.log(i);
    console.log(horse);

    return (
        <>  
            <section id='horse' class='horse'>
                <div class='container'>
                    <h1>Next To Go Horse races</h1>
                    {horse.map((race, index) => index < 5 &&   (
                        <Race
                            key={index}
                            race={race}
                            id={index}
                            category="Horse"
                        />
                
                ))}
                </div>
            </section>
            <section id='harness' class='harness'>
            <div class='container'>
                    <h1>Next To Go Harness races</h1>
                {harness.map((race, index) => index < 5 && (
                    <Race
                        key={index}
                        race={race}
                        id={index}
                        category='Harness'
                    />
                ))}
                </div>

            </section>
            <section id='greyhound' class='greyhound'>
            <div class='container'>
                    <h1>Next To Go Greyhound races</h1>
                {greyhound.map((race, index) => index < 5 && (
                    <Race
                        key={index}
                        race={race}
                        id={index}
                        category="Greyhound"
                    />
                ))}
                </div>

            </section>


        </>
    )
}

export default Races