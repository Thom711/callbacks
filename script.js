const huiswerkMaken = (vak, callback) => {
    console.log(`Ok, ok ik ga nu mijn ${vak} huiswerk maken.`);
    setTimeout(() => {  
        callback();
    }, 2000);  
};

const klaarMetHuiswerk = () => {
    console.log(`Kijk! Ik ben klaar met huiswerk maken!`);
};

huiswerkMaken('Wiskunde', klaarMetHuiswerk);