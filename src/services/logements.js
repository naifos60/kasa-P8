const urlApi = '/logement.json';

async function logements(){
    const result = await fetch(urlApi);
    const logements = await result.json();
    if(!result.ok){
        throw new Error('failed to fetch data')
    }else{
        return logements;
    }
}
 
export default logements