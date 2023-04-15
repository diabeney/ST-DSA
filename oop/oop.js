const BinaryThermoSystem = (function() {
    //using IIFE to prevent access to private fields
    const BINARY_PHASES = new WeakMap(); 
    const PHASES = ['Liquid', 'Vapor', 'VLE'];
    class BinaryThermoSystem {
        constructor(compA, compB) {
            this.A = compA;
            this.B = compB;
            BINARY_PHASES.set(this, {phase: PHASES[0]});
        }

        get currentPhase() {return BINARY_PHASES.get(this).phase};
        set currentPhase (newphase) {
            if(PHASES.indexOf(newphase) < 0)
                throw new Error('Invalid phase');
            BINARY_PHASES.get(this).phase = newphase;
        }

        changePhase(newphase) {this.currentPhase = newphase}
    }

    return BinaryThermoSystem;
})()



const waterethanol = new BinaryThermoSystem('Water', 'Ethanol');
const hextol = new BinaryThermoSystem('Hexane', 'Toluene');
console.log(waterethanol.currentPhase + '\n');


console.log(waterethanol.currentPhase);


