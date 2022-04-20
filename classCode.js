class Rocket{
    //name properties first
    constructor(
        fuelType,
        weight,
        power
    ){
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }

    launch(){
        console.log("launch sequence started");
        alert("Warning! Launch sequence started");
        return true;
    }

    refuel(){
        console.log("Refueling process started");
        alert("Refueling process started");
        return true;
    }

    detachTruster(thrusterID){
        console.log("detachTruster sequence started");
        alert("Thruster " + this.thrusterID + " has been successfully detacted");
        return true;
    }
}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts
    ) {
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts = numOfAstronauts;
    }

    displayMissionParameters(){
        alert("the spacecraft " + this.spaceCraft + " will launch on " + this.launchDateDay + " of " + this.launchDateMonth + " " + this.launchDateYear + 
            " with an O2 level of " + this.oxyLvl + "%");
    }

    launch(){
        console.log("launch sequence started");
        alert("launch sequence started");
    }
}

function launchFall(){
    console.log("launchFall() started");
    fallLaunch.launch();
}

function displayFall(){
    console.log("displayFall() started");
    fallLaunch.displayMissionParameters();
}

function launchSpring(){
    console.log("launchSpring() started");
    springLaunch.launch();
}

function displaySpring(){
    console.log("displaySpring() started");
    springLaunch.displayMissionParameters();
}