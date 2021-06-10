const Race = ({race, id}) => {

    var fulltime = '';
    var time = race.advertised_start.seconds - Math.floor(new Date().getTime()/1000.0);
    if(time < 0){
        fulltime = " Race closed"
    }
    else{
        const minutes = parseInt(time / 60);
        const seconds = time % 60;
        fulltime = " " + minutes + " min " + seconds +" sec"
    }

    


    return (
        <ul name={id} className="list-group list-group-horizontal">
            <li class="list-group-item"><label>Race Name:</label> {race.race_name}</li>
            <li class="list-group-item"><label>Starts in: </label>{fulltime}</li>
            <li class="list-group-item"><label>Race Distance: </label> {race.race_form.distance}{race.race_form.distance_type.short_name}</li>
            <li class="list-group-item"><label>Venue: </label> {race.venue_name}, {race.venue_country}</li>
            <li class="list-group-item"><button class='btn btn-primary'>Betting</button></li>
        </ul>
    )

}

export default Race
